/*
?Сделайте генератор заданий, в которых показан ряд, состоящий из нескольких различных объектов (прямоугольников, треугольников, пятиугольников и так далее). Ниже покажите ещё один ряд, из тех же объектов, но с некоторыми изменениями. Например одни объекты увеличьте в размере, другие поверните, третьи перекрасьте в другой цвет и так далее.Решающему следует отыскать только те объекты, состояние которых поменялось обусловленным ранее способом (например те, которые поменяли цвет).
*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::canvas::Canvas;
import nightsky::canvas::Color;
import nightsky::canvas::TextAlign;
import nightsky::canvas::TextAlignLeft;
import nightsky::canvas::TextAlignRight;
import nightsky::canvas::TextAlignCenter;
import nightsky::canvas::Point2D;
import std::math::Math;
import std::collections::List;
import std::collections::ListSort;
import std::string::String;

class Main {
    function gen_puzzle() -> Puzzle {
        let figures: List<PuzzleImage> = [];
        let figures_fake: List<PuzzleImage> = [];
        let len = Main::getRandomIntInRange(2, 10);        
        let fake_index = Main::getRandomIntInRange(0, len - 1);
        let lie = Main::getRandomIntInRange(0, 3)
        
        for (let i in 0..len) {
            let index = Main::getRandomIntInRange(3, 10);
            let stroke = Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255));
            let fill = Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255));
            
            figures.push(new PuzzleImage {
                name: "figure_" + String::from_int(i),
                image: Main::getRandomFigure(index, stroke, fill, 1)
            });
            figures_fake.push(new PuzzleImage {
                name: "figure_fake_" + String::from_int(i),
                image: figures[i].image
            });
            
            if (i == fake_index) {
                if (lie == 0) {
                    figures_fake[i].image = Main::getRandomFigure(Main::getRandomIntInRange(3, 10), stroke, fill, 1);
                } else if (lie == 1) {
                    figures_fake[i].image = Main::getRandomFigure(index, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)), fill, 1);
                } else if (lie == 2) {
                    figures_fake[i].image = Main::getRandomFigure(index, stroke, Color::rgb(Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255), Main::getRandomIntInRange(0, 255)), 1);
                } else if (lie == 3) {
                    figures_fake[i].image = Main::getRandomFigure(index, stroke, fill, 2);
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "написать ячейку таблицы, где фигура в первой и второй таблице не совпадает",
            "указать ячейку таблицы, где фигура в первой и второй таблицах различается",
            "написать ячейку, в которой фигуры в первой и второй таблице не совпадают",
            "определить ячейку таблицы с несовпадающими фигурами в первой и второй таблицах",
            "указать ячейку, где фигуры в первой и второй таблицах отличаются",
            "записать ячейку, в которой фигуры в первой и второй таблице разные"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " две табилцы: \n ";
        sc += "\n<b>Табилца 1</b> \n <tr>";
        for (let i in 0..len) {
            sc += "<td><img figure_" + String::from_int(i) + "></td>"
        }
        sc += "</tr>\n";
        sc += "\n<b>Табилца 2</b> \n <tr>";
        for (let i in 0..len) {
            sc += "<td><img figure_fake_" + String::from_int(i) + "></td>"
        }
        sc += "</tr>\n"
            + "\nЕё попросили " + whatDo 
            + " и " + conditions + ".";
        
        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Требуется " + conditions + ". ";
            
            sc += "\n\n<b>Табилца 1</b> \n <tr>";
            for (let i in 0..len) {
                sc += "<td><img figure_" + String::from_int(i) + "></td>"
            }
            sc += "</tr>\n";
            sc += "\n<b>Табилца 2</b> \n <tr>";
            for (let i in 0..len) {
                sc += "<td><img figure_fake_" + String::from_int(i) + "></td>"
            }
            sc += "</tr>\n";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"5\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Проверяем каждую ячейку по очереди и видим что " + String::from_int(fake_index + 1) + "-ая ячейка отлчивается "
        if (lie == 0) {expl += "количеством углов у фигуры (т.е. это другая фигура)"} 
        else if (lie == 1) {expl += "цветом обводки фигуры"} 
        else if (lie == 2) {expl += "цветом фигуры"} 
        else if (lie == 3) {expl += "размером фигуры"}
        expl += ".\nСледовательно ответ: " + String::from_int(fake_index + 1);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: figures + figures_fake,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(fake_index + 1)
                } as Reveal
            ],
        }
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getRandomFigure(figure: int, stroke: Color, fill: Color, pow: int) -> Canvas {
        let canvas = Canvas::create(100*pow, 100*pow, Color::rgb(255, 255, 255));
        
        if (figure < 3) {figure = 3};
        
        if (figure == 3) {
            let points = [
                new Point2D {x: 10*pow, y: 90*pow}, 
                new Point2D {x: 90*pow, y: 90*pow},
                new Point2D {x: 50*pow, y: 10*pow},
                new Point2D {x: 10*pow, y: 90*pow}
            ]
                
            Canvas::fillPolygon(canvas, points, stroke, fill, 2)
        } else if (figure == 4) {                
            Canvas::fillRect(canvas, 10*pow, 10*pow, 80*pow, 80*pow, stroke, fill, 2)
        } else if (figure == 5) {                
            let points = [
                new Point2D {x: 50*pow, y: 10*pow},   
                new Point2D {x: 90*pow, y: 50*pow},
                new Point2D {x: 70*pow, y: 90*pow},
                new Point2D {x: 30*pow, y: 90*pow},
                new Point2D {x: 10*pow, y: 50*pow},
                new Point2D {x: 50*pow, y: 10*pow}
            ];

            Canvas::fillPolygon(canvas, points, stroke, fill, 2);
        } else if (figure == 6) {                
            let points = [
                new Point2D {x: 50*pow, y: 10*pow},
                new Point2D {x: 90*pow, y: 37*pow},
                new Point2D {x: 90*pow, y: 73*pow},
                new Point2D {x: 50*pow, y: 90*pow},
                new Point2D {x: 10*pow, y: 73*pow},   
                new Point2D {x: 10*pow, y: 37*pow}    
            ];

            Canvas::fillPolygon(canvas, points, stroke, fill, 2);
        } else if (figure == 7) {                
            let points = [
                new Point2D {x: 50*pow, y: 10*pow},
                new Point2D {x: 80*pow, y: 30*pow},
                new Point2D {x: 90*pow, y: 60*pow},
                new Point2D {x: 70*pow, y: 90*pow},
                new Point2D {x: 30*pow, y: 90*pow},
                new Point2D {x: 10*pow, y: 60*pow},
                new Point2D {x: 20*pow, y: 30*pow},
                new Point2D {x: 50*pow, y: 10*pow}
            ];

            Canvas::fillPolygon(canvas, points, stroke, fill, 2);
        } else if (figure == 8) {                
            let points = [
                new Point2D {x: 50*pow, y: 10*pow},
                new Point2D {x: 80*pow, y: 25*pow},
                new Point2D {x: 90*pow, y: 60*pow},
                new Point2D {x: 80*pow, y: 80*pow},
                new Point2D {x: 50*pow, y: 90*pow},
                new Point2D {x: 20*pow, y: 80*pow},
                new Point2D {x: 10*pow, y: 60*pow},
                new Point2D {x: 20*pow, y: 25*pow},
                new Point2D {x: 50*pow, y: 10*pow}
            ];

            Canvas::fillPolygon(canvas, points, stroke, fill, 2);
        } else if (figure == 9) {                 
            let points = [
                new Point2D {x: 35*pow, y: 10*pow},
                new Point2D {x: 65*pow, y: 10*pow},
                new Point2D {x: 80*pow, y: 25*pow},
                new Point2D {x: 90*pow, y: 60*pow},
                new Point2D {x: 80*pow, y: 80*pow},
                new Point2D {x: 50*pow, y: 90*pow},
                new Point2D {x: 20*pow, y: 80*pow},
                new Point2D {x: 10*pow, y: 60*pow},
                new Point2D {x: 20*pow, y: 25*pow},
                new Point2D {x: 35*pow, y: 10*pow}
            ];

            Canvas::fillPolygon(canvas, points, stroke, fill, 2);
        } else if (figure == 10) {                
            let points = [
                new Point2D {x: 35*pow, y: 10*pow},
                new Point2D {x: 65*pow, y: 10*pow},
                new Point2D {x: 80*pow, y: 25*pow},
                new Point2D {x: 90*pow, y: 60*pow},
                new Point2D {x: 80*pow, y: 80*pow},
                new Point2D {x: 65*pow, y: 90*pow},
                new Point2D {x: 35*pow, y: 90*pow},
                new Point2D {x: 20*pow, y: 80*pow},
                new Point2D {x: 10*pow, y: 60*pow},
                new Point2D {x: 20*pow, y: 25*pow},
                new Point2D {x: 35*pow, y: 10*pow}
            ];

            Canvas::fillPolygon(canvas, points, stroke, fill, 2);
        }
        
        return canvas
    }
}
*/