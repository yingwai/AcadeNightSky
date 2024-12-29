/*
?Создайте генератор паззлов, который будет рисовать шар (возможно нарисовать в форме круга) в пространстве в верхней части изображения. Также генератор будет рисовать множество линий под заданным шаром. Генератор будет просить указать на линию, которую первой коснется шар, если будет падать из заданного положения ровно вниз.

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
        let shar = Canvas::create(150, 50, Color::rgb(255, 255, 255));
        Canvas::fillEllipse(shar, 55, 5, 40, 40, Color::rgba(0, 0, 0, 0.8), Color::rgba(0, 0, 0, 0.8), 2);
        
        let canva: List<PuzzleImage> = [];
        for (let i in 0..Main::getRandomIntInRange(3, 6)) {
            let canvas = Canvas::create(150, 50, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 0, 25, String::from_int(i+1), 16, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 16, 25, 150, 25, Color::rgb(0,191,255), 2);
            
            canva.push(
                new PuzzleImage {
                    name: "l_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        
        for (let i in 0..50) {
            canva = Main::shuffleArray(canva);
        }
        
        let ans = String::from_int(String::to_int(canva[0].name.split("_")[1]) + 1);
        let list = "";
        for (let i in canva) {
            list += "<img " + i.name + ">\n";
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "указать на линию, которую первой коснется шар, если будет падать из заданного положения ровно вниз",
            "определить линию, которую первой коснется шар, падая из указанного положения строго вниз",
            "указать линию, на которую шар упадет первым, если будет двигаться вертикально вниз",
            "найти первую линию, с которой столкнется шар при падении из заданного положения",
            "рассчитать, какая линия станет первой точкой касания шара при его вертикальном падении",
            "выяснить, на какую линию шар опустится первым при движении ровно вниз"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " шар и множество линий под заданным шаром: \n<img shar>\n" + list
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Нарисован шар и множество линий под заданным шаром: \n<img shar>\n" + list
                + "Требуется " + conditions + ".";
        }

        let desc = sc + " В ответ записать номер линии."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Исходя из изображения, увидим что линией ближе всего к шару является линия под номером: " + ans + "\n Следовательно ответ: " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva + [
                new PuzzleImage {
                    name: "shar",
                    image: shar
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
    
    function shuffleArray(array: List<PuzzleImage>) -> List<PuzzleImage> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
*/