/*
?Создайте генератор, в котором вы должны посчитать среднее арифметическое последовательных чисел, то есть они стоят друг за другом, примером может быть как просто набор чисел, необходимо найти то самое среднее арифметическое и чему оно равно, можно также применить ситуацию из реальной жизни. Разнообразие приветствуется.

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
        let arb: List<int> = [];
        let sumArb = 0;    

        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            arb.push(Main::getRandomIntInRange(1, 200));
            sumArb += arb[i];
        }
        
        let ans = Main::round(sumArb as float / arb.length() as float, 2);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|рассчитать|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            " сумму ряда и записать среднее арифметическое",
            " сумму ряда и указать его среднее арифметическое",
            " сумму элементов ряда и записать среднее арифметическое",
            " сумму ряда и рассчитать его среднее значение",
            " сумму чисел в ряде и записать среднее арифметическое",
            " сложить элементы ряда и указать их среднее арифметическое",
            " сумму ряда и вычислить среднее значение",
            " общую сумму ряда и записать среднее арифметическое",
            " сумму чисел ряда и указать среднее значение",
            " сумму ряда и записать его среднее арифметическое значение",
            " сумму всех элементов ряда и определить среднее арифметическое"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд чисел: ";
        for (let i in 0..arb.length()) {
            sc += String::from_int(arb[i]) + ", "
        }
        sc = sc[0..sc.length() - 2] + ". Её попросили " + whatDo + conditions + ". Ответ округлить до сотых.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд чисел: ";
            for (let i in 0..arb.length()) {
                sc += String::from_int(arb[i]) + ", "
            }
            sc = sc[0..sc.length() - 2] + ". Требуется определить " + conditions + ". Ответ округлить до сотых.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"92.88\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала посчитаем сумму ряда: ";
        for (let i in 0..arb.length()) {
            expl += String::from_int(arb[i]) + " + ";
        }
        expl = expl[0..expl.length() - 2] + " = " + String::from_int(sumArb) + "\n Теперь посчитаем средее арифметическое и запишем его в ответ: " + String::from_int(sumArb) + " / " + String::from_int(arb.length()) + " = " + ans;

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
        for (let i in after_string.length()..after_dot) {
            after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
}
*/