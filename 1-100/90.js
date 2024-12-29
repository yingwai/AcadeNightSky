/*
?Сделайте генератор задач, которой на входе будет давать какую-либо дату (месяц и число). Требуется определить, какой знак зодиака соответствует данной дате.

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

class Date {
    public month: String,
    public month_index: int,
    public day: int
}
class Interval {
    public day: int,
    public month: int
} 
class Zodiac { 
    public name: String, 
    public start: Interval, 
    public end: Interval
}

class Main {
    function gen_puzzle() -> Puzzle {
        let date = Main::getDate();
        let znak = Main::getZodiacSign(date.day, date.month_index);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какой знак зодиака соответствует данной дате",
            "знак зодиака, связанный с этой датой",
            "какой знак зодиака относится к указанной дате",
            "какой знак зодиака соответствует этой дате",
            "знак зодиака относящийся данной дате",
            "какой знак зодиака связан с указанной датой",
            "знак зодиака, который соответствует данной дате",
            "какой зодиакальный знак ассоциируется с этой датой",
            "знак зодиака для данной даты",
            "к какому знаку зодиака относится эта дата",
            "знак зодиака, связанный с данной датой"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дата: " + String::from_int(date.day) + " " + date.month + ". "
            + "\nЕё попросили " + whatDo + ", " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана дата: " + String::from_int(date.day) + " " + date.month + ". "
                + "Требуется определить, " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"Рак\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим промежуток от начала до конца каждого месяца: \n";
        let zodiacSigns = [
            new Zodiac { name: "Козерог", start: new Interval { day: 22, month: 12 }, end: new Interval { day: 19, month: 1 } },
            new Zodiac { name: "Водолей", start: new Interval { day: 20, month: 1 }, end: new Interval { day: 18, month: 2 } },
            new Zodiac { name: "Рыбы", start: new Interval { day: 19, month: 2 }, end: new Interval { day: 20, month: 3 } },
            new Zodiac { name: "Овен", start: new Interval { day: 21, month: 3 }, end: new Interval { day: 19, month: 4 } },
            new Zodiac { name: "Телец", start: new Interval { day: 20, month: 4 }, end: new Interval { day: 20, month: 5 } },
            new Zodiac { name: "Близнецы", start: new Interval { day: 21, month: 5 }, end: new Interval { day: 20, month: 6 } },
            new Zodiac { name: "Рак", start: new Interval { day: 21, month: 6 }, end: new Interval { day: 22, month: 7 } },
            new Zodiac { name: "Лев", start: new Interval { day: 23, month: 7 }, end: new Interval { day: 22, month: 8 } },
            new Zodiac { name: "Дева", start: new Interval { day: 23, month: 8 }, end: new Interval { day: 22, month: 9 } },
            new Zodiac { name: "Весы", start: new Interval { day: 23, month: 9 }, end: new Interval { day: 22, month: 10 } },
            new Zodiac { name: "Скорпион", start: new Interval { day: 23, month: 10 }, end: new Interval { day: 21, month: 11 } },
            new Zodiac { name: "Стрелец", start: new Interval { day: 22, month: 11 }, end: new Interval { day: 21, month: 12 } }
        ];
        let ms = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        for (let z in zodiacSigns) {
            expl += z.name + "(" + String::from_int(z.start.day) + " " + ms[z.start.month-1] + " - " + String::from_int(z.end.day) + " " + ms[z.end.month-1] + ")\n"
        }
        expl += "\nСледовательно нужный нам знак: " + znak;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: znak
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getZodiacSign(day: int, month: int) -> String {
        let zodiacSigns = [
            new Zodiac { name: "Козерог", start: new Interval { day: 22, month: 12 }, end: new Interval { day: 19, month: 1 } },
            new Zodiac { name: "Водолей", start: new Interval { day: 20, month: 1 }, end: new Interval { day: 18, month: 2 } },
            new Zodiac { name: "Рыбы", start: new Interval { day: 19, month: 2 }, end: new Interval { day: 20, month: 3 } },
            new Zodiac { name: "Овен", start: new Interval { day: 21, month: 3 }, end: new Interval { day: 19, month: 4 } },
            new Zodiac { name: "Телец", start: new Interval { day: 20, month: 4 }, end: new Interval { day: 20, month: 5 } },
            new Zodiac { name: "Близнецы", start: new Interval { day: 21, month: 5 }, end: new Interval { day: 20, month: 6 } },
            new Zodiac { name: "Рак", start: new Interval { day: 21, month: 6 }, end: new Interval { day: 22, month: 7 } },
            new Zodiac { name: "Лев", start: new Interval { day: 23, month: 7 }, end: new Interval { day: 22, month: 8 } },
            new Zodiac { name: "Дева", start: new Interval { day: 23, month: 8 }, end: new Interval { day: 22, month: 9 } },
            new Zodiac { name: "Весы", start: new Interval { day: 23, month: 9 }, end: new Interval { day: 22, month: 10 } },
            new Zodiac { name: "Скорпион", start: new Interval { day: 23, month: 10 }, end: new Interval { day: 21, month: 11 } },
            new Zodiac { name: "Стрелец", start: new Interval { day: 22, month: 11 }, end: new Interval { day: 21, month: 12 } }
        ];

        for (let sign in zodiacSigns) {
            if (
                (month == sign.start.month && day >= sign.start.day) ||
                (month == sign.end.month && day <= sign.end.day)
            ) {
                return sign.name;
            }
        }
        return "Неверная дата";
    }
    
    function getDate() -> Date {
        let ms = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let d: int = Main::getRandomIntInRange(1, 28);
        
        let index = Main::getRandomIntInRange(0, 11);
        
        return new Date {
            month: ms[index],
            month_index: index + 1,
            day: d
        }
    }
}
*/