/*
?Создайте генератор паззлов, который на входе генерирует два четырехзначных числа числа и просит найти их произведение. А на выходе просит дать ответ и написать третью/четвертую/пятую цифру с конца/с начала.

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
        let a = Main::getRandomIntInRange(1000, 2000);
        let b = Main::getRandomIntInRange(1000, 2000);
        
        let c = a*b;
        let start = Main::getRandomIntInRange(0, 1) == 1;
        let index = Main::getRandomIntInRange(1, String::from_int(c).length());
        
        let ans = if (start) {String::from_int(c).split("")[index]}
                  else {String::from_int(c).split("")[String::from_int(c).length()-index+1]};
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 3)];

        let conditions = [
            "их произведение и записать в ответ",
            "их умножения и указать в ответе",
            "результат их умножения и записать в ответ",
            "произведение этих чисел и зафиксировать в ответе",
            "итог их перемножения и записать в ответ",
            "значение их произведения и вписать в ответ",
            "результат произведения и указать в ответе",
            "произведение и записать в ответ",
            "итог умножения и занести в ответ",
            "результат их произведения и записать в ответ",
            "произведение чисел и указать в ответе"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два четырехзначных числа: " + String::from_int(a) + " и " + String::from_int(b) + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + " " + String::from_int(index) + " цифру с " + if (start) {"начала"} else {"конца"} + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два четырехзначных числа: " + String::from_int(a) + " и " + String::from_int(b) + ". "
                + "\nТребуется определить " + conditions + " " + String::from_int(index) + " цифру с " + if (start) {"начала"} else {"конца"} + ".";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала найдём произведение двух чисел: " + String::from_int(a) + " * " + String::from_int(b) + " = " + String::from_int(c) 
            + "\nТеперь определим порядок каждой цифры, начиная считать их с " + if (start) {"начала"} else {"конца"} + ": \n";
        for (let i in 0..String::from_int(c).length()) {
            expl += String::from_int(i+1) + "-ая цифра: " 
                + if (start) {String::from_int(c).split("")[i+1]}
                  else {String::from_int(c).split("")[String::from_int(c).length()-i]}
                + "\n"
        }
        expl += "\n Следовательно нужная нам цифра: " + ans

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