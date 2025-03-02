/*
?Создайте генератор паззлов, который будет рисовать геометрическую фигуру (блюдо). В задании будет требоваться разделить блюдо на указанное количество людей поровну и указать сколько разрезов необходимо для этого сделать.

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
        let people = Main::getRandomIntInRange(2, 10);
        let ans = if (people % 2 == 0) {people/2} else {people};
        
        let canvas = Canvas::create(150, 150, Color::rgb(255, 255, 255));
        Canvas::sprite(canvas, 0, 0, String::from_int(people))
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
        "сколько разрезов было сделано для",
        "сколько разрезов потребовалось для",
        "количество разрезов, сделанных для разделения пиццы на",
        "сколько разрезов выполнели для",
        "сколько разрезов было сделано для",
        "сколько разрезов потребовалось для"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " пицца в виде геометрической фигуры с линиями разрезов на " + PluralRu::pluralify(people, "человека", "человек", "человек") + " поровну: \n<img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + " " + PluralRu::pluralify(people, "человека", "человек", "человек") + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана пицца в виде геометрической фигуры с линиями разрезов на " + PluralRu::pluralify(people, "человека", "человек", "человек") + " поровну: \n<img canvas>"
                + "\nТребуется определить " + conditions + " " + PluralRu::pluralify(people, "человека", "человек", "человек") + ".";
        }

        let desc = sc
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Т.к. пиццу необходимо разделить на " + if (people % 2 == 0) {"чётное"} else {"нечётное"} + " количество человек, " + if (people % 2 == 0) {"то делим количество человек на 2."} else {"то столько же разрезов и сделают."}
            + "\n Следовательно ответ: " + if (people % 2 == 0) {String::from_int(people) + "/2 = " + String::from_int(ans)} else {String::from_int(ans)};

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