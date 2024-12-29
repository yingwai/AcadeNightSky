/*
?Создайте генератор задач, который на входе задает параметры двух кредитов (срок, процент по кредиту, комиссия за обслуживание кредита) нужно рассчитать сумму ежемесячных выплат и выбрать кредит с самой низкой суммой ежемесячного платежа.

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

class Cred {
    public index: int,
    public per: int,
    public year: int,
    public com: int
}
class Main {
    function gen_puzzle() -> Puzzle {
        let rub = Main::getRandomIntInRange(100000, 1000000);
        let cred: List<Cred> = [];
        
        for (let i in 0..2) {
            cred.push(new Cred {
                index: i,
                per: Main::getRandomIntInRange(2, 8),
                year: Main::getRandomIntInRange(1, 10),
                com: Main::getRandomIntInRange(10, 100),
            })
        }
        
        let pay = Main::getPayCred(rub, cred);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..cred.length()) {
            list += "Кредит " + String::from_int(i+1) + ": " + String::from_int(cred[i].per) + "% на " 
                + String::from_int(cred[i].year) + " " + Main::declOfNum(cred[i].year, ["год","года","лет"]) + ". Комиссия за обслуживание кредита ежемесячно составляет " + String::from_int(cred[i].com) + "₽\n"
        }
        let conditions = [
            "какой кредит меньше придётся выплачивать ежемесячно по формуле аннуитета",
            "в каком из кредитов ежемесячный платеж по формуле аннуитета будет меньше",
            "какой кредит предлагает меньшую сумму ежемесячного платежа по аннуитету",
            "кредит где ежемесячные выплаты по аннуитету окажутся ниже",
            "в каком из кредитов минимальный ежемесячный платеж по формуле аннуитета",
            "какой кредит нужно будет выплачивать меньше каждый месяц по аннуитету",
            "кредит где ежемесячный аннуитетный платеж окажется самым низким",
            "какой кредит имеет меньший ежемесячный платеж по аннуитетной формуле",
            "в каком из кредитов ежемесячные выплаты будут минимальными по формуле аннуитета",
            "какой кредит обеспечивает меньшую ежемесячную нагрузку по аннуитету",
            "в каком случае ежемесячные платежи по формуле аннуитета будут меньше"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два кредита: \n" + list
            + "Её попросили " + whatDo + " " + conditions + ". Если известно, что ей нужна сумма: " + String::from_int(rub) + "₽.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано два кредита: \n" + list
                + "Требуется определить " + conditions + ". Если известно, что нужна сумма: " + String::from_int(rub) + "₽.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"Кредит 2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем сколько придётся выплачивать ежемесячно по каждому кредиту с помощью формулы аннуитета: \n";
        for (let i in 0..cred.length()) {
            expl += "Кредит " + String::from_int(i+1) + ": \n Рассчитываем месячную ставку r="
                + String::from_int(cred[i].per) + "/100/12"
                + "\nУзнаём сколько месяцев нужно выплачивать 12*" + String::from_int(cred[i].year) + "=" + String::from_int(cred[i].year*12)
                + "\nПосчитаем комиссию за весь период обслуживание кредита " + String::from_int(cred[i].year*12) + "*" + String::from_int(cred[i].com) + "=" + String::from_int(cred[i].year*12*cred[i].com)
                + "\nПосчитаем сумму ежемесячного платежа "
                + "P=\\(\\dfrac{" + String::from_int(rub) 
                +" * r * (1 + r)^{" + String::from_int(cred[i].year*12) +"}}{(1 + r)^{"
                + String::from_int(cred[i].year*12) +"} - 1} + " + String::from_int(cred[i].year*12*cred[i].com) + "\\)"
                + "\nОтвет округляем до целого числа и получаем "
                + Main::round(pay[i],0) + "₽\n\n";
        }
        
        let index = 0;
        for (let i in 1..cred.length()) {
            if (pay[i] < pay[index]) {
                index = i;
            }
        }
        index+=1;
        
        expl += "\n Следовательно ответ: Кредит " + String::from_int(index);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: "Кредит " + String::from_int(index)
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

    function getPayCred(rub: int, cred: List<Cred>) -> List<float> {
        let arr: List<float> = [];
        
        for (let i in 0..cred.length()) {
            let r = cred[i].per as float / 100.0 / 12.0;
            let r1 = Main::pow(1.0 + r, cred[i].year * 12);
            let ch = rub as float * r * r1;
            let zn = r1 - 1.0;

            let com = cred[i].year * 12 * cred[i].com
                
            let P = ch / zn + com as float;
            
            arr.push(P);
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