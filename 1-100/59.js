/*
?Сделайте генератор заданий, в которых изображено дерево и птицы на нем. Нужной найти ветку, которая расположена выше/ниже X по счету ветки, на которой сидит Y одинаковых птичек.

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
        let birds: List<int> = [];
        
        for (let i in 0..13) {
            birds.push(Main::getRandomIntInRange(2, 5))
        }
        
        
        let pos = Main::getRandomIntInRange(1, birds.length()-2);
        let index = Main::getRandomIntInRange(0, 11);
        
        while (pos == index) {
            pos = Main::getRandomIntInRange(1, birds.length()-2);
            index = Main::getRandomIntInRange(0, 11);
        }
        
        let y = if (pos > index) {"выше"} else {"ниже"};
        let ans = if (pos > index) {pos - index} else {index - pos};
            
        let color = Color::rgb(Main::getRandomIntInRange(20, 235), Main::getRandomIntInRange(20, 235), Main::getRandomIntInRange(20, 235));
        
        let canvas = Main::getThree(birds, index, color);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "ветку, которая расположена",
            "ветвь, которая находится",
            "ветку, находящуюся",
            "ветку, располагающуюся",
            "ветку, которая располагается"            
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дерево и птицы на нем. \n\n <img canvas>\n"
            + "\nЕё попросили " + whatDo + " " + conditions + " " + y + " " + String::from_int(pos+1) + " по счету ветки (номер ветки от которой нужно считать определяется сверху внизу), на которой сидит " + String::from_int(birds[index]) + " " + Main::declOfNum(birds[index], ["одинаковая птичка", "одинаковые птички", "одинаковых птичек"]) + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано дерево и птицы на нем. \n\n <img canvas>\n"
                + "\nТребуется определить " + conditions + " " + y + " " + String::from_int(pos+1) + " по счету ветки (номер ветки от которой нужно считать определяется сверху внизу), на которой сидит " + String::from_int(birds[index]) + " " + Main::declOfNum(birds[index], ["одинаковая птичка", "одинаковые птички", "одинаковых птичек"]) + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"5\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "От нужной нам ветки (" + String::from_int(pos+1) + ") нужно определить какая нужная нам " + if (pos > index) {"сверху"} else {"снизу"} + " по счёту ветка: \n";
        let list: List<String> = [];
        if (pos > index) {
            for (let i in index..pos) {
                if (i == index) {
                    list.push(String::from_int(pos-i) + " ветка - подходит" + "\n");
                    continue;
                }
                list.push(String::from_int(pos-i) + " ветка - не подходит" + "\n")
            }
            
            list = ListSort::<String>::stable_sort(list);
            
            for (let j in 1..5) {
                if (j > list.length()-1) {break};
                
                if (list[j].split(" ")[0] == "10" || list[j].split(" ")[0] == "11" || list[j].split(" ")[0] == "12") {
                    let temp = list[j];
                    list.push(temp);
                    list[j] = "";
                }  
            }              
                
            expl += String::join(list, "");
        } else {
            for (let i in pos..index) {
                if (i == pos) {
                    list.push(String::from_int(index-i) + " ветка - подходит" + "\n");
                    continue;
                }
                list.push(String::from_int(index-i) + " ветка - не подходит" + "\n")
            }
            
            list = ListSort::<String>::stable_sort(list);
            
            for (let j in 1..5) {
                if (j > list.length()-1) {break};
                
                if (list[j].split(" ")[0] == "10" || list[j].split(" ")[0] == "11" || list[j].split(" ")[0] == "12") {
                    let temp = list[j];
                    list.push(temp);
                    list[j] = "";
                }  
            } 
            
            expl += String::join(list, "");
        }
        
        expl += "\nСледовательно ответ: " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canvas
                }
            ],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }
    
    function getThree(birds: List<int>, index: int, m_color: Color) -> Canvas {
        let canvas = Canvas::create(400, 400, Color::rgb(255, 255, 255));
        
        Canvas::fillRect(canvas, 100, 0, 100, 400, Color::rgb(150,75,0), Color::rgb(150,75,0), 2);
        
        for (let i in 1..birds.length()) {
            let side = if (i % 2 == 0) {200} else {0};
            
            Canvas::fillRect(canvas, side, 30 * i, 100, 8, Color::rgb(150,75,0), Color::rgb(150,75,0), 2);
            
            for (let j in 0..birds[i-1]) {
                let color = if (i-1 == index) {m_color}
                            else {Color::rgb(Main::getRandomIntInRange(20, 235), Main::getRandomIntInRange(20, 235), Main::getRandomIntInRange(20, 235))};
                Canvas::fillRect(canvas, side + 3 + (20*j), 13 + (30*(i-1)), 12, 20, color, color, 1);
            }
        }
        
        return canvas
    }
        
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/