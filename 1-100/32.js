/*
?Создайте генератор паззлов, который рисует три геометрические фигуры, со значениями площадей данных фигур в целых числах, и просит рассчитать и ввести значение отношения площади самой большой фигуры к наименьшей.

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
        let n = Main::getRandomIntInRange(3, 9);
        let S: List<int> = [];
        let F: List<PuzzleImage> = [];
        
        for (let i in 0..n) {
            S.push(Main::getRandomIntInRange(1, 15));
            F.push(new PuzzleImage {
                name: "figure_" + String::from_int(i),
                image: Main::getFigure(Main::getRandomIntInRange(3, 10), S[i])
            });
        }
        
        let ans = Main::getRatio(S);
                
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "и ввести значение отношения площади самой большой фигуры к наименьшей",
            "и ввести значение отношения площади наибольшей фигуры к площади наименьшей",
            "и указать отношение площади самой большой фигуры к площади самой маленькой",
            "и ввести показатель отношения площади самой крупной фигуры к наименьшей",
            "и ввести значение, показывающее отношение площади самой большой фигуры к меньшей",
            "и записать отношение площади крупной фигуры к площади маленькой"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task 
            + " несколько геометрических фигур, со значениями площадей данных фигур в целых числах" + ".\n\n"
        for (let i in 0..n) {
            sc += "<img figure_" + String::from_int(i) + ">";
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions 
            + ". Если присутсвуют фигуры с одинаковой площадью, берём площадь первой фигуры из списка.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько геометрических фигур, со значениями площадей данных фигур в целых числах" + ".\n\n"
                for (let i in 0..n) {
                    sc += "<img figure_" + String::from_int(i) + ">";
                } 
            sc += "\nТребуется определить " + conditions 
                + ". Если присутсвуют фигуры с одинаковой площадью, берём площадь первой фигуры из списка.";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: число округлённое до сотых."
            + "\n Пример: 5.00"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим фигуру с наибольшей и наименьшей площадью: \n";
        
        S = ListSort::<int>::stable_sort(S);
        
        for (let i in 0..n) {
            if (i != 0 && S[i] == S[i-1]) {
                continue;
            }
            
            expl += String::from_int(S[i]) + " < ";
        }
        
        expl = String::join(
                expl.split("<")[0..expl.split("<").length()-1],
                "<"
            ) + "\n Получается что наибольшая площадь - это " 
            + String::from_int(S[S.length()-1])
            + ", а наименьшая "
            + String::from_int(S[0])
            + ". \n Теперь посчитаем их разность и запишем в ответ: \\(\\frac{"
            + String::from_int(S[S.length()-1])
            + "}{" + String::from_int(S[0])
            + "} = " + ans + "\\)";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: F,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }
    
    function getFigure(figure: int, square: int) -> Canvas {
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
        
        Canvas::text(canvas, 100*fc/2, 100*fc/2+20, "S = " + String::from_int(square), 18, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        return canvas;
    }
    
    function getRatio(areas: List<int>) -> String {
        areas = ListSort::<int>::stable_sort(areas);
        
        let minArea = areas[0];
        let maxArea = areas[areas.length()-1];

        return Main::round(maxArea as float / minArea as float, 2);
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign = "";
        if (p < 0.0) {
          sign = "-";
          p = -p;
        }

        let coeff = 1;
        for (let i in 0..after_dot) {
          coeff *= 10;
        }

        p *= coeff as float;
        let int_p = (p + 0.5) as int;

        let after_string = String::from_int(int_p % coeff);
        for (let i in after_string.length()..after_dot) {
          after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
}
*/