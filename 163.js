/*
?Сделайте генератор паззлов, в котором будут даны 2 человека и их текущий вес, они сидят на диете, у одного, к примеру, минус 500 грамм за день, а у другого полтора килограмма за 2 дня. Решающему нужно определить кто из них похудеет больше/меньше за какой-либо интервал времени.

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
        let weight1 = Main::getRandomIntInRange(50, 100);
        let weight2 = Main::getRandomIntInRange(50, 100);
        
        let loss1 = Main::getRandomIntInRange(200, 1000);
        let days1 = Main::getRandomIntInRange(1, 7);

        let loss2 = Main::getRandomIntInRange(200, 1000);
        let days2 = Main::getRandomIntInRange(1, 7);
        
        let days = Main::getRandomIntInRange(2, 7);

        let total1 = loss1 / days1 * days;
        let total2 = loss2 / days2 * days;
        
        let more = Main::getRandomIntInRange(0, 1) == 1;
        
        let ans = if (more) {
            if (total1 > total2) {"Первый человек"} else {"Второй человек"}
        } else {
            if (total1 < total2) {"Первый человек"} else {"Второй человек"}
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "2 человека и их текущий вес, они сидят на диете",
            "2 человека и их вес, они сидят на диете",
            "два человека с текущим весом, которые находятся на диете",
            "2 человека с разным весом, следящие за диетой",
            "два человека с текущим весом, которые соблюдают диету",
            "два человека и их веса, они на диетическом питании",
            "2 человека, их вес и соблюдение диеты",
            "два человека, чей вес регулируется диетой",
            "2 человека, их вес и диетический режим",
            "два человека, которые сидят на диете и их текущий вес"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ", у одного " + String::from_int(weight1) + " кг и минус " 
            + PluralRu::pluralify(loss1, "грамм", "грамма", "грамм") + " за " + PluralRu::pluralify(days1, "день", "дня", "дней") + ", а у другого " + String::from_int(weight2) + " кг и минус "
            + PluralRu::pluralify(loss2, "грамм", "грамма", "грамм") + " за " + PluralRu::pluralify(days2, "день", "дня", "дней") + ". "
            + "\nЕё попросили " + whatDo + " кто из них похудеет " + if (more) {"больше"} else {"меньше"} + " за " + PluralRu::pluralify(days, "день", "дня", "дней") + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны " + conditions + ", у одного " + String::from_int(weight1) + " кг и минус " 
                + PluralRu::pluralify(loss1, "грамм", "грамма", "грамм") + " за " + PluralRu::pluralify(days1, "день", "дня", "дней") + ", а у другого " + String::from_int(weight2) + " кг и минус "
                + PluralRu::pluralify(loss2, "грамм", "грамма", "грамм") + " за " + PluralRu::pluralify(days2, "день", "дня", "дней") + ". "
                + "\nТребуется определить кто из них похудеет " + if (more) {"больше"} else {"меньше"} + " за " + PluralRu::pluralify(days, "день", "дня", "дней") + ".";
        }

        let desc = sc + " Расчёты округлять до целого числа."
            + "\n Пример ответа: \"Первый человек\" или \"Второй человек\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы понять кто " + if (more) {"больше"} else {"меньше"} + " похудеет за " + PluralRu::pluralify(days, "день", "дня", "дней") + ", рассчитаем финальный вес который они скинут за это время: \n 1) "
            + "\\(\\dfrac{" + String::from_int(loss1) + "}{" + String::from_int(days1) + "} * " + String::from_int(days) + " = " + String::from_int(total1) + "\\) \n 2) "
            + "\\(\\dfrac{" + String::from_int(loss2) + "}{" + String::from_int(days2) + "} * " + String::from_int(days) + " = " + String::from_int(total2) + "\\) \n Т.к. " 
            + String::from_int(total1) + " " + if (more) {
                if (total1 > total2) {">"} else {"<"}
            } else {
                if (total1 < total2) {"<"} else {">"}
            } + " " + String::from_int(total2) + ", следовательно ответ: " + ans;

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