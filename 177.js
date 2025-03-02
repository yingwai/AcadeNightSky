/*
?Создайте генератор, который будет просить сделать арифметическую операцию (сложить/вычесть/разделить/умножить) две дроби, у которых и числитель и знаменатель будет представлен в виде фигур с разным количеством углов, т.е. значения числителя и знаменателя будут равняться количеству углов в фигурах. Пример того как выглядит дробь: (треугольник)/(пятиугольник), то есть дробь будет как бы означать 3/5. Конкретную дробь в работе не используйте.

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
        let a = Main::createRandomFraction();
        let b = Main::createRandomFraction();
        let canva: List<PuzzleImage> = [];

        for (let i in 0..1) {
            let canvas = Canvas::create(100, 210, Color::rgb(255, 255, 255));
            
            canva.push(
                new PuzzleImage {
                    name: "a",
                    image: Main::getCanvas(canvas, a)
                }
            )
        }

        for (let i in 0..1) {
            let canvas = Canvas::create(100, 210, Color::rgb(255, 255, 255));
            
            canva.push(
                new PuzzleImage {
                    name: "b",
                    image: Main::getCanvas(canvas, b)
                }
            )
        }
        
        let v = ["сложение", "вычетание", "умножение", "деление"];
        let vi = Main::getRandomIntInRange(0, 3);
        let f = [0, 0];
        let ans = "";
        if (vi == 0) {
            f = Main::addFractions(a, b);
            ans = String::join([String::from_int(f[0]/Main::findGcd(f)), String::from_int(f[1]/Main::findGcd(f))], "/")
        } else if (vi == 1) {
            f = Main::subtractFractions(a, b);
            ans = String::join([String::from_int(f[0]/Main::findGcd(f)), String::from_int(f[1]/Main::findGcd(f))], "/")
        } else if (vi == 2) {
            f = Main::multiplyFractions(a, b);
            ans = String::join([String::from_int(f[0]/Main::findGcd(f)), String::from_int(f[1]/Main::findGcd(f))], "/")
        } else if (vi == 3) {
            f = Main::divideFractions(a, b);
            ans = String::join([String::from_int(f[0]/Main::findGcd(f)), String::from_int(f[1]/Main::findGcd(f))], "/")
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сделать арифметическую операцию",
            "выполнить математическую операцию",
            "произвести арифметическое вычисление",
            "выполнить нужную арифметическую операцию",
            "осуществить арифметическое вычисление",
            "выполнить расчет с помощью арифметической операции"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " две обыкновенные дроби, у которых и числитель, и знаменатель представлен в виде фигур с разным количеством углов, т.е. значения числителя и знаменателя будут равняться количеству углов фигур: \n<img a> и <img b>."
            + "\nЕё попросили " + conditions + ": " + v[vi] + " двух дробей.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны две обыкновенные дроби, у которых и числитель, и знаменатель представлен в виде фигур с разным количеством углов, т.е. значения числителя и знаменателя будут равняться количеству углов фигур: \n<img a> и <img b>."
                + "\nТребуется " + conditions + ": " + v[vi] + " двух дробей.";
        }

        let desc = sc + " В ответ записать сокращённую дробь если это возможно, иначе дробь без сокращения."
            + "\n Пример ответа: \"19/24\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала определим какие дроби составляют фигуры: \n1. " + String::from_int(a[0]) + "/" + String::from_int(a[1]) + "\n 2. " + String::from_int(b[0]) + "/" + String::from_int(b[1]) + "\n Определим чему равняется выражение: \n"
            + String::from_int(a[0]) + "/" + String::from_int(a[1]) + " " + if (vi == 0) {"+"} else if (vi == 1) {"-"} else if (vi == 2) {"*"} else {"÷"} + " " + String::from_int(b[0]) + "/" + String::from_int(b[1]) + " = "
            + String::join([String::from_int(f[0]), String::from_int(f[1])], "/") + "\n Чтобы сократить дробь нужно разделить числитель и знаменатель на наибольший общий делитель: на " + String::from_int(Main::findGcd(f))
            + "\n\\(\\dfrac{" + String::from_int(f[0]) + "\\div" + String::from_int(Main::findGcd(f)) + "}{" + String::from_int(f[1]) + "\\div" + String::from_int(Main::findGcd(f)) + "}\\) = \\(\\dfrac{" + String::from_int(f[0]/Main::findGcd(f)) + "}{" + String::from_int(f[1]/Main::findGcd(f)) + "}\\)";
            
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
    function createRandomFraction() -> List<int> {
        let numerator = Main::getRandomIntInRange(3, 8);
        let denominator = Main::getRandomIntInRange(3, 8);

        return [numerator, denominator];
    }
    function addFractions(a: List<int>, b: List<int>) -> List<int> {
      let numerator = (a[0]*b[1]) + (b[0]*a[1]);
      let denominator = a[1]*b[1];
        
      return [numerator, denominator];
    }
    function subtractFractions(a: List<int>, b: List<int>) -> List<int> {
        let newNum1 = a[0] * b[1];
        let newNum2 = b[0] * a[1];
        let resultNum = newNum1 - newNum2;

        return [resultNum, a[1] * b[1]];
    }
    function multiplyFractions(a: List<int>, b: List<int>) -> List<int> {
        return [a[0] * b[0], a[1] * b[1]];
    }
    function divideFractions(a: List<int>, b: List<int>) -> List<int> {
        return [a[0] * b[1], a[1] * b[0]];
    }
    function findGcd(arr: List<int>) -> int {
        let gcd = arr[0];
        for (let i in arr) {
            let x = i; 
            let y = gcd;
            while (y > 0) {
                let t = y;
                y = x % y;
                x = t;
            }
            gcd = x;
        }
        return gcd;
    }
    function getCanvas(canvas: Canvas, figure: List<int>) -> Canvas {        
        let points: List<Point2D> = [];
        
        for (let index in 0..figure.length()) {
            if (figure[index] == 3) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 40, if (index==0) {50} else {160}, 50, 3, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            } else if (figure[index] == 4) {        
                Canvas::rect(canvas, 10, if (index==0) {10} else {120}, 80, 80, Color::rgb(0, 0, 0), 2);
            } else if (figure[index] == 5) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 46, if (index==0) {50} else {160}, 45, 5, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            } else if (figure[index] == 6) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, if (index==0) {50} else {160}, 45, 6, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            } else if (figure[index] == 7) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, if (index==0) {50} else {160}, 45, 7, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            } else if (figure[index] == 8) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, if (index==0) {50} else {160}, 45, 8, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            } else if (figure[index] == 9) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, if (index==0) {50} else {160}, 45, 9, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            } else if (figure[index] == 10) {
                community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, if (index==0) {50} else {160}, 45, 10, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            }
            
            if (index == 0) {Canvas::line(canvas, 0, 110, 100, 110, Color::rgb(0, 0, 0), 2)};
        }
        
        
        return canvas
    }
}
*/