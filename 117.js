/*
?Сделайте генератор паззлов, который генерирует хотя бы 6 кварталов и улицы, затем случайным образом расставляет некоторые объекты карты города в этих кварталах и начальную точку, после чего точка движется по прямой, поворачивая и прекращая движение при некотором условии (к примеру, как только пройдет мимо поликлиники. Не используйте конкретно этот пример). Затем генератор просит указать на улицу, на которой точка закончит движение.

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
import community::near::cfuser::ah04919::Contains::StringInList;

class Main {
    function gen_puzzle() -> Puzzle {
        let place = [
            "больницы",
            "магазина",
            "торгового центра",
            "церкви",
            "ЗАГСа",
            "школы",
            "офисного здания",
            "почты",
            "завода",
            "гостиницы",
            "стройки",
            "банка"
        ];
        
        let current_place = Main::getRandomIntInRange(0, 11);
        let pos = if (Main::getRandomIntInRange(0, 1) == 1) {[3, Main::getRandomIntInRange(0, 6)]} else {[Main::getRandomIntInRange(0, 6), 3]}
        while ((pos[0] == 3 && pos[1] == 2) 
               || (pos[0] == 2 && pos[1] == 3) 
               || (pos[0] == 3 && pos[1] == 4) 
               || (pos[0] == 4 && pos[1] == 3) 
               || (pos[0] == 3 && pos[1] == 3)) {
            pos = if (Main::getRandomIntInRange(0, 1) == 1) {[3, Main::getRandomIntInRange(0, 6)]} else {[Main::getRandomIntInRange(0, 6), 3]}
        }
        
        let pz = [
            if (pos[0] == 3) {pos[0] - Main::getRandomIntInRange(0, 1)} else {if (pos[0] > 3) {pos[0] - 1} else {pos[0]}}, 
            if (pos[1] == 3) {pos[1] - Main::getRandomIntInRange(0, 1)} else {if (pos[1] > 3) {pos[1] - 1} else {pos[1]}}
        ]
        
        
        let canvas = Main::getArea();
        
        for (let i in 0..Main::getRandomIntInRange(6, 10)) {
            let idx = Main::getRandomIntInRange(0, 11);
            while (idx == current_place) {
                idx = Main::getRandomIntInRange(0, 11);
            }
            
            let p = [Main::getRandomIntInRange(0, 5), Main::getRandomIntInRange(0, 5)];
            while (p[0] == pz[0] && p[1] == pz[1]) {
                p = [Main::getRandomIntInRange(0, 5), Main::getRandomIntInRange(0, 5)];
            }
            
            Canvas::fillRect(canvas, 55 + 50 * p[0], 55 + 50 * p[1], 40, 40, Color::rgb(255,255,255), Color::rgb(255,255,255), 2);
            Canvas::text(canvas, 75 + 50 * p[0], 86 + 50 * p[1], place[idx].split("")[1], 30, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        }
        
        Canvas::fillEllipse(canvas, 188, 188, 25, 25, Color::rgb(0,0,255), Color::rgb(0,0,255), 2);
        Canvas::text(canvas, 178 + 23, 178 + 27, "(⊙ˍ⊙)", 10, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        Canvas::text(canvas, 75 + 50 * pz[0], 86 + 51 * pz[1], place[current_place].split("")[1], 30, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let conditions = [
            "улицу (x, y), на которой он остановится",
            "улицу (x, y), где он завершит своё движение",
            "точку на улице с координатами (x, y), где он остановится",
            "координаты улицы (x, y), на которой он окажется в конце",
            "место на улице с координатами (x, y), где произойдёт остановка",
            "улицу с координатами (x, y), в которой завершится его путь"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " карта города и объекты города, и начальная точка человека (синяя точка). Человек движется по прямой в сторону " + place[current_place] + " (обозначается как " + "<b>" + place[current_place].split("")[1] + "</b>" + ")."
            + "\nЕё попросили " + whatDo + " " + conditions + ", если известно, что он остановиться после " + place[current_place] + ": \n <img canvas>";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана карта города и объекты города, и начальная точка человека (синяя точка). Человек движется по прямой в сторону " + place[current_place] + " (обозначается как " + "<b>" + place[current_place].split("")[1] + "</b>" + ")."
                + " Требуется определить " + conditions + ", если известно, что он остановиться после " + place[current_place] + ": \n <img canvas>";

        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"5, 3\" (где 5 = x, 3 = y)"
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "Ищем где располагается " + "<b>" + place[current_place].split("")[1] + "</b>" + " и выясняем что в ту сторону куда идёт человек, улица на которой он остановится после здания является: x = " + String::from_int(pos[0]) + ", y = " + String::from_int(pos[1])
            + "\n Следовательно ответ: " + String::from_int(pos[0]) + ", " + String::from_int(pos[1]);
        
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canvas
                }
            ],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(pos[0]) + ", " + String::from_int(pos[1])
                } as Reveal
            ],
        }
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }

    function getArea() -> Canvas {
        let pow = 2
        let canvas = Canvas::create(800/pow, 800/pow, Color::rgb(255, 255, 255));

        for (let i in 1..8) {
            Canvas::text(canvas, 100*i/pow, 30/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 100*i/pow, 40/pow, 100*i/pow, 1200/pow, Color::rgb(0, 0, 0), 2);

            Canvas::text(canvas, 15/pow, 100*i/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 40/pow, 100*i/pow, 1200/pow, 100*i/pow, Color::rgb(0, 0, 0), 2);
        }

        let x = 400/pow;
        let y = 500/pow;

        return canvas
    }
}
*/