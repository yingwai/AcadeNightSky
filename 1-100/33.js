/*
?Создайте генератор паззлов который будет рисовать несколько фигур внутри которых будет написано время в различных форматах. Необходимо будет подсчитать и написать какой интервал времени прошел между ними.

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
        let len = Main::getRandomIntInRange(2, 8);
        let times: List<int> = [];
        let figures: List<PuzzleImage> = [];
        let interval: List<int> = [];
        let tran: List<bool> = [];
        let ans = "";
        
        for (let i in 0..len) {
            times.push(Main::getRandomIntInRange(0, 23));
        }
        
        times = ListSort::<int>::stable_sort(times);
            
        for (let i in 0..len) {
            let count = Main::getRandomIntInRange(3, 10);
            tran.push(Main::getRandomIntInRange(0, 1) == 1);
            let t = if (tran[i]) {
                if (times[i] < 10) {"0" + String::from_int(times[i])}
                else {String::from_int(times[i])} 
                    + ":00"
            } else {
                Main::convertTime(times[i])
            }
            
            figures.push(new PuzzleImage {
                name: "figure_" + String::from_int(i),
                image: Main::getFigure(count, t)
            })
        }
        
        for (let i in 1..len) {
            interval.push(times[i] - times[i - 1]);
        }
        
        for (let i in 0..interval.length()) {
            if (i == interval.length()-1) {
                ans += String::from_int(interval[i]);
                break;
            }
            
            ans += String::from_int(interval[i]) + ", "
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            "фигуры, внутри которых написано время в случайных форматах",
            "фигуры, внутри которых указано время в произвольных форматах",
            "фигуры с временем, записанным внутри в различных форматах",
            "фигуры, содержащие внутри время в случайных форматах",
            "фигуры, в которых время указано в разных форматах",
            "фигуры с временем внутри, представленным в произвольных форматах"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "и написать, какой интервал времени (часов) прошёл между соседними фигурами",
            "и указать, какой промежуток времени (в часах) прошёл между соседними фигурами",
            "и записать, сколько часов прошло между соседними фигурами",
            "и определить, какой временной интервал (в часах) разделяют соседние фигуры",
            "и отметить, сколько часов составляет интервал между соседними фигурами",
            "и отобразить интервал времени в часах, прошедший между соседними фигурами"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions1 + ": \n\n";
        for (let i in 0..len) {
            sc += "<img figure_" + String::from_int(i) + ">";
        } 
        sc += "\n\nЕё попросили " + whatDo + " " 
            + conditions2 + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны " + conditions1 + ": \n\n";
            for (let i in 0..len) {
                sc += "<img figure_" + String::from_int(i) + ">";
            } 
            sc += "\n\nТребуется определить " + conditions2 + ". ";
        }

        let desc = sc + "Ответ записать слева направо: от первой фигуры к последней."
            + "\n Пример вывода, следующий: \"5, 0, 2, 1\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "";
        let isTran = false;
        for (let i in 0..len) {
            if (!tran[i]) {
                isTran = true;
            }
            
            if (isTran && expl.length() == 0) {
                expl += "Сначала переведём имеющиеся 12 часовой формат времени в 24 часовой: "
            }
            
            if (!tran[i]) {
                expl += "\n" + Main::convertTime(times[i]) + " = " 
                    + if (times[i] < 10) {"0" + String::from_int(times[i])}
                      else {String::from_int(times[i])} 
                    + ":00"
            }
        }
        
        expl += "\n\nБудем определять сколько времени прошло между соседними фигурами: \n"
        for (let i in 1..len) {
            expl += "Между " + String::from_int(i+1) 
                + "-ой и " + String::from_int(i) 
                + "-ой фигурой: ";
            
            
            let t24 = [
                if (times[i] < 10) {"0" + String::from_int(times[i])}
                else {String::from_int(times[i])} 
                    + ":00",
                if (times[i-1] < 10) {"0" + String::from_int(times[i-1])}
                else {String::from_int(times[i-1])} 
                    + ":00"
            ];
            
            expl += t24[0] + " - " 
                    + t24[1]  + " = " 
                    + String::from_int(times[i] - times[i-1]) + "\n";
        } 
        
        expl += "\nСледовательно ответ: " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: figures,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    function getFigure(figure: int, time: String) -> Canvas {
        let fc = 2;
        let canvas = Canvas::create(100*fc, 100*fc, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        
        if (figure < 3) {figure = 3};
        
        if (figure == 3) {
            points = [
                new Point2D {x: 10*fc, y: 90*fc}, 
                new Point2D {x: 90*fc, y: 90*fc},
                new Point2D {x: 50*fc, y: 10*fc},
                new Point2D {x: 10*fc, y: 90*fc}
            ]
                
            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
            
        } else if (figure == 4) {        
            if (Main::getRandomIntInRange(0,1) == 1) {
                points = [
                    new Point2D {x: 10*fc, y: 90*fc},
                    new Point2D {x: 30*fc, y: 10*fc},
                    new Point2D {x: 70*fc, y: 10*fc},
                    new Point2D {x: 90*fc, y: 90*fc},
                    new Point2D {x: 10*fc, y: 90*fc}
                ];

                Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
            }
            else {
                points = [
                    new Point2D {x: 10*fc, y: 10*fc},
                    new Point2D {x: 90*fc, y: 10*fc},
                    new Point2D {x: 90*fc, y: 90*fc},
                    new Point2D {x: 10*fc, y: 90*fc},
                    new Point2D {x: 10*fc, y: 10*fc}
                ];

                Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
            }
        } else if (figure == 5) {                
            points = [
                new Point2D {x: 50*fc, y: 10*fc},   
                new Point2D {x: 90*fc, y: 50*fc},
                new Point2D {x: 70*fc, y: 90*fc},
                new Point2D {x: 30*fc, y: 90*fc},
                new Point2D {x: 10*fc, y: 50*fc},
                new Point2D {x: 50*fc, y: 10*fc}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 6) {                
            points = [
                new Point2D {x: 50*fc, y: 10*fc},
                new Point2D {x: 90*fc, y: 37*fc},
                new Point2D {x: 90*fc, y: 73*fc},
                new Point2D {x: 50*fc, y: 90*fc},
                new Point2D {x: 10*fc, y: 73*fc},   
                new Point2D {x: 10*fc, y: 37*fc}    
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 7) {                
            points = [
                new Point2D {x: 50*fc, y: 10*fc},
                new Point2D {x: 80*fc, y: 30*fc},
                new Point2D {x: 90*fc, y: 60*fc},
                new Point2D {x: 70*fc, y: 90*fc},
                new Point2D {x: 30*fc, y: 90*fc},
                new Point2D {x: 10*fc, y: 60*fc},
                new Point2D {x: 20*fc, y: 30*fc},
                new Point2D {x: 50*fc, y: 10*fc}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 8) {                
            points = [
                new Point2D {x: 50*fc, y: 10*fc},
                new Point2D {x: 80*fc, y: 25*fc},
                new Point2D {x: 90*fc, y: 60*fc},
                new Point2D {x: 80*fc, y: 80*fc},
                new Point2D {x: 50*fc, y: 90*fc},
                new Point2D {x: 20*fc, y: 80*fc},
                new Point2D {x: 10*fc, y: 60*fc},
                new Point2D {x: 20*fc, y: 25*fc},
                new Point2D {x: 50*fc, y: 10*fc}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 9) {                
            points = [
                new Point2D {x: 35*fc, y: 10*fc},
                new Point2D {x: 65*fc, y: 10*fc},
                new Point2D {x: 80*fc, y: 25*fc},
                new Point2D {x: 90*fc, y: 60*fc},
                new Point2D {x: 80*fc, y: 80*fc},
                new Point2D {x: 50*fc, y: 90*fc},
                new Point2D {x: 20*fc, y: 80*fc},
                new Point2D {x: 10*fc, y: 60*fc},
                new Point2D {x: 20*fc, y: 25*fc},
                new Point2D {x: 35*fc, y: 10*fc}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 10) {                
            points = [
                new Point2D {x: 35*fc, y: 10*fc},
                new Point2D {x: 65*fc, y: 10*fc},
                new Point2D {x: 80*fc, y: 25*fc},
                new Point2D {x: 90*fc, y: 60*fc},
                new Point2D {x: 80*fc, y: 80*fc},
                new Point2D {x: 65*fc, y: 90*fc},
                new Point2D {x: 35*fc, y: 90*fc},
                new Point2D {x: 20*fc, y: 80*fc},
                new Point2D {x: 10*fc, y: 60*fc},
                new Point2D {x: 20*fc, y: 25*fc},
                new Point2D {x: 35*fc, y: 10*fc}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        }
        
        Canvas::text(canvas, 100*fc/2, 100*fc/2+20, time, 18, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        return canvas;
    }
    
    function convertTime(time: int) -> String {
        let period = 
            if (time < 12) {"AM"} 
            else {"PM"};
        let time12 = 0;
        if (time % 12 == 0) {
          time12 = 12;
        } else {
          time12 = time % 12;
        }
        
        return 
            if (time12 < 10) {"0" + String::from_int(time12)}
            else {String::from_int(time12)}
            + ":00 " + period;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/