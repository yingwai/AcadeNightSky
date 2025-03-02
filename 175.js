/*
?Создайте генератор заданий в котором решающему необходимо будет сложить две какие то обыкновенные дроби между собой.

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
        let a = Main::createRandomFraction();
        let b = Main::createRandomFraction();
        
        let add = Main::addFractions(a, b);
        let del = Main::findGcd(add);
        let ans = String::from_int(add[0]/del) + "/" + String::from_int(add[1]/del)
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сложить две обыкновенные дроби между собой",
            "сложить две обыкновенные дроби",
            "найти сумму двух обыкновенных дробей",
            "посчитать, чему равна сумма двух дробей",
            "сложить две дроби и запишите результат",
            "вычислить сумму обыкновенных дробей",
            "найти значение суммы двух дробей",
            "сложить две обыкновенные дроби вместе",
            "определить результат сложения двух дробей",
            "сложить обыкновенные дроби и запишите ответ",
            "посчитать сумму двух данных дробей"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " две обыкновенные дроби: \\(\\dfrac{" + String::from_int(a[0]) + "}{" + String::from_int(a[1]) + "}\\) и \\(\\dfrac{" + String::from_int(b[0]) + "}{" + String::from_int(b[1]) + "}\\)."
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны две обыкновенные дроби: \\(\\dfrac{" + String::from_int(a[0]) + "}{" + String::from_int(a[1]) + "}\\) и \\(\\dfrac{" + String::from_int(b[0]) + "}{" + String::from_int(b[1]) + "}\\)"
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + " В ответ записать сокращённую дробь если это возможно, иначе дробь без сокращения."
            + "\n Пример ответа: \"19/24\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала сложим между собой две дроби: \\(\\dfrac{" + String::from_int(a[0]) + "}{" + String::from_int(a[1]) + "}\\) и \\(\\dfrac{" + String::from_int(b[0]) + "}{" + String::from_int(b[1]) + "}\\) = "
            + "\\(\\dfrac{" + String::from_int(add[0]) + "}{" + String::from_int(add[1]) + "}\\) \n Чтобы сократить дробь нужно разделить числитель и знаменатель на наибольший общий делитель: на " + String::from_int(del)
            + "\n\\(\\dfrac{" + String::from_int(add[0]) + "\\div" + String::from_int(del) + "}{" + String::from_int(add[1]) + "\\div" + String::from_int(del) + "}\\) = \\(\\dfrac{" + String::from_int(add[0]/del) + "}{" + String::from_int(add[1]/del) + "}\\)";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
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
    function createRandomFraction() -> List<int> {
        let numerator = Main::getRandomIntInRange(1, 50);
        let denominator = Main::getRandomIntInRange(1, 50);

        return [numerator, denominator];
    }
    function addFractions(a: List<int>, b: List<int>) -> List<int> {
      let numerator = (a[0]*b[1]) + (b[0]*a[1]);
      let denominator = a[1]*b[1];
        
      return [numerator, denominator];
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
}
*/