/*
?Создайте генератор паззлов, в которых будут даны 2 таблицы с фигурами. При этом во второй из таблиц фигура в каждой ячейке должна иметь на 1 угол больше, чем фигура в этой же ячейке первой таблицы. Сделайте так, чтобы для какой-то одной ячейки эта зависимость не выполнялась. Требуется указать на эту ячейку в одной из таблиц.

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
        let fake_index = 0;
        let len = Main::getRandomIntInRange(2, 10);
        
        for (let i in 0..len) {
            let index = Main::getRandomIntInRange(3, 9);
            
            figures.push(new PuzzleImage {
                name: "figure_" + String::from_int(i),
                image: Main::getRandomFigure(index)
            });
            figures_fake.push(new PuzzleImage {
                name: "figure_fake_" + String::from_int(i),
                image: Main::getRandomFigure(index + 1)
            });
        }
            
        let fake_index = Main::getRandomIntInRange(0, figures.length() - 1);
        let f_index = Main::getRandomIntInRange(3, 10);
        figures[fake_index].image = Main::getRandomFigure(f_index);
        figures_fake[fake_index].image = Main::getRandomFigure(f_index);
        fake_index += 1;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "написать ячейку таблицы, где фигуры из первой и второй таблиц имеют равное количество углов.",
            "указать ячейку, в которой фигуры первой и второй таблиц обладают одинаковым числом углов.",
            "определить ячейку, где количество углов фигур из обеих таблиц совпадает.",
            "определить ячейку с равным количеством углов для фигур первой и второй таблиц.",
            "найти ячейку, в которой количество углов фигур из обеих таблиц совпадает."
        ][Main::getRandomIntInRange(0, 4)];

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
            + " и " + conditions;
        
        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Требуется " + conditions;
            
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
            + "\n Пример вывода, следующий: 4"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Проверяем каждую ячейку по очереди, пока не найдём одинаковые фигуру: ";
        for (let i in 0..fake_index) {
            if (i == fake_index-1) {
                expl += "\n" + String::from_int(i + 1) + " - углы одинаковые";
                break;
            }
            
            expl += "\n" + String::from_int(i + 1) + " - углы разные"
        }
        expl += "\nОтвет: " + String::from_int(fake_index);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: figures + figures_fake,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(fake_index)
                } as Reveal
            ],
        }
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getRandomFigure(figure: int) -> Canvas {
        let canvas = Canvas::create(100, 100, Color::rgb(255, 255, 255));
        
        if (figure < 3) {figure = 3};
        
        if (figure == 3) {
            let points = [
                new Point2D {x: 10, y: 90}, 
                new Point2D {x: 90, y: 90},
                new Point2D {x: 50, y: 10},
                new Point2D {x: 10, y: 90}
            ]
                
            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2)
        } else if (figure == 4) {                
            Canvas::rect(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), 2)
        } else if (figure == 5) {                
            let points = [
                new Point2D {x: 50, y: 10},   
                new Point2D {x: 90, y: 50},
                new Point2D {x: 70, y: 90},
                new Point2D {x: 30, y: 90},
                new Point2D {x: 10, y: 50},
                new Point2D {x: 50, y: 10}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 6) {                
            let points = [
                new Point2D {x: 50, y: 10},
                new Point2D {x: 90, y: 37},
                new Point2D {x: 90, y: 73},
                new Point2D {x: 50, y: 90},
                new Point2D {x: 10, y: 73},   
                new Point2D {x: 10, y: 37}    
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 7) {                
            let points = [
                new Point2D {x: 50, y: 10},
                new Point2D {x: 80, y: 30},
                new Point2D {x: 90, y: 60},
                new Point2D {x: 70, y: 90},
                new Point2D {x: 30, y: 90},
                new Point2D {x: 10, y: 60},
                new Point2D {x: 20, y: 30},
                new Point2D {x: 50, y: 10}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 8) {                
            let points = [
                new Point2D {x: 50, y: 10},
                new Point2D {x: 80, y: 25},
                new Point2D {x: 90, y: 60},
                new Point2D {x: 80, y: 80},
                new Point2D {x: 50, y: 90},
                new Point2D {x: 20, y: 80},
                new Point2D {x: 10, y: 60},
                new Point2D {x: 20, y: 25},
                new Point2D {x: 50, y: 10}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 9) {                
            let points = [
                new Point2D {x: 35, y: 10},
                new Point2D {x: 65, y: 10},
                new Point2D {x: 80, y: 25},
                new Point2D {x: 90, y: 60},
                new Point2D {x: 80, y: 80},
                new Point2D {x: 50, y: 90},
                new Point2D {x: 20, y: 80},
                new Point2D {x: 10, y: 60},
                new Point2D {x: 20, y: 25},
                new Point2D {x: 35, y: 10}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        } else if (figure == 10) {                
            let points = [
                new Point2D {x: 35, y: 10},
                new Point2D {x: 65, y: 10},
                new Point2D {x: 80, y: 25},
                new Point2D {x: 90, y: 60},
                new Point2D {x: 80, y: 80},
                new Point2D {x: 65, y: 90},
                new Point2D {x: 35, y: 90},
                new Point2D {x: 20, y: 80},
                new Point2D {x: 10, y: 60},
                new Point2D {x: 20, y: 25},
                new Point2D {x: 35, y: 10}
            ];

            Canvas::polygon(canvas, points, Color::rgb(0, 0, 0), 2);
        }
        
        return canvas
    }
}
*/