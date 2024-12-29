/*
?Сделайте генератор паззлов с использованием изображения. Задайте нескольким линиям определенного цвета определенное значение. Составьте на картинке из линий различных цветов простые арифметические примеры. Пример. На картинке снизу показана желтая линия и ей задано значение 2, красная линия- 1, черная линия - 3. Сверху картинки пример из линий: Красная линия умножается на желтую линию и прибавляется черная линия. Запишите в ответ, чему равняется решение данного примера.

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

class NamedColor {
    public name: String,
    public color: Color
}

class Main {
    function gen_puzzle() -> Puzzle {
        let namedColor = [
            new NamedColor { name: "красная", color: Color::rgb(155, 0, 0) },
            new NamedColor { name: "зелёная", color: Color::rgb(0, 155, 0) },
            new NamedColor { name: "жёлтая", color: Color::rgb(255, 255, 0) },
            new NamedColor { name: "розовая", color: Color::rgb(255, 192, 203)},
            new NamedColor { name: "оранжевая", color: Color::rgb(255, 140, 0)},
            new NamedColor { name: "фиолетовая", color: Color::rgb(128, 0, 128) },
            new NamedColor { name: "синяя", color: Color::rgb(0, 0, 155) },
            new NamedColor { name: "коричневая", color: Color::rgb(139, 69, 19)},
            new NamedColor { name: "чёрная", color: Color::rgb(0, 0, 0) },
            new NamedColor { name: "серая", color: Color::rgba(0, 0, 0, 0.4) }
        ];
        
        for (let i in 0..50) {
            namedColor = Main::shuffleArray(namedColor)
        }
        
        namedColor = namedColor[0..3];
        
        let nums = [Main::getRandomIntInRange(0, 50), Main::getRandomIntInRange(0, 50), Main::getRandomIntInRange(0, 50)];
        
        let canvas = Canvas::create(130, 50, Color::rgb(255, 255, 255));
        Canvas::line(canvas, 10, 10, 10, 40, namedColor[0].color, 5);
        Canvas::text(canvas, 25, 38, "*", 25, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        Canvas::line(canvas, 40, 10, 40, 40, namedColor[1].color, 5);
        Canvas::text(canvas, 55, 32, "+", 25, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        Canvas::line(canvas, 70, 10, 70, 40, namedColor[2].color, 5);
        Canvas::text(canvas, 95, 32, "= ?", 25, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        let ans = String::from_int(nums[0] * nums[1] + nums[2]);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "чему равняется решение данного примера",
            "значение этого примера",
            "чему равен ответ на данный пример",
            "результат решения этого примера",
            "число является решением данного примера",
            "ответ на предложенный пример"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " арифметический пример из линий разных цветов: \n<img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ", если известно, что " 
            + namedColor[0].name + " линия равняется " + String::from_int(nums[0]) + ", " + namedColor[1].name + " линия - " + String::from_int(nums[1]) + ", " + namedColor[2].name + " линия - " + String::from_int(nums[2]) + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан арифметический пример из линий разных цветов: \n<img canvas>"
                + "\nТребуется определить " + conditions + ", если известно, что " 
            + namedColor[0].name + " линия равняется " + String::from_int(nums[0]) + ", " + namedColor[1].name + " линия - " + String::from_int(nums[1]) + ", " + namedColor[2].name + " линия - " + String::from_int(nums[2]) + ".";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала составим из имеющихся данных этот пример, но в числовом виде: " + String::from_int(nums[0]) + " * " + String::from_int(nums[1]) + " + " + String::from_int(nums[2]) + " = ?"
            + "\n Решим полученный пример и запишем ответ: " + String::from_int(nums[0]) + " * " + String::from_int(nums[1]) + " + " + String::from_int(nums[2]) + " = " + ans;

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
    
    
    function shuffleArray(array: List<NamedColor>) -> List<NamedColor> {
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