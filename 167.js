/*
?Сделайте генератор пазлов, который будет генерировать задачи на сравнение скорости. Скорость будет дана в разных видах(м/с или км/ч и так далее). Человеку нужно будет выбрать какой из объектов передвигался быстрее.

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

class Object {
    public name: String,
    public speed: int,
    public value: String
}
class Main {
    function gen_puzzle() -> Puzzle {        
        let o = [
            new Object {
                name: "Объект 1",
                speed: Main::getRandomIntInRange(1, 100),
                value: ["м/с", "км/ч", "м/мин", "см/с"][Main::getRandomIntInRange(0, 3)]
            },
            new Object {
                name: "Объект 2",
                speed: Main::getRandomIntInRange(1, 100),
                value: ["м/с", "км/ч", "м/мин", "см/с"][Main::getRandomIntInRange(0, 3)]
            }
        ];
        while (o[1].value == o[0].value) {
            o[1].value = ["м/с", "км/ч", "м/мин", "см/с"][Main::getRandomIntInRange(0, 3)]
        }
        
        let res = [0.0, 0.0];
        
        for (let i in 0..o.length()) {
            if (o[i].value == "м/с") {
                res[i] = o[i].speed as float
            } else if (o[i].value == "км/ч") {
                res[i] = o[i].speed as float / 3.6
            } else if (o[i].value == "м/мин") {
                res[i] = o[i].speed as float / 60.0
            } else if (o[i].value == "см/с") {
                res[i] = o[i].speed as float / 100.0
            }
        }
        
        let ans = if (res[0] == community::near::dtalalaev::max::Max::fmaxArr(res)) {o[0].name} else {o[1].name}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какой из объектов передвигался быстрее",
            "какой объект двигался быстрее",
            "какой из объектов имел большую скорость",
            "какой объект перемещался с большей скоростью",
            "какой объект двигался быстрее, чем другой",
            "какой из объектов двигается с большей скоростью",
            "кто из объектов двигался быстрее",
            "какой объект показал лучшую скорость",
            "какой из объектов передвигался с большей скоростью",
            "кто быстрее перемещался из этих объектов",
            "какой из объектов двигался быстрее"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два объекта с разной скоростью: " + o[0].name + " - " + String::from_int(o[0].speed) + " " + o[0].value + " и " + o[1].name + " - " + String::from_int(o[1].speed) + " " + o[1].value + "."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано два объекта с разной скоростью: " + o[0].name + " - " + String::from_int(o[0].speed) + " " + o[0].value + " и " + o[1].name + " - " + String::from_int(o[1].speed) + " " + o[1].value + "."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Все расчёты округлять до сотых."
            + "\n Пример ответа: \"Объект 1\" или \"Объект 2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала приведём скрость двух объектов в одну единицу (в м/с): \n";
        for (let i in 0..o.length()) {
            expl += if (o[i].value == "м/с") {
                o[i].name + ": " + String::from_int(o[i].speed) + " - уже в м/с \n"
            } else if (o[i].value == "км/ч") {
                o[i].name + ": " + String::from_int(o[i].speed) + " / 3.6 = " + Main::round(res[i], 2) + "\n"
            } else if (o[i].value == "м/мин") {
                o[i].name + ": " + String::from_int(o[i].speed) + " / 60 = " + Main::round(res[i], 2) + "\n"
            } else if (o[i].value == "см/с") {
                o[i].name + ": " + String::from_int(o[i].speed) + " / 100 = " + Main::round(res[i], 2) + "\n"
            } else {""}
        }
        
        expl += "\n Следователньо т.к. " 
            + if (res[0] == community::near::dtalalaev::max::Max::fmaxArr(res)) {Main::round(res[0], 2) + " > " + Main::round(res[1], 2)} else {Main::round(res[1], 2) + " > " + Main::round(res[0], 2)} + ", ответ: " + ans

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