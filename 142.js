/*
?Создайте генератор паззлов, который в разных половинах поля генерирует по паре ломаных переплетающихся линий. Для этого ломаные должны быть разных цветов. После этого генератор просит указать на ту пару ломаных, у которой больше переплетений.

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
        let nums = [Main::getRandomIntInRange(1, 10), Main::getRandomIntInRange(1, 10)];
        while (nums[0] == nums[1]) {
            nums = [Main::getRandomIntInRange(1, 10), Main::getRandomIntInRange(1, 10)];
        }
        
        let canva = [
            new PuzzleImage {
                name: "c_0",
                image: Main::getCanvas(nums[0])
            },
            new PuzzleImage {
                name: "c_1",
                image: Main::getCanvas(nums[1])
            }
        ];
        
        let ans = if (nums[0] > nums[1]) {1} else {2}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "на каком из полей больше переплетений",
            "на каком поле количество переплетений больше",
            "где на поле количество переплетений максимальное",
            "какое поле имеет больше переплетений",
            "на каком поле наблюдается больше переплетений",
            "в каком поле переплетений больше"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два поля с ломаными линиями разных цветов: \n1.<img c_0>  2.<img c_1>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано два поля с ломаными линиями разных цветов: \n1.<img c_0>  2.<img c_1>"
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " В ответ указать номер нужного поля."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Исходя из изображений, видим что " + if (nums[0] > nums[1]) {"на первом"} else {"на втором"} + " поле переплетений больше. \n Следовательно ответ: " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
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
    
    function getCanvas(n: int) -> Canvas {
        let canvas = Canvas::create(100, 20 + (10*n), Color::rgb(255, 255, 255));
        
        for (let i in 0..n) {
            let color1 = Color::rgb(Main::getRandomIntInRange(0, 240), Main::getRandomIntInRange(0, 240), Main::getRandomIntInRange(0, 240));
            let color2 = Color::rgb(Main::getRandomIntInRange(0, 240), Main::getRandomIntInRange(0, 240), Main::getRandomIntInRange(0, 240));
            
            Canvas::line(canvas, 1, 1 + (10 * i), 10, 10 + (10 * i), color1, 2);
            Canvas::line(canvas, 10, 10 + (10 * i), 20, 1 + (10 * i), color1, 2);
            Canvas::line(canvas, 20, 1 + (10 * i), 30, 10 + (10 * i), color1, 2);
            Canvas::line(canvas, 30, 10 + (10 * i), 40, 1 + (10 * i), color1, 2);
            Canvas::line(canvas, 40, 1 + (10 * i), 50, 10 + (10 * i), color1, 2);
            Canvas::line(canvas, 50, 10 + (10 * i), 60, 1 + (10 * i), color1, 2);
            Canvas::line(canvas, 60, 1 + (10 * i), 70, 10 + (10 * i), color1, 2);
            Canvas::line(canvas, 70, 10 + (10 * i), 80, 1 + (10 * i), color1, 2);
            Canvas::line(canvas, 80, 1 + (10 * i), 90, 10 + (10 * i), color1, 2);
            Canvas::line(canvas, 90, 10 + (10 * i), 100, 1 + (10 * i), color1, 2);
            
            Canvas::line(canvas, 1, 20 + (10 * i), 10, 10 + (10 * i), color2, 2);
            Canvas::line(canvas, 10, 10 + (10 * i), 20, 20 + (10 * i), color2, 2);
            Canvas::line(canvas, 20, 20 + (10 * i), 30, 10 + (10 * i), color2, 2);
            Canvas::line(canvas, 30, 10 + (10 * i), 40, 20 + (10 * i), color2, 2);
            Canvas::line(canvas, 40, 20 + (10 * i), 50, 10 + (10 * i), color2, 2);
            Canvas::line(canvas, 50, 10 + (10 * i), 60, 20 + (10 * i), color2, 2);
            Canvas::line(canvas, 60, 20 + (10 * i), 70, 10 + (10 * i), color2, 2);
            Canvas::line(canvas, 70, 10 + (10 * i), 80, 20 + (10 * i), color2, 2);
            Canvas::line(canvas, 80, 20 + (10 * i), 90, 10 + (10 * i), color2, 2);
            Canvas::line(canvas, 90, 10 + (10 * i), 100, 20 + (10 * i), color2, 2);
        }
        
        return canvas;
    }
}
*/