/*
?Создайте генератор пазлов, который генерирует неравенство, где вместо знака сравнения стоит звездочка. Человеку нужно будет заменить звездочку на верный знак «>, < или =», чтоб образовалось правильное равенство или неравенство.

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
        let nums: List<int> = Main::createNumbers();
        let inpt = String::from_int(nums[0]) + "*" + String::from_int(nums[1]) + ".";
        
        let ans = if (nums[0] > nums[1]) {">"}
                  else if (nums[0] < nums[1]) {"<"}
                  else {"="};
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "заменить звездочку на верный знак \">, < или =\", чтоб образовалось",
            "заменить звездочку на правильный знак \">, < или =\", чтобы получилось",
            "подставить вместо звездочки знак \">, < или =\", чтобы получить",
            "заменить звездочку на нужный знак \">, < или =\", чтобы образовалось",
            "использовать вместо звездочки знак \">, < или =\", чтобы составить",
            "поставить вместо звездочки знак \">, < или =\", чтобы образовать",
            "изменить звездочку на \">, < или =\", чтобы получить",
            "заменить знак звездочки на \">, < или =\", чтобы получить",
            "поставить знак \">, < или =\" вместо звездочки, чтобы образовать",
            "сменить звездочку на один из знаков \">, < или =\", чтобы сделать"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " выражение, где вместо знака сравнения стоит звездочка: " + inpt
            + "\nЕё попросили " + conditions + " правильное равенство или неравенство.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано выражение, где вместо знака сравнения стоит звездочка: " + inpt
                + "\nТребуется " + conditions + " правильное равенство или неравенство.";
        }

        let desc = sc 
            + "\n Пример ответа: \">\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Расмотрим два числа и выясним, что " + String::from_int(nums[0]) + " " + if (nums[0] > nums[1]) {"больше"}
                  else if (nums[0] < nums[1]) {"меньше"}
                  else {"равно"}
                  + " " + String::from_int(nums[1]) + "\n Следовательно ответ: " + ans;

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

    function createNumbers() -> List<int> {
        let num1 = Main::getRandomIntInRange(1, 100);
        let num2 = Main::getRandomIntInRange(1, 100);

        return [num1, num2];
    }
}
*/