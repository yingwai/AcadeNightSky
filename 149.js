/*
?Сделайте генератор заданий, где решающий из списка чисел должен выписать те числа, которые не будут кратными какому-то числу, но будут кратны другому.
?Пример: Выпишите числа, которые не кратны 5, но кратны 3.
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
        let Snums: List<String> = [];
        for (let i in 0..Main::getRandomIntInRange(6, 20)) {
            let n = Main::getRandomIntInRange(1, 100);
            
            while (community::near::cfuser::ah04919::Contains::IntInList::contains(nums, n)) {
                n = Main::getRandomIntInRange(1, 100);
            }
            
            nums.push(n);
            Snums.push(String::from_int(n));
        }
        
        let n1 = Main::getRandomIntInRange(2, 15);
        let n2 = Main::getRandomIntInRange(2, 15);
        while (n1 == n2) {
            n1 = Main::getRandomIntInRange(2, 15);
            n2 = Main::getRandomIntInRange(2, 15);
        }
        
        let ans: List<String> = [];
        for (let i in nums) {
            if (i % n1 == 0 && i % n2 != 0) {
                ans.push(String::from_int(i));
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "ряд чисел",
            "набор чисел",
            "список чисел"
        ][Main::getRandomIntInRange(0, 2)];
        let conditions1 = [
            "числа, которые не кратны " + String::from_int(n2) + ", но кратны " + String::from_int(n1),
            "какие числа из ряда не делятся на " + String::from_int(n2) + " без остатка, но делятся на " + String::from_int(n1) + " без остатка",
            "какие из чисел не делятся на " + String::from_int(n2) + " без остатка и одновременно делятся на " + String::from_int(n1) + " без остатка",
            "которые числа из списка делятся на " + String::from_int(n2) + " с остатком и делятся на " + String::from_int(n1) + " без остатка"
        ][Main::getRandomIntInRange(0, 3)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": " + String::join(Snums, ", ") + "."
            + "\nЕё попросили " + whatDo + " " + conditions1 + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditions + ": " + String::join(Snums, ", ") + "."
                + "\nТребуется определить " + conditions1 + ".";
        }

        let desc = sc + " Если таких чисел нет, в ответ записать \"Таких чисел нет.\""
            + "\n Пример ответа: \"90, 33, 54, 27\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим остаток всех чисел из ряда для двух представленных чисел: \n";
        for (let i in 0..nums.length()) {
            expl += String::from_int(i) + ". " + Snums[i] + " % " + String::from_int(n1) + " = " + String::from_int(nums[i] % n1) + "\n    "
                + Snums[i] + " % " + String::from_int(n2) + " = " + String::from_int(nums[i] % n2) + "\n"
                + if (nums[i] % n1 == 0 && nums[i] % n2 != 0) {"Число подходит."} else {"Число не подходит."} + "\n"
        }
        expl += "\nСледовательно ответ: " + if (ans.length() > 0) {String::join(ans, ", ")} else {"Таких чисел нет."}

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: if (ans.length() > 0) {String::join(ans, ", ")} else {"Таких чисел нет."}
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/