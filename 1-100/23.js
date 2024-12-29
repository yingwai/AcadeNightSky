/*
?Придумайте генератор пазлов, который будет выводить число в виде десятичной дроби (меньше единицы). Человеку нужно будет записать это число в виде процентов, округлив до сотых.
?Например, число: 0,141592 в процентах будет представлено, как 14,16%. Пожалуйста, приведённый пример не используйте.
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
        let num = Main::getRandomFloat(1, 6);
        while (num >= 1.0) {
            num = Main::getRandomFloat(1, 6);
        }
        
        let per = num*100.0;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "и записать это число в виде процентов, округлив до сотых.",
            " и представить это число в процентах, округлив до сотых.",
            " и записать результат в процентах, округлённый до сотых.",
            " и выразить это число в процентах с округлением до сотых.",
            " и записать данное число в процентной форме, округлив до сотых.",
            " и указать это значение в процентах, округлённое до сотых.",
            " и перевести число в проценты с округлением до сотых.",
            " и выразить это значение в виде процентов, округлив до сотых.",
            " и записать это в процентах с точностью до сотых.",
            " и отобразить это число в виде процентов, округлённое до сотых.",
            " и оформить это число в процентах, округлив до сотых."
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " число в виде десятичной дроби " 
            + Main::round(num, 6) + ". "
            + "\nЕё попросили " + whatDo 
            + " " + conditions;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано число в виде десятичной дроби "
                + Main::round(num, 6) + ". "
                + "Требуется определить " + conditions;
        }

        let desc = sc 
            + "\n Пример: 35.00%"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Данную дробь умножим на 100 и получим ответ: "
            + Main::round(num, 6) + " * 100 = " + Main::round(per, 6)
            + "\n Сократим ответ до сотых, и запишем в ответ: "
            + Main::round(per, 2) + "%";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(per, 2) + "%"
                } as Reveal
            ],
        }
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign = "";
        if (p < 0.0) {
          sign = "-";
          p = -p;
        }

        let coeff = 1;
        for (let i in 0..after_dot) {
          coeff *= 10;
        }

        p *= coeff as float;
        let int_p = (p + 0.5) as int;

        let after_string = String::from_int(int_p % coeff);
        for (let i in after_string.length()..after_dot) {
          after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
    
    function getRandomFloat(num: int, digit: int) -> float {
        let t = 10;
        for(let i in 0..digit-1){
            t *= 10;
        }

        return (Main::getRandomIntInRange(0, num * t) as float / t as float) as float;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/