/*
?Создайте генератор пазлов, который генерирует неравенство (требуется, чтоб в двух сторонах примера было свойство сложения с нулем), где вместо знака сравнения стоит звездочка. Человеку нужно будет заменить звездочку на верный знак «>, < или =», чтоб образовалось правильное равенство или неравенство. Например,
?1+ (-7) + (-1) * 5 + (-5) + 3;
?0+(-7)*0+3;
?-7*3;
?-7<3;
?1+ (-7) + (-1) <5 + (-5) + 3;

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
        let num1 = Main::getRandomIntInRange(-10, 10);
        let num2 = Main::getRandomIntInRange(-10, 10);
        let num3 = Main::getRandomIntInRange(-10, 10);
        let num4 = Main::getRandomIntInRange(-10, 10);
        while (num1 == 0 || num2 == 0 || num3 == 0 || num4 == 0) {
            num1 = Main::getRandomIntInRange(-10, 10);
            num2 = Main::getRandomIntInRange(-10, 10);
            num3 = Main::getRandomIntInRange(-10, 10);
            num4 = Main::getRandomIntInRange(-10, 10);
        }

        let leftSide = if (num1 < 0) {"(" + String::from_int(num1) + ")"} else {String::from_int(num1)} 
                    + " + " + if (num2 < 0) {"(" + String::from_int(num2) + ")"} else {String::from_int(num2)} 
                    + " + " + if (num1 < 0) {String::from_int(-1*num1)} else {"(-" + String::from_int(num1) + ")"};
        let rightSide = if (num3 < 0) {"(" + String::from_int(num3) + ")"} else {String::from_int(num3)} 
                    + " + " + if (num4 < 0) {"(" + String::from_int(num4) + ")"} else {String::from_int(num4)} 
                    + " + " + if (num3 < 0) {String::from_int(-1*num3)} else {"(-" + String::from_int(num3) + ")"};

        let puzzle = leftSide + " * " + rightSide; 
        
        let ans  = "";
        if (num2 < num4) {
            ans = "<";
        } else if (num2 > num4) {
            ans = ">";
        } else {
            ans = "=";
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "и заменить звездочку на верный знак \">, < или =\", чтоб образовалось правильное неравенство или равенство",
            "и изменить звездочку на правильный знак \">, < или =\", чтобы получилось нужное равенство или неравенство",
            "и подставить вместо звездочки нужный знак \">, < или =\", чтобы образовалось правильное равенство или неравенство",
            "и заменить звездочку на подходящий знак \">, < или =\", чтобы получилось верное неравенство или равенство",
            "и поставить вместо звездочки верный знак \">, < или =\", чтобы образовалось верное равенство или неравенство",
            "и заменить звездочку на корректный знак \">, < или =\", чтобы получилось верное равенство или неравенство",
            "и подбобрать вместо звездочки правильный знак \">, < или =\", чтобы образовалось нужное равенство или неравенство",
            "и заменить звездочку на соответствующий знак \">, < или =\", чтобы получилось правильное равенство или неравенство",
            "и вставить вместо звездочки нужный знак \">, < или =\", чтобы образовалось необходимое неравенство или равенство",
            "и заменить звездочку на верный знак \">, < или =\", чтобы получилось корректное равенство или неравенство",
            "и поставить вместо звездочки подходящий знак \">, < или =\", чтобы образовалось необходимое равенство или неравенство"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " неравенство " + puzzle + ", где вместо знака сравнения стоит звездочка."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано неравенство " + puzzle + ", где вместо знака сравнения стоит звездочка."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \">\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "У нас есть неравенство: " + puzzle + ", решим пример с каждой стороны чтобы сократить их и получить ответ: \n";
        leftSide = "0 + " + if (num2 < 0) {"(" + String::from_int(num2) + ")"} else {String::from_int(num2)};
        rightSide = "0 + " + if (num4 < 0) {"(" + String::from_int(num4) + ")"} else {String::from_int(num4)};
        puzzle = leftSide + " * " + rightSide; 
        expl += puzzle + "\n";
        puzzle = if (num2 < 0) {"(" + String::from_int(num2) + ")"} else {String::from_int(num2)} + " * " + if (num4 < 0) {"(" + String::from_int(num4) + ")"} else {String::from_int(num4)}; 
        expl += puzzle + "\n Следовательно, т.к. ";
        
        if (ans == "<") {
            expl += String::from_int(num2) + " < " + String::from_int(num4);
        } else if (ans == ">") {
            expl += String::from_int(num2) + " > " + String::from_int(num4);
        } else {
            expl += String::from_int(num2) + " = " + String::from_int(num4);
        }
        expl += ", ответ: " + ans

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