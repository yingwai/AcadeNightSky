/*
?Сделайте генератор заданий, который на входе показывает различные фигуры расположенные в ряд. Нужно переместить некоторые фигуры местами между друг другом, что бы получилась одинаковая последовательность, либо вставить пропущенные фигуры между остальными, что бы так же получилась одинаковая последовательность.

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
        
        for (let i in 0..3) {
            figure.push(Main::getRandomIntInRange(2, 10));
            
            canva.push(
                new PuzzleImage {
                    name: "f_" + String::from_int(i),
                    image: Main::getCanvas(figure[i], i+1)
                }
            )
        }
        
        let len = [6, 12, 15][Main::getRandomIntInRange(0, 2)];
        let index = Main::getRandomIntInRange(4, len-2);
        let ans = Main::getName(figure[index%3], 1);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "и записать название пропущенной фигуры между остальными, что бы так же получилась одинаковая последовательность",
            "и записать название пропущенной фигуры между остальными, чтобы сохранилась одинаковая последовательность",
            "и вписать название пропущенной фигуры между остальными, чтобы последовательность осталась одинаковой",
            "и указать название пропущенной фигуры между остальными, чтобы последовательность была одинаковой",
            "и добавить название пропущенной фигуры между остальными, чтобы сохранить одинаковую последовательность",
            "и вставить название пропущенной фигуры между остальными, чтобы последовательность оставалась одинаковой"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд фигур, где одна из фигур пропущена: \n";
        for (let i in 0..len) {
            if (i != index) {
                sc += "<img f_" + String::from_int(i%3) + ">";
            }
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд фигур, где одна из фигур пропущена: \n";
            for (let i in 0..len) {
                if (i != index) {
                    sc += "<img f_" + String::from_int(i%3) + ">";
                }
            }
            sc += "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Если изветсно, что первые 3 фигуры (слева направо) являются правильной последовательностью."
            + "\n Пример вывода, следующий: \"квадрат\", \"треугольник\" и т.д."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы определить пропущенную фигуры, просмотрим весь ряд: \n";
        for (let i in 0..len) {
            if (i < index) {
                expl += String::from_int(i+1) + " - " + Main::getName(figure[i%3], 1) + "\n";
            } else if (i > index) {
                expl += String::from_int(i) + " - " + Main::getName(figure[i%3], 1) + "\n";
            }
        }
        expl += "\n Из списка мы видем, что последовательность нарушается между " + String::from_int(index) + " и " + String::from_int(index+1) + " фигурой. Следовательно ответ: " + ans;

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
        let str = "";
        if (col == 2) {
            str = ["круга", "круг"][skl]
        } else if (col == 3) {
            str = ["треугольника", "треугольник"][skl]
        } else if (col == 4) {
            str = ["квадрата", "квадрат"][skl]
        } else if (col == 5) {
            str = ["пятиугольника", "пятиугольник"][skl]
        } else if (col == 6) {
            str = ["шестиугольника", "шестиугольник"][skl]
        } else if (col == 7) {
            str = ["семиугольника", "семиугольник"][skl]
        } else if (col == 8) {
            str = ["восьмиугольника", "восьмиугольник"][skl]
        } else if (col == 9) {
            str = ["девятиугольника", "девятиугольник"][skl]
        } else if (col == 10) {
            str = ["десятиугольника", "десятиугольник"][skl]
        }
        
        return str;
    }
    
    function getCanvas(figure: int, ind: int) -> Canvas {
        let fc = 1;
        let canvas = Canvas::create(100, 120, Color::rgb(255, 255, 255));
        
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
}
*/