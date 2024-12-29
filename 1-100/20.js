/*
?Создайте генератор, который будет выдавать одно «главное» число, а также несколько чисел поменьше. Решающему нужно будет определить, какой процент занимает каждое число от главного числа. В ответ нужно будет записать произведение полученных «процентов». Например: «1570». Данный пример не использовать.

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
        let main = Main::getRandomIntInRange(20, 100);
        let nums: List<int> = [];
        let per: List<float> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 6)) {
            nums.push(Main::getRandomIntInRange(1, main/2));
            per.push(Main::getPercentage(main, nums[i]));
        }
        
        let ans = Main::productOfPercentages(per);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какой процент занимает каждое число от главного числа и в ответ записать произведение полученных «процентов».",
            "какой процент составляет каждое число от главного числа и записать произведение этих процентов.",
            "какой процент каждое число составляет от основного числа, и записать результат произведения процентов.",
            "сколько процентов составляет каждое число от главного числа, и записать в ответ произвидение этих процентнов.",
            "процентное соотношение каждого числа к главному числу и записать их произведение в ответ.",
            "какой процент занимает каждое число от главного, и найти произведение полученных процентов.",
            "какая доля каждого числа в процентах от главного числа и найти произведение полученных процентов.",
            "процентное значение каждого числа от главного числа и записать их произведение в ответ.",
            "какой процент составляет каждое число от основного числа, и записать их произведение в ответ.",
            "какие проценты для каждого числа от главного числа и затем найти их произведение.",
            "сколько процентов занимает каждое число от главного, и перемножить полученные проценты."
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " главное число "
            + String::from_int(main) + " и несколько чисел поменьше:\n";
        for (let i in 0..nums.length()) {
            if (i == nums.length()-1) {
                sc += String::from_int(nums[i]) + "."
            }
            else {
                sc += String::from_int(nums[i]) + ", "
            }
        }
        sc += "\nЕё попросили " + whatDo 
            + ", " + conditions;
        

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано главное число " + String::from_int(main) 
                + " и несколько чисел поменьше:\n";
            for (let i in 0..nums.length()) {
                if (i == nums.length()-1) {
                    sc += String::from_int(nums[i]) + "."
                }
                else {
                    sc += String::from_int(nums[i]) + ", "
                }
            }
            sc += "Требуется определить "
                + ", " + conditions;
        }

        let desc = sc 
            + "\n Формат вывода, следующий: число округлённое до сотых."
            + "\n Пример: 1612.00"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала высчитываем процент каждого числа от главного: \n";
        for (let i in 0..nums.length()) {
            expl += "\\(\\frac{" + String::from_int(nums[i]) 
                + "}{" + String::from_int(main) + "} * 100 = "
                + Main::round(nums[i] as float / main as float * 100.0, 5) 
                + "\\) \n\n";
        }
        expl += "Найдём произведение всех полученных «процентов»: \n\\(";
        for (let i in 0..nums.length()-1) {
        expl += Main::round(nums[i] as float / main as float * 100.0, 5) 
            + " * ";
        }
        expl += Main::round(nums[nums.length()-1] as float / main as float * 100.0, 5) 
            + " = " + ans + "\\) \n\n";

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
    
    function productOfPercentages(per: List<float>) -> String {
        let sum = per[0];
        
        for (let i in 1..per.length()) {
            sum *= per[i];
        }
        
        return Main::round(sum, 2);
    }
    
    function getPercentage(main: int, part: int) -> float {
        return (part as float / main as float) * 100.0;
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