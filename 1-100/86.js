/*
?Сделайте генератор пазлов, в котором на входе изображается несколько геометрических фигур, а на выходе человеку необходимо посчитать количество фигур, количество углов в которых меньше 4.

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
        let nums: List<int> = [];
        let figures: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            nums.push(Main::getRandomIntInRange(3, 10));
            
            figures.push(
                new PuzzleImage {
                    name: "f_" + String::from_int(i),
                    image: Main::getFigure(nums[i])
                }
            )
        }
        
        let ans = 0;
        for (let i in nums) {
            if (i < 4) {
                ans += 1;    
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 3)];

        let conditions = [
            "количество фигур, количество углов в которых меньше четырех",
            "количество фигур с числом углов меньше четырех",
            "количество фигур, имеющих менее четырех углов",
            "сколько фигур с углами в количестве меньше четырех",
            "общее число фигур, у которых углов меньше четырех",
            "общее количество фигур с числом углов менее четырех"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд фигур: \n"
        for (let i in figures) {
            sc += "<img " + i.name + ">"
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд фигур: \n"
            for (let i in figures) {
                sc += "<img " + i.name + ">"
            }
            sc += "\nТребуется определить " + conditions + ".";
        }

        let desc = sc
            + "\n Пример вывода, следующий: \"3\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем сколько углов у кажой фигуры: \n";
        for (let i in 0..nums.length()) {
            expl += String::from_int(i+1) + " фигура - " + String::from_int(nums[i]) + "\n";
        }
        expl += "\n Следовательно ответ: " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: figures,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }
    
    function getFigure(figure: int) -> Canvas {
        let fc = 1;
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
        
        return canvas
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/