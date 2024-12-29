/*
?Сделайте генератор пазлов, в котором будет генерироваться начальная сумма займа, а также процентная ставка, количество платежей и другие важные характеристики, а человек должен ввести конечную сумму, которую ему придётся выплатить.

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::canvas::Canvas;
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
        let sum = Main::getRandomIntInRange(1000, 100000);
        let per = Main::getRandomIntInRange(1, 20);
        let month = Main::getRandomIntInRange(2, 60);
        
        let r = per as float / 100.0 / 12.0;
        let r1 = Main::pow(1.0 + r, month)
        let ch = sum as float * r * r1;
        let zn = r1 - 1.0;
        
        let P = ch / zn;
        let T = P * month as float;
                
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let whatDo = "Вычислите|Выясните|Определите|Найдите|Расчитайте|Посчитайте".split("|")[Main::getRandomIntInRange(0, 5)];
        
        let nC = Main::getRandomIntInRange(0, 2);
        let conditions = [
            [
                "приняла решение оформить кредит в банке на сумму",
                "собралась взять банковский кредит на сумму",
                "запланировала взять кредит в банке на сумму",
                "решила оформить кредит в банке на сумму",
                "намерена взять кредит в банке на сумму",
                "решила обратиться в банк за кредитом на сумму",
                "собирается оформить банковский кредит на сумму",
                "решила получить банковский кредит на сумму"
            ][Main::getRandomIntInRange(0, 7)],
            [
                "одолжила у друга ",
                "взяла у друга деньги в долг на сумму",
                "позаимствовала у друга",
                "попросила у друга в долг ",
                "получила в долг от друга",
                "обратилась к другу за деньгами в долг на сумму",
                "взяла у друга в долг определённую сумму",
                "заимствовала деньги у друга на сумму",
                "получила в долг от друга сумму"
            ][Main::getRandomIntInRange(0, 8)],
            [
                "одолжила у родственников",
                "взяла у близких в долг",
                "попросила в долг у семьи",
                "получила в долг у родственников",
                "взяла в долг у своих близких",
                "взяла деньги в долг у родных",
                "позаимствовала у семьи",
                "получила в долг от родственников"
            ][Main::getRandomIntInRange(0, 7)]
        ][nC];
        let conditionsPer = [
            [
                "предоставили кредит под",
                "оформили кредит под",
                "выдали кредит под",
                "одобрили кредит под",
                "предложили кредит под",
                "предоставили займ под",
                "дали займ под",
                "выделили кредит под",
                "оформили займ под"
            ][Main::getRandomIntInRange(0, 8)],
            [
                "одолжили деньги, но договорились, что она вернет сумму с процентами:",
                "дали в долг с условием, что она будет возвращать деньги под процент:",
                "предоставили заем, согласовав, что возврат будет с процентами:",
                "одолжили сумму, установив, что она будет возвращать ее с процентом:",
                "взяла в долг, но договорились, что возврат будет с процентной ставкой:",
                "выдали в долг на условиях возврата с процентами:",
                "одолжили деньги, при условии, что сумма будет возвращена с процентом:",
                "дали в долг, обговорив возврат под процент:",
                "предоставили в долг с обязательством вернуть сумму под процент:",
                "одолжили средства, договорившись о возврате суммы с начислением процентов:"
            ][Main::getRandomIntInRange(0, 9)]
        ][if(nC!=0){1}else{0}];
        let conditionsTime = [
            "который она планирует возвращать в течение",
            "который она собирается возвращать на протяжении",
            "который она планирует выплатить в течение",
            "который она намерена возвращать в течение",
            "который она рассчитывает вернуть в течение",
            "который она собирается погашать в течение",
            "который она планирует погасить в течение",
            "который она будет возвращать на протяжении",
            "который она намерена выплатить в течение",
            "который она собирается вернуть в срок",
            "который она рассчитывает выплатить за"
        ][Main::getRandomIntInRange(0, 10)];
        let conditionsAll = [
            "сумму, которую ей предстоит выплатить за весь период",
            "сумму, которую она должна будет выплатить за всё время",
            "общую сумму выплат, которую ей придётся внести",
            "итоговую сумму, которую она будет обязана выплатить",
            "сумму, которую ей нужно будет погасить за весь срок",
            "общую сумму, которую ей придётся выплатить",
            "сумму, которую она обязана выплатить за весь срок",
            "полную сумму, которую ей придётся выплатить за весь период",
            "сумму, которую она должна будет выплатить полностью",
            "итоговую сумму выплат за весь период"
        ][Main::getRandomIntInRange(0, 9)];
        
        let sc = name + " " + conditions + " "
            + String::from_int(sum) + "₽. Ей " + conditionsPer + " "
            + String::from_int(per) + "% в год, " + conditionsTime + " "
            + String::from_int(month) 
            + Main::declOfNum(month, [" месяца", " месяцев", " месяцев"])
            + ". " + name + " планирует платить один раз в месяц."
            + whatDo + " " + conditionsAll + ". "
            + "Конечную сумму необходимо рассчитать по формуле аннуитета и сократить до целого числа по математическим правилам.";
        
        if(Main::getRandomIntInRange(0, 1) == 1 ) {
            sc="Требуется определить сумму, которую нужно выплатить за весь период" 
                + ". Если известно что кредит предоставлен на сумму "
                + String::from_int(sum) + "₽ под "
                + String::from_int(per) + "% в год, на "
                + String::from_int(month) 
                + Main::declOfNum(month, [" месяц", " месяца", " месяцев"])
                + ". Займ платится один раз в месяц. "
                + "Конечную сумму необходимо рассчитать по формуле аннуитета и сократить до целого числа по математическим правилам.";
        }
        
        let desc = sc 
            + "\n Формат вывода, следующий: N₽"
            + "\n Пример: 12345₽"
            + "\n<reveal ans>Ответ</reveal>";
                
        let expl = "Сначала рассчитываем месячную ставку r="
            + String::from_int(per) + "/100/12"
            + "\nПосле узнаём сумму ежемесячного платежа "
            + "P=\\(\\frac{" + String::from_int(sum) 
            +" * r * (1 + r)^{" + String::from_int(month) +"}}{(1 + r)^{"
            + String::from_int(month) +"} - 1}\\)"
            + "\nВ конце рассчитываем общую сумму выплат T=P*"
            + String::from_int(month)
            + "\nОтвет округляем до целого числа и получаем "
            + Main::round(T,0) + "₽";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(T,0) + "₽"
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

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
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
    
    function pow(num: float, power: int) -> float {
        if (num == 0.0 && power != 0) {return 0.0;};
        if (num == 0.0) {return 0.0;};
        let t = 1.0;
        for (let i in 0..power){
            t *= num;
        };
        return t;
    }
    
    function stringToFloat(str: String) -> float {
        let n = str.split(".");
        let z = "1";
        for (let i in 0..n[1].length()) {
            z+="0"
        }
        
        return String::to_int(n[0]) as float + (String::to_int(n[1]) as float / String::to_int(z) as float) as float
    }
}
*/