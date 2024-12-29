/*
?Создайте генератор паззлов который будет генерировать количество стаканов и объем кувшинов, и просить указать, сколько кувшинов понадобится, чтобы заполнить все бокалы до полна.

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
        let glasses = Main::getRandomIntInRange(3, 10);
        let glassesVolume = Main::getRandomIntInRange(150, 500);
        let totalVolume = glasses * glassesVolume;
        
        let pitcherVolume = Main::getRandomIntInRange(1000, 3000);
        
        let ans = community::near::dtalalaev::precision::Precision::ceilInt(totalVolume as float / pitcherVolume as float);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько кувшинов понадобится, чтобы заполнить все бокалы до полна",
            "сколько кувшинов потребуется, чтобы наполнить все бокалы до краев",
            "какое количество кувшинов нужно, чтобы наполнить бокалы до полна",
            "сколько кувшинов понадобится для того, чтобы наполнить все бокалы",
            "какое количество кувшинов нужно для заполнения всех бокалов до полна",
            "сколько кувшинов потребуется для наполнения бокалов",
            "сколько кувшинов нужно, чтобы заполнить все бокалы до верха",
            "какое количество кувшинов нужно для того, чтобы налить в бокалы до полного объема",
            "сколько кувшинов будет нужно, чтобы полностью наполнить все бокалы",
            "какое количество кувшинов требуется для того, чтобы все бокалы были наполнены",
            "сколько кувшинов понадобится, чтобы наполнить бокалы до самого края"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + PluralRu::pluralify(glasses, "", "о", "о").split(" ")[1] + " " + PluralRu::pluralify(glasses, "стакан", "стакана", "стаканов") + " объёмом " + String::from_int(glassesVolume) + " мл каждый."
            + "\nЕё попросили " + whatDo + ", " + conditions + ", если известно, что объём одного кувшина " + String::from_int(pitcherVolume) + " мл.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан" + PluralRu::pluralify(glasses, "", "о", "о").split(" ")[1] + " " + PluralRu::pluralify(glasses, "стакан", "стакана", "стаканов") + " объёмом " + String::from_int(glassesVolume) + " мл каждый."
                + "\nТребуется определить, " + conditions + ", если известно, что объём одного кувшина " + String::from_int(pitcherVolume) + " мл.";
        }

        let desc = sc 
            + " Ответ необходимо округлить до целого числа в большую сторону."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём общий объём всех стаканов: " + String::from_int(glasses) + " * " + String::from_int(glassesVolume) + " = " + String::from_int(totalVolume)
            + "\n Теперь посчитаем сколько кувшинов понадобиться дляданного объёма: " + String::from_int(totalVolume) + " / " + String::from_int(pitcherVolume) + " = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
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