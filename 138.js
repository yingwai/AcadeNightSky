/*
?Сделайте генератор паззлов, в котором человеку нужно будет найти произведение двух чисел, из которых не получается нацело извлечь квадратный корень. Затем максимально упростить полученный результат. Желательно, подбирать такие два корня, в результате умножения которых получится добыть квадратный корень нацело. Например, умножить корень из 45 на корень из 5 даёт в результате корень из 225. Соответственно человеку нужно вывести 15 в ответ.

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
        let num1 = Main::getRandomIntInRange(1, 100);
        let num2 = Main::getRandomIntInRange(1, 100);
        let product = num1*num2;
        let sqrtProduct = Math::sqrt(product as float);
        
        let isRight = false;
        while (!isRight) {
            num1 = Main::getRandomIntInRange(1, 100);
            num2 = Main::getRandomIntInRange(1, 100);    
            product = num1*num2;
            sqrtProduct = Math::sqrt(product as float);
            
            if (Main::round(Math::sqrt(num1 as float) as float, 2).split(".")[1] == "00" && Main::round(Math::sqrt(num2 as float) as float as float, 2).split(".")[1] == "00") {
                continue;
            }
            
            if (Main::round(sqrtProduct as float, 2).split(".")[1] != "00") {
                continue;
            }
            
            isRight = true;
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "чему равняется произведение и записать в ответ чему равняется корень",
            "результат произведения и найти корень, записав его в ответ",
            "произведение и записать в ответ значение корня",
            "произведение и корень, и записать корень в ответ",
            "произведение и указать в ответ корень этого числа",
            "произведение и вычислить корень, записав его в ответ",
            "произведение и записать корень этого числа",
            "произведение и извлечь корень, записав результат в ответ",
            "произведение чисел и записать значение корня в ответ",
            "произведение и указать корень в ответе",
            "произведение и корень этого произведения записав его в ответ"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " произведение двух чисел, из которых не получается нацело извлечь квадратный корень: \\(\\sqrt{" + String::from_int(num1) + "} * \\sqrt{" + String::from_int(num2) + "}\\)."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано произведение двух чисел, из которых не получается нацело извлечь квадратный корень: \\(\\sqrt{" + String::from_int(num1) + "} * \\sqrt{" + String::from_int(num2) + "}\\)."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём чему равняется произведение: \\(\\sqrt{" + String::from_int(num1) + "} * \\sqrt{" + String::from_int(num2) + "} = \\sqrt{" + String::from_int(product) + "}\\)"
            + "\n Теперь найдём чему равняется корень этого произведения: \\(\\sqrt{" + String::from_int(product) + "} = " + Main::round(sqrtProduct as float, 2).split(".")[0] + "\\)";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(sqrtProduct as float, 2).split(".")[0]
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