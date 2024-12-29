/*
?Создайте генератор, в котором будет создаваться поле из клеточек. На данном поле случайным образом будет образовываться прямоугольник (бассейн). На выходе нужно будет заполнить его голубыми клеточками (его внутреннюю часть). Внешняя часть (то есть контур бассейна) - это черные клеточки.

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
        let rows = Main::getRandomIntInRange(4, 20);
        let cols = Main::getRandomIntInRange(4, 20);
        let canvas = Canvas::create(cols * 25, rows * 25, Color::rgb(255, 255, 255));

        for (let i in 0..rows) {
            for (let j in 0..cols) {
                if (i == 0 || i == rows - 1 || j == 0 || j == cols - 1) {
                    Canvas::fillRect(canvas, 0 + 25 * j, 0 + 25 * i, 25, 25, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
                } else {
                    Canvas::rect(canvas, 0 + 25 * j, 0 + 25 * i, 25, 25, Color::rgb(0, 0, 0), 2);
                }
            }
        }
        
        let ans = (rows - 2) * (cols - 2)
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "количество клеточек которые нужно заполнить голубыми клеточками (т.е. его внутреннюю часть)",
            "количество клеточек, которые нужно закрасить голубым (т.е. его внутреннюю часть)",
            "общее число клеточек, заполняемых голубым цветом (т.е. его внутреннюю часть)",
            "число клеточек, предназначенных для заполнения голубыми клеточками внутри",
            "количество голубых клеточек, которые займут внутреннюю часть фигуры",
            "сколько клеточек необходимо заполнить голубым (т.е. его внутреннюю часть)"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " бассейн внешняя часть которого (т.е. контур бассейна) - это черные клеточки."
            + "\nЕё попросили " + whatDo + " " + conditions + ". \n <img canvas>";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан бассейн внешняя часть которого (т.е. контур бассейна) - это черные клеточки."
                + "Требуется определить " + conditions + ". \n <img canvas>";
        }

        let desc = sc 
            + "\nОтвет: <reveal ans>Ответ</reveal>";

        let expl = "Посчитаем количество клеточек по горизонтали внутри бассейна (т.е. незакрашенные клеточки): " + String::from_int(cols - 2)
            + "\nПосчитаем количество клеточек по вертикали внутри бассейна (т.е. незакрашенные клеточки): " + String::from_int(rows - 2)
            + "\nНайдём общее количество клеточек: " + String::from_int(cols - 2) + " * " + String::from_int(rows - 2) + " = " + String::from_int(ans);

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