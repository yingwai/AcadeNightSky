/*
?Сделайте генератор, который будет выводить название какого-либо и его любое число и 2 фазы луны. Задача проверяющего выбрать к какой фазе луны подходит данное число. (к примеру, 15 мая - фаза - полнолуние либо новолуние).

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
import community::near::cfuser::ah04919::abs::AbsInt;

class Main {
    function gen_puzzle() -> Puzzle {
        let date = DateTime::createDate(Main::getRandomIntInRange(1, 31), Main::getRandomIntInRange(1, 12), 2024);
        while (!DateTime::isValidDate(date)) {
            date = DateTime::createDate(Main::getRandomIntInRange(1, 31), Main::getRandomIntInRange(1, 12), 2024);
        }
        
        let strDate = String::from_int(String::to_int(DateTime::toDateString(date).split(".")[0]))
            + " " + ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"][String::to_int(DateTime::toDateString(date).split(".")[1])-1] 
            + " " + DateTime::toDateString(date).split(".")[2];
        
        let newMoon = DateTime::createDate(11, 1, 2024);
        
        let daysSinceNewMoon = DateTime::daysBetween(newMoon, date) % 29;
        let isCloserToNewMoon = daysSinceNewMoon as float < 29.0/2.0;

        let ans = if (isCloserToNewMoon) {"Новолуние"} else {"Полнолуние"}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "к какой фазе луны подходит данное число: к \"Новолуние\" или \"Полнолуние\"",
            "какая фаза луны соответствует данному числу: \"Новолуние\" или \"Полнолуние\"",
            "к какой фазе луны относить это значение: \"Новолуние\" или \"Полнолуние\"",
            "эта дата относится к какой фазе луны: \"Новолуние\" или \"Полнолуние\"",
            "с какой фазой луны связано это число: \"Новолуние\" или \"Полнолуние\"",
            "к какой фазе луны относится это число: \"Новолуние\" или \"Полнолуние\"",
            "какая фаза луны соответствует числу: \"Новолуние\" или \"Полнолуние\"",
            "к какой фазе луны нужно отнести это число: \"Новолуние\" или \"Полнолуние\"",
            "с какой фазой связана эта дата: \"Новолуние\" или \"Полнолуние\"",
            "какая фаза луны соответствует дате: \"Новолуние\" или \"Полнолуние\"",
            "к какой фазе луны относится данная дата: \"Новолуние\" или \"Полнолуние\""
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дата: " + strDate + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ", если известно, что цикл луны составляет 29 дней и первое новолуние в году будет 11.01.2024. Т.к. нужно выбрать только из двух вариантов, выбираем тот, который ближе находится к дню новолуния или полнолуния.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана дата: " + strDate + ". "
                + "\nТребуется определить " + conditions + ", если известно, что цикл луны составляет 29 дней и первое новолуние в году будет 11.01.2024. Т.к. нужно выбрать только из двух вариантов, выбираем тот, который ближе находится к дню новолуния или полнолуния.";
        }

        let desc = sc 
            + "\n Пример ответа: \"Новолуние\" или \"Полнолуние\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Используя цикл луны, вычислим сколько дней прошло после новолуния: "
            + "(11.01.2024 - " + DateTime::toDateString(date) + ") % 29 = " + String::from_int(daysSinceNewMoon) + "\n Теперь определим к чему ближе дата, к новолунию или к полнолунию: \n"
            + String::from_int(daysSinceNewMoon) + " < 29/2: Т.к. " 
            + if (isCloserToNewMoon) {String::from_int(daysSinceNewMoon) + " меньше, следовательно дата ближе к новолунию."} else {String::from_int(daysSinceNewMoon) + " больше, следовательно дата ближе к полнолунию."}
            + "\n Следовательно ответ: " + ans

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
}
*/