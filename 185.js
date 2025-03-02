/*
?Создайте генератор паззлов, который с помощью геометрических фигур будет рисовать ёлочки в определённой последовательности их изменения. Генератор будет просить ввести количество треугольников в определённой ёлочке.

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
        let len = Main::getRandomIntInRange(2, 6);
        let index = Main::getRandomIntInRange(1, len);
        let canva: List<PuzzleImage> = [];
        let more = Main::getRandomIntInRange(0, 1) == 1;
        
        for (let i in 1..len+1) {
            let x = 200;
            let y = 360;
            let canvas = Canvas::create(x, y, Color::rgb(255, 255, 255));
            Canvas::fillRect(canvas, 80, y-40, 40, 38, Color::rgb(0, 0, 0), Color::rgb(255, 255, 255), 2);

            for (let j in 1..i+1) {
                let points = [
                    new Point2D { x: 20, y: y-40*j },
                    new Point2D { x: 180, y: y-40*j },
                    new Point2D { x: 100, y: y-180-25*j }
                ];
                Canvas::fillPolygon(canvas, points, Color::rgb(0, 0, 0), Color::rgb(255, 255, 255), 2);
            }
            
            canva.push(
                new PuzzleImage {
                    name: "e_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        
        let list = "";
        for (let i in 0..canva.length()) {
            list += "<img " + canva[if (more) {i} else {len-i-1}].name + ">"
        }
        
        let ans = String::from_int(if (more) {index} else {len-index+1});
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "количество треугольников в определённой ёлочке",
            "количество треугольников в заданной ёлочке",
            "сколько треугольников в определённой ёлочке",
            "число треугольников в конкретной ёлочке",
            "количество треугольников в указанной ёлочке",
            "сколько треугольников в выбранной ёлочке"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ёлочки из геометрических фигур в определённой последовательности их изменения: " + if (more) {"от меньшего количества ярусов к большему"} else {"от большего количества ярусов к меньшему"} + ": \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + ": " + String::from_int(index) + " по счёту.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны ёлочки из геометрических фигур в определённой последовательности их изменения: " + if (more) {"от меньшего количества ярусов к большему"} else {"от большего количества ярусов к меньшему"} + ": \n" + list
                + "\nТребуется определить " + conditions + ": " + String::from_int(index) + " по счёту.";
        }

        let desc = sc + " Ёлочки считаются слева направо начиная с 1."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы определить количество треугольников в " + String::from_int(index) + " по счёту ёлке, узнаем количество треугольников в каждой ёлке: \n";
        for (let i in 0..canva.length()) {
            expl += String::from_int(i+1) + " - " + if (more) {community::near::spensa2::plural::PluralRu::pluralify(i+1, "треугольник", "треугольника", "треугольников")} else {community::near::spensa2::plural::PluralRu::pluralify(len-i, "треугольник", "треугольника", "треугольников")} + "\n"
        }
        expl += "\n Следовательно ответ: " + ans

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
}
*/