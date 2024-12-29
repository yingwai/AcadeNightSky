/*
?Создайте генератор заданий, в котором будут выводить числа различных видов (римские, арабские и тд). Решающий должен определить каких чисел представлено больше/меньше всего. Или можно попросить сложить числа по видам между собой, а затем просить определить какие числа дают большую или меньшую сумму.

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
        let arb: List<int> = [];
        let rim: List<int> = [];        
        let sumArb = 0;    
        let sumRim = 0;
        
        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            arb.push(Main::getRandomIntInRange(1, 1000));
            sumArb += arb[i];
        }
        
        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            rim.push(Main::getRandomIntInRange(1, 1000));
            sumRim += rim[i];
        }
        
        while (arb.length() == rim.length() || sumArb == sumRim) {
            arb = [];
            rim = [];        
            sumArb = 0;    
            sumRim = 0;
        
            for (let i in 0..Main::getRandomIntInRange(3, 10)) {
                arb.push(Main::getRandomIntInRange(1, 1000));
                sumArb += arb[i];
            }

            for (let i in 0..Main::getRandomIntInRange(3, 10)) {
                rim.push(Main::getRandomIntInRange(1, 1000));
                sumRim += rim[i];
            }
        }

        let more1 = Main::getRandomIntInRange(0, 1) == 1;
        let more2 = Main::getRandomIntInRange(0, 1) == 1;
        let ans1 = if (more1) {
            if (arb.length() > rim.length()) {"больше арабских чисел"}
            else {"больше римских чисел"}
        } else {
            if (arb.length() < rim.length()) {"меньше арабских чисел"}
            else {"меньше римских чисел"}
        }
        
        let ans2 = if (more2) {
            if (sumArb > sumRim) {"большая сумма у арабских чисел"}
            else {"большая сумма у римских чисел"}
        } else {
            if (sumArb < sumRim) {"меньшая сумма у арабских чисел"}
            else {"меньшая сумма у римских чисел"}
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo2 = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let arbRow = "";
        let rimRow = "";
        for (let i in 0..arb.length()) {
            if (i == arb.length()-1) {
                arbRow += String::from_int(arb[i]);
                continue;
            }
            
            arbRow += String::from_int(arb[i]) + ", "
        }
        for (let i in 0..rim.length()) {
            if (i == rim.length()-1) {
                rimRow += Main::convertRim(rim[i]);
                continue;
            }
            
            rimRow += Main::convertRim(rim[i]) + ", "
        }
        
        let conditionsArb = [
            "ряд арабских чисел",
            "последовательность арабских чисел",
            "цепочка арабских чисел",
            "ряд чисел, записанных арабскими цифрами",
            "набор арабских чисел"
        ][Main::getRandomIntInRange(0, 4)];
        let conditionsRim = [
            "ряд римских чисел",
            "последовательность римских чисел",
            "цепочка римских чисел",
            "ряд чисел, записанных римскими цифрами",
            "набор римских чисел"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task 
            + " " + conditionsArb + ": " + arbRow
            + " и " + conditionsRim + ": " + rimRow + ". "
            + "Её попросили " + whatDo 
            + " каких чисел представлено "
            + if (more1) {"больше"}
              else {"меньше"}
            + " всего. И " + whatDo2 
            + " какие числа дают "
            + if (more2) {"большую"}
              else {"меньшую"}
            + " сумму.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditionsArb + ": " + arbRow
                + " и " + conditionsRim + ": " + rimRow + ". "
                + "Требуется определить каких чисел представлено "
                + if (more1) {"больше"}
                  else {"меньше"}
                + " всего. И " + whatDo2 
                + " какие числа дают "
                + if (more2) {"большую"}
                  else {"меньшую"}
                + " сумму.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"меньше арабских чисел, большая сумма у римских чисел\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала найдём каких чисел "
            + if (more1) {"больше"}
              else {"меньше"} + ": "
            + "арабских чисел - " + String::from_int(arb.length())
            + ", а римских - " + String::from_int(rim.length())
            + ". \n Следовательно " + ans1
            + ". \n\n Теперь посчитаем сумму чисел и определим "
            + if (more2) {"большую"}
              else {"меньшую"}
            + " сумму: \n";
        for (let i in 0..arb.length()) {
            if (i == arb.length()-1) {
                expl += String::from_int(arb[i]) 
                    + " = " + String::from_int(sumArb);
                continue;
            }
            
            expl += String::from_int(arb[i]) + " + "
        }
        expl += "\n"
        for (let i in 0..rim.length()) {
            if (i == rim.length()-1) {
                expl += Main::convertRim(rim[i])
                    + " = "
                continue;
            }
            
            expl += Main::convertRim(rim[i]) + " + "
        }
        for (let i in 0..rim.length()) {
            if (i == rim.length()-1) {
                expl += String::from_int(rim[i])
                    + " = " + String::from_int(sumRim);
                continue;
            }
            
            expl += String::from_int(rim[i]) + " + "
        }
        expl += ". \n Следовательно " + ans2
            + "\n\n Получаем ответ: " + ans1 + ", " + ans2;
                  

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans1 + ", " + ans2
                } as Reveal
            ],
        }
    }
    
    function convertRim(num:int) -> String {
        let c=[
            ["","I","II","III","IV","V","VI","VII","VIII","IX"],
            ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            ["","M","MM","MMM"]
        ];

        if (num == 0) {return "0"}

        return c[3][num / 1000 % 10]+c[2][num / 100 % 10]+c[1][num / 10 % 10]+c[0][num % 10];
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/