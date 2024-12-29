/*
?Сделайте генератор пазлов, который генерирует множество геометрических фигур и зданий такой же формы. Сгенерируйте определенную последовательность фигур, человек должен расположить здания такой же формы в такой же последовательности.

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
import community::near::cfuser::ah04919::Contains::IntInList;

class Main {
    function gen_puzzle() -> Puzzle {
        let figure: List<int> = [];
        let names: List<String> = [];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 6)) {
            let n = Main::getRandomIntInRange(2, 10);
            
            if (figure.length() != 0) {
                while (IntInList::contains(figure, n)) {
                    n = Main::getRandomIntInRange(2, 10);
                }
            } 
        
            names.push(Main::getName(n));
            figure.push(n);
            
            canva.push(
                new PuzzleImage {
                    name: "f_" + String::from_int(i),
                    image: Main::getCanvas(figure[i], i+1)
                }
            )
        }
        
        for (let i in 0..50) {
            names = community::near::dtalalaev::shuffleStringArray::Main::shuffle(names);
        }
        
        let ans: List<String> = [];
        for (let i in 0..figure.length()) {
            for (let j in 0..figure.length()) {
                if (names[i] == Main::getName(figure[j])) {
                    ans.push(String::from_int(j+1))
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "расположить здания такой же формы в такой же последовательности как список геометрических фигур",
            "расположить здания той же формы в той же последовательности, что и геометрические фигуры",
            "упорядочить здания аналогичной формы в порядке, соответствующем списку фигур",
            "расположить здания одинаковой формы согласно последовательности геометрических фигур",
            "выстроить здания той же формы, следуя порядку фигур",
            "составить последовательность зданий такой же формы, как указано в списке фигур"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " список геометрических фигур: " + String::join(names, ", ") + " и здания такой же формы (вид сверху): \n" 
        for (let i in canva) {
            sc += "<img " + i.name + ">"
        }
        sc += " \nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан список геометрических фигур: " + String::join(names, ", ") + " и зданийя такой же формы (вид сверху): \n" 
            for (let i in canva) {
                sc += "<img " + i.name + ">"
            }
            sc += " \nТребуется " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"4, 2, 1, 3\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим фигуру каждого здания: \n";
        for (let i in 0..figure.length()) {
            expl += String::from_int(i+1) + " фигура - " + Main::getName(figure[i]) + "\n"
        }
        expl += "\nРасположим их в той же послдедовательности, что и геометрические фигуры и получим ответ: " + String::join(ans, ", ");

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
    
    function getCanvas(figure: int, ind: int) -> Canvas {
        let fc = 1;
        let canvas = Canvas::create(100, 120, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        if (figure == 2) {
            Canvas::ellipse(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), 2);
        } else if (figure == 3) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 40, 50, 50, 3, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 4) {        
            Canvas::rect(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), 2);
        } else if (figure == 5) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 46, 50, 45, 5, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 6) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 6, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 7) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 7, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 8) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 8, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 9) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 9, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        } else if (figure == 10) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 10, Color::rgb(0, 0, 0), 2, Color::rgb(255, 255, 255));
        }
        
        Canvas::text(canvas, 50, 116, String::from_int(ind), 18, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        return canvas
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