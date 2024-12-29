/*
?Сделайте генератор паззлов, который будет генерировать круги с интервалами времени внутри. Генератор будет просить указать те круги, которые входят целиком или частично в определённый интервал.

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
        let main_i = [Main::getRandomIntInRange(0, 12), 0];
        main_i[1] = Main::getRandomIntInRange(main_i[0]+1, 23);
        let intervals: List<List<int> > = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 10)) {
            let num = [Main::getRandomIntInRange(0, 12), 0];
            num[1] = Main::getRandomIntInRange(num[0]+1, 23);
            intervals.push(num);
        }
        
        let canvas = Main::getKrug(intervals);
        let ans: List<String> = [];
        
        for (let i in 0..intervals.length()) {
            if (main_i[1] >= intervals[i][0] && main_i[0] <= intervals[i][1]) {
                ans.push(String::from_int(i+1));
            }
        }
        
        if (ans.length() == 0) {ans.push(String::from_int(0))}        
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "номера тех кругов, которые входят целиком или частично в интервал",
            "номера кругов, которые находятся полностью или частично в интервале",
            "номера кругов, которые целиком или частично входят в данный интервал",
            "номера тех кругов, которые расположены полностью или частично внутри интервала",
            "какие номера имеют круги, находящиеся целиком или частично в интервале",
            "номера кругов, входящих полностью или частично в указанный интервал"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " круги с интервалами времени внутри: \n";
        for (let i in 0..canvas.length()) {
            sc += "<img " + canvas[i].name + ">"
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions + " " + String::from_int(main_i[0]) + ":00 - " + String::from_int(main_i[1]) + ":00. ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны круги с интервалами времени внутри: \n";
            for (let i in 0..canvas.length()) {
                sc += "<img " + canvas[i].name + ">"
            }
            sc += "\nТребуется определить " + conditions + " " + String::from_int(main_i[0]) + ":00 - " + String::from_int(main_i[1]) + ":00. ";
        }

        let desc = sc + "Если ни один из кругов не входит в интервал, записать в ответ \"0\""
            + "\n Пример вывода, следующий: \"5, 7, 9\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Проверяем все видимые интервалы: \n"; 
        for (let i in 0..canvas.length()) {
            if (main_i[1] >= intervals[i][0] && main_i[0] <= intervals[i][1]) {
                expl += String::from_int(i+1) + ". " + String::from_int(intervals[i][0]) + ":00 - " + String::from_int(intervals[i][1]) + ":00" + " - подходит под условия \n"
            } else {
                expl += String::from_int(i+1) + ". " + String::from_int(intervals[i][0]) + ":00 - " + String::from_int(intervals[i][1]) + ":00" + " - не входит в интервал \n"
            }
        }
        
        expl += "\n Следовательно ответ: " + String::join(ans, ", ");

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canvas,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(ans, ", ")
                } as Reveal
            ],
        }
    }
    
    function getKrug(intervals: List<List<int> >) -> List<PuzzleImage> {
        let arr: List<PuzzleImage> = [];
        
        for (let i in 0..intervals.length()) {
            let canvas = Canvas::create(100, 100, Color::rgb(255, 255, 255));
            Canvas::ellipse(canvas, 5, 5, 90, 90, Color::rgb(0,0,0), 2);
            Canvas::text(canvas, 50, 55, String::from_int(intervals[i][0]) + ":00 - " + String::from_int(intervals[i][1]) + ":00", 12, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            
            arr.push(new PuzzleImage {name: "c_" + String::from_int(i), image: canvas})
        }
        
        return arr
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/