/*
?Создайте генератор заданий, в которых даны часовые пояса для каждого из двух друзей(в формате UTC-n, где n - какое-то из чисел в промежутке [-10; 14]) и просят определить, бывает ли у них одинаковый период суток.

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
        let friend1 = Main::getRandomIntInRange(-11, 14);
        let friend2 = Main::getRandomIntInRange(-11, 14);
        
        let check = Main::checkOverlap(friend1, friend2);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "бывает ли у них одинаковый период суток",
            "есть ли у них совпадающие периоды суток",
            "бывает ли у них одинаковое время в сутках",
            "совпадает ли у них период суток",
            "бывают ли у них одинаковые временные промежутки суток",
            "есть ли у них одинаковые отрезки времени в течение суток",
            "наблюдаются ли у них совпадения по времени суток",
            "бывает ли у них идентичное время в течение суток",
            "совпадает ли у них временной период в сутках",
            "есть ли у них одинаковые временные интервалы суток",
            "бывают ли у них совпадающие отрезки времени в сутках"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два друга с разными часовыми поясами: у одного UTC" + if (friend1 >= 0) {"+" + String::from_int(friend1)} else {String::from_int(friend1)}
            + ", а у другого UTC" + if (friend2 >= 0) {"+" + String::from_int(friend2)} else {String::from_int(friend2)}
            + ". Её попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два друга с разными часовыми поясами: у одного UTC" + if (friend1 >= 0) {"+" + String::from_int(friend1)} else {String::from_int(friend1)}
                + ", а у другого UTC" + if (friend2 >= 0) {"+" + String::from_int(friend2)} else {String::from_int(friend2)}
                + ". Требуется определить " + conditions + ".";
        }

        let desc = sc + "\nЕсли известно, что утро с 6 до 12, день с 12 до 18, вечер с 18 до 24, а ночь с 24 до 6."
            + "\n Пример вывода, следующий: \"Да\"/\"Нет\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Для каждого периода времени нужно пересчитать начало и конец с учетом временных зон по формуле: \\((\\dfrac{Время начало}{Время конца} + Часовой пояс + 24) % 24\\)\n";

        let periods = [
            [6, 12],
            [12, 18],
            [18, 24],
            [0, 6]  
        ];
        
        for (let i in 0..periods.length()) {
            let start = periods[i][0];
            let end = periods[i][1];

            let friend1Start = (start + friend1 + 24) % 24;
            let friend1End = (end + friend1 + 24) % 24;

            let friend2Start = (start + friend2 + 24) % 24;
            let friend2End = (end + friend2 + 24) % 24;

            if (i == 0) {
                expl += "Утро: \n"
            } else if (i == 1) {
                expl += "День: \n"
            } else if (i == 2) {
                expl += "Вечер: \n"
            } else if (i == 3) {
                expl += "Ночь: \n"
            }
            expl += "Друг 1: c " + String::from_int(friend1Start) + ":00 до " + String::from_int(friend1End) + ":00 \n"
                + "Друг 2: c " + String::from_int(friend2Start) + ":00 до " + String::from_int(friend2End) + ":00 \n\n";
        }
        
        expl += if (check) {"\nТ.к. пересечение есть, следовательно ответ: Да"} else {"\nТ.к. пересечение нет, следовательно ответ: Нет"}
        
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: if (check) {"Да"} else {"Нет"}
                } as Reveal
            ],
        }
    }
    
    function checkOverlap(tz1: int, tz2: int) -> bool {
        let periods = [
            [6, 12],
            [12, 18],
            [18, 24],
            [0, 6]  
        ];

        for (let period in periods) {
            let start = period[0];
            let end = period[1];

            let friend1Start = (start + tz1 + 24) % 24;
            let friend1End = (end + tz1 + 24) % 24;

            let friend2Start = (start + tz2 + 24) % 24;
            let friend2End = (end + tz2 + 24) % 24;

            if (Main::checkTimeOverlap(friend1Start, friend1End, friend2Start, friend2End)) {
                return true;
            }
        }
        
        return false;
    }
    
        // Функция для проверки пересечения двух временных промежутков
    function checkTimeOverlap(start1: int, end1: int, start2: int, end2: int) -> bool {
        let overlap = false;

        if (start1 <= end1) {
            if (start2 <= end2) {
                overlap = Main::maxInt([start1, start2], true) < Main::maxInt([end1, end2], false);
            } else {
                overlap = Main::maxInt([start1, start2], true) < end1 || start1 < end2;
            }
        } else {
            if (start2 <= end2) {
                overlap = start2 < end1 || Main::maxInt([start1, start2], true) < end2;
            } else {
                overlap = true;
            }
        }

        return overlap;
    }
    
    function maxInt(arr: List<int>, more: bool) -> int {
        let n = arr[0];

        if (more) {
            for (let i in 1..arr.length()) {
                if (arr[i] > n) {
                    n = arr[i];
                }
            }
        } else {
            for (let i in 1..arr.length()) {
                if (arr[i] < n) {
                    n = arr[i];
                }
            }
        }

        return n;
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/