/*
?Сделайте генератор паззлов, который на входе показывает рандомное существительное, а под ним алгоритм образование от него нового слова, путём добавления новых частей (напр. в пером блоке прибавляется приставка, во втором суффикс, в третьем еще один суффикс). Под алгоритмом расположено некоторое количество слов, и нужно определить, какое слово получилось из исходного слова после прохождения его через алгоритм.

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
        let nouns = [
            "письмо", "дом", "стол", "молоко", "лес", "работа", "книга", "машина", 
            "яблоко", "солнце", "река", "небо", "гора", "дорога", "цветок", "песок", 
            "глаз", "собака", "кошка", "травка", "поезд", "чашка", "столик", "ручка", 
            "город", "музыка", "завод", "парк", "учебник", "картинка", "мост"
        ][Main::getRandomIntInRange(0, 29)];
        
        let prefixes = [
            ["пере-", "анти-", "про-", "супер-", "псевдо-"],
            ["-ник", "-ка", "-ение", "-ость", "-ия"]
        ]
        
        let len = Main::getRandomIntInRange(1, 4);
        let ans = nouns;
        let list: List<String> = [];
        
        let expl = "Чтобы получить ответ, будем по очереди добавлять новые части из алгоритма к существительному " + nouns + ": \n";
        
        for (let i in 0..len) {
            let n = Main::getRandomIntInRange(0, 1);
            let p = prefixes[n][Main::getRandomIntInRange(0, 4)];
            
            list.push(String::from_int(i+1) + ". " + if (n == 0) {"Добавьте приставку \""} else {"Добавьте суффикс \""} + p + "\"")
            
            if (p.split("")[1] == "-") {
                ans = ans + p;
                expl += list[i] + ": " + ans + "\n"
            } else {
                ans = p + ans;
                expl += list[i] + ": " + ans + "\n"
            }
        }
        
        let var: List<String> = [];
        for (let i in 0..2) {
            let temp = nouns;            
            for (let i in 0..Main::getRandomIntInRange(1, 4)) {
                let n = Main::getRandomIntInRange(0, 1);
                let p = prefixes[n][Main::getRandomIntInRange(0, 4)];

                if (p.split("")[1] == "-") {
                    temp = temp + p;
                } else {
                    temp = p + temp;
                }
            }
            
            var.push(temp)
        } 
        
        var.push(ans);
        community::near::dtalalaev::shuffleStringArray::Main::shuffle(var);
        let varL = "";
        for (let i in 0..var.length()) {
            varL += String::from_int(i+1) + ". " + var[i] + "\n"
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какое слово получилось из исходного слова после прохождения его через алгоритм",
            "какое слово образовалось после применения алгоритма к исходному слову",
            "что за слово получится после применения алгоритма к исходному",
            "какое слово получится, если пропустить исходное слово через алгоритм",
            "как будет выглядеть слово после того, как его пройдет алгоритм",
            "результат, который получится после обработки исходного слова алгоритмом",
            "что за слово выйдет после прохождения исходного через алгоритм",
            "что получится из исходного слова после его обработки алгоритмом",
            "слово, которое получится после применения алгоритма к исходному",
            "как изменится исходное слово после применения алгоритма",
            "результат, который дает алгоритм при обработке исходного слова"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " существительное: " + nouns + " и некий алгоритм добавления новых частей: \n" + String::join(list, "\n") 
            + "\nЕё попросили " + whatDo + " " + conditions + ". \nПредставленные варианты: \n" + varL;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано существительное: " + nouns + " и некий алгоритм добавления новых частей: \n" + String::join(list, "\n") 
                + "\nТребуется определить " + conditions + ". \nПредставленные варианты: \n" + varL;
        }

        let desc = sc 
            + "\n Пример ответа: \"пере-яблоко-ость\""
            + "\n<reveal ans>Ответ</reveal>";
        expl += "\n Следовательно ответ: " + ans

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/