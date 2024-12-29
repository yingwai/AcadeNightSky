/*
?Напишите генератор заданий, где будет сгенерировано квадратное уравнение. По заданию, нужно найти определённый (наибольший/наименьший) корень квадратного уравнения. Пример: "х^2 - 2x + 1 = 25. Найдите наибольшее значение x." (Не используйте этот пример).

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
        let more = Main::getRandomIntInRange(0, 1) == 1;
        let a = Main::getRandomIntInRange(1, 15);
        let b = Main::getRandomIntInRange(-15, 15);
        let c = Main::getRandomIntInRange(-50, 50);
        
        while (a == 0) {
            a = Main::getRandomIntInRange(1, 15);
        }
        while (b == 0) {
            b = Main::getRandomIntInRange(-15, 15);
        }
        while (c == 0) {
            c = Main::getRandomIntInRange(-50, 50);
        }
        
        let D = Main::getDiscriminant(a,b,c);
        
        let correct = true;
        while (correct) {
            a = Main::getRandomIntInRange(1, 15);
            b = Main::getRandomIntInRange(-15, 15);
            c = Main::getRandomIntInRange(-50, 50);
            
            while (a == 0) {
                a = Main::getRandomIntInRange(1, 15);
            }
            while (b == 0) {
                b = Main::getRandomIntInRange(-15, 15);
            }
            while (c == 0) {
                c = Main::getRandomIntInRange(-50, 50);
            }
            
            D = Main::getDiscriminant(a,b,c);
            
            if (D > 0) {
                correct = false;
            }
        }
        
        let x1 = Main::getX(a, b, D, true);
        let x2 = Main::getX(a, b, D, false);
        let ans = if (more) {
            if (x1 > x2) {Main::round(x1,2)}
            else {Main::round(x2,2)}
        } else {
            if (x1 < x2) {Main::round(x1,2)}
            else {Main::round(x2,2)}
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let equation = String::from_int(a) + "\\(x^2\\)"
            + if (b > 0) {"+" + String::from_int(b) + "\\(x\\)"}
              else {String::from_int(b) + "\\(x\\)"}
            + if (c > 0) {"+" + String::from_int(c)}
              else {String::from_int(c)}
            + "=0";
        let n = Main::getRandomIntInRange(0, 9);
        let conditions1 = [
            " и записать ",
            " и указать в ответе ",
            " и отметить в ответе ",
            " и вписать в ответ ",
            " и отразить в ответе ",
            " и записать в качестве ответа ",
            " и записать ",
            " и указать ",
            " и занести в ответ ",
            " и отобразить в ответе "
        ][n];
        let conditions2 = [
            "корень квадратного уравнения в ответ",
            "корень данного квадратного уравнения",
            "корень этого квадратного уравнения",
            "корень квадратного уравнения",
            "корень квадратного уравнения",
            "корень квадратного уравнения",
            "корень данного уравнения в ответ",
            "корень уравнения в качестве ответа",
            "корнень квадратного уравнения",
            "корень решённого квадратного уравнения"
        ][n];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " квадратное уравнение: "
            + equation
            + ". Её попросили " + whatDo + conditions1
            + if (more) {"наибольший "} else {"наименьший "}
            + conditions2 + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано квадратное уравнение: " + equation
                + ". Требуется определить " + conditions1
                + if (more) {"наибольший "} else {"наименьший "}
                + conditions2 + ".";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: число округлить до сотых."
            + "\n Пример: 2.00"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала нам нужно найти дискриминант по формуле: " 
            + "\\(D = b^2 - 4ac\\)"
            + ",\n где a = " + String::from_int(a)
            + "; b = " + String::from_int(b)
            + "; c = " + String::from_int(c) + "\n\n"
            + "Найдём дискриминант квадратного уровнения: \n"
            + "\\(D = (" + String::from_int(b) + ")^2 - 4 * (" 
            + String::from_int(a) + ") * (" + String::from_int(c) + ") = "
            + String::from_int(D) + " \\)"
            + "\nТеперь можем найти корни квадратного уравнения по формуле: "
            + "\\(x_{1, 2} = \\frac{-b \\pm \\sqrt{D}}{2a}\\)"
            + "\n Рассчитаем каждый корень квадратный: \n"
            + "\\(x_1 = \\frac{-(" + String::from_int(b) 
            + ") + \\sqrt{" + String::from_int(D) + "}}{2*("
            + String::from_int(a) +")}=" + Main::round(x1,2) + "\\)\n"
            + "\\(x_2 = \\frac{-(" + String::from_int(b) 
            + ") - \\sqrt{" + String::from_int(D) + "}}{2*("
            + String::from_int(a) +")}=" + Main::round(x2,2) + "\\)"
            + "\nПолучается ответ " + ans;

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
    
    function getX(a: int, b: int, D: int, first: bool) -> float {
        if (first) {
            return ((-b) as float + Math::sqrt(D as float)) / (2.0 * a as float);
        } else if (!first) {
            return ((-b) as float - Math::sqrt(D as float)) / (2.0 * a as float);
        }
        
        return 0.0;
    }
    
    function getDiscriminant(a:int, b:int, c:int) -> int {
        return b * b - 4 * a * c;
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
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/