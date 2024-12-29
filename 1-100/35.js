/*
?Сделайте генератор задач, который на входе задает несколько отрезков, а также длина, на которую увеличивается или уменьшается дина каждого из них. Сравнить результаты и указать отрезок с наибольшей/наименьшей длиной.

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
        let more = Main::getRandomIntInRange(0, 1) == 1;
        let lens: List<int> = [];
        let canva: List<PuzzleImage> = [];
        let arg: List<int> = [];
        let total: List<int> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 9)) {
            lens.push(Main::getRandomIntInRange(100, 500));
            arg.push(Main::getRandomIntInRange(-lens[i], lens[i]));
            total.push(lens[i]+arg[i])
            
            canva.push(new PuzzleImage {
                name: "gap_" + String::from_int(i),
                image: Main::getGap(i+1, lens[i])
            })
        }
        
        let ans = Main::maxInt(total, more) + 1;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "несколько отрезков и их длина",
            "несколько отрезков с указанием их длины",
            "несколько отрезков и длина каждого из них",
            "набор отрезков и их длины",
            "несколько отрезков с их длинами",
            "несколько отрезков с заданной длиной"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ".\n";
        for (let i in 0..lens.length()) {
            sc += "<img gap_" + String::from_int(i) + "> \n"
        }
        sc += "\nЕё попросили " + whatDo 
            + " и указать отрезок с " 
            + if (more) {"наибольшей"}
              else {"наименьшей"}
            + " длиной. Если изветсно что: \n";
        for (let i in 0..lens.length()) {
            sc += String::from_int(i+1) + "-ый отрезок ";
            
            if (arg[i] > 0) {
                sc += "увеличивается на " + String::from_int(arg[i]) + " см"
            } else {
                sc += "уменьшается на " + String::from_int(arg[i]*(-1)) + " см"
            }
            
            sc += "\n"
        }

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ".\n";
            for (let i in 0..lens.length()) {
                sc += "<img gap_" + String::from_int(i) + "> \n"
            }
            sc += "Требуется определить и указать отрезок с " 
            + if (more) {"наибольшей"}
              else {"наименьшей"}
            + " длиной. Если изветсно что: \n";
            for (let i in 0..lens.length()) {
                sc += String::from_int(i+1) + "-ый отрезок ";

                if (arg[i] > 0) {
                    sc += "увеличивается на " + String::from_int(arg[i]) + " см"
                } else {
                    sc += "уменьшается на " + String::from_int(arg[i]*(-1)) + " см"
                }

                sc += "\n"
            };
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Получим итоговую длинну каждого отрезка: \n";
        for (let i in 0..lens.length()) {
            expl += String::from_int(i+1) + ". ";
            
            if (arg[i] > 0) {
                expl += String::from_int(lens[i]) + " + " 
                    + String::from_int(arg[i]) + " = "
                    + String::from_int(lens[i] + arg[i])
            } else {                    
                expl += String::from_int(lens[i]) + " - " 
                    + String::from_int(arg[i]*(-1)) + " = "
                    + String::from_int(lens[i] + arg[i])
            }

            expl += "\n"
        };
        expl += "\n Из полученных ответов, узнаём что "
            + if (more) {"наибольший"}
              else {"наименьший"}
            + " отрезок это " + String::from_int(ans)
            + "-й, следовательно, ответ: " + String::from_int(ans) + ".";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }
    
    function maxInt(arr: List<int>, more: bool) -> int {
        let max = arr[0];
        let index = 0;

        if (more) {
            for (let i in 1..arr.length()) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
        } else {
            for (let i in 1..arr.length()) {
                if (arr[i] < max) {
                    max = arr[i];
                    index = i;
                }
            }
        }

        return index;
    }
    
    function getGap(index: int, l: int) -> Canvas {
        let len = l;
        let margin = 10;
        let canvas = Canvas::create(len + margin + 50, 50, Color::rgb(255, 255, 255));
        
        Canvas::text(canvas, 0, 30, String::from_int(index) + ".", 16, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
        
        Canvas::line(canvas, margin*2, 25, len + margin + 10, 25, Color::rgb(0, 0, 0), 2);
        Canvas::line(canvas, len + margin, 20, len + margin + 10, 25, Color::rgb(0, 0, 0), 2);
        Canvas::line(canvas, len + margin, 30, len + margin + 10, 25, Color::rgb(0, 0, 0), 2);
        
        Canvas::text(canvas, len/2, 40, String::from_int(l) + " см", 12, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
                
        return canvas
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/