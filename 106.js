/*
?Создайте генератор паззлов, который генерирует несколько домов (многоэтажных или одноэтажных, могут быть и те, и те). Затем он просит сначала отобрать все дома определенного цвета, затем среди них выбрать каждый второй и написать, у каждого ли из них на первом этаже больше/меньше (выбирается случайно) некоторого числа окон (выбирается случайное число из некоторого интервала чисел).

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

class NamedColor {
    public name: String,
    public color: Color
}

class House {
    public color: NamedColor,
    public floor: int,
    public window: List<int>
}

class Main {
    function gen_puzzle() -> Puzzle {
        let namedColor = [
            new NamedColor { name: "белый", color: Color::rgb(255, 255, 255) },
            new NamedColor { name: "красный", color: Color::rgb(155, 0, 0) },
            new NamedColor { name: "зелёный", color: Color::rgb(0, 155, 0) },
            new NamedColor { name: "жёлтый", color: Color::rgb(255, 255, 0) },
            new NamedColor { name: "розовый", color: Color::rgb(255, 192, 203) },
            new NamedColor { name: "оранжевый", color: Color::rgb(255, 140, 0) },
            new NamedColor { name: "фиолетовый", color: Color::rgb(128, 0, 128) },
            new NamedColor { name: "коричневый", color: Color::rgb(139, 69, 19) },
            new NamedColor { name: "серый", color: Color::rgba(0, 0, 0, 0.4) }
        ];
        let house: List<House> = [];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 9)) {
            let f = Main::getRandomIntInRange(1, 5);
            let w: List<int> = [];
            
            for (let j in 0..f) {
                let n = Main::getRandomIntInRange(1, 6);
                w.push(n);
            }
            
            house.push(new House {
                color: namedColor[Main::getRandomIntInRange(0, 8)],
                floor: f,
                window: w
            })
                
            canva.push(
                new PuzzleImage {
                    name: "h_" + String::from_int(i),
                    image: Main::getHouse(house[i])
                }
            )
        }
        
        let current_color = house[Main::getRandomIntInRange(0, house.length()-1)].color.name;
        let more = Main::getRandomIntInRange(0, 1) == 1; 
        let count = Main::getRandomIntInRange(2, 5);
        let index: List<int> = [];
        let isAll = false;
        let n = 0;
        
        for (let i in 0..house.length()) {
            if (house[i].color.name == current_color) {
                n += 1;
                
                if (n % 2 == 0) {
                    index.push(i); 
                }   
            }
        }
        
        for (let i in index) {
            if (more) {
                if (house[i].window[0] > count) {
                    isAll = true;
                    break;
                }
            } else {
                if (house[i].window[0] < count) {
                    isAll = true;
                    break;
                }
            }
        }
        let ans = if (isAll) {"Да"} else {"Нет"}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "затем среди них выбрать каждый второй и написать, у каждого ли из них на первом этаже",
            "затем из них выделить каждый второй и указать, находится ли у каждого из них на первом этаже",
            "после этого выбрать каждый второй и определить, у всех ли из них на первом этаже",
            "после выделить из полученного списка каждый второй и проверить, располагается ли у каждого на первом этаже",
            "затем выбрать каждый второй и проверить, присутствует ли у каждого из них первом этаже",
            "после отбора каждого второго определить, имеет ли каждый из них на первом этаже"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько домов: \n";
            for (let c in canva) {
                sc += "<img " + c.name + ">"
            }
            sc += "\nЕё попросили сначала " + whatDo + " все дома " + current_color[0..current_color.length()-2] 
                + "ого цвета, " + conditions + " " + if (more) {"больше"} else {"меньше"} + " " + PluralRu::pluralify(count, "окна", "окон", "окон") + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько домов: \n";
            for (let c in canva) {
                sc += "<img " + c.name + ">"
            }
            sc += "\nТребуется определить все дома " + current_color[0..current_color.length()-2] 
                + "ого цвета, " + conditions + " " + if (more) {"больше"} else {"меньше"} + " " + PluralRu::pluralify(count, "окна", "окон", "окон") + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"Да\"/\"Нет\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Выясним количетсво окон на 1 этаже всех " + current_color[0..current_color.length()-1] + "х домов: ";
        for (let i in 0..house.length()) {
            if (house[i].color.name == current_color) {
                expl += String::from_int(house[i].window[0]) + ", "
            }
        }
        expl = expl[0..expl.length()-2];
        
        if (index.length() != 0) {
            expl += "\nТеперь выделим окна всех вторых домов: ";
            for (let i in index) {
                expl += String::from_int(house[i].window[0]) + ", "
            }
            expl = expl[0..expl.length()-2];
            
            if (ans == "Да") {
                expl += "\nТ.к. каждый вторый дом имеет количество окон " + if (more) {"больше"} else {"меньше"} + " " + String::from_int(count) + ", ответ: Да";
            } else {
                expl += "\nТ.к. не каждый вторый дом имеет количество окон " + if (more) {"больше"} else {"меньше"} + " " + String::from_int(count) + ", ответ: Нет";
            }
        } else {
            expl += "\n Т.к. второго дома и последующих нет, ответ будет: Нет"
        }

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getHouse(house: House) -> Canvas {
        let fc = 2;        
        let canvas = Canvas::create(100*fc, 265*fc, Color::rgb(255, 255, 255));
        
        for (let i in 0..house.floor) {
            Canvas::fillRect(canvas, 25 * fc, 210 * fc - (100 * i), 50 * fc, 50 * fc, Color::rgb(0,0,0), house.color.color, 2);
            
            for (let i in 0..house.window.length()) { 
                let count = house.window[i];
                for (let j in 0..count) {
                    let x = 31 * fc + (27 * j);
                    
                    if (j >= 3) {
                        x = 31 * fc + (27 * (j - 3));
                    }
                    
                    let y = 222;
                    
                    if (j >= 3) {
                        y = 237
                    }
                    
                    y = y * fc - (100 * i);
                    
                    Canvas::fillRect(canvas, x, y, 50/5 * fc, 50/5 * fc, Color::rgb(0,0,0), Color::rgb(0, 191, 255), 1)
                }
            }
        }
        
        return canvas;
    }
}
*/