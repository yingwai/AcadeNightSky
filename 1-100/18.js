/*
?Создайте генератор, который выводит картинки денег разного номинала. Задача выбрать банкноты или монеты, которые равны определенной сумме.

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

class Money {
    public count: float,
    public img: String
}
class Main {
    function gen_puzzle() -> Puzzle {
        let money = Main::generateMoney();
        let sum = 0.0;
        let n = [Main::getRandomIntInRange(0, money.length()-1), Main::getRandomIntInRange(0, money.length()-1)];
        let ans = ""
        
        while (n[1] - n[0] < 2) {
            n = [Main::getRandomIntInRange(0, money.length()-1), Main::getRandomIntInRange(0, money.length()-1)];
        }
        
        for (let i in n[0]..n[1]) {
            sum += money[i].count;
            ans += String::from_int(i+1) + " "
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "нарисованы|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какие монеты или купюры нужно выбрать, чтобы сумма была",
            "какие монеты или купюры нужно подобрать, чтобы получить сумму",
            "какие купюры или монеты нужно выбрать для суммы",
            "какие монеты или купюры нужно взять, чтобы была сумма",
            "какие деньги нужно подобрать, чтобы была сумма",
            "какие купюры и монеты использовать для суммы"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " деньги разного номинала:\n"
        for (let i in 0..money.length()) {
            sc += "<img " + money[i].img + ">    "
        }
        sc += "\nЕё попросили " + whatDo + " " 
            + conditions + Main::round(sum, 2) + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны деньги разного номинала:\n";
            for (let i in 0..money.length()) {
                sc += "<img " + money[i].img + ">    "
            }
            sc += "\nТребуется определить "
                + conditions + Main::round(sum, 2) + ". ";
        }

        let desc = sc 
            + "\n В ответ записать номер монеты или купюры по очереди."
            + "\n Пример: 2 3 4"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Из всех полученных денег, нам нужна сумма " 
            + Main::round(sum, 2) + ". \n"
            + "Она у нас получается из денен номиналом: ";
        for (let i in n[0]..n[1]-1) {
            expl += Main::round(money[i].count, 2) + " + "
        }
        expl += Main::round(money[n[1]-1].count, 2) + " = " 
            + Main::round(sum, 2) + ". \n"
            + "Следовательно ответ: " + ans;

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
    
    function generateMoney() -> List<Money> {
       let moneys = [
           new Money {
               count: 0.01,
               img: "euro_001"
           },
           new Money {
               count: 0.02,
               img: "euro_002"
           },
           new Money {
               count: 0.05,
               img: "euro_005"
           },
           new Money {
               count: 0.1,
               img: "euro_01"
           },
           new Money {
               count: 0.2,
               img: "euro_02"
           },
           new Money {
               count: 0.5,
               img: "euro_05"
           },
           new Money {
               count: 1.0,
               img: "euro_1"
           },
           new Money {
               count: 2.0,
               img: "euro_2"
           },
           new Money {
               count: 5.0,
               img: "euro_5"
           },
           new Money {
               count: 10.0,
               img: "euro_10"
           },
           new Money {
               count: 20.0,
               img: "euro_20"
           },
           new Money {
               count: 50.0,
               img: "euro_50"
           },
           new Money {
               count: 100.0,
               img: "euro_100"
           },
           new Money {
               count: 200.0,
               img: "euro_200"
           }
       ];
        
        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            moneys = Main::shuffleArray(moneys);
        }
        
        let n1 = Main::getRandomIntInRange(0, 10);
        let arr: List<Money> = moneys[n1..13];
        
        return arr;
        
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign: String = " ";
        
        if (p < 0.0) {
            sign = "-";
            p = -p;
        }
        
        let coeff: int = 1;
        
        for (let i in 0..after_dot) {
            coeff *= 10;
        }
        
        let p2 = ((p * coeff as float) + 0.5) / coeff as float;
        let a = (p2) - (p2 as int) as float;
        let coef = 0.9;
        let coef2 = 10.0;
        
        let zeros = 0;
        while(true) {
            if(((a + coef) * coef2) as int == 9) {
                zeros += 1
                coef /= 10.0
                coef2 *= 10.0
            }
            else {
                break;
            }
        }
      
        p *= (coeff as float);
        let int_p = (p + 0.5) as int;

        let after_string2: String = String::from_int(int_p % coeff);
        let after_string = "";
        for(let i in 0..zeros) {
            after_string += "0";
        }
        after_string += after_string2;
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff) as int)
        }

        return (sign + String::from_int((int_p / coeff) as int) + "."  + after_string[0..2]);
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function shuffleArray(array: List<Money>) -> List<Money> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
*/