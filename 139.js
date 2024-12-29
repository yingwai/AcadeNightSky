/*
?Создайте генератор, в котором на входе будут генерироваться 2 кубика (квадрат в котором будут 1 или несколько точек). Над кубиками будут подписаны имена тех, кто их бросил. Нужно будет определить у кого на кубике наибольшее количество точек.

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
        let num1 = Main::getRandomIntInRange(1, 6);
        let num2 = Main::getRandomIntInRange(1, 6);
        while (num1 == num2) {
            num1 = Main::getRandomIntInRange(1, 6);
            num2 = Main::getRandomIntInRange(1, 6);
        }
        
        let name1 = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let name2 = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        while (name1 == name2) {
            name1 = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
            name2 = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        }
        
        let ans = if (num1 > num2) {name1} else {name2};
        
        let canvas = Main::getCube(num1, name1);
        let canvas1 = Main::getCube(num2, name2);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "у кого на кубике наибольшее количество точек",
            "у кого на кубике больше всего точек",
            "кто на кубике имеет наибольшее количество точек",
            "на чьем кубике наибольшее количество точек",
            "у какого игрока на кубике больше всего точек",
            "у кого из игроков на кубике максимальное количество точек"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " 2 кубика, а над ними подписаны имена тех, кто их бросил: \n <img c1> <img c2>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны 2 кубика, а над ними подписаны имена тех, кто их бросил: \n <img c1> <img c2>"
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"Аня\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "На иозбражении показаны 2 кубика и имена тех кто их кинул: на левом кубике выпало " + String::from_int(num1) + ", а на правом " + String::from_int(num2)
            + ". \n Следовательно, т.к. " + if (num1 > num2) {"на левом кубике больше, ответ: " + name1} else {"на правом кубике больше, ответ: " + name2};

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "c1",
                    image: canvas
                },
                new PuzzleImage {
                    name: "c2",
                    image: canvas1
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
    
    function getCube(num: int, name: String) -> Canvas {
        let sizeX = 80;
        let sizeY = 80;
        
        let canvas = Canvas::create(sizeX, sizeY, Color::rgb(255, 255, 255));;
        
        let posX = 20;
        let posY = 30;
        
        Canvas::text(canvas, 40, posX, name, 18, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
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