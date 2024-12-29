/*
?Создайте генератор, в котором на входе у вас будут генерироваться несколько фигур, у которых будет разное количество углов или сторон. В данных фигурах будут сгенерированы линии. Нужно будет первым делом найти фигуру в которой больше/меньше сторон/углов и затем посчитать сколько в данной фигуре линий.

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

class Line {
    public line: List<int>
}

class Figure {
    public angles: int,
    public lines: int,
    public canvas: Canvas
}

class Main {    
    function gen_puzzle() -> Puzzle {
        let amount = Main::getRandomIntInRange(2, 9);
        let max = Main::getRandomIntInRange(0, 1) == 1;
        let figures: List<Figure> = [];
        let canvases: List<PuzzleImage> = [];
        
        for (let i in 0..amount) {
            figures.push(Main::getFigure(Main::getRandomIntInRange(3, 10)));
            canvases.push(new PuzzleImage {
                name: "figure_" + String::from_int(i),
                image: figures[i].canvas
            });
        }
        
        let ans = Main::findShapeLinesByAngles(figures, max);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let a = "углов/сторон".split("/")[Main::getRandomIntInRange(0, 1)];
        let conditions = [
            " и написать в ответ количество линий внутри фигуры, если есть несколько фигур с одинаковым количество ",
            " и указать количество линий внутри фигуры, если есть несколько фигур с одинаковым количеством ",
            " и написать, сколько линий находится внутри фигуры, если несколько фигур имеют одинаковое количество ",
            " и указать количество линий внутри фигуры, если среди фигур есть те, что имеют одинаковое количество ",
            " и написать в ответ количество линий в фигуре, если имеются несколько фигур с идентичным количеством ",
            " и указать количество линий внутри данной фигуры, если есть несколько фигур с равным количеством "
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " фигуры с линиями внутри.\n";
        for (let i in 0..amount) {
            sc += "<img figure_" + String::from_int(i) + ">";
        }
        sc += "\nЕё попросили " + whatDo 
            + " фигуру с ";
        if (max) {sc += "наибольшим"} else {sc += "наименьшим"}
        sc += " количеством " + a +  conditions + a 
            + " в ответ написать количество линий, из первой нарисованной фигуры с ";
        if (max) {sc += "наибольшим"} else {sc += "наименьшим"}
        sc += " количеством " + a + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны нарисованные фигуры с линиями внутри.\n"
            for (let i in 0..amount) {
                sc += "<img figure_" + String::from_int(i) + ">";
            }
            sc += "\nТребуется определить фигуру с ";
            if (max) {sc += "наибольшим"} else {sc += "наименьшим"}
            sc += " количеством " + a +  conditions + a 
                + " в ответ написать количество линий, из первой нарисованной фигуры с ";
            if (max) {sc += "наибольшим"} else {sc += "наименьшим"}
            sc += " количеством " + a + ". ";
        }

        let desc = sc 
            + "\n Пример: 2"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем проверять все фигуры на количество углов и линий внутри:\n";
        for (let i in 0..amount) {
            expl += String::from_int(i + 1) + " фигура " 
                + String::from_int(figures[i].angles)
                + Main::declOfNum(figures[i].angles, ["","-ёх","-ти"])
                + " уголник с "
                + String::from_int(figures[i].lines)
                + Main::declOfNum(figures[i].lines, [" линией"," линиями"," линиями"])
                + "\n"
        }
        expl += "Т.к. нам нужна фигура с ";
        if (max) {expl += "наибольшим"} else {expl += "наименьшим"}
        expl += " количеством " + a + ", ответ будет " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canvases,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }
    
    function findShapeLinesByAngles(figure: List<Figure>, max: bool) -> String {
        let targetFigure = figure[0];

        for (let i in 1..figure.length()) {
            if ((max && figure[i].angles > targetFigure.angles) || 
                (!max && figure[i].angles < targetFigure.angles)) {
                targetFigure = figure[i];
            }
        }

        return  String::from_int(targetFigure.lines);
    }
    function doesLineFitInPolygon(figure: List<Point2D>, points: List<int>) -> bool {
        let lineStart = new Point2D{ x: points[0], y: points[1] };
        let lineEnd = new Point2D{ x: points[2], y: points[3] };

        // Проверяем, что обе точки линии находятся внутри многоугольника
        if (!Main::isPointInPolygon(figure, [lineStart.x, lineStart.y]) 
            || !Main::isPointInPolygon(figure, [lineEnd.x, lineEnd.y])) {
            return true;
        }
        
        // Проверяем каждое ребро многоугольника
        for (let i in 0..figure.length()) {
            let j = if (i == 0) {figure.length() - 1} else {i - 1}; // Соединяем последнюю точку с первой

            let polygonEdgeStart = figure[i];
            let polygonEdgeEnd = figure[j];

            if (Main::doLinesIntersect(lineStart, lineEnd, polygonEdgeStart, polygonEdgeEnd)) {
                return true; // Линия пересекает хотя бы одно ребро многоугольника
            }
        }

        return false; // Линия не пересекает многоугольник
    }
    
    function isPointInPolygon(points: List<Point2D>, point: List<int>) -> bool {
        let isInside = false;

        for (let i in 0..points.length()) {
            let j = if (i == 0) {points.length() - 1} else {i - 1}; // Соединяем последнюю точку с первой

            let xi = points[i].x;
            let yi = points[i].y;
            
            let xj = points[j].x; 
            let yj = points[j].y;

            let intersect = ((yi > point[1]) != (yj > point[1])) &&
                              (point[0] < (xj - xi) * (point[1] - yi) / (yj - yi) + xi);
            if (intersect) {
                isInside = !isInside;
            }
        }

        return isInside;
    }
    
    function doLinesIntersect(p1: Point2D, p2: Point2D, p3: Point2D, p4: Point2D) -> bool {
        let o1 = Main::orientation(p1, p2, p3);
        let o2 = Main::orientation(p1, p2, p4);
        let o3 = Main::orientation(p3, p4, p1);
        let o4 = Main::orientation(p3, p4, p2);

        // Основной случай: отрезки пересекаются, если ориентации отличаются
        if (o1 != o2 && o3 != o4) {return true};

        // Дополнительные случаи: когда точки коллинеарны и лежат на отрезках
        if (o1 == 0 && Main::onSegment(p1, p3, p2)) {return true};
        if (o2 == 0 && Main::onSegment(p1, p4, p2)) {return true};
        if (o3 == 0 && Main::onSegment(p3, p1, p4)) {return true};
        if (o4 == 0 && Main::onSegment(p3, p2, p4)) {return true};

        return false;
    }
    
    function orientation(p: Point2D, q: Point2D, r: Point2D) -> int {
        // Вычисляет ориентацию: 0 — коллинеарны, 1 — по часовой, 2 — против часовой
        let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
        if (val == 0) {return 0};
        return if (val > 0) {1} else {2};
    }
    
    function onSegment(p: Point2D, q: Point2D, r: Point2D) -> bool {
        // Проверяет, лежит ли точка q на отрезке pr
        return q.x <= ListSort::<int>::stable_sort([p.x, r.x])[1] 
                    && q.x >= ListSort::<int>::stable_sort([p.x, r.x])[0] &&
               q.y <= ListSort::<int>::stable_sort([p.y, r.y])[1] 
                   && q.y >= ListSort::<int>::stable_sort([p.y, r.y])[0];
    }
    
    function getFigure(figure: int) -> Figure {
        let fc = 2;
        let canvas = Canvas::create(100*fc, 100*fc, Color::rgb(255, 255, 255));
        
        let points: List<Point2D> = [];
        let n = Main::getRandomIntInRange(1,5);
        let lines: List<Line> = [];
        
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
        
        for (let i in 0..n) {
            lines.push(new Line {
                line: Main::getLine(fc)
            });
            
            let min = false;
            while (Main::doesLineFitInPolygon(points, lines[i].line)) {
                lines[i].line = Main::getLine(fc);
            }
        
            Canvas::line(canvas, 
                         lines[i].line[0], lines[i].line[1], 
                         lines[i].line[2], lines[i].line[3], 
                         Color::rgb(
                             Main::getRandomIntInRange(1, 222), 
                             Main::getRandomIntInRange(1, 222), 
                             Main::getRandomIntInRange(1, 222)), 
                         2);
        }
        
        return new Figure {
            angles: figure,
            lines: n,
            canvas: canvas
        }
    }
    
    function getLine(fc: int) -> List<int> {
            let line = [Main::getRandomIntInRange(10*fc, 90*fc),
                Main::getRandomIntInRange(10*fc, 90*fc),
                Main::getRandomIntInRange(10*fc, 90*fc),
                Main::getRandomIntInRange(10*fc, 90*fc)
            ];

            while (!((line[0] - line[2] >= 15) || (line[1] - line[3] >= 15))) {
                line[0] = Main::getRandomIntInRange(10*fc, 90*fc);
                line[1] = Main::getRandomIntInRange(10*fc, 90*fc);
                line[2] = Main::getRandomIntInRange(10*fc, 90*fc);
                line[3] = Main::getRandomIntInRange(10*fc, 90*fc);
            }

            return line
        }

        function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/