/*
?Сделайте генератор пазлов, который на входе показывает два числа: общее количество жителей в доме и общее число квартир в доме, и просит посчитать сколько человек в среднем проживает в каждой квартире.

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
        let people = Main::getRandomIntInRange(50, 500);
        let home = Main::getRandomIntInRange(10, 20);

        let ans = people / home;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько человек в среднем проживает в каждой квартире",
            "среднее количество людей в каждой квартире",
            "сколько в среднем человек живет в одной квартире",
            "какое среднее количество жильцов в каждой квартире",
            "сколько человек приходится на одну квартиру в среднем",
            "сколько человек в среднем живет в одной квартире",
            "какое количество людей в среднем проживает в квартире",
            "среднее количество человек, проживающих в квартире",
            "сколько в среднем человек обитает в квартире",
            "среднее число людей, проживающих в одной квартире",
            "какое среднее количество человек на одну квартиру"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дом в котором " + PluralRu::pluralify(home, "квартира", "квартиры", "квартир") + " и живёт " + PluralRu::pluralify(people, "человек", "человека", "человек") + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан дом в котором " + PluralRu::pluralify(home, "квартира", "квартиры", "квартир") + " и живёт " + PluralRu::pluralify(people, "человек", "человека", "человек") + ". "
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " В ответ запишите целочисленное деление."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём среднее количество человек на одну квартиру: " + String::from_int(people) + "/" + String::from_int(home) + " = " + String::from_int(ans)
            + "\n Следовательно ответ: " + String::from_int(ans);

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