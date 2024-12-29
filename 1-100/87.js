/*
?Создайте генератор, который будет давать какое-то целое число, которое представляет собой часть зарплаты. Также будет даваться какая это часть от всё зарплаты. Пользователю нужно будет найти сколько всего получает человек(делаться это будет делением на дробь, по сути делением на деление, что даст умножение).

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
        let total = Main::getRandomIntInRange(1000, 10000);

        let numerator = Main::getRandomIntInRange(1, 8);
        let denominator = Main::getRandomIntInRange(numerator+1, 10);
        let fraction = numerator as float / denominator as float;

        let part = Main::round(total as float * fraction, 0);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько всего получает работник",
            "каков общий доход работника",
            "сколько составляет общая сумма, получаемая работником",
            "какая сумма в итоге достается работнику",
            "что составляет полный доход работника",
            "общий заработок работника",
            "сколько всего денег получает работник",
            "какова итоговая сумма заработка работника",
            "какую общую сумму получает работник",
            "каков общий размер выплат работнику",
            "сколько составляет полный заработок работника"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " целое число " + part + ", которое представляет собой часть зарплаты, это " + String::from_int(numerator) + "/" + String::from_int(denominator)+ " от всей зарплаты. "
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано целое число " + part + ", которое представляет собой часть зарплаты, это " + String::from_int(numerator) + "/" + String::from_int(denominator)+ " от всей зарплаты. "
                + "Требуется определить " + conditions + ".";
        }

        let desc = sc + " В ответ записать число округлённое до целого."
            + "\n Пример вывода, следующий: \"6020\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы выяснить сколько всего получает работник, данное нам целое число необходимо поделить на часть от всей зп: \n"
            + part + " / (" + String::from_int(numerator) + "/" + String::from_int(denominator) + ") = " + Main::round(String::to_int(part) as float / fraction, 0) + "\n"

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(String::to_int(part) as float / fraction, 0)
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