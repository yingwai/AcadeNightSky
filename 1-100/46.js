/*
?Напишите генератор, который генерирует задачи вида (a*b/c/d), ответ должен быть целым числом и при этом (1<= a,b,c,d <= 100), также (a,b,c,d - целые числа ), и который просит найти чему равно данное выражение

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
        let a = Main::getRandomIntInRange(1, 100);
        let b = Main::getRandomIntInRange(1, 100);
        let c = Main::getRandomIntInRange(1, 100);
        let d = Main::getRandomIntInRange(1, 100);
        let res = (a*b)/c/d;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "чему равно данное выражение",
            "каков ответ данного выражения",
            "какое значение имеет данное выражение",
            "чему соответствует это выражение",
            "ответ представляющий собой данное выражение",
            "результат данного выражения",
            "каков ответ данного выражения",
            "чему равно это выражение",
            "какой ответ у данного выражения",
            "каково значение этого выражения",
            "чему равно данное выражению"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " задача " + String::from_int(a) + "*" + String::from_int(b) + "/" + String::from_int(c) + "/" + String::from_int(d) + ". "
            + "Её попросили " + whatDo + " " + conditions + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана задача " + String::from_int(a) + "*" + String::from_int(b) + "/" + String::from_int(c) + "/" + String::from_int(d) + ". " 
                + "Требуется определить " + conditions + ". ";
        }

        let desc = sc + "В ответ записать число отбросив все числа после точки. "
            + "\n Пример вывода, следующий: \"4\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала умножим " + String::from_int(a) + " на " + String::from_int(b) + ": \n"
            + String::from_int(a) + "*" + String::from_int(b) + "=" + String::from_int(a*b)
            + "\n И поделим на следующие числа: \n"
            + String::from_int(a*b) + "/" + String::from_int(c) + "/" + String::from_int(d) + "=" + String::from_int(res);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(res)
                } as Reveal
            ],
        }
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/