//?Сделайте генератор, выводящий математическое выражение с простыми дробями. Человек должен высчитать чему равняется общий знаменатель выражения и выполнить какое-либо арифметическое действие с общим знаменателем (прибавить/отнять какое-либо число к общему знаменателю).


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
        let n = Main::getRandomIntInRange(1, 50);
        let ch: List<int> = [];
        let zn: List<int> = [];
        
        for (let i in 0..2) {
            ch.push(Main::getRandomIntInRange(1, 99));
            zn.push(Main::getRandomIntInRange(1, 99));
            
            if (i == 1) {
                while (Main::findGcd(zn) == 1) {
                    zn[0] = Main::getRandomIntInRange(1, 99);
                    zn[1] = Main::getRandomIntInRange(1, 99);
                }
            }
        }
        
        let nod = Main::findGcd(zn);
        let nok = zn[0] * zn[1] / nod;
        
        let oper = ["умножение", "сложение", "вычитание"][Main::getRandomIntInRange(0, 2)];
        
        let ans = if (oper == "умножение") {n * nok}
                    else if (oper == "сложение") {n + nok}
                    else {nok - n};
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "чему равняется общий знаменатель выражения и выполнить с ним следующее действие",
            "найти общий знаменатель выражения и выполнить с ним следующее действие",
            "чему равен общий знаменатель выражения, и выполнить с ним операцию",
            "общий знаменатель для выражения и произвести с ним операцию",
            "общий знаменатель выражения и выполнить далее указанное действие",
            "значение общего знаменателя выражения и продолжить с ним операцию",
            "каково значение общего знаменателя, и произвести с ним операцию",
            "общий знаменатель выражения и выполнить следующее указанное действие",
            "общий знаменатель выражения и провести с ним следующее действие",
            "общий знаменатель, чтобы выполнить следующее действие с ним",
            "общий знаменатель выражения и выполнить с ним операцию"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " выражение с простыми дробями: ";
        for (let i in 0..2) {
            sc += "\\(\\dfrac{" + String::from_int(ch[i]) + "}{" + String::from_int(zn[i]) + "}\\) + "
        }
        sc = sc[0..sc.length()-2] + ". " + "Её попросили " + whatDo + " " + conditions + ": " + oper + " с данным числом: " + String::from_int(n);

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано выражение с простыми дробями: ";
            for (let i in 0..2) {
                sc += "\\(\\dfrac{" + String::from_int(ch[i]) + "}{" + String::from_int(zn[i]) + "}\\) + "
            }
            sc = sc[0..sc.length()-2] + ". " + "\nТребуется определить " + conditions + ": " + oper + " с данным числом: " + String::from_int(n);
        }

        let desc = sc + "."
            + "\n Пример вывода, следующий: \"66\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти общий знаменатель дробей, сначало найдём его НОД который будет равняться: " + String::from_int(nod)
                + "\nТеперь посчитаем чему будет равняться НОК, это и будет общим знаменателем дробей: \\(\\dfrac{|" + String::from_int(zn[0]) + " * " + String::from_int(zn[1]) 
                + "|}{" + String::from_int(nod) + "}\\) = " + String::from_int(nok)
                + "\nДалее сделаем действие которое требуется по условию и получим ответ: " 
                + if (oper == "умножение") {String::from_int(nok) + "*" + String::from_int(n)}
                    else if (oper == "сложение") {String::from_int(nok) + "+" + String::from_int(n)}
                    else {String::from_int(nok) + "-" + String::from_int(n)}
                + "=" + String::from_int(ans);

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
    
    function findGcd(arr: List<int>) -> int {
        let gcd = arr[0];
        for (let i in arr) {
            let x = i; 
            let y = gcd;
            while (y > 0) {
                let t = y;
                y = x % y;
                x = t;
            }
            gcd = x;
        }
        return gcd;
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/