/*
?Создайте генератор паззлов, который будет генерировать математический пример на операцию "деление" с вводными данными: какой-то объем чайника и некое количество времени на его закипание и генерировать условия, одно из которых будет верным, и просить указать на условие, которое удовлетворяет решению математического примера.

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
        let l = Main::getRandomIntInRange(1, 10);
        let t = Main::getRandomIntInRange(1, 20);
        
        let v = l as float/t as float;
        let var: List<float> = [];
        for (let i in 0..4) {
            var.push(if(Main::getRandomIntInRange(0, 1) == 1) {v + (Main::getRandomIntInRange(1, 50) as float/100.0)} else {v - (Main::getRandomIntInRange(1, 50) as float/100.0)});
            
            while (var[i] == v || var[i] < 0.0) {
                var[i] = if(Main::getRandomIntInRange(0, 1) == 1) {v + (Main::getRandomIntInRange(1, 50) as float/100.0)} else {v - (Main::getRandomIntInRange(1, 50) as float/100.0)}
            }
        }
        
        let ans = Main::getRandomIntInRange(1, 4);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько литров закипает в минуту",
            "сколько литров воды закипает за одну минуту",
            "какое количество литров закипает в минуту",
            "сколько литров кипит каждую минуту",
            "сколько литров жидкости закипает за минуту",
            "в каком количестве литров закипает вода в минуту",
            "сколько литров воды нагревается до кипения за минуту",
            "сколько литров воды закипает за одну минуту времени",
            "какая скорость закипания воды в литрах за минуту",
            "сколько литров жидкости закипает за минуту",
            "сколько литров воды закипает в течение минуты"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " объем чайника " + PluralRu::pluralify(l, "литр", "литра", "литров") + " и время на его закипание " + PluralRu::pluralify(t, "минута", "минуты", "минут")
            + ".\nЕё попросили " + whatDo + " " + conditions + ": \n";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан объем чайника " + PluralRu::pluralify(l, "литр", "литра", "литров") + " и время на его закипание " + PluralRu::pluralify(t, "минута", "минуты", "минут") 
                + ".\nТребуется определить " + conditions + ": \n";
        }
        
        for (let i in 0..var.length()) {
            if (ans - 1 == i) {sc += String::from_int(i + 1) + ". " + Main::round(v, 2) + " литров в минуту \n"} else {sc += String::from_int(i + 1) + ". " + Main::round(var[i], 2) + " литров в минуту \n"}            
        }

        let desc = sc + "\n В ответ записать номер верного варианта из предложенных."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассчитаем правильный ответ: " + String::from_int(l) + "/" + String::from_int(t) + " = " + Main::round(v, 2)
            + "\n Следовательно нужный ответ: " + String::from_int(ans);

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