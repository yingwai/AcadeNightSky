/*
?Составьте генератор задач, который выдаёт одну задачу и несколько арифметических выражений к ней (например, 3). Выражения должны быть разных цветов (например, синий, красный, жёлтый). Пожалуйста, не используйте этот конкретный пример. Человеку надо выбрать подходящее под задачу арифметическое выражение и в ответ записать его цвет. Генератор должен выдавать текст задачи, несколько арифметических выражений разного цвета, одно из которых подходит под задачу и текст с заданием: "Выберите то арифметическое выражение, которое соответствует данной задаче. В ответ напишите цвет этого арифметического выражения."

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealImprecise;
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
import community::near::spensa2::plural::PluralRu;

class NamedColor {
    public name: String,
    public color: Color
}

class Main {
    function gen_puzzle() -> Puzzle {
        let nums = [Main::getRandomIntInRange(1, 50), Main::getRandomIntInRange(1, 50), Main::getRandomIntInRange(1, 50)];
        let oper = [["+", "-"][Main::getRandomIntInRange(0, 1)],["+", "-"][Main::getRandomIntInRange(0, 1)]];
        let temp = if (oper[0] == "+") {nums[0] + nums[1]} else {nums[0] - nums[1]}
        
        while (oper[0] == "-" && nums[0] < nums[1] ||
              oper[1] == "-" && temp < nums[2]) {
            nums = [Main::getRandomIntInRange(1, 50), Main::getRandomIntInRange(1, 50), Main::getRandomIntInRange(1, 50)];
            oper = [["+", "-"][Main::getRandomIntInRange(0, 1)],["+", "-"][Main::getRandomIntInRange(0, 1)]];
            temp = if (oper[0] == "+") {nums[0] + nums[1]} else {nums[0] - nums[1]}
        }
        
        let math = String::from_int(nums[0]) + oper[0] + String::from_int(nums[1]) + oper[1] + String::from_int(nums[2]);
        
        let str = "В корзину положили " + PluralRu::pluralify(nums[0], "яблоко", "яблока", "яблок") 
                + ", после " + if (oper[0] == "+") {"доложили "} else {"выложили "} + PluralRu::pluralify(nums[1], "яблоко", "яблока", "яблок")
                + " и в конце " + if (oper[1] == "+") {" положили "} else {"достали "} + PluralRu::pluralify(nums[2], "яблоко", "яблока", "яблок");
        
        let namedColor = [
            new NamedColor { name: "красный", color: Color::rgb(155, 0, 0) },
            new NamedColor { name: "зелёный", color: Color::rgb(0, 155, 0) },
            new NamedColor { name: "жёлтый", color: Color::rgb(219, 219, 34) },
            new NamedColor { name: "розовый", color: Color::rgb(255, 192, 203)},
            new NamedColor { name: "оранжевый", color: Color::rgb(255, 140, 0)},
            new NamedColor { name: "фиолетовый", color: Color::rgb(128, 0, 128) },
            new NamedColor { name: "синий", color: Color::rgb(0, 0, 155) },
            new NamedColor { name: "коричневый", color: Color::rgb(139, 69, 19)},
            new NamedColor { name: "чёрный", color: Color::rgb(0, 0, 0) },
            new NamedColor { name: "серый", color: Color::rgba(0, 0, 0, 0.4) }
        ];
        
        let canva: List<PuzzleImage> = [];
        for (let i in 0..3) {
            let canvas = Canvas::create(200, 30, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 2, 20, 
                String::from_int(Main::getRandomIntInRange(1, 50)) + ["+", "-"][Main::getRandomIntInRange(0, 1)] + String::from_int(Main::getRandomIntInRange(1, 50)) + ["+", "-"][Main::getRandomIntInRange(0, 1)] + String::from_int(Main::getRandomIntInRange(1, 50)), 
                18, new TextAlignLeft{} as TextAlign, namedColor[Main::getRandomIntInRange(0, namedColor.length()-1)].color
            );
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            )
        }
         
        let ind = Main::getRandomIntInRange(0, 2);
        let canvas = Canvas::create(200, 30, Color::rgb(255, 255, 255));
        let curColor = namedColor[Main::getRandomIntInRange(0, namedColor.length()-1)];
        Canvas::text(canvas, 2, 20, math, 18, new TextAlignLeft{} as TextAlign, curColor.color);
        canva[ind] = new PuzzleImage {
            name: "c_" + String::from_int(ind),
            image: canvas
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|выбрать|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "подходящее под задачу арифметическое выражение и в ответ записать его цвет",
            "подходящее арифметическое выражение для задачи и записать его цвет",
            "арифметическое выражение, которое соответствует задаче, и записать его цвет",
            "арифметическое выражение для решения задачи и указать его цвет в ответе",
            "подходящее арифметическое выражение и в ответе указать его цвет",
            "правильное арифметическое выражение для задачи и записать его цвет"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " задача: " + str + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ".\n";
        for (let i in canva) {
            sc += "<img " + i.name + ">\n"
        }

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана задача: " + str + ". "
                + "\nТребуется определить " + conditions + ".\n";
            for (let i in canva) {
                sc += "<img " + i.name + ">\n"
            }
        }

        let desc = sc 
            + "\n Пример ответа: \"красный\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим задачу, сначала мы " + if (oper[0] == "+") {"прибавляем"} else {"уменьшаем"} + " " + String::from_int(nums[1]) + ", после мы " + if (oper[1] == "+") {"прибавляем"} else {"уменьшаем"} + " " + String::from_int(nums[2]) + "\n"
            + "Следовательно нужное выражение: " + math + "\n Соответственно цвет этого выражения: " + curColor.name;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealImprecise {
                    name: "ans",
                    answer: curColor.name
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/