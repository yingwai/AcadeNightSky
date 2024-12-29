/*
?Создайте генератор заданий, который будет генерировать числа. Решающий должен сначала сложить определенные числа, а после этого из их суммы отнять какое то определенное число.

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
        
        let minus = Main::getRandomIntInRange(1, sumArb);
        let ans = sumArb - minus;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            " сумму ряда, а после этого отнять ",
            " сумму ряда, а затем отнять ",
            " сумму ряда и после этого вычесть ",
            " сумму всех элементов ряда, а затем отнять ",
            " сумму ряда, а после этого вычесть ",
            " сумму ряда и отнять ",
            " сумму ряда и затем отнять ",
            " сумму чисел ряда, а потом отнять ",
            " сумму ряда, а затем вычесть ",
            " сумму ряда и отнять ",
            " сумму ряда и вычесть " 
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд чисел: ";
        for (let i in 0..arb.length()) {
            sc += String::from_int(arb[i]) + ", "
        }
        sc = sc[0..sc.length() - 2] +  ". Её попросили " + whatDo + conditions + String::from_int(minus)
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд чисел: ";
            for (let i in 0..arb.length()) {
                sc += String::from_int(arb[i]) + ", "
            }
            sc = sc[0..sc.length() - 2] + ". Требуется определить" + conditions + String::from_int(minus)
            + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"251\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём сумму ряда чисел: \n";
        for (let i in 0..arb.length()) {
            expl += String::from_int(arb[i]) + " + "
        }
        expl = expl[0..expl.length() - 2] + " = " + String::from_int(sumArb) + "\n Теперь отнимем от суммы число: " + String::from_int(minus)
            + ".\n" + String::from_int(sumArb) + " - " + String::from_int(minus) + " = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/