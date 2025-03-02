/*
?Создайте генератор паззлов, который генерирует массу человека и его потребляемые и расходуемые калории в течении дня. Генератор будет просить указать будет человек набирать или терять массу в зависимости от профицита или дефицита калорий.

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
        let weight = Main::getRandomIntInRange(50, 120);
        let p = Main::getRandomIntInRange(1000, 4000);
        let m = Main::getRandomIntInRange(1000, 4000);
        let ballance = p - m;
        
        let ans = "без изменений";
        if (ballance > 0) {
            ans = "набирает";
        } else if (ballance < 0) {
            ans = "теряет";
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "будет человек набирать или терять массу",
            "будет ли человек набирать или терять массу",
            "человек набирает или теряет массу",
            "увеличится или уменьшится масса человека",
            "человек будет набирать или терять массу",
            "будет ли масса человека увеличиваться или уменьшаться",
            "человек теряет или набирает массу",
            "человек будет набирать или терять массу",
            "масса человека изменится в большую или меньшую сторону",
            "человек теряет или набирает массу в зависимости от условий",
            "что произойдет с массой человека — она увеличится или уменьшится"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " масса человека " + String::from_int(weight) + " кг, за день он потребил " + String::from_int(p) + " калорий и потратил " + String::from_int(m) + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана масса человека " + String::from_int(weight) + " кг, за день он потребил " + String::from_int(p) + " калорий и потратил " + String::from_int(m) + ". "
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc
            + "\n Пример ответа: \"набирает\", \"теряет\". Если человек остался при таком же весе, в ответ указать \"без изменений\"."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти профицит или дефицит калорий, отнимем от того что он потребил, то сколько он потратил, если ответ будет положительным - набрал, отрицательным - потерял:\n"
            + String::from_int(p) + " - " + String::from_int(m) + " = " + String::from_int(ballance) + "\n Следовательно ответ: " + ans;

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
}
*/