/*
?Сделайте генератор, который будет создавать обыкновенную дробь например "4/50", решающему нужно будет сократить эту дробь, а в качестве ответа записать числитель или знаменатель уже сокращенной дроби.

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
        let frac = Main::createRandomFraction();
        let del = Main::findGcd(frac);
        let ans = [frac[0] / del, frac[1] / del];
        
        while (Main::findGcd(frac) == 1) {
            frac = Main::createRandomFraction();
            del = Main::findGcd(frac);
            ans = [frac[0] / del, frac[1] / del];
        }
        
        let up = Main::getRandomIntInRange(0, 1) == 1;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сократить эту дробь, а в качестве ответа записать",
            "уменьшить дробь до её упрощенного вида и записать в ответ",
            "сократить данную дробь и записать в ответ",
            "сократить данную дробь и записать",
            "упростить эту дробь и указать",
            "привести эту дробь к сокращенному виду и записать в ответ",
            "упростить эту дробь и указать в ответ",
            "свести эту дробь к сокращенному виду и записать",
            "уменьшить дробь до её упрощенного вида и записать",
            "свести эту дробь к сокращенному виду и записать в ответ",
            "сократить эту дробь, а в качестве ответа записать в ответ"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " обыкновенная дробь \\(\\dfrac{" + String::from_int(frac[0]) + "}{" + String::from_int(frac[1]) + "}\\)."
            + " Её попросили " + conditions + " " + if(up){"числитель"}else{"знаменатель"} + " сокращенной дроби.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана обыкновенная дробь \\(\\dfrac{" + String::from_int(frac[0]) + "}{" + String::from_int(frac[1]) + "}\\)."
                + " Требуется " + conditions + " " + if(up){"числитель"}else{"знаменатель"} + " сокращенной дроби.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"23\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы сократить дробь нужно разделить числитель и знаменатель на наибольший общий делитель: на " + String::from_int(del)
            + "\n\\(\\dfrac{" + String::from_int(frac[0]) + "\\div" + String::from_int(del) + "}{" + String::from_int(frac[1]) + "\\div" + String::from_int(del) + "}\\) = "
            + "\\(\\dfrac{" + String::from_int(ans[0]) + "}{" + String::from_int(ans[1]) + "}\\) \n\n Т.к. в ответ нам нужен " + if(up){"числитель"}else{"знаменатель"} + ", ответом будет " + if(up){String::from_int(ans[0])}else{String::from_int(ans[1])};

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: if(up){String::from_int(ans[0])}else{String::from_int(ans[1])}
                } as Reveal
            ],
        }
    }
    
    function findGcd(arr: List<int>) -> int {
        let gcd = arr[0];
        for (let i in arr) {
            let x = i; 
            let y = gcd;
            while (y > 0) {
                let t = y;
                y = x % y;
                x = t;
            }
            gcd = x;
        }
        return gcd;
    }

    function createRandomFraction() -> List<int> {
        let numerator = Main::getRandomIntInRange(1, 50);
        let denominator = Main::getRandomIntInRange(1, 50);

        return [numerator, denominator];
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/