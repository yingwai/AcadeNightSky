/*
?Сделайте генератор пазлов, который рисует N линий. Эти линии должны иметь случайную величину поворота против часовой стрелки относительно своего начального положение. Начальное положение для любой линии это 0 градусов относительно горизонта, то есть просто прямая линия две точки которой лежат на одной Y координате. Попросите указать на линии, которые повернуты больше/меньше чем на 45 градусов.

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
import community::near::spensa2::plural::PluralRu;

class Main {
    function gen_puzzle() -> Puzzle {
        let angle: List<int> = [];
        let nAngle = [45, 90, 135, 180, 225, 270, 315][Main::getRandomIntInRange(0, 6)];
        let more = Main::getRandomIntInRange(0, 1) == 1;
        let ans: List<String> = [];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 15)) {
            angle.push(Main::getRandomIntInRange(0, 359));
            
            if (more) {
                if (angle[i] >= nAngle) {
                    ans.push(String::from_int(i+1))
                }
            } else {
                if (angle[i] <= nAngle) {
                    ans.push(String::from_int(i+1))
                }
            }
            
            let canvas = Canvas::create(50, 50, Color::rgb(255, 255, 255));
            Canvas::line(canvas, 0, 25, 50, 25, Color::rgba(0, 0, 0, 0.5), 1);
            Canvas::line(canvas, 25, 0, 25, 50, Color::rgba(0, 0, 0, 0.5), 1);
            Canvas::line(canvas, 0, 0, 50, 50, Color::rgba(0, 0, 0, 0.5), 1);
            Canvas::line(canvas, 0, 50, 50, 0, Color::rgba(0, 0, 0, 0.5), 1);
            community::near::cfuser::klierf::drawArrow::I61elGraph::drawArrow(canvas, 25, 25, angle[i], Color::rgb(0, 0, 0), 48, 2)
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 3)];

        let conditions = [
            "номера всех линий, которые повернуты",
            "cписок номеров линий, повернутые",
            "перечень номеров линий, которые повернуты",
            "номера тех линий, повернутые",
            "номера всех линий, которые были повернуты",
            "номера линий, которые были повернуты"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " линии имеющие случайную величину поворота против часовой стрелки относительно своего начального положения (0° равное 3 часам): \n";
        for (let i in 0..canva.length()) {
            sc += String::from_int(i+1) + ". <img " + canva[i].name + ">      "
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions + " на угол, равный или " + if (more) {"больший"} else {"меньший"} + " " + PluralRu::pluralify(nAngle, "градусу", "градусам", "градусам") + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны линии имеющие случайную величину поворота против часовой стрелки относительно своего начального положения (0° равное 3 часам): \n";
            for (let i in 0..canva.length()) {
                sc += String::from_int(i+1) + ". <img " + canva[i].name + ">      "
            }
            sc += "\nТребуется определить " + conditions + " на угол, равный или " + if (more) {"больший"} else {"меньший"} + " " + PluralRu::pluralify(nAngle, "градусу", "градусам", "градусам") + ".";
        }

        let desc = sc + " В ответ записать номера линий в том порядке, в котором они даны. Если таких линий нет, в ответ записать \"0\"."
            + "\n Пример ответа: \"1, 3, 6\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим каждую линию и определим подходит ли она по условию: \n";
        
        for (let i in 0..angle.length()) {     
            expl += String::from_int(i+1);
            
            let a = [45, 90, 135, 180, 225, 270, 315, 360];
            for (let j in 0..a.length()) {
                if (angle[i] == a[j]) {
                    expl += " линия ровно на " + String::from_int(a[j]) + "°";
                    break;
                } 
                
                if (angle[i] < a[j]) {
                    expl += " линия между " + String::from_int(a[j]) + "° и " + if (j == 0) {"0"} else {String::from_int(a[j-1])} + "°";
                    break;
                }
            }
            
            if (more) {
                if (angle[i] > nAngle) {
                    expl += ", подходит по условию; \n"
                } else if (angle[i] == nAngle) {
                    expl += ", подходит по условию; \n"
                } else {
                    expl += ", не подходит по условию; \n"
                }
            } else {
                if (angle[i] < nAngle) {
                    expl += ", подходит по условию; \n"
                } else if (angle[i] == nAngle) {
                    expl += ", подходит по условию; \n"
                } else {
                    expl += ", не подходит по условию; \n"
                }
            }
        }
        
        if (ans.length() < 1) {
            ans.push("0")
        }
        
        expl += "\nСледовательно ответ: " + String::join(ans, ", ");

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(ans, ", ")
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/