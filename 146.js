/*
?Напишите генератор, который на входе дает два целых числа a и b, и просит указать что больше a^b или b^a

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
        let a = Main::getRandomIntInRange(1, 10);
        let b = Main::getRandomIntInRange(1, 10);
        
        while (a == b) {
            a = Main::getRandomIntInRange(1, 10);
            b = Main::getRandomIntInRange(1, 10);
        }
        
        let pA = community::near::dtalalaev::pow::Main::intPow(a, b);
        let pB = community::near::dtalalaev::pow::Main::intPow(b, a);
        
        let ans = if (pA > pB) {"a^b > b^a"} else {"b^a > a^b"}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "отмечены два целых числа a и b",
            "заданы два целых числа a и b",
            "отмечены два целых числа: a и b",
            "даны два целых числа a и b",
            "имеются два целых числа a и b",
            "есть два целых числа a и b",
            "представлены два целых числа a и b",
            "определены два целых числа a и b",
            "отмечены два числа a и b, которые являются целыми",
            "записаны целые числа a и b",
            "заданы значения двух целых чисел a и b"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + conditions + ", где a = " + String::from_int(a) + " и b = " + String::from_int(b) + "."
            + "\nЕё попросили " + whatDo + ", что больше a^b или b^a.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два целых числа a и b, где a = " + String::from_int(a) + " и b = " + String::from_int(b) + "."
                + "\nТребуется определить, что больше a^b или b^a.";
        }

        let desc = sc 
            + "\n Пример ответа: \"a^b > b^a\" или \"b^a > a^b\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала рассчитаем число a: " + String::from_int(a) + "^" + String::from_int(b) + " = " + String::from_int(pA) + 
            "\n Теперь рассчитаем число b: " + String::from_int(b) + "^" + String::from_int(a) + " = " + String::from_int(pB) + 
            "\n Исходя их расчётов, ответ будет: " + if (pA > pB) {"a^b > b^a"} else {"b^a > a^b"};

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