/*
?Создайте генератор паззлов, в котором даны различные геометрические фигуры разных цветов, которые будут вложены друг в друга и в котором требуется указать на уровень вложенности определенной фигуры определенного цвета.

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
import community::near::cfuser::ah04919::Contains::StringInList;

class NamedColor {
    public name: String,
    public color: Color
}

class Main {
    function gen_puzzle() -> Puzzle {
        let namedColor = [
            new NamedColor { name: "белый", color: Color::rgb(255, 255, 255) },
            new NamedColor { name: "красный", color: Color::rgb(155, 0, 0) },
            new NamedColor { name: "зелёный", color: Color::rgb(0, 155, 0) },
            new NamedColor { name: "жёлтый", color: Color::rgb(255, 255, 0) },
            new NamedColor { name: "розовый", color: [Color::rgb(255, 192, 203), Color::rgb(255, 105, 180), Color::rgb(255, 20, 147)][Main::getRandomIntInRange(0, 2)] },
            new NamedColor { name: "оранжевый", color: [Color::rgb(255, 140, 0), Color::rgb(255, 165, 0), Color::rgb(255, 127, 80)][Main::getRandomIntInRange(0, 2)] },
            new NamedColor { name: "фиолетовый", color: Color::rgb(128, 0, 128) },
            new NamedColor { name: "синий", color: Color::rgb(0, 0, 155) },
            new NamedColor { name: "коричневый", color: [Color::rgb(139, 69, 19), Color::rgb(165, 42, 42), Color::rgb(210, 105, 30)][Main::getRandomIntInRange(0, 2)] },
            new NamedColor { name: "чёрный", color: Color::rgb(0, 0, 0) },
            new NamedColor { name: "серый", color: Color::rgb(128, 128, 128) }
        ];
        
        let figure: List<String> = [];
        
        let canvas = Canvas::create(500, 500, Color::rgb(255, 255, 255));
        
        for (let i in 0..5) {
            let c = namedColor[Main::getRandomIntInRange(0, 10)];
            let f = Main::getRandomIntInRange(5, 10);
            let str = c.name + " " + Main::getName(f);
            
            while (StringInList::contains(figure, str)) {
                c = namedColor[Main::getRandomIntInRange(0, 10)];
                f = Main::getRandomIntInRange(5, 10);
                str = c.name + " " + Main::getName(f);
            }
            
            figure.push(str)
            
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 240, 240, 240 - (45 * i), f, Color::rgb(0, 0, 0), 2, c.color);
        }
        
        let ans = Main::getRandomIntInRange(1, figure.length()-1);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "указать на уровень вложенности " + String::join(figure[ans-1].split(" ")[0].split("")[0..figure[ans-1].split(" ")[0].split("").length()-2], "") + "ого " + figure[ans-1].split(" ")[1] + "а",
            "определить, на каком уровне вложенности находится " + figure[ans-1],
            "указать на каком слое расположен " + figure[ans-1],
            "указать, на каком уровне вложенности расположен " + figure[ans-1],
            "указать уровень вложенности " + String::join(figure[ans-1].split(" ")[0].split("")[0..figure[ans-1].split(" ")[0].split("").length()-2], "") + "ого " + figure[ans-1].split(" ")[1] + "а",
            "определить уровень вложенности для " + String::join(figure[ans-1].split(" ")[0].split("")[0..figure[ans-1].split(" ")[0].split("").length()-2], "") + "ого " + figure[ans-1].split(" ")[1] + "а"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " геометрические фигуры разных цветов, которые вложены друг в друга: \n <img canvas>"
            + "\nЕё попросили " + conditions + ", если первая фигура (самая большая) не вложена ни в какую другую, следовательно её слой будет являться нулевым (0).";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны геометрические фигуры разных цветов, которые вложены друг в друга: \n <img canvas>"
                + "\nТребуется " + conditions + ", если первая фигура (самая большая) не вложена ни в какую другую, следовательно её слой будет являться нулевым (0).";
        }

        let desc = sc + " В ответ нужно указать целое число."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим каждую фигуру, с первой по последнюю: \n";
        for (let i in 0..figure.length()) {
            expl += String::from_int(i+1) + " фигура - " + figure[i] + "\n";
        }
        expl += "\n Т.к. первая фигура не вложена, счёт начинаем со второй, следовательно нужная нам фигура имеет вложенность " + String::from_int(ans-1);

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
                    answer: String::from_int(ans-1)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getName(col: int) -> String {
        let str = if (col == 2) {
            "круг"
        } else if (col == 3) {
            "треугольник"
        } else if (col == 4) {
            "квадрат"
        } else if (col == 5) {
            "пятиугольник"
        } else if (col == 6) {
            "шестиугольник"
        } else if (col == 7) {
            "семиугольник"
        } else if (col == 8) {
            "восьмиугольник"
        } else if (col == 9) {
            "девятиугольник"
        } else {
            "десятиугольник"
        }
        
        return str;
    }
}
*/