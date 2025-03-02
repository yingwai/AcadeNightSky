/*
?Создайте генератор, который выдает начальную сумму вклада, сколько процентов прибавляется к сумме в месяц, реинвестируются средства или нет и на сколько времени открыли вклад. Человек должен будет определить сколько прибыли в процентах он получит с данной инвестиции.

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
import community::near::dtalalaev::floatToString::FloatToString;

class Main {
    function gen_puzzle() -> Puzzle {
        let initialAmount = Main::getRandomIntInRange(5000, 10000);
        let monthlyInterestRate = Main::getRandomIntInRange(2, 6);
        let reinvest = Main::getRandomIntInRange(0, 1) == 1;
        let durationMonths = Main::getRandomIntInRange(2, 12);

        let currentAmount = initialAmount as float;

        let expl = "Сначала найдём прибыль за каждый месяц, если сумма реинвестируется, то прибавляем прибыль за месяц к начальной сумме: \n";
        if (reinvest) {
            for (let month in 1..durationMonths+1) {
                let monthlyProfit = currentAmount as float * (monthlyInterestRate as float / 100.0);
                expl += String::from_int(month) + " месяц: \\(" + Main::round(currentAmount, 4) + " * \\dfrac{" + String::from_int(monthlyInterestRate) + "}{100} = " + Main::round(monthlyProfit, 4) + "\\)\n"
                
                currentAmount += monthlyProfit;
                expl += "Реинвестируем средства: " + Main::round(currentAmount-monthlyProfit, 4) + " + " + Main::round(monthlyProfit, 4) + " = " + Main::round(currentAmount, 4) + "\n\n"
            }
            
        } else {
            let monthlyProfit = currentAmount as float * (monthlyInterestRate as float / 100.0);
            expl += "1 месяц: \\(" + Main::round(currentAmount, 4) + " * \\dfrac{" + String::from_int(monthlyInterestRate) + "}{100} = " + Main::round(monthlyProfit, 4) + "\\)\n";
            currentAmount += monthlyProfit * durationMonths as float;
                
            expl += "Т.к. сумма не реинвестируется, мы можем посчитать прибыль лишь за один месяц, т.к. за следующие прибыль будет одинаковая.\n"
        }
        

        let totalProfit = currentAmount as float - initialAmount as float;
        let profitPercentage = (totalProfit / initialAmount as float) * 100.0;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько прибыли в процентах получится с данной инвестиции",
            "какой процент прибыли будет с данной инвестиции",
            "сколько процентов прибыли принесет эта инвестиция",
            "какая прибыль в процентах получится с этого вклада",
            "сколько процентов дохода будет с данной инвестиции",
            "какой процент дохода принесет данная инвестиция",
            "сколько прибыли в процентах можно ожидать с этой инвестиции",
            "какой процент прибыли получится с этой инвестиции",
            "сколько процентов прибыли будет с данного вклада",
            "какая процентная прибыль будет с этой инвестиции",
            "сколько процентов дохода получится с данного вклада"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " начальная сумма вклада " + String::from_int(initialAmount) + "₽, в месяц к сумме прибавляется " + String::from_int(monthlyInterestRate) + "%, так же известно, что средства " 
            + if (reinvest) {"реинвестируются"} else {"нереинвестируются"} + " и вклад открыли на " + PluralRu::pluralify(durationMonths, "месяц", "месяца", "месяцев") + "."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана начальная сумма вклада " + String::from_int(initialAmount) + "₽, в месяц к сумме прибавляется " + String::from_int(monthlyInterestRate) + "%, так же известно, что средства " 
                + if (reinvest) {"реинвестируются"} else {"нереинвестируются"} + " и вклад открыли на " + PluralRu::pluralify(durationMonths, "месяц", "месяца", "месяцев") + "."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Ответ округлить до сотых."
            + "\n Пример ответа: \"52.10%\""
            + "\n<reveal ans>Ответ</reveal>";
        
        expl += "\nПосчитаем общую прибыль: " + if (reinvest) {Main::round(currentAmount, 4)} else {"(" + String::from_int(initialAmount) 
                + " + " + Main::round((currentAmount-initialAmount as float)/durationMonths as float, 4) + " * " + String::from_int(durationMonths) + ")"} 
                + " - " + String::from_int(initialAmount) + " = " + Main::round(totalProfit, 4) + "\n Определим сколько прибыли в процентах: "
                + "\\(\\dfrac{" + Main::round(totalProfit, 4) + "}{" + String::from_int(initialAmount)  + "} * 100 = " + Main::round(profitPercentage, 4) + "\\)\n Следовательно ответ: " + Main::round(profitPercentage, 2) + "%";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(profitPercentage, 2) + "%"
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