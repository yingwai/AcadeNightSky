/*
?Создайте генератор паззлов, который будет давать ежедневные фактически выпавшие осадки за определенный период (месяц), а человек должен посчитать среднесуточные выпавшие осадки в данном периоде.

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
import community::near::dtalalaev::precision::Precision;
import community::near::dtalalaev::floatToString::FloatToString;

class Main {
    function gen_puzzle() -> Puzzle {
        let day = Main::getRandomIntInRange(3, 31);
        let osad: List<String> = [];
        let sum = 0;
        
        for (let i in 0..day) {
            let n = Main::getRandomIntInRange(1, 100);
            osad.push(String::from_int(n));
            sum += n;
        }
        
        let ans = Main::round(sum as float / osad.length() as float, 2);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "среднесуточные выпавшие осадки в данном периоде",
            "среднее количество осадков за сутки в этом периоде",
            "среднесуточное значение осадков в указанном временном интервале",
            "количество осадков, выпадающих в среднем за сутки в этом периоде",
            "среднее количество выпавших осадков за день в данном промежутке времени",
            "среднее значение осадков в сутки за этот период",
            "среднесуточную норму осадков в указанном временном промежутке",
            "среднее количество осадков за каждый день в этом временном периоде",
            "среднесуточные осадки за указанный промежуток времени",
            "среднию дневную величину осадков в данном временном отрезке",
            "среднесуточное количество выпавших осадков в этом периоде"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ежедневные фактически выпавшие осадки за " + PluralRu::pluralify(day, "день", "дня", "дней") + ": " + String::join(osad, " мм, ") + " мм."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны ежедневные фактически выпавшие осадки за " + PluralRu::pluralify(day, "день", "дня", "дней") + ": " + String::join(osad, " мм, ") + " мм."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Ответ необходимо округлить до сотых."
            + "\n Пример вывода, следующий: \"39.11\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём сумму всех осадков за весь период: \n"
            +  String::join(osad, " + ") + " = " + String::from_int(sum)
            + "\n Теперь найдём среднесуточные выпавшие осадки: " + String::from_int(sum) + "/" + String::from_int(osad.length()) + "=" + ans;

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
    
    function round(p: float, after_dot: int) -> String {  
        let sign = "";
        if (p < 0.0) {
          sign = "-";
          p = -p;
        }

        let coeff = 1;
        for (let i in 0..after_dot) {
            coeff *= 10;
        }

        p *= coeff as float;
        let int_p = (p + 0.5) as int;

        let after_string = String::from_int(int_p % coeff);
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }
      
        for (let i in after_string.length()..after_dot) {
            after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
}
*/