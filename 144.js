/*
?Сделайте генератор, который будет выводить 2 столбца с числами, и давать условие какие числа из этих столбцов надо сложить (например те которые начинаются на 2 или те которые состоят больше чем из 2 цифр). Человеку надо будет посчитать сумму из чисел по условию и сказать в какой колонке сумма получилась больше или меньше. Пример: 2;76;34;133;2344;234;1;4 / 43;777;34;1233;43;544;2454;2. Сложите те числа которые заканчиваются на 4. 34+2344+234+4=2614 / 34+544+2454=3032 Ответ: 1колонка < 2колонка

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
        let nums: List<List<int> > = [];
        let len = Main::getRandomIntInRange(3, 6);
        
        for (let i in 0..2) {
            let arr: List<int> = [];
            
            for (let i in 0..len) {
                arr.push(Main::getRandomIntInRange(1, 1000))
            }
            
            nums.push(arr)
        }
        
        let table = "";
        table += "<table><tr><td>Столбец 1</td><td>Столбец 2</td></tr>";
        for (let i in 0..len) {
            table += "<tr><td>" + String::from_int(nums[0][i]) + "</td><td>" + String::from_int(nums[1][i]) + "</td></tr>"
        }
        table += "</table>";
        
        let nCon0 = Main::getRandomIntInRange(2, 3);
        let nCon1 = Main::getRandomIntInRange(1, 9);
        let iCon = Main::getRandomIntInRange(0, 5)
            
        let con = [
            "те числа которые состоят больше чем из " + String::from_int(nCon0) + " цифр",
            "те числа которые состоят меньше чем из " + String::from_int(nCon0) + " цифр",
            "те числа которые начинаются на цифру " + String::from_int(nCon1),
            "те числа которые заканчиваются на цифру " + String::from_int(nCon1),
            "чётные числа",
            "нечётные числа"
        ][iCon];
        
        let sum = [0, 0];
        for (let n in 0..nums.length()) {
            for (let i in nums[n]) {
                if (iCon == 0) {
                    if (String::from_int(i).length() > nCon0) {
                        sum[n] = sum[n] + i;
                    }
                } else if (iCon == 1) {
                    if (String::from_int(i).length() < nCon0) {
                        sum[n] = sum[n] + i;
                    }
                } else if (iCon == 2) {
                    if (String::from_int(i).split("")[1] == String::from_int(nCon1)) {
                        sum[n] = sum[n] + i;
                    }
                } else if (iCon == 3) {
                    if (String::from_int(i).split("")[String::from_int(i).split("").length()-1] == String::from_int(nCon1)) {
                        sum[n] = sum[n] + i;
                    }
                } else if (iCon == 4) {
                    if (i % 2 == 0) {
                        sum[n] = sum[n] + i;
                    }
                } else if (iCon == 5) {
                    if (i % 2 != 0) {
                        sum[n] = sum[n] + i;
                    }
                }
            }
        }
        
        let ans = if (sum[0] == sum[1]) {"1 столбец = 2 столбец"} else if (sum[0] > sum[1]) {"1 столбец > 2 столбец"} else {"1 столбец < 2 столбец"}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сумма какого столбца получилась больше или меньше, или равна",
            "сумма какого столбца больше, меньше или равна",
            "сумма какого столбца получилась больше, меньше или равной",
            "сумма которого столбца больше, меньше или равна",
            "сумма какого столбца оказалась больше, меньше или равна",
            "сравните суммы столбцов и выберите, какой из них больше, меньше или равен"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица в которой имеется 2 столбца с числами: " + table
            + "\nЕё попросили сложить " + con + " каждого столбца и ответить, " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица в которой имеется 2 столбца с числами: " + table
                + "\nТребуется сложить " + con + " каждого столбца и ответить, " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"1 столбец = 2 столбец\" или \"1 столбец > 2 столбец\", или \"1 столбец < 2 столбец\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала определим сумму каждого столбца исходя из условий: \n";
        for (let n in 0..nums.length()) {
            expl += String::from_int(n+1) + ". "
            for (let i in nums[n]) {
                if (iCon == 0) {
                    if (String::from_int(i).length() > nCon0) {
                        expl += String::from_int(i) + " + ";
                    }
                } else if (iCon == 1) {
                    if (String::from_int(i).length() < nCon0) {
                        expl += String::from_int(i) + " + ";
                    }
                } else if (iCon == 2) {
                    if (String::from_int(i).split("")[1] == String::from_int(nCon1)) {
                        expl += String::from_int(i) + " + ";
                    }
                } else if (iCon == 3) {
                    if (String::from_int(i).split("")[String::from_int(i).split("").length()-1] == String::from_int(nCon1)) {
                        expl += String::from_int(i) + " + ";
                    }
                } else if (iCon == 4) {
                    if (i % 2 == 0) {
                        expl += String::from_int(i) + " + ";
                    }
                } else if (iCon == 5) {
                    if (i % 2 != 0) {
                        expl += String::from_int(i) + " + ";
                    }
                }
            }
            
            if (sum[n] == 0) {expl += "Т.к. нужных чисел нет, сумма равняется 0 \n"} else {expl = expl[0..expl.length()-2] + " = " + String::from_int(sum[n]) + "\n"}
        }
        
        expl += "\n Следовательно ответ: " + ans

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

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/