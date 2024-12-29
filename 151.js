/*
?Придумайте генератор пазлов, в которых будет указана скорость выполнения каких-то повторяющихся действий. Также будет задана закономерность уменьшения их количества (в связи с усталостью). Например, за первую минуту спортсмен делает 50 упражнений на пресс, за второю минуту (и каждую следующую) - на 5 шт меньше от предыдущей. Сколько упражнений успеет выполнить спортсмен за 5 минут? Пожалуйста, точно такой же пример не используйте.

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
        let actionsPerMinuteStart = Main::getRandomIntInRange(40, 60);
        let decrementPerMinute = Main::getRandomIntInRange(1, 5);
        let totalMinutes = Main::getRandomIntInRange(3, 7);

        let totalActions = 0;
        let currentSpeed = actionsPerMinuteStart;

        for (let i in 0..totalMinutes) {
            totalActions += currentSpeed;
            currentSpeed -= decrementPerMinute;
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько действий возможно выполнить за",
            "какое количество действий можно выполнить за",
            "сколько действий будет выполнено за",
            "какое число действий возможно завершить за",
            "сколько действий удастся сделать за",
            "какое количество действий получится выполнить за",
            "сколько действий возможно завершить за",
            "какое число действий возможно выполнить за",
            "какое количество действий возможно сделать за",
            "сколько действий возможно произвести за",
            "какое количество действий возможно произвести за"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " выполнение повторяющихся действий: " + PluralRu::pluralify(actionsPerMinuteStart, "действие", "действия", "действий") + " за первую минуту. "
            + "Каждую следующую минуту выполняется на " + PluralRu::pluralify(decrementPerMinute, "действие", "действия", "действий") + " меньше, чем за предыдущую минуту. "
            + "\nЕё попросили " + whatDo + " " + conditions + " " + PluralRu::pluralify(totalMinutes, "минуту", "минуты", "минут") + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано выполнение повторяющихся действий: " + PluralRu::pluralify(actionsPerMinuteStart, "действие", "действия", "действий") + " за первую минуту. "
                + "Каждую следующую минуту выполняется на " + PluralRu::pluralify(decrementPerMinute, "действие", "действия", "действий") + " меньше, чем за предыдущую минуту. "
                + "\nТребуется определить " + conditions + " " + PluralRu::pluralify(totalMinutes, "минуту", "минуты", "минут") + ".";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим сколько действий выполняется за каждую из " + PluralRu::pluralify(totalMinutes, "минуту", "минут", "минут") + " с учётом того что действия уменьшаются на " + String::from_int(decrementPerMinute) + " каждую минуту: \n 1 минута: " + String::from_int(actionsPerMinuteStart) + "\n";
        for (let i in 1..totalMinutes) {
            expl += String::from_int(i+1) + " минута: " + String::from_int(actionsPerMinuteStart - decrementPerMinute * (i-1)) + " - " + String::from_int(decrementPerMinute) + " = " + String::from_int(actionsPerMinuteStart - (decrementPerMinute * i)) + "\n";
        }
        expl += "\n Теперь найдём количество действий за " + PluralRu::pluralify(totalMinutes, "минуту", "минуты", "минут") + ": ";
        for (let i in 0..totalMinutes) {
            expl += String::from_int(actionsPerMinuteStart - decrementPerMinute * i) + " + ";
        }
        expl = expl[0..expl.length()-2] + " = " + String::from_int(totalActions)

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(totalActions)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/