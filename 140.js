/*
?Сделайте генератор паззлов, который пишет ряд из нескольких чисел, затем просит умножить их все друг на друга и разделить на количество всех чисел.

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
        let nums: List<int> = [];
        let sum = 1;
        
        for (let i in 0..Main::getRandomIntInRange(4, 7)) {
            nums.push(Main::getRandomIntInRange(1, 10));
            sum *= nums[i];
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in nums) {
            list += String::from_int(i) + ", "
        }
        list = list[0..list.length()-2];
        
        let conditions = [
            "умножить их все друг на друга и разделить на количество всех чисел",
            "перемножить все эти числа и поделить на их количество",
            "умножить все числа друг на друга и разделить на общее количество чисел",
            "произвести умножение всех чисел и разделить на их количество",
            "умножить все значения и разделить на количество чисел",
            "перемножить все числа и разделить результат на их общее количество",
            "умножить все числа, а затем разделить на их количество",
            "сначала умножьте все числа, а потом разделить на общее количество чисел",
            "перемножить числа между собой и поделить на количество чисел",
            "умножить все числа и затем разделить их на количество",
            "умножить все числа и разделить полученный результат на количество"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд из нескольких чисел: " + list
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд из нескольких чисел: " + list
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + " Ответ округляем до десятых."
            + "\n Пример ответа: \"268.8\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Премножим все числа в ряду: ";
        for (let i in nums) {
            expl += String::from_int(i) + " * "
        }
        expl = expl[0..expl.length()-2] + " = " + String::from_int(sum) + "\n Теперь разделим полученный результат на количество чисел: " 
            + String::from_int(sum) + "/" + String::from_int(nums.length()) + " = " + Main::round(sum as float/nums.length() as float, 1);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(sum as float/nums.length() as float, 1)
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