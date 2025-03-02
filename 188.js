/*
?Сделайте генератор паззлов, который выводит на экран ряд разноцветных фигур, которые затем подвергли делению (например наполовину, на трети, на четверти и т.д.). Требуется найти изначальную какую-либо фигуру, которую поделили на X количество частей.

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
import community::near::spensa2::plural::PluralRu;

class Main {
    function gen_puzzle() -> Puzzle {
        let figure: List<int> = [];
        let canva: List<PuzzleImage> = [];
        let del: List<int> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 6)) {
            figure.push(Main::getRandomIntInRange(2, 10));
            
            canva.push(
                new PuzzleImage {
                    name: "f_" + String::from_int(i),
                    image: Main::getCanvas(figure[i])
                }
            );
            
            let n = Main::getRandomIntInRange(2, 30);
            while (IntInList::contains(del, n)) {
                n = Main::getRandomIntInRange(2, 30);
            }
            
            del.push(n);
        }
        
        let nList = "";
        for (let i in del) {
            nList += String::from_int(i) + ", "
        }
        nList = nList[0..nList.length()-2]
            
        let fList = "";
        for (let i in canva) {
            fList += "<img " + i.name + ">"
        }
        
        let index = Main::getRandomIntInRange(0, del.length()-1);
        let ans = Main::getName(figure[index]);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "фигуру, которую поделили на",
            "название фигуры, которую разделили на",
            "наименование фигуры, которую разбили на",
            "фигуру, которую поделили на",
            "имя фигуры, которую разделили на",
            "фигуру, которую разбили на"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд разноцветных фигур, которые затем подвергли делению (по очереди слева направо) на: " + nList + ".\n" + fList
            + "\nЕё попросили " + whatDo + " " + conditions + " " + PluralRu::pluralify(del[index], "часть", "части", "частей") + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд разноцветных фигур, которые затем подвергли делению (по очереди слева направо) на: " + nList + ".\n" + fList
                + "\nТребуется определить " + conditions + " " + PluralRu::pluralify(del[index], "часть", "части", "частей") + ".";
        }

        let desc = sc + " В ответ записать название фигуры."
            + "\n Варианты ответа: \"круг\", \"треугольник\", \"квадрат\", \"пятиугольник\", \"шестиугольник\", \"семиугольник\", \"восьмиугольник\", \"девятиугольник\", \"десятиугольник\"."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы выяснить ответ, определим какие фигуры на рисунке и на сколько частей они разделены: \n";
        for (let i in 0..del.length()) {
            expl += "Фируга: " + Main::getName(figure[i]) + " разделён на " + PluralRu::pluralify(del[i], "часть", "части", "частей") + "\n"
        }
        expl += "\n Т.к. нам нужна фигура разделённая на " + String::from_int(del[index]) + ", следовательно ответ: " + ans;

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
        let canvas = Canvas::create(100, 120, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        if (figure == 2) {
            Canvas::fillEllipse(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)), 2);
        } else if (figure == 3) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 40, 50, 50, 3, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
        } else if (figure == 4) {        
            Canvas::fillRect(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)), 2);
        } else if (figure == 5) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 46, 50, 45, 5, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
        } else if (figure == 6) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 6, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
        } else if (figure == 7) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 7, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
        } else if (figure == 8) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 8, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
        } else if (figure == 9) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 9, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
        } else if (figure == 10) {
            community::near::dtalalaev::printPolygon::Main::printPolygon(canvas, 50, 50, 45, 10, Color::rgb(0, 0, 0), 2, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)));
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