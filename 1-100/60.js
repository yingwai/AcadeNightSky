/*
?Создайте генератор паззлов, который будет давать координаты Вашего расположения на координатной плоскости, а также координаты нескольких объектов. Человек должен определить в каком направлении необходимо двигаться до ближайшего объекта.

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

class Pos {
    public x: int,
    public y: int
}
class Main {
    function gen_puzzle() -> Puzzle {
        let points: List<Pos> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 4)) {
            let n1 = Main::getRandomIntInRange(0, 10);
            let n2 = Main::getRandomIntInRange(0, 10);
            
            while (n1 == 5 && n2 == 5) {
                n1 = Main::getRandomIntInRange(0, 10);
                n2 = Main::getRandomIntInRange(0, 10);
            }
            
            points.push(new Pos {x: n1, y: n2});
        }
        
        let canva = Main::getArea(points);
        let ans = Main::findClosestPoint(points);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "координатная плоскость и на ней Вашего расположение (синяя точка), а также координаты нескольких объектов (красные точки)",
            "координатная плоскость с Вашим положением, отмеченным синей точкой, и координатами объектов, обозначенных красными точками",
            "координатная система с Вашей позицией (синяя точка) и расположением нескольких объектов (красные точки)",
            "плоскость координат с Вашим местоположением, выделенным синей точкой, и объектами, отмеченными красными точками",
            "координатная плоскость, на которой Ваше местоположение обозначено синей точкой, а объекты — красными",
            "график координат, где Ваше расположение указано синей точкой, а объекты показаны красными точками"
        ][Main::getRandomIntInRange(0,5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": ";
        for (let i in 0..points.length()) {
            sc += "[" + String::from_int(points[i].x) + " " + String::from_int(points[i].y) + "], ";
        }
        sc = sc[0..sc.length() - 2] + ". Её попросили " + whatDo + " координаты до ближайшего объекта: сначала по горизонтали, потом по вертикали. Если есть несколько объектов, выбрать первый из списка.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана " + conditions + ": ";
            for (let i in 0..points.length()) {
                sc += "[" + String::from_int(points[i].x) + " " + String::from_int(points[i].y) + "], ";
            }
            sc = sc[0..sc.length() - 2] + ". Требуется определить координаты до ближайшего объекта: сначала по горизонтали, потом по вертикали. Если есть несколько объектов, выбрать первый из списка.";
        }

        let desc = sc + "\n <img canvas>"
            + "\n Пример вывода, следующий:  \"4 5\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем по очереди проверять дистанцию до каждой точки: \n";
        for (let i in 0..points.length()) {
            let x = points[i].x;
            let y = points[i].y;
            
            expl += String::from_int(i+1) + ". \\((" + String::from_int(x) + " - 5)^2 + (" + String::from_int(y) + " - 5)^2 = " + String::from_int((x - 5) * (x - 5) + (y - 5) * (y - 5)) + "\\)\n";
        }
        
        expl += "\n Следовательно ответ: " + String::from_int(ans[0]) + " " + String::from_int(ans[1]);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canva
                }
            ],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans[0]) + " " + String::from_int(ans[1])
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function findClosestPoint(arr: List<Pos>) -> List<int> {
        let closestPoint: List<int> = [arr[0].x, arr[0].y];
        let minDistanceSquared = (arr[0].x - 5) * (arr[0].x - 5) + (arr[0].y - 5) * (arr[0].y - 5);

        for (let i in 1..arr.length()) {
            let x = arr[i].x;
            let y = arr[i].y;

            let distanceSquared = (x - 5) * (x - 5) + (y - 5) * (y - 5);

            if (distanceSquared < minDistanceSquared) {
                minDistanceSquared = distanceSquared;
                
                closestPoint = [x, y];
            }
        }

        return closestPoint;
    }
    
    function getArea(points: List<Pos>) -> Canvas {
        let pow = 2
        let canvas = Canvas::create(1200/pow, 1200/pow, Color::rgb(255, 255, 255));
        
        for (let i in 1..12) {
            Canvas::text(canvas, 100*i/pow, 30/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 100*i/pow, 40/pow, 100*i/pow, 1200/pow, Color::rgb(0, 0, 0), 2);
            
            Canvas::text(canvas, 15/pow, 100*i/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 40/pow, 100*i/pow, 1200/pow, 100*i/pow, Color::rgb(0, 0, 0), 2);
        }
        
        Canvas::fillEllipse(canvas, 278, 278, 45, 45, Color::rgb(0,0,255), Color::rgb(0,0,255), 2);
        
        for (let i in 0..points.length()) {
            let x = 50 * points[i].x;
            let y = 50 * points[i].y;
            Canvas::fillEllipse(canvas, 28 + x, 28 + y, 45, 45, Color::rgb(255,0,0), Color::rgb(255,0,0), 2);
        }
        
        return canvas
    }
}
*/