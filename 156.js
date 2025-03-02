/*
?Создайте генератор, в котором необходимо будет сосчитать количество очков карт только одной какой-то масти. Карты должны иметь только числовые значения. Очки равны числовым значениям карт.

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
        let suits = ["♠", "♣", "♥", "♦"];
        let n = Main::getRandomIntInRange(0, 3);
        let need = "пик.треф.черв.бубен".split(".")[n];
        let values = [
            2, 3, 4, 5, 6, 
            7, 8, 9, 10
        ];
        let arr: List<String> = [];
        let canva: List<PuzzleImage> = [];
        let len = Main::getRandomIntInRange(2, 11);
        let ans = 0;
        let math = ""
        
        for (let i in 0..len) {
            let suit = suits[Main::getRandomIntInRange(0, 3)];
            let value = values[Main::getRandomIntInRange(0, 8)];
            arr.push(String::from_int(value) + suit);
            
            if (suit == suits[n]) {
                ans += value;
                math += String::from_int(value) + " + "
            }
            
            let canvas = Canvas::create(164, 204, Color::rgb(255, 255, 255));
            Canvas::rect(canvas, 2, 2, 150, 200, Color::rgb(0, 0, 0), 2);
            
            let color = Color::rgb(0, 0, 0);
            if (suit == "♥" || suit == "♦") {
                color = Color::rgb(255, 0, 0);
            }
            
            Canvas::text(canvas, 10, 195, arr[i], 30, new TextAlignLeft{} as TextAlign, color);
            Canvas::text(canvas, 145, 30, arr[i], 30, new TextAlignRight{} as TextAlign, color);
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            );
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "карты различных значений и мастей",
            "карты с разными значениями и мастями",
            "карты разных номиналов и мастей",
            "набор карт различных мастей и значений",
            "карты с разнообразными значениями и мастями",
            "колода карт с разными мастями и значениями",
            "карты разных мастей и значений",
            "различные карты по мастям и значениям",
            "карты с различными номиналами и мастями",
            "карты с разными мастями и номиналами",
            "набор карт с разными значениями и мастями"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": \n";
            for (let i in canva) {
                sc += "<img " + i.name + ">"
            }
            sc += "\n Её попросили " + whatDo + " количество очков карт только одной масти: " + need + ". Очки равны числовым значениям карт.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны " + conditions + ": \n";
            for (let i in canva) {
                sc += "<img " + i.name + ">"
            }
            sc += "\n Требуется определить количество очков карт только одной масти: " + need + ". Очки равны числовым значениям карт.";
        }

        let desc = sc + " Если нужной масти нет, в ответ записать \"0\"."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем проверять каждую карту по очереди: \n";
        for (let i in 0..len) {
            expl += arr[i] + " " + if (arr[i].split("")[arr[i].split("").length()-1] == suits[n]) {" - подходит по масти"} else {" - не подходит по масти"} + "\n"
        }
        expl += if (ans != 0) {"\n" + if (math.split(" + ").length() > 2) {"Суммировав все нужные карты, получим количество очков: " + math[0..math.length()-2] + " = "} else {"Следовательно количество очков: "} + String::from_int(ans)} else {"\n Так как нужных карт нет, в ответ запишем 0"}

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/