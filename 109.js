/*
?Создайте генератор паззлов, который выводит на картинку некое количество фигур и линий. Человеку необходимо найти фигуру или линию по нескольким критериям. Например:

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
        let figure: List<int> = [];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 9)) {
            figure.push(Main::getRandomIntInRange(0, 10));
            
            canva.push(
                new PuzzleImage {
                    name: "f_" + String::from_int(i),
                    image: Main::getCanvas(figure[i], i+1)
                }
            )
        }
        
        let var = ["фигуру", "линию"][Main::getRandomIntInRange(0, 1)];
        let left = Main::getRandomIntInRange(0, 1) == 1;
        let place = Main::getRandomIntInRange(1, canva.length()-2);
        
        let ans = "Такой " + if (var == "фигуру") {"фигуры"} else {"линии"} + " нет";
        for (let i in figure) {
            if (var == "фигуру" && left && figure[place-1] >= 2) {
                ans = Main::getName(figure[place-1], 1);
            } else if (var == "фигуру" && !left && figure[place+1] >= 2) {
                ans = Main::getName(figure[place+1], 1);
            } else if (var == "линию" && left && figure[place-1] < 2) {
                ans = Main::getName(figure[place-1], 1);
            } else if (var == "линию" && !left && figure[place+1] < 2) {
                ans = Main::getName(figure[place+1], 1);
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "ряд фигур и линий с номером под ними",
            "последовательность фигур и линий, пронумерованных снизу",
            "фигуры и линии, выстроенные в ряд, с номерами под каждым из них",
            "ряд фигур и линий с подписями номеров под ними",
            "ряд из фигур и линий, под каждой из которых указан номер",
            "линии и фигуры, расположенные в одном ряду с номерами под ними"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": \n";
        for (let i in canva) {
            sc += "<img " + i.name + ">"
        }
        sc += "\nЕё попросили " + whatDo + " " + var + if (left) {" слева"} else {" справа"} + " от " + Main::getName(figure[place], 0) + " под номером " + String::from_int(place + 1) + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditions + ": \n";
            for (let i in canva) {
                sc += "<img " + i.name + ">"
            }
            sc += "\nТребуется определить " + var + if (left) {" слева"} else {" справа"} + " от " + Main::getName(figure[place], 0) + " под номером " + String::from_int(place + 1) + ".";
        }

        let desc = sc + " Если такой фигуры/линии нет, то написать об этом в ответ: \"Такой фигуры нет\" или \"Такой линии нет\"."
            + "\n Пример вывода, следующий: \"прямая линия\", \"треугольник\" и т.д."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = if (left) {"Слева"} else {"Справа"} + " от " + Main::getName(figure[place], 0) + " под номером " + String::from_int(place + 1) + " находится ";
        if (left) {
            expl += Main::getName(figure[place-1], 1);
        } else {
            expl += Main::getName(figure[place+1], 1);
        }
        expl += ". \n Следовательно ответ: " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
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
    
    function getName(col: int, skl: int) -> String {
        let str = if (col == 1) {
            ["изломаной линии", "изломаная линия"][skl]
        } else if (col == 2) {
            ["круга", "круг"][skl]
        } else if (col == 3) {
            ["треугольника", "треугольник"][skl]
        } else if (col == 4) {
            ["квадрата", "квадрат"][skl]
        } else if (col == 5) {
            ["пятиугольника", "пятиугольник"][skl]
        } else if (col == 6) {
            ["шестиугольника", "шестиугольник"][skl]
        } else if (col == 7) {
            ["семиугольника", "семиугольник"][skl]
        } else if (col == 8) {
            ["восьмиугольника", "восьмиугольник"][skl]
        } else if (col == 9) {
            ["девятиугольника", "девятиугольник"][skl]
        } else if (col == 10) {
            ["десятиугольника", "десятиугольник"][skl]
        } else {
            ["прямой линии", "прямая линия"][skl]
        }
        
        return str;
    }
    
    function getCanvas(figure: int, ind: int) -> Canvas {
        let fc = 1;
        let canvas = Canvas::create(100, 120, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        if (figure == 0) {
            Canvas::line(canvas, 10, 50, 90, 50, Color::rgb(0, 0, 0), 2);
        } else if (figure == 1) {
            Canvas::line(canvas, 10, 40, 25, 60, Color::rgb(0, 0, 0), 2);
            Canvas::line(canvas, 25, 60, 40, 40, Color::rgb(0, 0, 0), 2);
            Canvas::line(canvas, 40, 40, 55, 60, Color::rgb(0, 0, 0), 2);
            Canvas::line(canvas, 55, 60, 70, 40, Color::rgb(0, 0, 0), 2);
            Canvas::line(canvas, 70, 40, 85, 60, Color::rgb(0, 0, 0), 2);
        } else if (figure == 2) {
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
        
        Canvas::text(canvas, 50, 116, String::from_int(ind), 18, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        return canvas
    }
}
*/