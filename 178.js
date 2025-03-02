/*
?Сделайте генератор пазлов, который генерирует дробь, которая показывает на то сколько чернил израсходовано в ручке, а человеку нужно будет найти на сколько процентов стержень чернил полон на данный момент.

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
        let totalInk = Main::getRandomIntInRange(50, 100);
        let usedInk = Main::getRandomIntInRange(0, totalInk);
        let fractionUsed = String::from_int(usedInk) + "/" + String::from_int(totalInk);
    
        let remainingInk = totalInk - usedInk;
        let ans = Main::round((remainingInk as float / totalInk as float) * 100.0, 2);

        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "cколько процентов чернил осталось в стержне",
            "какой процент чернил остался в стержне",
            "сколько процентов чернил осталось в ручке",
            "остаток чернил в стержне в процентах",
            "сколько чернил осталось в стержне в процентах",
            "процент оставшихся чернил в стержне",
            "долю чернил, оставшихся в стержне, в процентах",
            "чернил осталось в стержне в процентном соотношении",
            "процент чернил, оставшихся в стержне",
            "сколько процентов чернил осталось в стержне",
            "остаток чернил в стержне в процентном выражении"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дробь указывающая на количество израсходованых чернил: " + fractionUsed + "."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана дробь указывающая на количество израсходованых чернил: " + fractionUsed + "."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Ответ необходимо округлить до сотых."
            + "\n Пример ответа: \"10.34\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала рассчитаем оставшийся объем чернил: " + String::from_int(totalInk) + " - " + String::from_int(usedInk) + " = " + String::from_int(remainingInk)
            + "\n Найдём процент оставшихся чернил: " + String::from_int(remainingInk) + "/" + String::from_int(totalInk) + " * 100 = " + ans;

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
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }
      
        for (let i in after_string.length()..after_dot) {
            after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
}
*/