/*
?Создайте генератор паззлов который будет вычислять в какое время происходит восход солнца через определенное количество дней, зная, что каждый день оно восходит позже на 50 секунд, чем в прошлый день.

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
        let time = [Main::getRandomIntInRange(3, 10), Main::getRandomIntInRange(0, 59), Main::getRandomIntInRange(0, 59)];
        let timeS = if (time[0] >= 10) {String::from_int(time[0])} else {"0"+String::from_int(time[0])} + ":" + if (time[1] >= 10) {String::from_int(time[1])} else {"0"+String::from_int(time[1])} + ":" + if (time[2] >= 10) {String::from_int(time[2])} else {"0"+String::from_int(time[2])}
        let startSun = time[0] * 3600 + time[1] * 60 + time[2];

        let days = Main::getRandomIntInRange(1, 25);
        let diff = Main::getRandomIntInRange(10, 60);
        
        let sunDiff = days * diff;
        let totalSun = startSun + sunDiff;

        let finalHours = (totalSun / 3600) % 24;
        let finalMinutes = (totalSun % 3600) / 60;
        let finalSeconds = totalSun % 60;
        
        let ans = if (finalHours >= 10) {String::from_int(finalHours)} else {"0"+String::from_int(finalHours)} + ":" + if (finalMinutes >= 10) {String::from_int(finalMinutes)} else {"0"+String::from_int(finalMinutes)} + ":" + if (finalSeconds >= 10) {String::from_int(finalSeconds)} else {"0"+String::from_int(finalSeconds)}
      
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "в какое время происходит восход солнца через " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "в какое время наступит восход солнца через " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "время восхода солнца через " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "когда начнется восход солнца после " + PluralRu::pluralify(days, "дня", "дней", "дней"),
            "время восхода солнца, если пройдет " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "какое время будет на момент восхода солнца через " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "когда произойдет восход солнца, учитывая что пройдёт " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "время, когда произойдет восход солнца через " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "когда наступит восход солнца через " + PluralRu::pluralify(days, "день", "дня", "дней"),
            "когда наступит восход солнца, если пройдет " + PluralRu::pluralify(days, "день", "дня", "дней")
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " время в которое происходит восход солнца: " + timeS + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ", зная, что каждый день оно восходит позже на " + PluralRu::pluralify(diff, "секунду", "секунды", "секунд") + ", чем в прошлый день.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано время в которое происходит восход солнца: " + timeS + ". "
                + "Требуется определить " + conditions + ", зная, что каждый день оно восходит позже на " + PluralRu::pluralify(diff, "секунду", "секунды", "секунд") + ", чем в прошлый день.";
        }

        let desc = sc 
            + "\n Пример ответа: \"10:22:09\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала переведём имеющеся время в секунды: " + String::from_int(time[0]) + " * 3600 + " + String::from_int(time[1]) + " * 60 + " + String::from_int(time[2]) + " = " + String::from_int(startSun)
            + "\nВыясним на на сколько секунд солнце встаёт позже: " + String::from_int(days) + " * " + String::from_int(diff) + " = " + String::from_int(sunDiff)
            + "\nОпределим время в которое встанет солце в секундах: " + String::from_int(startSun) + " + " + String::from_int(sunDiff) + " = " + String::from_int(totalSun)
            + "\nПереведём в нужный вид: " + String::from_int(totalSun) + " = " + ans;

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