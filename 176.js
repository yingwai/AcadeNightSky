/*
?Создайте генератор паззлов, который просит определить, какой ближайший (но не текущий) год (только вперёд во времени) будет являться високосным, по отношению к текущему, если текущий год показан на экране. К примеру (не используйте его специально) для 2022 года ближайший следующий високосный 2024, для 2024 - 2028 и т.п.

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
import community::near::xload::datetime::DateTime;

class Main {
    function gen_puzzle() -> Puzzle {
        let year = Main::getRandomIntInRange(1800, 2200);
        
        let ans = year;
        for (let i in 1..100) {
            if (DateTime::isLeapYear(year+i)) {
                ans = year+i;
                break;
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какой ближайший (но не текущий) год (только вперёд во времени) будет являться високосным",
            "какой следующий год вперед будет високосным",
            "ближайший високосный год после текущего",
            "какой год ближайший впереди окажется високосным",
            "следующий високосный год в будущем",
            "какой ближайший високосный год наступит после этого года",
            "какой год вперед по времени будет високосным",
            "какой ближайший високосный год впереди времени",
            "следующий год, который будет високосным",
            "какой следующий год в будущем окажется високосным",
            "ближайший високосный год, идущий после текущего"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " год: " + String::from_int(year) + "."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан год: " + String::from_int(year) + "."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"1972\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти следующий високосный год, будем проверять каждый последующий от нашего года, пока не найдём таковой: \n";
        for (let i in 1..100) {
            if (DateTime::isLeapYear(year+i)) {
                expl += String::from_int(year+i) + " является високосным\n"
                break;
            } else {
                expl += String::from_int(year+i) + " не является високосным\n"
            }
        }
        expl += "\n Следовательно ответ: " + String::from_int(ans) + " т.к. он является ближайшим следующим високосным годом после " + String::from_int(year) 

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