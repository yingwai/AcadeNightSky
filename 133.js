/*
?Сделайте генератор, выводящий температуру тела человека за 10 дней (наподобие: день 1 - 36,5; день 2 - и т.д.). Человек должен сказать, сколько максимум дней подряд температура была выше 37 градусов.

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
        let count = Main::getRandomIntInRange(5, 15);

        let inpt = "";
        let expl = "Рассмотрим каждый день по очереди: \n";
        let max = 0;
        let p = 0
        for (let i in 0..count) {
            let fl = Main::getRandomFloat(41, 1);
            while (fl <= 35.0) {
                fl = Main::getRandomFloat(41, 1);
            }
            
            expl += String::from_int(i + 1) + ". " + Main::round(fl, 1) + "°C " + if (fl > 37.0) {">"} else {"<="} + " 37.0°C \n";

            if (fl > 37.0) {
                p += 1;
                
                if (p >= max) {
                    max = p;
                }
            } else {
                p = 0;
            }

            inpt += "День " + String::from_int(i + 1) + " - " + Main::round(fl, 1) + "°C \n";
        }

        expl += "Следовательно максимум " + PluralRu::pluralify(max, "день", "дня", "дней") + " подряд.";
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько максимум дней подряд температура была выше 37 градусов",
            "какой максимальный период подряд температура была выше 37 градусов",
            "сколько максимальное количество дней подряд температура превышала 37 градусов",
            "какое количество дней подряд температура была выше 37 градусов наиболее длительное время",
            "на протяжении какого максимального количества дней подряд температура оставалась выше 37 градусов",
            "сколько дней подряд температура могла быть выше 37 градусов в максимальный период",
            "сколько максимум дней подряд температура держалась выше 37 градусов",
            "каков самый длинный промежуток времени, когда температура превышала 37 градусов",
            "сколько дней подряд температура держалась выше 37 градусов в максимальном отрезке",
            "какое самое большое количество дней подряд температура была выше 37 градусов",
            "на какой максимальный период времени температура поднималась выше 37 градусов подряд"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + PluralRu::pluralify(count, "", "о", "о").split(" ")[1] + " " + PluralRu::pluralify(count, "день", "дня", "дней") + ": \n" + inpt
            + "Её попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан" + PluralRu::pluralify(count, "", "о", "о").split(" ")[1] + " " + PluralRu::pluralify(count, "день", "дня", "дней") + ": \n" + inpt 
                + "Требуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(max)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getRandomFloat(num: int, digit: int) -> float {
        let t = 10;
        for(let i in 0..digit-1){
            t *= 10;
        }

        return (Main::getRandomIntInRange(0, num * t) as float / t as float) as float;
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