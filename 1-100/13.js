/*
?Создайте генератор паззлов, в которых генерируются разное количество кубиков, так же генерируются названия различных игр, в которых используются кубики, а рядам с ними число, которое означает, какое количество кубиков нужно для игры в данную игру , важно, числа рядом с названием игр не должны повторяться. Необходимо по количеству кубиков определить в какую игру будут играть.

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::canvas::Canvas;
import nightsky::canvas::Point2D;
import nightsky::canvas::Color;
import nightsky::canvas::TextAlign;
import nightsky::canvas::TextAlignLeft;
import nightsky::canvas::TextAlignRight;
import nightsky::canvas::TextAlignCenter;
import std::math::Math;
import std::collections::List;
import std::collections::ListSort;
import std::string::String;

class Main {
    function gen_puzzle() -> Puzzle {
        let diceGames = [
            "Монополия",            
            "Риск",                 
            "Подземелья и Драконы", 
            "Ятзи",                 
            "Колонизаторы",         
            "Кубики Лжеца",         
            "Нарды",                
            "Крэпс",                
            "Зомби Кубики",         
            "Бунко",                
            "Перуто",               
            "Король Токио",         
            "Фаркл",                
            "Формула Д",            
            "Клуэдо",               
            "Талисман",             
            "Квикс",                
            "Квест Подземелья",         
            "Детектив Клуб",        
            "Свинтус Кубики",       
            "Эволюция: Естественный отбор", 
            "Верблюд Вверх",             
            "Каркассон",            
            "Мачи Коро",            
            "Серп",                 
            "Мертвый Сезон",        
            "Пандемия",             
            "Эпические Схватки Боевых Магов", 
            "Троя",               
            "Маленький Мир"           
        ];
        let diceFill: List<int> = [];
        
        for (let i in 0..Main::getRandomIntInRange(10, 25)) {
            diceGames = Main::shuffleArray(diceGames);
        }
        
        let n1 = 0;
        let n2 = 0;
        while (n2 - n1 <= 3) {
            n1 = Main::getRandomIntInRange(0, 25);
            n2 = Main::getRandomIntInRange(n1, 29);
        }
        
        diceGames = diceGames[n1..n2];
        
        for (let i in 0..diceGames.length()) {
            diceFill.push(Main::getRandomIntInRange(2, 30));
        }
        diceFill = Main::ensureUniqueNumbers(diceFill);
        let ans = Main::getRandomIntInRange(0, diceGames.length()-1);
        
        let l = Main::getRandomIntInRange(0, 8);
        let conditions1 = [
            "Когда-то давно мы играли с друзьями в разные игры с кубиками. Помню, что в одной из игр нужно было ровно ",
            "На дне рождения у друга мы играли в несколько настольных игр с кубиками. Одна из игр требовала ",
            "Мой друг недавно рассказывал про игры, в которых он использует разные количества кубиков. Он упомянул, что для одной игры ",
            "Учитель дал нам задачу на логику: есть несколько игр с разным количеством кубиков. Одной из них требуется ",
            "На турнире по настольным играм я собирался выбрать игру с кубиками. Для одной из игр точно ",
            "Я увидел настольные игры в магазине, и одна из них требует ровно ",
            "Я слушал подкаст, в котором обсуждали разные игры с кубиками. В одной из игр нужно было использовать ",
            "На прошлой неделе мы играли в несколько игр с кубиками. Я точно помню, что в одной ",
            "Мой младший брат попросил меня помочь выбрать игру, где нужно ровно ",
            "На полке у меня стоит игра, в которой точно нужно использовать "
        ][l];
        let conditions2 = [
            ", но забыл в какой из игр это было: ",
            ", но какая из игр это была: ",
            ", но я забыл, для какой именно. Какую из игр выбрать: ",
            ". Какую игру нужно выбрать из: ",
            ", какая это была игра: ",
            ". В какой из игр: ",
            ", но я пропустил её название. Какая игра это была: ",
            ", какая из игр это была: ",
            ". Мы смотрели несколько вариантов и выбрали игру: ",
            ", эта игра называется: "
        ][l];

        let desc = conditions1;
        if (l == 2 || l == 4 || l == 7) {
            desc += Main::declOfNum(diceFill[ans], ["нужен", "нужно", "нужно"]) + " "
        }
        desc += String::from_int(diceFill[ans]) + " " + Main::declOfNum(diceFill[ans], ["кубик", "кубика", "кубиков"])
            + conditions2 + "\n";
        for (let i in 0..diceGames.length()) {
            desc += "\"" + diceGames[i] + "\" кубиков нужно - " 
                + String::from_int(diceFill[i]) + "\n"
        }
        desc += "\n Формат вывода, следующий: название игры"
            + "\n Пример: Квикс"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "";
        for (let i in 0..ans) {
            expl += "\"" + diceGames[i] + "\" кубиков нужно - " 
                + String::from_int(diceFill[i]) 
                + " значит смотрим дальше. \n"
        }
        expl += "\"" + diceGames[ans] + "\" кубиков нужно - " 
                + String::from_int(diceFill[ans]) 
                + "\n\n" + String::from_int(diceFill[ans]) 
                + " - это нужное количество кубиков, значит дальше можно не проверять. \n Ответ: " + diceGames[ans];

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: diceGames[ans]
                } as Reveal
            ],
        }
    }
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    function ensureUniqueNumbers(array: List<int>) -> List<int> {
        for (let i in 0..array.length()) {
            for (let j in 0..array.length()) {
                if (i != j && array[i] == array[j]) {
                    let randomNum = Main::getRandomIntInRange(2, 30);
                    array[j] = randomNum;
                    j = -1;
                }
            }
        }
        
        return array;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function shuffleArray(array: List<String>) -> List<String> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
*/