/*
?Создайте генератор паззлов, который генерирует несколько непересекающихся различных линий, одна из который будет отличаться по цвету. После этого генератор просит посчитать, сколько линий находятся выше/ниже/левее/правее (выбирается случайно) линии особенного цвета.

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
        let len = Main::getRandomIntInRange(3, 10);
        let ind = Main::getRandomIntInRange(0, len-1);
        let side = Main::getRandomIntInRange(0, 3);
        
        let canva: List<PuzzleImage> = [];
        for (let i in 0..len) {
            let canvas = Canvas::create(100, 12, Color::rgb(255, 255, 255));
            Canvas::line(canvas, 10, 6, 90, 6, if (i == ind) {Color::rgb(255, 0, 0)} else {Color::rgb(0, 0, 0)}, 5);
            
            canva.push(
                new PuzzleImage {
                    name: "l_"+String::from_int(i),
                    image: canvas
                }
            );
        }
        
        let list = "";
        for (let i in canva) {
            list += "<img " + i.name + ">" + if (side == 0 || side == 2) {"\n"} else {""}
        }
        
        let ans = 0;
        if (side == 0) {
            ans = ind;
        } else if (side == 1) {
            ans = len - ind - 1;
        } else if (side == 2) {
            ans = len - ind - 1;
        } else if (side == 3) {
            ans = ind;
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько линий находится",
            "cколько линий присутствует",
            "количество линий, которые находится",
            "количество линий, расположенных",
            "cколько линий расположено"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько непересекающихся линий, одна из которых отличается по цвету: \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + " " + if (side == 0) {"выше"} else if (side == 1) {"правее"} else if (side == 2) {"ниже"} else {"левее"} + " линии особенного цвета.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько непересекающихся линий, одна из которых отличается по цвету: \n" + list 
                + "Требуется определить " + conditions + " " + if (side == 0) {"выше"} else if (side == 1) {"правее"} else if (side == 2) {"ниже"} else {"левее"} + " линии особенного цвета.";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем общее колечество линий: " + String::from_int(len)
            + "\nЛиния особенного цвета находится на " + String::from_int(ind+1) + " позиции"
            + "\n" + if (side == 0) {"Сверху"} else if (side == 1) {"Справа"} else if (side == 2) {"Снизу"} else {"Слева"} + " от нужной нам линии находится: " + PluralRu::pluralify(ans, "линия", "линии", "линий")
            + "\n Следовательно ответ: " + String::from_int(ans);

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

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/