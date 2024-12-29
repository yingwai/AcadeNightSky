/*
?Сумма логарифмов с одинаковым основанием
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
        let base = Main::getRandomIntInRange(2, 10);
        let terms = Main::generateLogarithmicSeries(Main::getRandomIntInRange(2, 10));
        let ans = Main::calculateSum(base, terms);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "выражение с рядом слагаемых в виде логарифмов с одинаковым основанием.",
            "выражение, состоящее из ряда слагаемых в виде логарифмов с одинаковым основанием.",
            "выражение, включающее несколько слагаемых с одинаковым основанием.",
            "выражение с рядом логарифмов с одинаковым основанием .",
            "выражение, содержащее ряд слагаемых в виде логарифмов с одним основанием.",
            "выражение с множеством логарифмических слагаемых и общим основанием.",
            "выражение логарифмов с одинаковым основанием, объединенные в виде ряда слагаемых.",
            "выражение в форме ряда слагаемых, представляющих логарифмы с тем же основанием.",
            "выражение с рядом слагаемых-логарифмов с единым основанием.",
            "выражение в виле логарифмического ряда с общим основанием в составе.",
            "выражение, представляющее собой ряд логарифмов с одинаковым основанием."
        ][Main::getRandomIntInRange(0, 10)];
        let conditionsSum = [
            "сумму этого ряда",
            "сумму данного ряда",
            "значение суммы этого ряда",
            "итоговую сумму ряда",
            "общую сумму данного ряда",
            "результат суммы этого ряда"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task 
            + " " + conditions;
        for (let i in 0..terms.length()) {
            if (i == 0) {
                sc += "\n\\(log_{" + String::from_int(base)
                    + "}(" + String::from_int(terms[i]) + ") + ";
            } else if (i == terms.length()-1) {
                sc += "log_{" + String::from_int(base)
                    + "}(" + String::from_int(terms[i]) + ")\\)";
            } else {
                sc += "log_{" + String::from_int(base)
                    + "}(" + String::from_int(terms[i]) + ") + ";
            }
        }
        sc += "\nЕё попросили " + whatDo 
            + " " + conditionsSum +  ". Ответ округлить до 2 цифр после запятой.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions; 
            for (let i in 0..terms.length()) {
                if (i == 0) {
                    sc += "\n\\(log_{" + String::from_int(base)
                        + "}(" + String::from_int(terms[i]) + ") + ";
                } else if (i == terms.length()-1) {
                    sc += "log_{" + String::from_int(base)
                        + "}(" + String::from_int(terms[i]) + ")\\)";
                } else {
                    sc += "log_{" + String::from_int(base)
                        + "}(" + String::from_int(terms[i]) + ") + ";
                }
            }
            sc += "\nТребуется определить " + conditionsSum 
                + ". Ответ округлить до 2 цифр после запятой.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: 5.00"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала решим все логарифмы:";
        for (let i in 0..terms.length()) {
            expl += "\n\\(log_{" + String::from_int(base)
                + "}(" + String::from_int(terms[i]) 
                + ") = \\frac{ln(" + String::from_int(terms[i]) 
                + ")}{ln(" + String::from_int(base) 
                + ")} \\approx " + Main::round(Main::calculateSum(base, [terms[i]]), 5)
                + "\\)"
        }
        expl += "\n\nСкладываем все полученые числа и округляем до сотых: \n";
        for (let i in 0..terms.length()) {
            if (i == terms.length()-1) {
                expl += Main::round(Main::calculateSum(base, [terms[i]]), 5)
                    + " = " + Main::round(ans, 2)
            } else {
                expl += Main::round(Main::calculateSum(base, [terms[i]]), 5)
                    + " + "
            }
        }
        

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(ans, 2)
                } as Reveal
            ],
        }
    }
    
    function calculateSum(base: int, terms: List<int>) -> float {
        let sum = 0.0;
        for (let i in 0..terms.length()) {
            sum += Math::log(terms[i] as float) / Math::log(base as float);
        }
        return sum;
    }

    function generateLogarithmicSeries(num: int) -> List<int> {
      let terms: List<int> = [];
      for (let i in 0..num) {
        let value = Main::getRandomIntInRange(2, 10);
        terms.push(value);
      }
      return terms;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign : String = " ";
        if (p < 0.0) {
            sign = "-";
            p = -p;
        }

        let coeff: int = 1;
        for (let i in 0..after_dot) {
            coeff *= 10;
        }

        p *= (coeff as float);
        let int_p = (p + 0.5) as int;

        let after_string: String = String::from_int(int_p % coeff);
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }

        return (sign + String::from_int((int_p / coeff)as int) + "."  + after_string);
    }
}
*/