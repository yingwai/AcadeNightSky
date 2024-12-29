/*
?Сделайте генератор паззлов, что рисует несколько отрезков и несколько геометрических фигур. Генератор просит определить какую из данных фигур можно нарисовать с помощью данных отрезков.

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
        let figure: List<PuzzleImage> = [];
        let n: List<int> = [];
        let len: List<int> = [];
        
        let line: List<PuzzleImage> = [];
        let lenLine: List<int> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 4)) {
            let canvas = Canvas::create(100, 100, Color::rgb(255, 255, 255));
            len.push(Main::getRandomIntInRange(20, 45));
            n.push(Main::getRandomIntInRange(3, 5));
            
            Canvas::text(canvas, 0, 20, String::from_int(i+1) + ". ", 18, new TextAlignLeft{} as TextAlign, Color::rgb(0,0,0));
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, len[i], n[i], Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 40, 55, String::from_int(len[i]), 18, new TextAlignLeft{} as TextAlign, Color::rgb(0,0,0));
            
            figure.push(new PuzzleImage {
                name: "f_" + String::from_int(i),
                image: canvas
            });
            
            lenLine.push(len[i]*n[i]);
        }
        
        for (let i in 0..50) {
            lenLine = Main::shuffleArray(lenLine);
        }
        
        for (let i in 0..lenLine.length()) {
            let canvas = Canvas::create(lenLine[i]+20, 100, Color::rgb(255, 255, 255));
            
            Canvas::text(canvas, 0, 52, String::from_int(i+1) + ". ", 18, new TextAlignLeft{} as TextAlign, Color::rgb(0,0,0));
            Canvas::line(canvas, 20, 50, lenLine[i]+20, 50, Color::rgb(0,0,0), 2);
            Canvas::text(canvas, (lenLine[i]+20)/2, 45, String::from_int(lenLine[i]), 18, new TextAlignCenter{} as TextAlign, Color::rgb(0,0,0));
            
            line.push(new PuzzleImage {
                name: "l_" + String::from_int(i),
                image: canvas
            });
        }
        
        let ind = Main::getRandomIntInRange(0, figure.length()-1);
        
        let ans = 0;        
        for (let i in 0..lenLine.length()) {
            if (len[ind]*n[ind] == lenLine[i]) {
                ans = i+1
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let fig = "";
        for (let i in figure) {
            fig += "<img " + i.name + ">"
        }
        let lin = "";
        for (let i in line) {
            lin += "<img " + i.name + ">\n"
        }
        
        let conditions = [
            "какую из данных фигур можно нарисовать с помощью " + String::from_int(ans) + "-го отрезка",
            "какую из представленных фигур можно изобразить с помощью " + String::from_int(ans) + "-го отрезка",
            "какая из данных фигур может быть нарисована при помощи " + String::from_int(ans) + "-го отрезка",
            "какую фигуру из предложенных можно создать, используя " + String::from_int(ans) + "-й отрезок",
            "какая из фигур может быть изображена с использованием " + String::from_int(ans) + "-го отрезка"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько геометрических фигур с числом внутри, которое является длиной для каждой стороны: \n" + fig
            + "\nЕё попросили " + whatDo + " " + conditions + ": \n" + lin;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько геометрических фигур с числом внутри, которое является длиной для каждой стороны: \n" + fig
                + "\nТребуется определить " + conditions + ": \n" + lin;
        }

        let desc = sc + " В ответ записать номер нужной фигуры."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Данный нам отрезок равняется " + String::from_int(lenLine[ans-1])
            + " см\n Будем считать чему равняется длинна всех сторон каждой фигуры: \n";
        for (let i in 0..line.length()) {
            expl += String::from_int(i+1) + " фигура: " + String::from_int(len[i]) + " * " + String::from_int(n[i]) + " = " + String::from_int(len[i]*n[i]) + " см\n"
        }
        expl += "\n Следовательно ответ: " + String::from_int(ind+1) + " фигура"

        return new Puzzle {
            question: desc,
            solution: expl,
            images: figure + line,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ind+1)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function shuffleArray(array: List<int>) -> List<int> {
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