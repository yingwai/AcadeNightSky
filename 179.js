/*
?Сделайте генератор, где генерируется время, которое обозначает на сколько часов быстрее первый рабочий делает определенное количество ручек (количество генерируется тоже) чем второй. Также генерируется на сколько ручек в час он делает больше чем второй и нужно найти сколько ручек в час он (первый рабочий) делает.

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
        let total = Main::getRandomIntInRange(100, 1000);
        let time = Main::getRandomIntInRange(1, 10);
        let extra = Main::getRandomIntInRange(1, 20);

        let worker2 = total as float / (total as float / (total as float / time as float) + time as float);
        let worker1 = worker2 + extra as float;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько ручек в час делает первый рабочий",
            "какое количество ручек в час изготавливает первый рабочий",
            "сколько ручек в час производит первый рабочий",
            "сколько в час, первый рабочий изготавливает ручек",
            "количество изготовленных ручек первым рабочим за час",
            "количество ручек, производимых первым рабочим за час",
            "сколько ручек в час успевает сделать первый рабочий",
            "сколько ручек за час изготавливает первый рабочий",
            "число ручек, изготовленных первым рабочим за один час",
            "сколько ручек в час изготавливает первый рабочий",
            "количество ручек в час производит первый рабочий"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " время: " + PluralRu::pluralify(time, "час", "часа", "часов") + ", которое обозначает на сколько часов быстрее первый рабочий делает " 
            + PluralRu::pluralify(total, "ручку", "ручки", "ручек") + " чем второй. Также известно, что первый рабочий делает на " + PluralRu::pluralify(extra, "ручку", "ручки", "ручек") + " в час больше чем второй."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано время: " + PluralRu::pluralify(time, "час", "часа", "часов") + ", которое обозначает на сколько часов быстрее первый рабочий делает " 
                + PluralRu::pluralify(total, "ручку", "ручки", "ручек") + " чем второй. Также известно, что первый рабочий делает на " + PluralRu::pluralify(extra, "ручку", "ручки", "ручек") + " в час больше чем второй."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Все ответы в расчётах округлять до сотых. В ответ записать число округлённое до целого числа."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала рассчитаем сколько ручек производит второй рабочий: \\(\\dfrac{" + String::from_int(total) + "}{\\dfrac{" + String::from_int(total) + "}{" + String::from_int(total) + "\\div" + String::from_int(time) + "} + " + String::from_int(time) + "} = "+Main::round(worker2, 2)+"\\)\n"
            + "Теперь определим сколько ручек производит первый рабочий: " + Main::round(worker2, 2) + " + " + String::from_int(extra) + " = " + Main::round(worker1, 2)
            + "\n Округляем число до целого значения и записываем в ответ: " + Main::round(worker1, 0);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(worker1, 0)
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