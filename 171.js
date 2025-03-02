/*
?Создайте генератор заданий, в котором будет точка, в которой находится человек и из нее несколько выходящих в разные стороны клеточек. Клеточки должны указывать на разные места, которые будут в виде подписанных какими то местами геометрических фигур. Просите указать на стрелочку, которая указывает на нужное место человеку.

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
        let place = [
            ["кафе", "ресто\nран", "бар", "кабинет", "библио\nтека", "кино\nтеатр", "стадион", "зал", "сцена", "клуб"][Main::getRandomIntInRange(0, 9)],
            ["офис", "компа\nния", "страхо\nвая", "банк", "касса", "сейф\nячейка", "банко\nмат", "отде\nление", "филиал", "бизнес\nцентр"][Main::getRandomIntInRange(0, 9)],
            ["супер\nмаркет", "бутик", "аптека", "универ\nмаг", "продук\nтовый", "сад", "книжный", "строи\nтельный", "косме\nтика", "ювели\nрный"][Main::getRandomIntInRange(0, 9)],
            ["квар\nтира", "коттедж", "дача", "вилла", "таун\nхаус", "пент\nхаус", "баня", "жильё", "хижина", "дом"][Main::getRandomIntInRange(0, 9)]
        ];
            
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let ans = Main::getRandomIntInRange(1, 4);
        let canvas = Main::getArea(place);
        
        let conditions = [
            "номер стрелки, которая соответствует",
            "номер нужной стрелочки",
            "номер стрелочки, которую нужно выбрать",
            "какой номер у нужной стрелочки",
            "номер необходимой стрелки",
            "номер стрелочки, которая подходит"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " точка, в которой находится человек и из нее несколько выходящих в разные стороны стрелочек: \n <img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ", если известно, что человек направляется в одно из четырёх мест: " + String::join(place[ans-1].split("\n"), "");

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана точка, в которой находится человек и из нее несколько выходящих в разные стороны стрелочек: \n <img canvas>"
                + "\nТребуется определить " + conditions + ", если известно, что человек направляется в одно из четырёх мест: " + String::join(place[ans-1].split("\n"), "");

        }

        let desc = sc
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "Рассмотрим все возможные направления: \n";
        for (let i in 0..place.length()) {
            expl += String::from_int(i+1) + ". " + String::join(place[i].split("\n"), "") + "\n"
        }
        expl += "Следовательно, ответ: " + String::from_int(ans)
        
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
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getArea(place: List<String>) -> Canvas {
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
        
        Canvas::fillEllipse(canvas, 178, 178, 45, 45, Color::rgb(0,0,255), Color::rgb(0,0,255), 2);
        Canvas::text(canvas, 178 + 23, 178 + 27, "(⊙ˍ⊙)", 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        
        
        Canvas::fillEllipse(canvas, 78, 78, 45, 45, Color::rgb(139, 0, 139), Color::rgb(139, 0, 139), 2);
        if (place[0].split("\n").length() == 2) {
            Canvas::text(canvas, 78 + 23, 78 + 20, place[0].split("\n")[0], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 78 + 23, 78 + 34, place[0].split("\n")[1], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));        
        } else {
            Canvas::text(canvas, 78 + 23, 78 + 27, place[0], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        }
        
        Canvas::fillEllipse(canvas, 278, 78, 45, 45, Color::rgb(154, 205, 50), Color::rgb(154, 205, 50), 2);
        if (place[1].split("\n").length() == 2) {
            Canvas::text(canvas, 278 + 23, 78 + 20, place[1].split("\n")[0], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 278 + 23, 78 + 34, place[1].split("\n")[1], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));        
        } else {
            Canvas::text(canvas, 278 + 23, 78 + 27, place[1], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        }
        
        Canvas::fillEllipse(canvas, 78, 278, 45, 45, Color::rgb(255, 127, 80), Color::rgb(255, 127, 80), 2);
        if (place[2].split("\n").length() == 2) {
            Canvas::text(canvas, 78 + 23, 278 + 20, place[2].split("\n")[0], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 78 + 23, 278 + 34, place[2].split("\n")[1], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));        
        } else {
            Canvas::text(canvas, 78 + 23, 278 + 27, place[2], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        }
        
        Canvas::fillEllipse(canvas, 278, 278, 45, 45, Color::rgb(205, 92, 92), Color::rgb(205, 92, 92), 2);
        if (place[3].split("\n").length() == 2) {
            Canvas::text(canvas, 278 + 23, 278 + 20, place[3].split("\n")[0], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 278 + 23, 278 + 34, place[3].split("\n")[1], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));        
        } else {
            Canvas::text(canvas, 278 + 23, 278 + 27, place[3], 12, new TextAlignCenter{} as TextAlign, Color::rgb(255, 255, 255));
        }
        
        
        Canvas::line(canvas, 185, 185, 117, 117, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 117, 117, 117, 130, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 117, 117, 130, 117, Color::rgb(255, 0, 0), 4);
        Canvas::text(canvas, 128 + 15, 128 + 40, "1", 21, new TextAlignCenter{} as TextAlign, Color::rgb(255, 0, 0));
        
        Canvas::line(canvas, 219, 185, 284, 117, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 284, 117, 271, 117, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 284, 117, 284, 130, Color::rgb(255, 0, 0), 4);
        Canvas::text(canvas, 228 + 30, 128 + 40, "2", 21, new TextAlignCenter{} as TextAlign, Color::rgb(255, 0, 0));
        
        Canvas::line(canvas, 219, 215, 284, 284, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 284, 284, 271, 284, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 284, 284, 284, 271, Color::rgb(255, 0, 0), 4);
        Canvas::text(canvas, 128 + 15, 208 + 40, "3", 21, new TextAlignCenter{} as TextAlign, Color::rgb(255, 0, 0));
        
        Canvas::line(canvas, 185, 219, 117, 284, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 117, 284, 117, 271, Color::rgb(255, 0, 0), 4);
        Canvas::line(canvas, 117, 284, 130, 284, Color::rgb(255, 0, 0), 4);
        Canvas::text(canvas, 228 + 30, 208 + 40, "4", 21, new TextAlignCenter{} as TextAlign, Color::rgb(255, 0, 0));
        
        return canvas
    }
}
*/