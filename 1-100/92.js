/*
?Создайте генератор задач, который на входе задает определенное количество фруктов в двух корзинках, затем из одной несколько съедают, в другой некоторые фрукты портятся, также в корзинки могут добавить фрукты. Нужно вычислить итоговое количество фруктов в каждой корзинке и выбрать ту, в которой их больше или меньше.

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
        let b1 = Main::getRandomIntInRange(5, 15);
        let b2 = Main::getRandomIntInRange(5, 15);
        let m1 = Main::getRandomIntInRange(0, b1);
        let m2 = Main::getRandomIntInRange(0, b2);
        let a1 = Main::getRandomIntInRange(0, 15);
        let a2 = Main::getRandomIntInRange(0, 15);
        let more = Main::getRandomIntInRange(0, 1) == 1;
        let ans = [b1-m1+a1, b2-m2+a2];
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "подсчитать количество фруктов в каждой корзинке и определить ту, где их",
            "выяснить итоговое число фруктов в корзинках и найти ту, в которой их",
            "определить, сколько фруктов в каждой корзине, и выбрать ту, где их",
            "рассчитать число фруктов по каждой корзине и выбрать ту, в которой",
            "узнать итоговое количество фруктов в корзинах и выделить ту, где их",
            "посчитать количество фруктов в каждой из корзин и выбрать ту, где их",
            "определить количество фруктов по корзинам и найти ту, в которой их",
            "подсчитать фрукты в корзинках и выбрать корзинку, где их",
            "вычислить количество фруктов в каждой корзине и найти ту, где их",
            "посчитать итоговое число фруктов в корзинах и определить ту, где их"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " две корзины: в первой корзине " + PluralRu::pluralify(b1, "яблоко", "яблока", "яблок") + ", а во второй " + String::from_int(b2) + ". "
            + if (m1 != 0) {"Из первой корзины съели " + PluralRu::pluralify(m1, "яблоко", "яблока", "яблок") + ". "} else {""}
            + if (m2 != 0) {"Во второй корзине испортилось " + PluralRu::pluralify(m2, "яблоко", "яблока", "яблок") + ". "} else {""}
            + if (a1 != 0) {"В первую корзину добавили " + PluralRu::pluralify(a1, "яблоко", "яблока", "яблок") + ". "} else {""}
            + if (a2 != 0) {"Во вторую корзину положили " + PluralRu::pluralify(a2, "яблоко", "яблока", "яблок") + ". "} else {""}
            + "\nЕё попросили " + conditions + " " + if (more) {"больше"} else {"меньше"} + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны две корзины: в первой корзине " + PluralRu::pluralify(b1, "яблоко", "яблока", "яблок") + ", а во второй " + String::from_int(b2) + ". "
                + if (m1 != 0) {"Из первой корзины съели " + PluralRu::pluralify(m1, "яблоко", "яблока", "яблок") + ". "} else {""}
                + if (m2 != 0) {"Во второй корзине испортилось " + PluralRu::pluralify(m2, "яблоко", "яблока", "яблок") + ". "} else {""}
                + if (a1 != 0) {"В первую корзину добавили " + PluralRu::pluralify(a1, "яблоко", "яблока", "яблок") + ". "} else {""}
                + if (a2 != 0) {"Во вторую корзину положили " + PluralRu::pluralify(a2, "яблоко", "яблока", "яблок") + ". "} else {""}
                + "Требуется " + conditions + " " + if (more) {"больше"} else {"меньше"} + ".";
        }

        let desc = sc + " Если количество фруктов в корзине одинаковое, берём первую корзину."
            + "\n Пример вывода, следующий: \"1\" или \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала посчитаем количество яблок в первой корзине: " + String::from_int(b1) + if (m1 != 0) {" - " + String::from_int(m1)} else {""} + if (a1 != 0) {" + " + String::from_int(a1)} else {""} + " = " + String::from_int(ans[0])
            + "\nТеперь посчитаем количество яблок во второй корзине: " + String::from_int(b2) + if (m2 != 0) {" - " + String::from_int(m2)} else {""} + if (a2 != 0) {" + " + String::from_int(a2)} else {""} + " = " + String::from_int(ans[1])
            + "\nТ.к. нам необходима корзина с " + if (more) {"большим"} else {"меньшим"} + " количеством яблок, следовательно ответ: "
            + if (more) {
                if (ans[0] > ans[1]) {"1"} else if (ans[0] == ans[1]) {"1"} else {"2"}
            } else {
                if (ans[0] < ans[1]) {"1"} else if (ans[0] == ans[1]) {"1"} else {"2"}
            }

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: if (more) {
                        if (ans[0] > ans[1]) {"1"} else if (ans[0] == ans[1]) {"1"} else {"2"}
                    } else {
                        if (ans[0] < ans[1]) {"1"} else if (ans[0] == ans[1]) {"1"} else {"2"}
                    }
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/