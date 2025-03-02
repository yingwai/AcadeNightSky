/*
?Создайте генератор, который выводит на экран такую линию, как луч и несколько точек. Человек должен указать числом, через сколько точек можно продлить луч.

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
        let canvas = Canvas::create(1000, 100, Color::rgb(255, 255, 255));
        Canvas::line(canvas, 12, 50, 100, 50, Color::rgb(255,0,0), 3);
        Canvas::fillEllipse(canvas, 10, 46, 8, 8, Color::rgb(0,0,0), Color::rgb(255,255,255), 2);
        
        let len = Main::getRandomIntInRange(2, 10);
        for (let i in 0..len) {
            Canvas::fillEllipse(canvas, 120 + (20 * i), 46, 8, 8, Color::rgb(0,0,0), Color::rgb(255,255,255), 2);
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "через сколько точек можно продлить луч",
            "сколько точек находится на пути продления луча",
            "через сколько точек пройдет продленный луч",
            "на сколько точек можно продолжить направление луча",
            "через сколько точек пройдет продолжение луча"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " луч и несколько точек: \n <img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан луч и несколько точек: \n <img canvas>"
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Ответ дать целым числом."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посмотрев на изображение, мы увидем " + community::near::spensa2::plural::PluralRu::pluralify(len+1, "точку", "точки", "точек")
            + ". \n Из одной точки начинается луч, следовательно луч сможет пройти ещё через " + community::near::spensa2::plural::PluralRu::pluralify(len, "точку", "точки", "точек");

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
                    answer: String::from_int(len)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/