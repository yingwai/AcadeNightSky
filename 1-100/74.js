/*
?Сделайте генератор пазлов, который генерирует некоторое буквенное выражение, а человек должен его упростить используя переместительное и сочитательное свойства.

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
        let nums = [Main::getRandomIntInRange(1, 99), Main::getRandomIntInRange(1, 99), Main::getRandomIntInRange(1, 99)];
        while (nums[1] == nums[0]) {
            nums[1] = Main::getRandomIntInRange(1, 99);
        }
        while (nums[2] == nums[0] || nums[2] == nums[1]) {
            nums[2] = Main::getRandomIntInRange(1, 99);
        }
        let x = nums[Main::getRandomIntInRange(0, 2)];
        
        let str = "(";
            
        for (let n in nums) {
            if (n == x) {
                str += "x + "
            } else {
                str += String::from_int(n) + " + "
            }
        }
        
        str = String::join(str.split(" + ")[0..2], " + ") + ") + " + str.split(" + ")[2];
        
        let sum = 0;
        for (let n in nums) {
            if (n != x) {
                sum += n;
            }
        }
        
        let right = String::from_int(sum) + "x";
        let list = [right];
        
        right = "";
        for (let n in nums) {
            if (n != x) {
                right += String::from_int(n) + " + "
            }
        }
        right = right.split(" + ")[0] + "x + " + right.split(" + ")[1];
        list.push(right);
        
        right = "";
        for (let n in nums) {
            if (n != x) {
                right += String::from_int(n) + " + "
            }
        }
        right = "x + " + if (String::to_int(right.split(" + ")[0]) > String::to_int(right.split(" + ")[1])) {String::from_int(String::to_int(right.split(" + ")[0]) - String::to_int(right.split(" + ")[1]))}
                         else {String::from_int(String::to_int(right.split(" + ")[1]) - String::to_int(right.split(" + ")[0]))};
        list.push(right);
        
        right = "x + " + String::from_int(sum);
        list.push(right);
        
        for (let i in 0..30) {
            list = Main::shuffleArray(list)
        }
        
        let ans = 0;
        for (let i in 0..list.length()) {
            if (list[i] == right) {
                ans = i+1;
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "некоторое буквенное выражение",
            "определённое буквенное выражение",
            "какое-то буквенное выражение",
            "заданное буквенное выражение",
            "одно буквенное выражение"
        ][Main::getRandomIntInRange(0, 4)];
        let conditions1 = [
            "и выбрать номер упрощённое выражение",
            "и отметить номер с упрощённым выражением",
            "и указать номер упрощённого выражения",
            "и выбрать номер, соответствующий упрощённому выражению",
            "и отметить номер, где приведено упрощённое выражение",
            "и выбрать номер, под которым записано упрощённое выражение"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + " " + str + "."
            + "\nЕё попросили " + whatDo + " " + conditions1 + ": \n";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + " " + str + "."
                + "\nТребуется определить " + conditions1 + ": \n";
        }
        
        for (let i in 0..list.length()) {
            sc += String::from_int(i+1) + ") " + list[i] + "\n";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала вынесем выражение за скобки, и перенесём х в левую сторону: " + str + " = x + ";
        for (let n in nums) {
            if (n != x) {
                expl += String::from_int(n) + " + "
            }
        }
        expl = expl[0..expl.length()-2] + "; \n Теперь сократим выражение: " + right + "\n Следовательно ответ: " + String::from_int(ans);

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
    
    function shuffleArray(array: List<String>) -> List<String> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
*/