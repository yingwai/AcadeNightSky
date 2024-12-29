/*
?Создайте генератор паззлов, в котором на вход даются 2 матрицы, заполненные целыми числами. Требуется ответить, можно их перемножить между собой или нет.

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
        let len = [Main::getRandomIntInRange(2, 4), Main::getRandomIntInRange(2, 4)];
        let matrixs = [Main::generateRandomMatrix(len[0]), Main::generateRandomMatrix(len[1])];
        let ans = len[0] == len[1];
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            ", содержащие целые числа",
            ", заполненные целыми числами",
            " с целочисленными элементами",
            ", включающие целые числа",
            ", каждая заполнена целыми числами"
        ][Main::getRandomIntInRange(0, 4)];
        let conditions2 = [
            " можно ли выполнить их перемножение",
            " можно ли их умножить друг на друга",
            " возможно ли перемножить эти матрицы",
            " можно ли осуществить их умножение между собой",
            " можно ли произвести их перемножение"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " 2 матрицы" + conditions1 + ": \n\n"
            + "A = " + matrixs[0] + " B = " + matrixs[1]
            + "\n\nЕё попросили " + whatDo + conditions2 + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны 2 матрицы" + conditions1 + ": \n\n"
                + "A = " + matrixs[0] + " B = " + matrixs[1]
                + "\n\nТребуется определить " + conditions2 + ".";;
        }

        let desc = sc 
            + "\n Формат вывода, следующий: Да или Нет"
            + "\n Пример: Да"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = 
            if (ans) {
                "Т.к. обе матрицы одного и того же порядка, их можно перемножить. \n  Ответ: Да"
            } else {
                "Т.к. матрицы разного порядка, их нельзя перемножить. \n  Ответ: Нет"
            };

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: if (ans) {"Да"} else {"Нет"}
                } as Reveal
            ],
        }
    }
    
    function generateRandomMatrix(count: int) -> String {
        let matrix = "\\(\\begin{bmatrix}";

        for (let i in 1..count*count+1) {
            matrix += String::from_int(Main::getRandomIntInRange(-100, 100));
            
            if (i == count*count) {
                break;
            }
            
            if (i % count == 0) {
                matrix += "\\\\";
            } else {
                matrix += "&";
            }
        }
        
        matrix += "\\end{bmatrix}\\)";
        
        return matrix;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/