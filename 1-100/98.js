/*
?Создайте генератор паззлов, который будет генерировать ряд из целых значений (ряд должен также включать повторяющиеся значения). Генератор будет просить произвести сумму значений, которые не повторяются и разделить их на количество чисел, которые не повторяются. Генератор будет просить ввести результат деления.

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
import community::near::spensa2::plural::PluralRu;

class Main {
    function gen_puzzle() -> Puzzle {
        let nums: List<int> = [];
        let unique: List<String> = [];
        let sum = 0;
        let count = 0;
        let row = "";
        
        for (let i in 0..Main::getRandomIntInRange(4, 10)) {
            let n = Main::getRandomIntInRange(0, 60);
            
            if (Main::getRandomIntInRange(0, 1) == 1) {
                unique.push(String::from_int(n));
                sum += n;
                count += 1;
            } else {
                row += String::from_int(n) + ", ";
                nums.push(n);
            }
            
            nums.push(n);
            row += String::from_int(n) + ", ";
        }
        row = row[0..row.length()-2];
        
        let ans = if (count != 0) {sum / count} else {0};
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сумму значений, которые не повторяются и разделить их на количество чисел, которые не повторяются",
            "сумму уникальных значений и разделить ее на количество неповторяющихся чисел",
            "сумму чисел, которые не повторяются, и поделить на количество уникальных чисел",
            "сумму уникальных значений и разделить ее на количество чисел без повторений",
            "сумму всех уникальных числел и поделить на их количество",
            "сумму чисел, которые встречаются только один раз, и разделить на их количество",
            "сумму неповторяющихся значений и разделить на их количество",
            "сумму уникальных чисел и поделить на их количество",
            "сумму чисел без повторений и поделить на их количество",
            "сумму всех числел, которые не повторяются, и разделить на их общее количество"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд из целых значений: " + row + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд из целых значений: " + row + ". "
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " В ответ записать целочисленное деление. Если же таких чисел нет, в ответ записать \"0\"."
            + "\n Пример вывода, следующий: \"18\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = if (count != 0) {"Найдём сумму всех неповторяющихся чисел: " + String::join(unique, " + ") + " = " + String::from_int(sum) 
            + "\n Теперь произведём деление суммы неповторяющихся чисел на их количество и запишем в ответ целочисленное деление: \\(\\dfrac{" + String::from_int(sum) + "}{" + String::from_int(count) + "} = " + String::from_int(ans) + "\\)"
       } else {"Т.к. таких чисел нет, ответ будет: 0"};
        
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