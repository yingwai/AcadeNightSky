/*
?Сделайте генератор пазлов, который генерирует допустимое время езды дальнобойщика в сутки, по часовому поясу UTC+0, человеку необходимо написать, до скольки часов сможет продолжать движение дальнобойщик, в часом поясе который сгенерирует генератор.

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
        let maxDrivingHours = Main::getRandomIntInRange(5, 10);
        let startHour = Main::getRandomIntInRange(0, 23);
        let timezoneOffset = Main::getRandomIntInRange(-12, 14);
        let endHourUTC = (startHour + maxDrivingHours) % 24;
        let endHourLocal = (endHourUTC + timezoneOffset + 24) % 24;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "до скольки часов сможет продолжать движение дальнобойщик",
            "до какого времени дальнобойщик сможет продолжать движение",
            "до какого часа дальнобойщик сможет продолжать путь",
            "до скольки часов дальнобойщик может двигаться",
            "до какого часа дальнобойщик продолжит движение",
            "когда закончится время, в течение которого дальнобойщик может ехать",
            "до какого времени разрешено продолжать движение дальнобойщику",
            "до какого часа дальнобойщик может двигаться по маршруту",
            "до какого времени дальнобойщику разрешено двигаться",
            "в какое время дальнобойщик должен завершить движение"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " допустимое время езды дальнобойщика в сутки: " + PluralRu::pluralify(maxDrivingHours, "час", "часа", "часов") + ", по часовому поясу UTC+0."
            + "\nЕё попросили " + whatDo + " " + conditions + ", в часом поясе UTC" + if (timezoneOffset >= 0) {"+" + String::from_int(timezoneOffset)} else {String::from_int(timezoneOffset)} + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано допустимое время езды дальнобойщика в сутки: " + PluralRu::pluralify(maxDrivingHours, "час", "часа", "часов") + ", по часовому поясу UTC+0."
                + "\nТребуется определить " + conditions + ", в часом поясе UTC" + if (timezoneOffset >= 0) {"+" + String::from_int(timezoneOffset)} else {String::from_int(timezoneOffset)} + ".";
        }

        let desc = sc + " Если известно, что начало его работы было в " + String::from_int(startHour) + ":00."
            + "\n Пример ответа: \"22:00\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала найдём время окончания движения по UTC+0: " + String::from_int(startHour) + ":00 + " + String::from_int(maxDrivingHours) + " = " + String::from_int(endHourUTC) + ":00"
            + "\n Теперь рассчитаем время в UTC" + if (timezoneOffset >= 0) {"+" + String::from_int(timezoneOffset)} else {String::from_int(timezoneOffset)} 
            + ": " + String::from_int(endHourUTC) + ":00" + if (timezoneOffset >= 0) {" + " + String::from_int(timezoneOffset)} else {" - " + String::from_int(-1*timezoneOffset)} + " = " + String::from_int(endHourLocal) + ":00";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(endHourLocal) + ":00"
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/