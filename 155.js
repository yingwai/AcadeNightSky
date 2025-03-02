/*
?Создайте генератор паззлов, который будет генерировать целые числа (5-7), человек должен выписать в ответ только простые числа (которые делятся без остатка на себя и 1).

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
        let nums: List<String> = [];
        let ans: List<String> = [];
        
        for (let i in 0..Main::getRandomIntInRange(5,7)) {
            let n = Main::getRandomIntInRange(2, 100);
            nums.push(String::from_int(n));
            
            if (community::near::dtalalaev::isPrime::Main::isPrime(n)) {
                ans.push(String::from_int(n))
            }
        }        
        
        if (ans.length() == 0) {ans.push("Простых чисел нет.")}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "определить простые числа (которые делятся без остатка на себя и 1)",
            "определить числа, которые являются простыми (делятся без остатка на себя и 1)",
            "найти простые числа, которые делятся без остатка только на себя и 1",
            "выявить числа, делящиеся без остатка на себя и 1, которые являются простыми",
            "определить все простые числа, делящиеся без остатка только на себя и 1",
            "найти простые числа из заданного списка (делятся без остатка на себя и 1)",
            "выяснить, какие числа являются простыми (делятся без остатка на себя и 1)",
            "определить набор чисел, которые можно считать простыми (делятся только на себя и 1)",
            "выбрать из чисел те, которые являются простыми (делятся без остатка на себя и 1)",
            "проверить числа и указать простые среди них (делящиеся только на себя и 1)",
            "определить простые числа в последовательности (делятся без остатка только на себя и 1)"
            
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " список чисел: " + String::join(nums, ", ") + ". " 
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан список чисел: " + String::join(nums, ", ") + ". " 
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + "\n Числа записать в том порядке, в котором они даны. Если таких числе нет, в ответ записать \"Простых чисел нет.\""
            + "\n Пример ответа: \"3, 2, 7\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Проверим все числа из ряда: \n";
        for (let i in 0..nums.length()) {
            expl += nums[i] + " делится на: "
            for (let j in 1..String::to_int(nums[i])+1) {
                if (String::to_int(nums[i]) % j == 0) {expl += String::from_int(j) + ", "}
            }
            expl = expl[0..expl.length()-2] + "\n"
        }
        
        expl += "\n Следовательно ответ: " + String::join(ans, ", ")

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(ans, ", ")
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/