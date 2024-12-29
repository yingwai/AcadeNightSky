/*
?Создайте генератор паззлов, в которых будет дано несколько примеров вида "a/b", где a, b - натуральные числа, при этом a не кратно b. Требуется указать на тот пример, результат целочисленного деления которого наиболее близок к результату деления с остатком, т.е. 16/5 = 3 (целочисленное деление); 16/5=3,2 (деление с остатком) - разница 0,2. Данная запись приведена для демонстрации того, что будет требоваться от решающего.

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

class Examples {
    public a: int,
    public b: int,
    public intNum: int,
    public exactNum: float
}

class Main {
    function gen_puzzle() -> Puzzle {
        let examples: List<Examples> = [];
        let exampleCount = Main::getRandomIntInRange(2, 6);
        let smallestDifference = 1000000000000000.0;
        let ans = 0;

        for (let i in 0..exampleCount) {
            let a = Main::getRandomIntInRange(10, 99);
            let b = Main::getRandomIntInRange(2, 10);
            
            while (a % b == 0) {
                a = Main::getRandomIntInRange(10, 99);
                b = Main::getRandomIntInRange(2, 10);
            }

            let intNum = a / b;
            let exactNum = a as float / b as float;
            let difference = exactNum - intNum as float;

            examples.push(new Examples { a: a, b: b, intNum: intNum, exactNum: exactNum });

            if (difference < smallestDifference) {
                smallestDifference = difference;
                ans = i + 1;
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..exampleCount) {
            list += "\n" + String::from_int(i+1) + ". " + String::from_int(examples[i].a) + "/" + String::from_int(examples[i].b);
        }
        
        let conditions = [
            "номер того примера, результат целочисленного деления которого наиболее близок к результату деления с остатком",
            "номер примера, результат целочисленного деления которого наиболее близок к результату деления с остатком",
            "номер какого примера имеет наибольшее приближение результата целочисленного деления к результату деления с остатком",
            "номер примера, чье целочисленное деление наибольшее по близости к результату деления с остатком",
            "укажите номер примера, результат целочисленного деления которого ближе всего к результату деления с остатком",
            "номер примера, в котором результат целочисленного деления максимально близок к результату деления с остатком",
            "выберите номер примера, где целочисленное деление наиболее приближено к делению с остатком",
            "укажите пример с результатом целочисленного деления, наиболее близким к результату с остатком",
            "какой пример имеет результат целочисленного деления, максимально приближенный к делению с остатком",
            "номер примера с целочисленным делением, чье значение ближе всего к делению с остатком",
            "номер примера, где результат целочисленного деления отличается от результата деления с остатком наименьше"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько примеров вида \"a/b\": " + list
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько примеров вида \"a/b\": " + list
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Если таких примеров несколько, верным будет тот, что идёт первее."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем каждый пример: ";
        for (let i in 0..exampleCount) {
            expl += "\n" + String::from_int(i+1) + ". " + String::from_int(examples[i].a) + "/" + String::from_int(examples[i].b) 
                + " -> Целочисленное деление: " + String::from_int(examples[i].intNum) + ", Деление с остатком: " + Main::round(examples[i].exactNum, 2) + ", Разница: " + Main::round(examples[i].exactNum - examples[i].intNum as float, 2);
        }

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