/*
?Сделайте генератор пазлов, который будет генерировать какую-либо сторону кубиков, а человек должен определить на сколько ячеек вперед он переместиться в бродилке, если ему выпадет данный кубик.

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
        let ans = Main::getRandomIntInRange(1, 6);
        let canvas = Main::getCube(ans);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "на сколько ячеек вперед переместиться игрок в бродилке, если ему выпадет этот кубик",
            "сколько клеток вперед пройдет игрок в бродилке, если выпадет этот кубик",
            "на какое количество ячеек вперед двинется игрок, если выпадет это значение на кубике",
            "на сколько клеток продвинется игрок в бродилке при выпадении этого кубика",
            "сколько шагов вперед сделает игрок в игре, если на кубике выпадет это число",
            "на сколько позиций вперед переместится игрок, если выпадет это число на кубике",
            "на какое количество клеток вперед передвинется игрок в бродилке с этим выпадением на кубике",
            "на сколько ячеек продвинется игрок по полю, если выпадет это значение кубика",
            "сколько ячеек вперед пройдет игрок, если выпадет это число на игральном кубике",
            "на какое количество клеток вперед сдвинется игрок в бродилке при этом результате на кубике",
            "на сколько клеток вперед продвинется игрок, если на кубике выпадет указанное число"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " кубик с случайной стороной кубика: \n<img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан кубик с случайной стороной кубика: \n<img canvas>"
                + "\n Требуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"4\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Т.к. на кубике выпало " + String::from_int(ans) + ", игрок переместиться на " + String::from_int(ans) + " " + Main::declOfNum(ans, ["клетку","клетки","клеток"]);

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
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    function getCube(num: int) -> Canvas {
        let sizeX = 50;
        let sizeY = 50;
        
        let canvas = Canvas::create(sizeX, sizeY, Color::rgb(255, 255, 255));;
        
        let posX = 5;
        let posY = 5;
        
        Canvas::fillRect(canvas, posX, posY, 40, 40, Color::rgb(0, 0, 0), Color::rgb(255, 255, 255), 2);

        if (num == 1) {
            Canvas::fillEllipse(canvas, posX + 18, posY + 18, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        }
        else if (num == 2) {
            Canvas::fillEllipse(canvas, posX + 8, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        }
        else if (num == 3) {
            Canvas::fillEllipse(canvas, posX + 8, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 18, posY + 18, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        }
        else if (num == 4) {
            Canvas::fillEllipse(canvas, posX + 8, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 8, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        }
        else if (num == 5) {
            Canvas::fillEllipse(canvas, posX + 8, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 18, posY + 18, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 8, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        }
        else if (num == 6) {
            Canvas::fillEllipse(canvas, posX + 8, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 8, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 8, posY + 18, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 18, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 8, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
            Canvas::fillEllipse(canvas, posX + 28, posY + 28, 5, 5, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        }
        
        return canvas;
    }
}
*/