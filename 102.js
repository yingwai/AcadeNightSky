/*
?Создайте генератор задач, в котором на входе человеку предлагается таблица 3 на 3 в ней фигуры в каждой ячейке, центральная с любой буквой. В вопросе используется 8 вариантов расположения от закрашенной ячейки (сверху, снизу, слева, справа, выше и правее, выше и левее, ниже и правее, ниже и левее). Нужно указать на фигуру или записать ее цвет и название.

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
import community::near::spensa2::plural::PluralRu;

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
            new NamedColor { name: "серый", color: Color::rgba(0, 0, 0, 0.4) }
        ];
        
        let canva: List<PuzzleImage> = [];
        let figures: List<int> = [];
        let colors: List<NamedColor> = [];
        
        for (let i in 0..9) {
            let canvas = Canvas::create(100, 100, if (i == 4) {Color::rgba(0, 0, 0, 0.6)} else {Color::rgb(255, 255, 255)});
            
            figures.push(Main::getRandomIntInRange(3, 10));
            colors.push(namedColor[Main::getRandomIntInRange(0, 10)])
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, figures[i], Color::rgb(0, 0, 0), 2, colors[i].color);
            
            if (i == 4) {
                Canvas::text(canvas, 50, 57, "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("")[Main::getRandomIntInRange(1, 33)], 25, new TextAlignCenter{} as TextAlign, 
                    if (colors[i].name != "белый" || colors[i].name != "жёлтый") {
                         Color::rgb(255, 255, 255)
                    } else {
                         Color::rgb(0, 0, 0)
                    }
                )
            }
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        
        let side = ["сверху", "снизу", "слева", "справа", "выше и правее", "выше и левее", "ниже и правее", "ниже и левее"][Main::getRandomIntInRange(0, 7)];
        let var = ["название", "цвет"][Main::getRandomIntInRange(0, 1)];
        let ans = "";
        if (var == "цвет") {
            if (side == "сверху") {ans = colors[1].name}
            else if (side == "снизу") {ans = colors[7].name}
            else if (side == "слева") {ans = colors[3].name}
            else if (side == "справа") {ans = colors[5].name}
            else if (side == "выше и правее") {ans = colors[2].name}
            else if (side == "выше и левее") {ans = colors[0].name}
            else if (side == "ниже и правее") {ans = colors[8].name}
            else if (side == "ниже и левее") {ans = colors[6].name}
        } else {
            let n = 0;
            
            if (side == "сверху") {n = figures[1]}
            else if (side == "снизу") {n = figures[7]}
            else if (side == "слева") {n = figures[3]}
            else if (side == "справа") {n = figures[5]}
            else if (side == "выше и правее") {n = figures[2]}
            else if (side == "выше и левее") {n = figures[0]}
            else if (side == "ниже и правее") {n = figures[8]}
            else if (side == "ниже и левее") {n = figures[6]}
            
            if (n == 3) {ans = "треугольник"}
            else if (n == 4) {ans = "квадрат"}
            else if (n == 5) {ans = "пятиугольник"}
            else if (n == 6) {ans = "шестиугольник"}
            else if (n == 7) {ans = "семиугольник"}
            else if (n == 8) {ans = "восьмиугольник"}
            else if (n == 9) {ans = "девятиугольник"}
            else if (n == 10) {ans = "десятиугольник"}
        }
        
        let table = "<table>";
        for (let i in 0..9) {
            if (i == 0 || i == 3 || i == 6) {table += "<tr>"}
            
            table += "<td><img c_" + String::from_int(i) + "></td>";
            
            if (i == 2 || i == 5 || i == 8) {table += "</tr>"}
        }
        table += "</table>";
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "таблица 3 на 3:",
            "таблица размером 3 на 3:",
            "матрица 3x3:",
            "квадратная таблица 3 на 3:"
        ][Main::getRandomIntInRange(0, 3)];
        let conditions1 = [
            "от закрашенной ячейки", 
            "от выделенной ячейки",
            "от закрашенной клетки",
            "от отмеченной клетки"
        ][Main::getRandomIntInRange(0, 3)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + " " + table
            + "\nЕё попросили " + whatDo + " " + var + " фигуры " + side + " " + conditions1 + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана " + conditions + " " + table
                + "Требуется определить " + var + " фигуры " + side + " " + conditions1 + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"белый\"/\"треугольник\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Фигура " + side + " от закрашенной ячейки является ";
        
        if (side == "сверху") {expl += colors[1].name}
        else if (side == "снизу") {expl += colors[7].name}
        else if (side == "слева") {expl += colors[3].name}
        else if (side == "справа") {expl += colors[5].name}
        else if (side == "выше и правее") {expl += colors[2].name}
        else if (side == "выше и левее") {expl += colors[0].name}
        else if (side == "ниже и правее") {expl += colors[8].name}
        else if (side == "ниже и левее") {expl += colors[6].name}
        
        expl += " ";

        let n = 0;

        if (side == "сверху") {n = figures[1]}
        else if (side == "снизу") {n = figures[7]}
        else if (side == "слева") {n = figures[3]}
        else if (side == "справа") {n = figures[5]}
        else if (side == "выше и правее") {n = figures[2]}
        else if (side == "выше и левее") {n = figures[0]}
        else if (side == "ниже и правее") {n = figures[8]}
        else if (side == "ниже и левее") {n = figures[6]}

        if (n == 3) {expl += "треугольник"}
        else if (n == 4) {expl += "квадрат"}
        else if (n == 5) {expl += "пятиугольник"}
        else if (n == 6) {expl += "шестиугольник"}
        else if (n == 7) {expl += "семиугольник"}
        else if (n == 8) {expl += "восьмиугольник"}
        else if (n == 9) {expl += "девятиугольник"}
        else if (n == 10) {expl += "десятиугольник"}
        
        expl += ". Т.к. нам нужно записать " + var + ", ответ: " + ans

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