/*
?Создайте генератор паззлов, который генерирует таблицу положительных целых чисел, в которой не более пяти строк и столбцов, а затем просит посчитать количество чисел, у которых порядковый номер строки или столбца, в котором (которой) они стоят не меньше, чем остаток от деления этого числа на 5.

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
        let rows = Main::getRandomIntInRange(1, 5);
        let cols = Main::getRandomIntInRange(1, 5);
        let nums: List<List<int> > = [];
        
        for (let i in 0..rows) {
            let row: List<int> = [];
            for (let j in 0..cols) {
                row.push(Main::getRandomIntInRange(1, 50));
            }
            nums.push(row);
        }
        
        let table = "<table><tr><td></td>";
        for (let i in 0..cols) {
            table += "<td>Столбец " + String::from_int(i+1) + "</td>";
        }
        table += "</tr>";
        for (let i in 0..rows) {
            table += "<tr><td>Строка " + String::from_int(i+1) + "</td>";
            for (let j in 0..cols) {
                table += "<td>" + String::from_int(nums[i][j]) + "</td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        
        let count = 0;
        for (let i in 0..nums.length()) {
            for (let j in 0..nums[i].length()) {
                let number = nums[i][j];
                let remainder = number % 5;
                
                if (i + 1 >= remainder || j + 1 >= remainder) {
                    count += 1;
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "количество чисел, у которых порядковый номер строки или столбца, в котором (которой) они стоят не меньше, чем остаток от деления этого числа на 5",
            "число элементов, где номер строки или столбца больше либо равен остатку от деления числа на 5",
            "количество значений, для которых номер строки или столбца не меньше остатка от деления на 5",
            "общее число чисел, где индекс строки или столбца больше либо равен остатку числа при делении на 5",
            "число чисел, у которых порядковый номер строки или столбца равен либо больше остатка деления на 5",
            "общее количество значений, где индекс строки или столбца соответствует либо больше остатка от деления на 5",
            "число элементов, для которых остаток от деления на 5 меньше или равен индексу строки или столбца",
            "количество чисел, где индекс строки или столбца больше либо равен остатку числа при делении на 5",
            "число значений, соответствующих условию: индекс строки или столбца больше либо равен остатка числа на 5",
            "количество элементов, где порядковый номер строки или столбца не меньше остатка деления числа на 5"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица положительных целых чисел: \n" + table
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица положительных целых чисел: \n" + table
                + "Требуется определить  " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"15\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем проверять каждое число из таблицы: \n";
        for (let i in 0..nums.length()) {
            for (let j in 0..nums[i].length()) {
                let number = nums[i][j];
                let remainder = number % 5;
                expl += String::from_int(number) + " остаток от 5 = " + String::from_int(remainder)
                
                if (i + 1 >= remainder || j + 1 >= remainder) {
                    expl += " - подоходит \n"
                } else {
                    expl += " - не подоходит т.к. порядковый номер строки меньше и не равен остатку \n"
                }
            }
        }
        expl += "\n Следовательно ответ: " + String::from_int(count)

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(count)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/