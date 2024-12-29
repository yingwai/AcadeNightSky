/*
?Создайте генератор задач, в котором на входе человеку предлагается сравнить примеры на сложение с обыкновенными дробями, в которых также есть слагаемые "0". Сравниваемые выражения должны генерироваться с "0" в первом случае и без "0", но с переставленными слагаемыми (то есть как при сочетательном свойстве "0" прибавляется к одному из слагаемых и как в переместительном - перемена места слагаемых). В итоге человек видит выражения подобного вида 2/3 + 0 + 1/3 и 1/3 + 2/3 (слагаемых может быть больше для усложнения задачи. В ответ записать равны или не равны выражения.

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
        let frac: List<List<int> > = [];
        
        for (let i in 0..4) {
            let f = Main::createRandomFraction();
            
            while (Main::findGcd(f) != 1) {
                f = Main::createRandomFraction();
            }
            
            frac.push(f);
        }
        
        let rav = Main::getRandomIntInRange(0, 1) == 1;
        if (rav) {
            frac[2] = frac[0];
            frac[3] = frac[1];  
        }
        
        let frac_add = [
            [frac[0][0] + frac[1][0], frac[0][1] * frac[1][1]],
            [frac[2][0] + frac[3][0], frac[2][1] * frac[3][1]]
        ];
        
        let ans = if (frac_add[0][0] as float / frac_add[0][1] as float == frac_add[1][0] as float / frac_add[1][1] as float) {"равны"} else {"не равны"}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let p1 = if (Main::getRandomIntInRange(0, 1) == 1) {"\\(\\frac{" + String::from_int(frac[0][0]) + "}{" + String::from_int(frac[0][1]) + "} + 0 + \\frac{" + String::from_int(frac[1][0]) + "}{" + String::from_int(frac[1][1]) + "} \\)"}
                 else {"\\(\\frac{" + String::from_int(frac[0][0]) + "}{" + String::from_int(frac[0][1]) + "} + \\frac{" + String::from_int(frac[1][0]) + "}{" + String::from_int(frac[1][1]) + "} \\)"}
        let p2 = if (p1.split("+ 0 +").length() == 1) {"\\(\\frac{" + String::from_int(frac[2][0]) + "}{" + String::from_int(frac[2][1]) + "} + 0 + \\frac{" + String::from_int(frac[3][0]) + "}{" + String::from_int(frac[3][1]) + "} \\)"}
                 else {"\\(\\frac{" + String::from_int(frac[2][0]) + "}{" + String::from_int(frac[2][1]) + "} + \\frac{" + String::from_int(frac[3][0]) + "}{" + String::from_int(frac[3][1]) + "} \\)"}
        
        let conditions = [
            "примеры на сложение с обыкновенными дробями, в которых также есть слагаемые '0'",
            "задачи на сложение обыкновенных дробей, где присутствуют слагаемые '0'",
            "примеры сложения обыкновенных дробей, содержащие слагаемое '0'",
            "примеры сложения с обыкновенными дробями, в которых встречается слагаемое '0'",
            "примеры на сложение обыкновенных дробей с участием слагаемых '0'",
            "задачи по сложению обыкновенных дробей, где есть слагаемые '0'",
            "примеры на сложение дробей, где присутствует слагаемое '0'",
            "случаи сложения обыкновенных дробей, содержащие слагаемое '0'",
            "примеры с обыкновенными дробями на сложение, где есть слагаемое '0'",
            "задачи сложения обыкновенных дробей, содержащие '0' как слагаемое",
            "примеры сложения дробей, в которых одним из слагаемых является '0'"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два примера: " + p1 + " и " + p2 + "."
            + "\nЕё попросили сравнить " + conditions + " в одном из них и записать в ответ равны или не равны выражения.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано два примера: " + p1 + " и " + p2 + "."
                + "\nТребуется сравнить " + conditions + " в одном из них и записать в ответ равны или не равны выражения.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"равны\" или \"не равны\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала определим чему равна левая сторона: \n"
            + p1 + " = "
            + "\\(\\frac{" + String::from_int(frac[0][0]) + " + " + String::from_int(frac[1][0]) + "}{" + String::from_int(frac[0][1]) + " * " + String::from_int(frac[1][1]) + "} \\) = "
            + "\\(\\frac{" + String::from_int(frac_add[0][0]) + "}{" + String::from_int(frac_add[0][1]) + "} \\)"
            + "\n Теперь определим чему правая сторона: \n"            
            + p2 + " = "
            + "\\(\\frac{" + String::from_int(frac[2][0]) + " + " + String::from_int(frac[3][0]) + "}{" + String::from_int(frac[2][1]) + " * " + String::from_int(frac[3][1]) + "} \\) = "
            + "\\(\\frac{" + String::from_int(frac_add[1][0]) + "}{" + String::from_int(frac_add[1][1]) + "} \\)";
        if (rav) {
            expl += "\n\nДроби " + "\\(\\frac{" + String::from_int(frac_add[0][0]) + "}{" + String::from_int(frac_add[0][1]) + "} \\) и " + "\\(\\frac{" + String::from_int(frac_add[1][0]) + "}{" + String::from_int(frac_add[1][1]) + "} \\) равны.";
        } else {
            expl += "\n\nДроби " + "\\(\\frac{" + String::from_int(frac_add[0][0]) + "}{" + String::from_int(frac_add[0][1]) + "} \\) и " + "\\(\\frac{" + String::from_int(frac_add[1][0]) + "}{" + String::from_int(frac_add[1][1]) + "} \\) не равны.";
        }

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
    
    function findGcd(arr: List<int>) -> int {
        let gcd = arr[0];
        for (let i in arr) {
            let x = i; 
            let y = gcd;
            while (y > 0) {
                let t = y;
                y = x % y;
                x = t;
            }
            gcd = x;
        }
        return gcd;
    }
    
    function createRandomFraction() -> List<int> {
        let numerator = Main::getRandomIntInRange(1, 50);
        let denominator = Main::getRandomIntInRange(1, 50);

        return [numerator, denominator];
    }
    

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/