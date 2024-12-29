/*
?Создать генератор, который выводит два неравенства вида (15; 16; 17; 18] и [14, 15, 16]. Необходимо сложить первое двузначное число, которое входит в первый интервал со вторым двузначным числом, которое входит во второй интервал. В данном случае: 16+15, ответ: 31.

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
        let inq = [Main::getInequalities(), Main::getInequalities()];
        let sum1 = 0;
        let sum2 = 0;
        let interval1 = ["([".split("")[Main::getRandomIntInRange(1, 2)], "])".split("")[Main::getRandomIntInRange(1, 2)]];
        let interval2 = ["([".split("")[Main::getRandomIntInRange(1, 2)], "])".split("")[Main::getRandomIntInRange(1, 2)]];
        
        for (let i in 0..inq[0].length()) {
            sum1 += inq[0][i]
        }
        for (let i in 0..inq[1].length()) {
            sum2 += inq[1][i]
        }
        
        while (sum1 == sum2) {
            inq = [Main::getInequalities(), Main::getInequalities()];
            sum1 = 0;
            sum2 = 0;
                
            for (let i in 0..inq[0].length()) {
                sum1 += inq[0][i]
            }
            for (let i in 0..inq[1].length()) {
                sum2 += inq[1][i]
            }
        }
        
        inq[0] = ListSort::<int>::stable_sort(inq[0]);
        inq[1] = ListSort::<int>::stable_sort(inq[1]);
        
        let start1 = if (interval1[0] == "(") {1} else {0}
        let end1 = if (interval1[1] == ")") {inq[0].length()-1} else {inq[0].length()}
        
        let start2 = if (interval2[0] == "(") {1} else {0}
        let end2 = if (interval2[1] == ")") {inq[1].length()-1} else {inq[1].length()}
        
        let n1 = 0;
        let n2 = 0;
        
        for (let i in start1..end1) {
            if (inq[0][i] >= 10) {
                n1 = inq[0][i];
                break;
            }
        }
        for (let i in start2..end2) {
            if (inq[1][i] >= 10) {
                n2 += 1;
            }
            
            if (inq[1][i] >= 10 && n2 == 2) {
                n2 = inq[1][i];
                break;
            }
        }
        
        if (n2 < 10) {
            n2 = 0;
        }
        
        let ans = n1 + n2;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "ответ, сложив первое двузначное число, которое входит в первый интервал со вторым двузначным числом, которое входит во второй интервал",
            "ответ, сложив первое двузначное число из первого интервала со вторым двузначным числом из второго интервала",
            "ответ, прибавив первое двузначное число из первого интервала ко второму двузначному числу из второго интервала",
            "ответ, сложив первое двузначное число, попадающее в первый интервал, со вторым двузначным числом из второго интервала",
            "найти ответ, сложив двузначное число из первого интервала с двузначным числом из второго интервала",
            "ответ, добавив первое двузначное число из первого интервала ко второму из второго интервала",
            "ответ, сложив первый двузначный элемент из первого интервала с двузначным элементом из второго интервала",
            "ответ, прибавив первое двузначное число из первого интервала ко второму двузначному из второго интервала",
            "ответ, сложив первое двузначное число первого интервала со вторым двузначным числом второго интервала",
            "ответ, прибавив первое двузначное значение из первого интервала ко второму значению из второго интервала",
            "ответ, сложив первое двузначное число из первого интервала со вторым из второго интервала"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два неравенства: ";
        for (let i in 0..inq[0].length()) {
            if (i == 0) {
                sc += interval1[0];
            }
            
            if (i == inq[0].length()-1) {
                sc += String::from_int(inq[0][i]) + interval1[1];
                continue;
            }
            
            sc += String::from_int(inq[0][i]) + ", ";
        }
        sc += " и ";
        for (let i in 0..inq[1].length()) {
            if (i == 0) {
                sc += interval2[0];
            }
            
            if (i == inq[1].length()-1) {
                sc += String::from_int(inq[1][i]) + interval2[1];
                continue;
            }
            
            sc += String::from_int(inq[1][i]) + ", ";
        }
        sc += ".\nЕё попросили " + whatDo + " " + conditions + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два неравенства: ";
            for (let i in 0..inq[0].length()) {
                if (i == 0) {
                    sc += interval1[0];
                }

                if (i == inq[0].length()-1) {
                    sc += String::from_int(inq[0][i]) + interval1[1];
                    continue;
                }

                sc += String::from_int(inq[0][i]) + ", ";
            }
            sc += " и ";
            for (let i in 0..inq[1].length()) {
                if (i == 0) {
                    sc += interval2[0];
                }

                if (i == inq[1].length()-1) {
                    sc += String::from_int(inq[1][i]) + interval2[1];
                    continue;
                }

                sc += String::from_int(inq[1][i]) + ", ";
            }
            sc += ". Требуется определить " + conditions + ". ";
        }

        let desc = sc + "Если такого числа нет, берём 0."
            + "\n Пример вывода, следующий: \"62\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Число из первого интервала - " + String::from_int(n1)
            + "\nЧисло из второго интервала - " + String::from_int(n2)
            + "\nИ найдём ответ: " + String::from_int(n1) + " + " + String::from_int(n2) + " = " + String::from_int(ans);

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
    
    function getInequalities() -> List<int> {
        let nums: List<int> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 5)) {
            nums.push(Main::getRandomIntInRange(1, 50));
        }
        
        return nums;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/