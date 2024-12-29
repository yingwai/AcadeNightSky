//?Сделайте генератор паззлов, который рисует дом, что состоит из различных геометрических фигур. Нужно указать какая геометрическая фигура отвечает за крышу.




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
        let fig = Main::getRandomIntInRange(0, 2);
        let canvas = Main::getHouse(fig);
        
        let ans = ["прямоугольник", "треугольник", "трапеция"][fig]
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какая геометрическая фигура отвечает за крышу",
            "какая геометрическая фигура представляет крышу",
            "какая фигура используется для изображения крыши",
            "какая геометрическая форма является крышей",
            "какая фигура соответствует крыше",
            "какая геометрическая фигура выполняет роль крыши"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дом, что состоит из различных геометрических фигур: \n <img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан дом, что состоит из различных геометрических фигур: \n <img canvas>" 
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"треугольник\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "На листике изображён дом состоящий из двух фигур: квадрат и " + ans + "\n Т.к. квадрат является основанием дома, следовательно ответ: " + ans;

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
                    answer: ans
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getHouse(figure: int) -> Canvas {
        let fc = 2;
        let canvas = Canvas::create(100*fc, 150*fc, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        if (figure == 1) {
            points = [
                new Point2D {x: 10*fc, y: 50*fc}, 
                new Point2D {x: 90*fc, y: 50*fc},
                new Point2D {x: 50*fc, y: 10*fc},
                new Point2D {x: 10*fc, y: 50*fc}
            ]
                
            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
            
        } else if (figure == 2) {        
            points = [
                new Point2D {x: 10*fc, y: 50*fc},
                new Point2D {x: 30*fc, y: 10*fc},
                new Point2D {x: 70*fc, y: 10*fc},
                new Point2D {x: 90*fc, y: 50*fc},
                new Point2D {x: 10*fc, y: 50*fc}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else {
            Canvas::rect(canvas, 15, 75, 175, 25, Color::rgb(0,0,0), 2)
        }
        
        Canvas::rect(canvas, 50, 100, 100, 100, Color::rgb(0,0,0), 2)
        
        return canvas;
    }
}
*/