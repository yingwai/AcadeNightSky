/*
?Придумайте генератор паззлов, в котором будет задано число и степень. Человеку нужно будет возвести это число в нужную степень и написать полученное значение в ответе.Например, число: "4" и степень "3". Ответ = 64. Пожалуйста, конкретно этот пример не используйте.
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
import community::near::spensa2::plural::PluralRu;

class Main {
    function gen_puzzle() -> Puzzle {
        let n = Main::getRandomIntInRange(1, 50);
        let c = Main::getRandomIntInRange(1, 5);
        let ans = String::from_int(community::near::dtalalaev::pow::Main::intPow(n, c));
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "возвести это число в нужную степень и написать полученное значение в ответе",
            "возвести число в требуемую степень и записать результат в ответ",
            "поставить это число в нужную степень и указать полученное значение в ответе",
            "возвести число в указанную степень и записать полученный результат",
            "привести это число к требуемой степени и в ответе указать результат",
            "возвести данное число в необходимую степень и записать результат в ответе",
            "вычислить степень этого числа и записать результат в ответ",
            "прибавить степень к числу и записать ответ",
            "возвести число в заданную степень и указать итоговый результат",
            "возвести это число в требуемую степень и в ответ записать результат",
            "применить требуемую степень к числу и записать конечный результат"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " число " + String::from_int(n) + " и степень " + String::from_int(c) + "."
            + " Её попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано число " + String::from_int(n) + " и степень " + String::from_int(c) + "."
                + " Требуется " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"1600\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Возведём число в нужную степень и получим ответ \\(" + String::from_int(n) + "^" + String::from_int(c) + " = " + ans + "\\)";

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