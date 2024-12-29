/*
?Сделайте генератор пазлов, в котором генерируются условия кредитования, например: процентная ставка, насколько могут выдать кредит и т.п. и человеку нужно будет выбрать банк, который выдает лучшие условия в зависимости от того, какое количество денег ему нужно и с самой наименьшей процентной ставкой.

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

class Bank {
    public index: int,
    public per: int,
    public year: int
}
class Main {
    function gen_puzzle() -> Puzzle {
        let rub = Main::getRandomIntInRange(100000, 1000000);
        let bank: List<Bank> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2,6)) {
            bank.push(new Bank {
                index: i,
                per: Main::getRandomIntInRange(2, 8),
                year: Main::getRandomIntInRange(1, 10),
            })
        }
        
        let pay = Main::getPayBank(rub, bank);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..bank.length()) {
            list += "Банк " + String::from_int(i+1) + " предлагает " + String::from_int(bank[i].per) + "% на " + String::from_int(bank[i].year) + " " + Main::declOfNum(bank[i].year, ["год","года","лет"]) + "\n"
        }
        let conditions = [
            "какому банку меньше придётся выплатить за весь период по формуле аннуитета",
            "какой банк потребует меньшую выплату за весь период по формуле аннуитета",
            "в каком банке общая выплата по аннуитету будет меньше за весь срок",
            "в какой банк потребуется выплатить меньшую сумму по аннуитетной формуле за весь период",
            "какой из банков предполагает наименьшую сумму выплат за весь срок по аннуитету",
            "в какой банк потребуется выплатить меньше по аннуитетной формуле за весь период",
            "какой банк требует меньшую сумму выплат по аннуитету за весь период",
            "какому банку нужно будет выплатить меньше по аннуитетной схеме за весь срок",
            "в каком банке по аннуитетной формуле выплата за весь срок будет наименьшей",
            "какой банк предполагает наименьшие выплаты по аннуитету за весь срок",
            "какому банку потребуется меньше выплатить за весь период по аннуитету"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько банков: \n" + list
            + "Её попросили " + whatDo + " " + conditions + ". Если известно, что ей нужна сумма: " + String::from_int(rub) + "₽.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько банков: \n" + list
                + "Требуется определить " + conditions + ". Если известно, что ей нужна сумма: " + String::from_int(rub) + "₽.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"Банк 2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем сколько придётся выплатить каждому банку с помощью формулы аннуитета: \n";
        for (let i in 0..bank.length()) {
            expl += "Банк " + String::from_int(i+1) + ": \n Рассчитываем месячную ставку r="
                + String::from_int(bank[i].per) + "/100/12"
                + "\nУзнаём сколько месяцев нужно выплачивать 12*" + String::from_int(bank[i].year) + "=" + String::from_int(bank[i].year*12)
                + "\nПосчитаем сумму ежемесячного платежа "
                + "P=\\(\\dfrac{" + String::from_int(rub) 
                +" * r * (1 + r)^{" + String::from_int(bank[i].year*12) +"}}{(1 + r)^{"
                + String::from_int(bank[i].year*12) +"} - 1}\\)"
                + "\nВ конце рассчитываем общую сумму выплат T=P*"
                + String::from_int(bank[i].year*12)
                + "\nОтвет округляем до целого числа и получаем "
                + Main::round(pay[i],0) + "₽\n\n";
        }
        
        let index = 0;
        for (let i in 1..bank.length()) {
            if (pay[i] < pay[index]) {
                index = i;
            }
        }
        index+=1;
        
        expl += "\n Следовательно ответ: Банк " + String::from_int(index);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: "Банк " + String::from_int(index)
                } as Reveal
            ],
        }
    }
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign : String = " ";
        if (p < 0.0) {
            sign = "-";
            p = -p;
        }

        let coeff: int = 1;
        for (let i in 0..after_dot) {
            coeff *= 10;
        }

        p *= (coeff as float);
        let int_p = (p + 0.5) as int;

        let after_string: String = String::from_int(int_p % coeff);
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }

        return (sign + String::from_int((int_p / coeff)as int) + "."  + after_string);
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }

    function getPayBank(rub: int, bank: List<Bank>) -> List<float> {
        let arr: List<float> = [];
        
        for (let i in 0..bank.length()) {
            let r = bank[i].per as float / 100.0 / 12.0;
            let r1 = Main::pow(1.0 + r, bank[i].year * 12)
            let ch = rub as float * r * r1;
            let zn = r1 - 1.0;

            let P = ch / zn;
            let T = P * (bank[i].year * 12) as float;
            
            arr.push(T);
        }
        
        return arr
    }
    
    function pow(num: float, power: int) -> float {
        if (num == 0.0 && power != 0) {return 0.0;};
        if (num == 0.0) {return 0.0;};
        let t = 1.0;
        for (let i in 0..power){
            t *= num;
        };
        return t;
    }
}
*/