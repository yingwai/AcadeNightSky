/*
?Создайте генератор, который выведет несколько пересекающихся между собой фигур. Человеку нужно будет указать суммарное количество углов фигур, которые пересекаются с треугольником.

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
        let fig: List<int> = [];
        for (let i in 0..Main::getRandomIntInRange(3, 7)) {
            fig.push(Main::getRandomIntInRange(4, 10))
        }
        
        let index = Main::getRandomIntInRange(1, fig.length()-2);
        fig[index] = 3;
        
        let ans = fig[index-1] + fig[index+1];
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "суммарное количество углов фигур, которые пересекаются с треугольником",
            "общее количество углов фигур, пересекающихся с треугольником",
            "сумму углов фигур, пересекающих треугольник",
            "общее количество углов фигур, которые пересекаются с треугольником",
            "сумму углов всех фигур, пересекающих треугольник"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько пересекающихся между собой фигур: \n <img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько пересекающихся между собой фигур: \n <img canvas>"
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрев рисунок, определим что слева от треуголника находится "
            + String::from_int(fig[index-1]) + " угольник, а справа "
            + String::from_int(fig[index+1]) + " угольник. \n Найдём сумму их углов и запишем в ответ: " 
            + String::from_int(fig[index-1]) + " + " + String::from_int(fig[index+1]) + " = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: Main::getCanvas(fig)
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
    
    function getCanvas(figure: List<int>) -> Canvas {
        let canvas = Canvas::create(100*figure.length(), 100, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        for (let i in 0..figure.length()) {
            if (figure[i] == 3) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 50, 3, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 4) {        
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 50, 4, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 5) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 45, 5, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 6) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 45, 6, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 7) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 45, 7, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 8) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 45, 8, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 9) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 45, 9, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            } else if (figure[i] == 10) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50 + (50 * i), 50, 45, 10, Color::rgb(0, 0, 0), 2, Color::rgba(255, 255, 255, 0.0));
            }
        }
        
        return canvas
    }
}
*/