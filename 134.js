/*
?Создайте генератор паззлов, который на входе будет выдавать картинку с различными легкими математическими формулами (сложение, вычитание, умножение и так далее). Можно использовать примеры на несколько действий. В ответе нужно просто правильно решить изображенный на картинке пример.

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
        let num = [Main::getRandomIntInRange(1, 100),Main::getRandomIntInRange(1, 100)];
        let oper = ["+", "-", "*", "/"][Main::getRandomIntInRange(0, 3)];
        
        let canvas = Canvas::create(200, 24, Color::rgb(255, 255, 255));
        Canvas::text(canvas, 10, 20, String::from_int(num[0]) + " " + oper + " " + String::from_int(num[1]) + " = ?", 18, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
        
        let ans = if (oper == "+") {
            num[0] + num[1]
        } else if (oper == "-") {
            num[0] - num[1]
        } else if (oper == "*") {
            num[0] * num[1]
        } else {
            num[0] / num[1]
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "правильно решить изображенный на картинке пример",
            "правильно решить пример, изображенный на картинке",
            "рассчитать и записать ответ примера, который указан на изображении",
            "решить математическое выражение, показанное на картинке",
            "выполнить вычисления примера, представленного на изображении",
            "найти верный ответ примера, который изображен на картинке"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " изображение с математическим примером: \n <img canvas>"
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано изображение с математическим примером: \n <img canvas>"
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + " В ответ записать целое число, если число дробное, только его целую часть."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "На изображении видем пример " + String::from_int(num[0]) + " " + oper + " " + String::from_int(num[1]) + " = ? \n Решим его и получим ответ: " + String::from_int(ans);

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
}
*/