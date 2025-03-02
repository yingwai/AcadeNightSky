/*
?Создайте генератор паззлов, который генерирует несколько кварталов, названия улиц и маршрут из начальной точки в конечную. После этого он просит посчитать, по какому количеству различных улиц проходит маршрут.

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
        let route: List<String> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 5)) {
            route.push("прямо|направо|налево".split("|")[Main::getRandomIntInRange(0, 2)]);
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let ans = 1;
        let canvas = Main::getArea(route);
        for (let i in 1..route.length()) {
            if (route[i] == "направо" || route[i] == "налево") {
                ans += 1
            }
        }
        
        let conditions = [
            "по какому количеству различных улиц проходит маршрут",
            "сколько различных улиц проходит этот маршрут",
            "по скольким улицам проходит маршрут",
            "количество различных улиц, которые проходит маршрут",
            "сколько разных улиц проходит маршрут",
            "суммарное количество разных улиц, через которые проходит маршрут"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько кварталов, названия улиц слева и сверху и маршрут из начальной точки в конечную: \n <img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько кварталов, названия улиц слева и сверху и маршрут из начальной точки в конечную: \n <img canvas>"
                + "\nТребуется определить " + conditions + ".";

        }

        let desc = sc + " Если известно, что после каждого поворота на карте, объект (или человек) оказывается на новой улице. Начальная точка маршрута - это А."
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "Представим что изначально объект смотрит на север, а после каждого поворота поворачивается в ту же сторону, например: при повороте налево, объект будет смотреть на запад и т.д. \nРассмотрим путь как очередность проходимых отрезков, изначально точка расположена на улицах 4 или a_3 (смотря куда пойдёт объект (или человек)), определим в каком направлении проходит маршрут: \n";
        let temp = 1;
        for (let i in 0..route.length()) {
            expl += String::from_int(i+1) + ". " + route[i] + ": т.к. объект отправился " 
                + if (i == 0) {
                    if (route[i] == "прямо") {route[i] + ", следовательно он проходит улицу a_3"} else {route[i] + ", следовательно он проходит улицу 4"} + ", а общее количество улиц стало равно " + String::from_int(temp)
                } else {
                    if (route[i] == "направо" || route[i] == "налево") {
                        temp += 1
                    }
                    if (route[i] == "прямо") {route[i] + ", то проходимая улица не изменилась"} else {route[i] + ", то теперь он проходит по другой улице, следовательно увеличиваем общее количество на 1: " + String::from_int(temp)}
                } + " \n"
        }
        expl += "\n Следовательно, маршрут прошёл через " + community::near::spensa2::plural::PluralRu::pluralify(ans, "улицу", "улицы", "улиц") + "."
        
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
    
    function getArea(route: List<String>) -> Canvas {
        let pow = 2
        let canvas = Canvas::create(800/pow, 800/pow, Color::rgb(255, 255, 255));
        
        for (let i in 1..8) {
            Canvas::text(canvas, 100*i/pow, 30/pow, "a_" + String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 100*i/pow, 40/pow, 100*i/pow, 1200/pow, Color::rgb(0, 0, 0), 2);
            
            Canvas::text(canvas, 15/pow, 100*i/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 40/pow, 100*i/pow, 1200/pow, 100*i/pow, Color::rgb(0, 0, 0), 2);
        }
        
        let direction: List<String> = [];
        for (let i in route) {
            direction.push(i)
        }
                    
        for (let i in 1..direction.length()) {
            if (direction[i-1] == "прямо") {
                if (direction[i] == "прямо") {direction[i] = "прямо"}
                else if (direction[i] == "направо") {direction[i] = "направо"}
                else if (direction[i] == "налево") {direction[i] = "налево"}
            }
            else if (direction[i-1] == "вниз") {
                if (direction[i] == "прямо") {direction[i] = "вниз"}
                else if (direction[i] == "направо") {direction[i] = "налево"}
                else if (direction[i] == "налево") {direction[i] = "направо"}
            }
            else if (direction[i-1] == "направо") {
                if (direction[i] == "прямо") {direction[i] = "направо"}
                else if (direction[i] == "направо") {direction[i] = "вниз"}
                else if (direction[i] == "налево") {direction[i] = "прямо"}
            }
            else if (direction[i-1] == "налево") {
                if (direction[i] == "прямо") {direction[i] = "налево"}
                else if (direction[i] == "направо") {direction[i] = "прямо"}
                else if (direction[i] == "налево") {direction[i] = "вниз"}
            }
        }
        
        let x = 400/pow;
        let y = 500/pow;
        
        for (let d in direction) {
            if (d == "прямо") {
                Canvas::line(canvas, x, y, x, y - 50, Color::rgb(34,139,34), 5);
                
                y -= 50;
            }
            else if (d == "вниз") {
                Canvas::line(canvas, x, y, x, y + 50, Color::rgb(34,139,34), 5);
                
                y += 50;
            }
            else if (d == "направо") {
                Canvas::line(canvas, x, y, x + 50, y, Color::rgb(34,139,34), 5);
                
                x += 50;
            }
            else if (d == "налево") {
                Canvas::line(canvas, x, y, x - 50, y, Color::rgb(34,139,34), 5);
                
                x -= 50;
            }
        }
        
        Canvas::fillEllipse(canvas, 178, 228, 45, 45, Color::rgb(0,0,255), Color::rgb(0,0,255), 2);
        Canvas::text(canvas, 178 + 23, 228 + 34, "А", 35, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        
        Canvas::fillEllipse(canvas, x-22, y-22, 45, 45, Color::rgb(255,0,0), Color::rgb(255,0,0), 2);
        Canvas::text(canvas, x-22 + 23, y-22 + 34, "Б", 35, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        
        return canvas
    }
}
*/