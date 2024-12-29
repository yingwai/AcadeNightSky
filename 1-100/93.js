/*
?Создайте генератор паззлов, который будет выводить на изображение некоторое количество временных отрезков, среди которых в результате отбора по неким критериям (не менее 3) человеку необходимо нужно будет указать (выписать) один из временных отрезков. Придумывайте интересные критерии. Отрезки могут даваться в виде таблицы с данными.

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
        let intervals: List<List<int> > = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 10)) {
            let n = Main::getRandomIntInRange(0, 20);
            intervals.push([n, Main::getRandomIntInRange(n, 23)]);
        }
        
        let table = [["", "От", "До"]];
        for (let i in 0..intervals.length()) {
            table.push([String::from_int(i+1), String::from_int(intervals[i][0]) + ":00", String::from_int(intervals[i][1]) + ":00"]);
        }
        
        let canvas = community::near::dtalalaev::canvaTableString::Main::getTable(table, 100, 50);
        
        let n = Main::getRandomIntInRange(0, 5);
        let con = [
            "у которого начальный и конечный час оба чётные",
            "у которого начальный и конечный час оба нечётные",
            "где разница между концом и началом чётные",
            "где разница между концом и началом нечётные",
            "где сумма начала и конца чётное число",
            "где сумма начала и конца нечётные число"
        ][n];
        
        let ans = 0;
        if (n == 0) {
            for (let i in 0..intervals.length()) {
                if (intervals[i][0] % 2 == 0 && intervals[i][1] % 2 == 0) {
                    ans = i + 1;
                    break;
                }
            }
        } else if (n == 1) {
            for (let i in 0..intervals.length()) {
                if (intervals[i][0] % 2 != 0 && intervals[i][1] % 2 != 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 2) {
            for (let i in 0..intervals.length()) {
                if ((intervals[i][1] - intervals[i][0]) % 2 == 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 3) {
            for (let i in 0..intervals.length()) {
                if ((intervals[i][1] - intervals[i][0]) % 2 != 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 4) {
            for (let i in 0..intervals.length()) {
                if ((intervals[i][1] + intervals[i][0]) % 2 == 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 5) {
            for (let i in 0..intervals.length()) {
                if ((intervals[i][1] + intervals[i][0]) % 2 != 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "нарисованная таблица с временными отрезками",
            "таблица, содержащая временные отрезки",
            "визуализированная таблица с указанными временными отрезками",
            "таблица с временными интервалами",
            "графическая таблица, где указаны временные отрезки",
            "таблица, на которой отображены временные отрезки"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": \n<img canvas>"
            + "\nЕё попросили " + whatDo + " номер первого в списке временного отрезка, " + con + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана " + conditions + ": \n<img canvas>"
                + "\nТребуется определить номер первого в списке временного отрезка, " + con + ".";
        }

        let desc = sc + " Если же такого отрезка нет, ответом будет \"0\"."
            + "\n Пример вывода, следующий: \"5\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим каждый интервал:\n";
        if (n == 0 || n == 1) {
            for (let i in 0..intervals.length()) {
                expl += table[i+1][0] + ". " + table[i+1][1];
                
                if (intervals[i][0] % 2 == 0) {
                    expl += " чётное, "
                } else {
                    expl += " нечётное, "
                }
                
                expl += table[i+1][2]
                
                if (intervals[i][1] % 2 == 0) {
                    expl += " чётное. \n"
                } else {
                    expl += " нечётное. \n"
                }
            }
        }
        else if (n == 2 || n == 3) {
            for (let i in 0..intervals.length()) {
                expl += table[i+1][0] + ". " + table[i+1][2] + " - " + table[i+1][1] + " = " + String::from_int(intervals[i][1] - intervals[i][0]);
                
                if ((intervals[i][1] - intervals[i][0]) % 2 == 0) {
                    expl += " чётное. \n"
                } else {
                    expl += " нечётное. \n"
                }
            }
        }
        else if (n == 4 || n == 5) {
            for (let i in 0..intervals.length()) {
                expl += table[i+1][0] + ". " + table[i+1][1] + " + " + table[i+1][2] + " = " + String::from_int(intervals[i][1] + intervals[i][0]);
                
                if ((intervals[i][1] + intervals[i][0]) % 2 == 0) {
                    expl += " чётное. \n"
                } else {
                    expl += " нечётное. \n"
                }
            }
        }
        
        expl += "\n Следовательно ответ: " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canvas
                }
            ],
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