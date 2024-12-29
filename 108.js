/*
?Сделайте генератор пазлов, в котором генерируется карта города с поворотами, ваше местоположение и направление, а также указание навигатора(например: через 2 поворота поверните на право). Задача человека - указать на поворот, на котором ему нужно повернуть.

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

class Main {
    function gen_puzzle() -> Puzzle {
        let pos = ["вверх", "направо", "вниз", "налево"][Main::getRandomIntInRange(0, 3)];
        let route = ["на следующем повороте поверните", "через поворот поверните", "через 2 поворота поверните"][Main::getRandomIntInRange(0, 2)] + " " + ["направо", "налево"][Main::getRandomIntInRange(0, 1)];
        
        let canvas = Main::getArea();
        
        let chel = [3, 3];
        let base = route.split(" ");
        let steps = 0;
        if (StringInList::contains(base, "следующем")) {steps = 1}
        else if (StringInList::contains(base, "2")) {steps = 3}
        else if (StringInList::contains(base, "через")) {steps = 2}
        
        if (pos == "вверх") {chel = [3, 3-steps]}
        else if (pos == "вниз") {chel = [3, 3+steps]}
        else if (pos == "налево") {chel = [3-steps, 3]}
        else if (pos == "направо") {chel = [3+steps, 3]}
        
        let ans = String::from_int(chel[0]) + ", " + String::from_int(chel[1]);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let conditions = [
            "поворот (x, y), на котором ему нужно повернуть",
            "поворот, на котором ему нужно повернуть, с координатами (x, y)",
            "координаты (x, y) поворота, где необходимо свернуть",
            "поворот (x, y), на котором требуется повернуть",
            "координаты (x, y) того поворота, где нужно повернуть",
            "поворот, на котором нужно повернуть (x, y)"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " карта города с поворотами, где каждая ячейка является кварталом и местоположение человека (синяя точка) который направлен " + pos + "."
            + "\nЕё попросили " + whatDo + " " + conditions + ", если навигатор указывает что, " + route + ": \n <img canvas>";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана карта города с поворотами, где каждая ячейка является кварталом и местоположение человека (синяя точка) который направлен " + pos + "."
                + " Требуется определить " + conditions + ", если навигатор указывает что, " + route + ": \n <img canvas>";

        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2, 3\" (где 2 = x, 3 = y)"
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "Человек повёрнут " + pos + ", т.к. нам нужно указать на "
            + if (StringInList::contains(base, "следующем")) {"следующий поворот "}
                else if (StringInList::contains(base, "2")) {"поворот через 2 поворота "}
                else if (StringInList::contains(base, "через")) {"поворот через поворот "}
                else {""}
            + if (pos == "вверх" || pos == "налево") {"уменьшим значение "}
                else if (pos == "вниз" || pos == "направо") {"увеличим значение "}
                else {""}
            + if (pos == "вверх" || pos == "вниз") {"y на "}
                else if (pos == "налево" || pos == "направо") {"x на "}
                else {""}
            + String::from_int(steps)
            expl += " и запишем в ответ: " + ans
        
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
        
        function getArea() -> Canvas {
            let pow = 2
            let canvas = Canvas::create(800/pow, 800/pow, Color::rgb(255, 255, 255));
            
            for (let i in 1..8) {
                Canvas::text(canvas, 100*i/pow, 30/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
                Canvas::line(canvas, 100*i/pow, 40/pow, 100*i/pow, 1200/pow, Color::rgb(0, 0, 0), 2);
                
                Canvas::text(canvas, 15/pow, 100*i/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
                Canvas::line(canvas, 40/pow, 100*i/pow, 1200/pow, 100*i/pow, Color::rgb(0, 0, 0), 2);
            }
                      
            let x = 400/pow;
            let y = 500/pow;
            
            Canvas::fillEllipse(canvas, 178, 178, 45, 45, Color::rgb(0,0,255), Color::rgb(0,0,255), 2);
            Canvas::text(canvas, 178 + 23, 178 + 27, "(⊙ˍ⊙)", 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
            
            return canvas
        }
    }
*/