/*
?Создайте генератор паззлов, который будет рисовать два домика с несколькими пронумерованными этажами (рисовать следует геометрическими фигурами, например, этаж обозначить прямоугольником, а крышу треугольником) и на каждом этаже будет определённое количество кукол (куклы возможно нарисовать с помощью круга сверху и треугольника снизу). Генератор будет просить определить в каком домике больше кукол и в данном домике определить (и ввести) номер этажа, где расположено наибольшее количество кукол.

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
        let dolls: List<List<int> > = [];
        let sum: List<int> = [0, 0];
        
        for (let i in 0..2) {
            let arr: List<int> = [];
            
            for (let j in 0..Main::getRandomIntInRange(2, 4)) {
                arr.push(Main::getRandomIntInRange(0, 6))
            }
            
            dolls.push(arr);
                
            for (let n in 0..arr.length()) {
                sum[i] = sum[i] + arr[n];
            }
        }
        
        let canvas: List<PuzzleImage> = [];
        
        for (let i in 0..2) {
            canvas.push(
                new PuzzleImage {
                    name: "h_" + String::from_int(i),
                    image: Main::getHouse(dolls[i].length(), dolls[i])
                }
            )
        }
        
        let ans = String::from_int(if (sum[0] >= sum[1]) {Main::maxIntIndex(dolls[0], true)} else {Main::maxIntIndex(dolls[1], true)} + 1);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "в каком домике больше кукол и в данном домике определить номер этажа, где расположено наибольшее количество кукол",
            "в каком домике находится больше всего кукол, и указать номер в этом домике этажа с их максимальным количеством",
            "в каком домике больше кукол, и найти этаж в нём с наибольшим их числом в этом домике",
            "домик с максимальным количеством кукол и в нём номер этажа, где их больше всего",
            "домик с самым большим количеством кукол и этаж в нём с их максимальным числом",
            "домик, где больше всего кукол, и номер этажа в нём с их наибольшим количеством"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два дома с куклами (нарисованных как голова - круг, тело - квадрат): \n<img h_0><img h_1>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два дома с куклами (нарисованных как голова - круг, тело - квадрат): \n<img h_0><img h_1>"
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Если в двух домах одинаковое количество кукол, берём первый дом. Если в доме есть одинаковое количество кукл, в ответ записываем куклу, которая находится этажом ниже."
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала рассчитаем в каком доме больше кукл: в первом доме - " + String::from_int(sum[0]) + ", а во втором - " + String::from_int(sum[1]) + ". \n"
            + "Т.к. " + if (sum[0] > sum[1]) {"в первом доме кукл больше, найдём нужный этаж в нём.\n"} else if (sum[0] < sum[1]) {"во втором доме кукл больше, найдём нужный этаж в нём.\n"} else {"в двух домах кукл одинаково, найдём нужный этаж в первом доме.\n"}
            + "Теперь найдём на каком этаже больше кукл и запишем в ответ: " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canvas,
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
    
    function maxIntIndex(arr: List<int>, more: bool) -> int {
        let n = arr[0];
        let index = 0;

        if (more) {
            for (let i in 1..arr.length()) {
                if (arr[i] > n) {
                    n = arr[i];
                    index = i;
                }
            }
        } else {
            for (let i in 1..arr.length()) {
                if (arr[i] < n) {
                    n = arr[i];
                    index = i;
                }
            }
        }

        return index;
    }
    
    function getHouse(floor: int, dolls: List<int>) -> Canvas {
        let fc = 2;        
        let canvas = Canvas::create(100*fc, 265*fc, Color::rgb(255, 255, 255));
        
        let points = [
            new Point2D {x: 10*fc, y: 200*fc-100*(floor-1)}, 
            new Point2D {x: 90*fc, y: 200*fc-100*(floor-1)},
            new Point2D {x: 50*fc, y: 200*fc-100*(floor-1) - 45*fc},
            new Point2D {x: 10*fc, y: 200*fc-100*(floor-1)}
        ]
                
        Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        
        for (let i in 0..floor) {
            Canvas::rect(canvas, 25 * fc, 200 * fc - (100 * i), 50 * fc, 50 * fc, Color::rgb(0,0,0), 2);
            Canvas::text(canvas, 40, 225 * fc - (100 * i), String::from_int(i+1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            
            for (let i in 0..dolls.length()) {
                for (let j in 0..dolls[i]) {
                    if (j < 3) {
                        Canvas::ellipse(canvas, 30 * fc + (27 * j), 205 * fc - (100 * i), 50/5 * fc, 50/5 * fc, Color::rgb(0,0,0), 2);
                        Canvas::rect(canvas, 30 * fc + (27 * j), 214 * fc - (100 * i), 50/5 * fc, 50/5 * fc, Color::rgb(0,0,0), 2);
                    } else {
                        Canvas::ellipse(canvas, 30 * fc + (27 * (j - 3)), 228 * fc - (100 * i), 50/5 * fc, 50/5 * fc, Color::rgb(0,0,0), 2);
                        Canvas::rect(canvas, 30 * fc + (27 * (j - 3)), 237 * fc - (100 * i), 50/5 * fc, 50/5 * fc, Color::rgb(0,0,0), 2);
                    }
                }
            }
        }
        
        return canvas;
    }
}
*/