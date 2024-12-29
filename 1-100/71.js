/*
?Создайте генератор заданий, в котором будет дан маршрут человека из точки А в точку Б. В варианты ответа добавьте различные вариации, которые мог предложить навигатор. Среди которых будет одно правильное. Пример ответов: 1. На этом перекрестке прямо, на следующем направо, потом налево и потом прямо. 2. На этом перекрестке направо, на следующем налево, потом прямо и потом направо. Маршрут изображайте в виде линий, которые присоединены друг другу перпендикулярно.

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
        
        for (let i in 0..Main::getRandomIntInRange(2, 4)) {
            route.push("На этом перекрестке " + "прямо|направо|налево".split("|")[Main::getRandomIntInRange(0, 2)] + ", на следующем " + "прямо|направо|налево".split("|")[Main::getRandomIntInRange(0, 2)] + ", потом " + "прямо|направо|налево".split("|")[Main::getRandomIntInRange(0, 2)] + " и потом " + "прямо|направо|налево".split("|")[Main::getRandomIntInRange(0, 2)] + ".");
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..route.length()) {
            list += String::from_int(i+1) + ". " + route[i] + "\n"
        }
        
        let ans = Main::getRandomIntInRange(0, route.length()-1);
        let canvas = Main::getArea(route[ans]);
        
        let conditions = [
            "номер нужного маршрута, если известно, что правильный маршрут изображён на рисунке",
            "номер маршрута, который соответствует правильному, изображенному на рисунке",
            "какой номер имеет правильный маршрут, если он показан на рисунке",
            "номер маршрута, если правильный маршрут изображен на картинке",
            "какой маршрут правильный, если он отображён на рисунке, и его номер",
            "номер правильного маршрута, если он изображён на рисунке"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько маршрутов от точки А до точки Б: \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + " " 
            + "(учитывая то, что ходить нужно в ту сторону, куда смотрит человек, на старте он смотрит вверх и поворачивается в зависимости от направления передвижения): \n <img canvas>";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны несколько маршрутов от точки А до точки Б: \n" + list
                + "Требуется определить " + conditions + " " 
                + "(учитывая то, что ходить нужно в ту сторону, куда смотрит человек, на старте он смотрит вверх и поворачивается в зависимости от направления передвижения): \n <img canvas>";

        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let direction = [
            route[ans].split(" ")[3].split(",")[0],
            route[ans].split(" ")[6].split(",")[0],
            route[ans].split(" ")[8],
            route[ans].split(" ")[11].split(".")[0]
        ];
        let expl = "Человек смотрит прямо (вверх если смотреть на изображение сверху вниз), и идёт " + direction[0] 
            + "\nТеперь человек смотрит в ту же сторону куда и повернул (или пошёл прямо), теперь он идёт " + direction[1]
            + "\nСледующий шаг " + direction[2] + " и " + direction[3] + ". Следовательно, исходя из шагов человека: " + String::join(direction, ", ") + ", под ответ подходит маршрут " + String::from_int(ans+1);
        
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
                    answer: String::from_int(ans+1)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getArea(route: String) -> Canvas {
        let pow = 2
        let canvas = Canvas::create(800/pow, 800/pow, Color::rgb(255, 255, 255));
        
        for (let i in 1..8) {
            Canvas::text(canvas, 100*i/pow, 30/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 100*i/pow, 40/pow, 100*i/pow, 1200/pow, Color::rgb(0, 0, 0), 2);
            
            Canvas::text(canvas, 15/pow, 100*i/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 40/pow, 100*i/pow, 1200/pow, 100*i/pow, Color::rgb(0, 0, 0), 2);
        }
        
        let direction = [
            route.split(" ")[3].split(",")[0],
            route.split(" ")[6].split(",")[0],
            route.split(" ")[8],
            route.split(" ")[11].split(".")[0]
        ];
            
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