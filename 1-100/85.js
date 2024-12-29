/*
?Создайте генератор, в котором на входе будут генерироваться различные простые примеры в формате 15-3=.. Нужно будет найти все примеры, у которых ответ меньше десяти.

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
        let sum: List<int> = [];
        let znaki: List<String> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 7)) {
            nums.push([Main::getRandomIntInRange(0, 20), Main::getRandomIntInRange(0, 20)]);
            znaki.push(["+","-","*"][Main::getRandomIntInRange(0, 2)]);
        }
        
        for (let i in 0..nums.length()) {
            if (znaki[i] == "+") {
                sum.push(nums[i][0] + nums[i][1]);
            } else if (znaki[i] == "-") {
                sum.push(nums[i][0] - nums[i][1]);
            } else if (znaki[i] == "*") {
                sum.push(nums[i][0] * nums[i][1]);
            }
        }
        
        let ans = Main::maxIntIndex(sum);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..nums.length()) {
            list += String::from_int(i+1) + ". "
            if (znaki[i] == "+") {
                list += String::from_int(nums[i][0]) + " + " + String::from_int(nums[i][1]) + " = ..\n";
            } else if (znaki[i] == "-") {
                list += String::from_int(nums[i][0]) + " - " + String::from_int(nums[i][1]) + " = ..\n";
            } else if (znaki[i] == "*") {
                list += String::from_int(nums[i][0]) + " * " + String::from_int(nums[i][1]) + " = ..\n";
            }
        }
        let conditions = [
            "номера всех примеров, у которых ответ меньше десяти",
            "номера примеров с ответом меньше десяти",
            "номера всех примеров, где результат меньше десяти",
            "номера примеров, у которых итог меньше десяти",
            "номера тех примеров, где ответ оказался меньше десяти",
            "номера примеров с результатом менее десяти",
            "номера примеров, где полученный ответ меньше десяти",
            "номера всех примеров с ответом ниже десяти",
            "номера примеров ответы которых меньше десяти",
            "номера примеров с итоговым значением меньше десяти",
            "номера всех примеров, ответ которых меньше десяти"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд примеров: \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд примеров: \n" + list
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Если таковых нет, в ответ записать \"0\"."
            + "\n Пример вывода, следующий: \"2, 4\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала посчитаем ответ каждого примера: \n";
        for (let i in 0..nums.length()) {
            expl += String::from_int(i+1) + ". "
            if (znaki[i] == "+") {
                expl += String::from_int(nums[i][0]) + " + " + String::from_int(nums[i][1]) + " = " + String::from_int(nums[i][0] + nums[i][1]) + "\n";
            } else if (znaki[i] == "-") {
                expl += String::from_int(nums[i][0]) + " - " + String::from_int(nums[i][1]) + " = " + String::from_int(nums[i][0] - nums[i][1]) + "\n";
            } else if (znaki[i] == "*") {
                expl += String::from_int(nums[i][0]) + " * " + String::from_int(nums[i][1]) + " = " + String::from_int(nums[i][0] * nums[i][1]) + "\n";
            }
        }
        expl += "\n Т.к. нам нужны примеры ответ которых меньше 10, в ответ запишем " + String::join(ans, ", ")

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
    
    function maxIntIndex(arr: List<int>) -> List<String> {
        let n = 10;
        let index: List<String> = [];
        
        for (let i in 0..arr.length()) {
            if (arr[i] < n) {
                index.push(String::from_int(i + 1));
            }
        }
        
        if (index.length() < 1) {return ["0"]}

        return index;
    }
}
*/