/*
?Сделайте генератор паззлов, который нарисует стрелков с ружьями, которые будут направлены в различные стороны. Генератор будет просить указать на стрелков, которые направили свои ружья друг на друга.

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
        let side: List<String> = [];
        let canva: List<PuzzleImage> = [];
        for (let i in 0..Main::getRandomIntInRange(3, 7)) {
            side.push(if (Main::getRandomIntInRange(0, 1) == 1) {"r"} else {"l"});
            
            let canvas = Canvas::create(120, 155, Color::rgb(255, 255, 255));
            if (side[i] == "r") {
                Canvas::line(canvas, 60, 63, 120, 63, Color::rgb(0, 0, 0), 8);
            } else {
                Canvas::line(canvas, 60, 63, 0, 63, Color::rgb(0, 0, 0), 8);
            }
            Canvas::rect(canvas, 41, 15, 30, 30, Color::rgb(0, 0, 0), 4);
            Canvas::fillRect(canvas, 31, 45, 50, 70, Color::rgb(0, 0, 0), Color::rgb(255, 255, 255), 4);
            Canvas::line(canvas, 41, 115, 41, 165, Color::rgb(0, 0, 0), 6);
            Canvas::line(canvas, 68, 115, 68, 165, Color::rgb(0, 0, 0), 6);
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        
        let ans: List<String> = [];
        for (let i in 1..side.length()) {
            if (side[i] == "l" && side[i-1] == "r") {ans.push(String::from_int(i) + " и " + String::from_int(i+1))}
        }
        
        let list = "";
        for (let i in 0..canva.length()) {
            list += String::from_int(i+1) + ". <img " + canva[i].name + ">   "
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];

        let conditions = [
            "указать на рядом стоящих стрелков, которые направили свои ружья друг на друга",
            "выбрать стрелков, стоящих рядом, которые направили ружья друг на друга",
            "найти парных стрелков, чьи ружья направлены друг на друга",
            "определить рядом стоящих стрелков с ружьями, направленными друг на друга",
            "указать стрелков, расположенных рядом и направивших ружья друг на друга",
            "опознать стрелков, стоящих рядом и нацеливших ружья друг на друга"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике нарисованы стрелки с ружьями, которые направлены в различные стороны: \n" + list
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан нарисованые стрелки с ружьями, которые направлены в различные стороны: \n" + list
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + " \nПервым нужно записать того стрелка, чей номер меньше. Если таких стрелков несколько, их нужно записать по очереди в том порядке, в котором они представлены."
            + "\n Пример ответа: \"2 и 3, 5 и 6\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим в какие стороны смотрят все стрелки: \n";
        for (let i in 0..side.length()) {
            expl += String::from_int(i+1) + " стрелок смотрит " + if (side[i] == "r") {"в право"} else {"в лево"} + "\n"
        }
        
        expl += "\n Получается что стрелки смотрящие друг на друга, это: " + String::join(ans, ", ")

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(ans, ", ")
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/