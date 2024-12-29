/*
?Сделайте генератор пазлов, который будет генерировать геометрическую фигуру, а человек должен ввести её название

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealImprecise;
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
        let f = Main::getRandomIntInRange(2, 10)
        let canvas = Main::getCanvas(f);
        let ans = Main::getName(f);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "выяснить её название и записать в ответ",
            "определить название фигуры и записать в ответ",
            "узнать название фигуры в ответ",
            "выяснить, как она называется, и записать в ответ",
            "название фигуры указать ответ",
            "определить, что это за фигура, и записать её название"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " геометрическая фигура: \n <img canvas>"
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана геометрическая фигура: \n <img canvas>"
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"квадрат\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Исходя из изображения, мы видим что это фигура " + ans + ". \n Следовательно ответ: " + ans;

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
                new RevealImprecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getCanvas(figure: int) -> Canvas {
        let fc = 1;
        let canvas = Canvas::create(100, 100, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        if (figure == 2) {
            Canvas::ellipse(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), 2);
        } else if (figure == 3) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 40, 50, 50, 3, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 4) {        
            Canvas::rect(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), 2);
        } else if (figure == 5) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 46, 50, 45, 5, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 6) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 6, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 7) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 7, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 8) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 8, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 9) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 9, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 10) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 10, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        }
        
        return canvas
    }
    
    function getName(col: int) -> String {
        let str = if (col == 2) {
            "круг"
        } else if (col == 3) {
            "треугольник"
        } else if (col == 4) {
            "квадрат"
        } else if (col == 5) {
            "пятиугольник"
        } else if (col == 6) {
            "шестиугольник"
        } else if (col == 7) {
            "семиугольник"
        } else if (col == 8) {
            "восьмиугольник"
        } else if (col == 9) {
            "девятиугольник"
        } else {
            "десятиугольник"
        }
        
        return str;
    }
}
*/