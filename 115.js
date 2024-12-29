/*
?Создайте генератор паззлов, который будет рисовать таблицу с различными числами. Ряд чисел должен повторяться. Генератор будет просить указать на уникальное значение.

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
        let nums: List<List<int> > = [];
        let numu: List<String> = [];
        let len = Main::getRandomIntInRange(3, 8);
        
        for (let i in 0..Main::getRandomIntInRange(2, 5)) {
            let arr: List<int> = [];
            let n = Main::getRandomIntInRange(0, 100);
            let n1 = Main::getRandomIntInRange(0, 100);
            while (n == n1) {
                n1 = Main::getRandomIntInRange(0, 100);
            }
            
            for (let j in 0..len) {
                arr.push(n);
            }
            
            arr[Main::getRandomIntInRange(0, arr.length()-1)] = n1;
            nums.push(arr);
            numu.push(String::from_int(n1));
        }
        
        let table = "<table>";
        for (let i in 0..nums.length()) {
            table += "<tr><td>Строка " + String::from_int(i+1) + "</td>";
            
            for (let n in nums[i]) {
                table += "<td>" + String::from_int(n) + "</td>";
            }
            
            table += "</tr>";
        }
        table += "</table>"
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "указать на уникальное значение в каждом ряду",
            "отметить уникальное значение в каждой строке",
            "указать на значение, которое не повторяется в каждом ряду",
            "найти уникальный элемент в каждой строке",
            "определить значение, которое отличается от остальных в каждом ряду",
            "выделить единственное уникальное значение в каждой строке"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица с рядом повторяющихся чисел: \n" + table
            + "\nЕё попросили " + conditions  + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица с рядом повторяющихся чисел: \n" + table
                + "Требуется " + conditions  + ".";
        }

        let desc = sc + " В ответ записать уникальные числа от первой строки к последней."
            + "\n Пример ответа: \"98, 49, 31\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "";
        for (let i in 0..nums.length()) {
            expl += "В " + String::from_int(i+1) + " строке повторяется число " + if (String::from_int(nums[i][0]) == numu[i]) {String::from_int(nums[i][1])} else {String::from_int(nums[i][0])} + "\n"
        }
        expl += "\nСледовательно, уникальное значения в каждой строке: \n" + String::join(numu, ", ");

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(numu, ", ")
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/