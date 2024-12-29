/*
?Сделайте генератор пазов, в котором будет генерироваться таблица 3x3 и фигуры в ячейках (в определенной логической последовательности). Человеку нужно будет определить, какая фигура фигура располагается в ячейке исходя из последовательности.

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
        
        for (let i in 0..Main::getRandomIntInRange(2, 4)) {
            let n = Main::getRandomIntInRange(2, 10);
        
            names.push(Main::getName(n));
            figure.push(n);
        }
        
        
        let ans = "";
        while (ans == "") {
            if (figure.length() == 9) {
                ans = Main::getName(figure[figure.length() - names.length()]);
            } else {
                figure.push(figure[figure.length() - names.length()]);
            }
        }
        
        for (let i in 0..figure.length()) {
            canva.push(
                new PuzzleImage {
                    name: "f_" + String::from_int(i),
                    image: Main::getCanvas(figure[i])
                }
            )
        }
        
        let ind = Main::getRandomIntInRange(0, 8);
        let list = "<table>";          
        for (let i in 0..canva.length()) {
            if (i == 0 || i == 3 || i == 6) {
                list += "<tr>";
            }
            
            list += if (i != ind) {"<td><img " + canva[i].name + "></td>"} else {"<td></td>"}; 
            
            if (i == 2 || i == 5 || i == 8) {
                list += "</tr>";
            }
        }
        list += "</table>"; 
        
        ans = names[ind % names.length()];
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "определить, какая фигура фигура располагается в пустой ячейке исходя из последовательности",
            "определить, какая фигура должна быть в пустой ячейке исходя из последовательности",
            "выяснить, какая фигура подходит для пустой ячейки, исходя из последовательности",
            "указать фигуру, которая заполнит пустую ячейку согласно последовательности",
            "рассчитать, какая фигура должна занять пустую ячейку по заданной логике",
            "найти фигуру, которая логически следует в пустой ячейке по последовательности"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица 3x3 и фигуры в ячейках (в определенной последовательности): \n" + list
            + " \nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица 3x3 и фигуры в ячейках (в определенной последовательности): \n" + list
            sc += " \nТребуется " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"квадрат\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала определим последовательность в таблице: " + String::join(names, ", ") + "\n Следовательно ответ: " + ans;

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
    
    function getCanvas(figure: int) -> Canvas {
        let fc = 1;
        let canvas = Canvas::create(100, 100, Color::rgb(255, 255, 255));
        
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