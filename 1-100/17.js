/*
?Создайте генератор паззлов, который будет генерировать несколько равенств с использованием операции сложения. Генератор будет просить определить равенство, в результате которого была допущена ошибка.

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
        let len = Main::getRandomIntInRange(2, 10);
        let nums: List<int> = [];
        let equalities: List<String> = [];
        
        for (let i in 0..len) {
            nums.push(Main::getRandomIntInRange(50, 1000));
            nums.push(Main::getRandomIntInRange(50, 1000));
        }
        
        for (let i in 0..nums.length()) {
            if (i == 0) {
                equalities.push(Main::getEqualities([nums[i], nums[i + 1]]))    
            }
            else if (i % 2 == 0) {
                equalities.push(Main::getEqualities([nums[i], nums[i + 1]]))   
            }
        }
        
        let ans = Main::getRandomIntInRange(0, equalities.length()-1);
        let num = String::from_int(Main::getRandomIntInRange(50, 1000)) 
            + " + " + String::from_int(Main::getRandomIntInRange(50, 1000));
        
        let part1 = equalities[ans].split("=")[Main::getRandomIntInRange(0, 1)];
        let part2 = equalities[ans].split("=")[Main::getRandomIntInRange(0, 1)];
        while (part1 != part2) {
            part1 = equalities[ans].split("=")[Main::getRandomIntInRange(0, 1)];
            part2 = equalities[ans].split("=")[Main::getRandomIntInRange(0, 1)];
        }
        
        while (part1 == num) {
            num = String::from_int(Main::getRandomIntInRange(50, 1000)) 
                + " + " + String::from_int(Main::getRandomIntInRange(50, 1000));
        }
        equalities[ans] = part1 + "= " + num;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "несколько уравнений равенств",
            "несколько равенств",
            "несколько разных равенств",
            "несколько выражений с равенствами"
        ][Main::getRandomIntInRange(0, 3)];
        let conditions1 = [
            " равенство, в результате которого была допущена ошибка.",
            " равенство, где допущена ошибка.",
            " равенство, приводящая к ошибке.",
            " ошибочное равенство.",
            " равенство, в котором допущена ошибка."
        ][Main::getRandomIntInRange(0, 3)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": \n\n";
        for (let i in 0..equalities.length()) {
            sc += String::from_int(i+1) + ". " + equalities[i] + "\n"
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions1;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ": \n\n";
            for (let i in 0..equalities.length()) {
                sc += String::from_int(i+1) + ". " + equalities[i] + "\n"
            }
            sc += "\nТребуется определить " + conditions1;
        }

        let desc = sc + " В ответ записать номер ошибочного равенства."
            + "\n Пример: 5"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем проверять все равенства по очереди, пока не найдём ошибочное: \n";
        for (let i in 0..ans) {
            expl += String::from_int(i+1) + ". " 
                + equalities[i] + " - равенство верное \n"
        }
        expl += String::from_int(ans+1) + ". " 
                + equalities[ans] + " - равенство ошибочно \n"
                + "Следовательно ответ: " + String::from_int(ans+1)

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans+1)
                } as Reveal
            ],
        }
    }
    
    function getEqualities(arr: List<int>) -> String {
        let num1 = arr[0];
        let num2 = arr[1];

        let part1 = [Main::getRandomIntInRange(10, 500), Main::getRandomIntInRange(10, 500)];
        let part2 = [Main::getRandomIntInRange(10, 500), Main::getRandomIntInRange(10, 500)];

        while (part1[0] + part1[1] != num1) {
            part1 = [Main::getRandomIntInRange(10, 500), Main::getRandomIntInRange(10, 500)];
        }
        
        while (part2[0] + part2[1] != num1) {
            part2 = [Main::getRandomIntInRange(10, 500), Main::getRandomIntInRange(10, 500)];
        }
        
        let str1 = String::from_int(part1[0]) + " + " + String::from_int(part1[1]);
        let str2 = String::from_int(part2[0]) + " + " + String::from_int(part2[1]);

        let result = str1 + " = " + str2;

        return result;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/