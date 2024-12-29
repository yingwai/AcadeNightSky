/*
?Создать генератор, который выводит поле с текстом, внутри которого необходимо записать число, которое получится в результате подсчета очков игрока последнего места, к примеру известно, что за победу дают 2 очка, а за поражение 0, он выиграл 2 игры, значит набрал 4 очка, полученный результат необходимо умножить на коэффициент "3" и записать полученное число в ответе.

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
        let wins = Main::getRandomIntInRange(0, 7);
        let pointsPerWin = Main::getRandomIntInRange(1, 5);
        let coef = Main::getRandomIntInRange(1, 5);
        let total = wins * pointsPerWin;
        let ans = total * coef;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            "при подсчете очков игрока последнего места, было известно, что за победу дают",
            "при расчете очков игрока на последнем месте было известно, что за победу дают",
            "при подсчете очков для игрока, занявшего последнее место, было известно, что за победу дают",
            "когда считали очки игрока последнего места, было известно, что за победу дают"
        ][Main::getRandomIntInRange(0, 3)];
        let conditions2 = [
            "сколько очков заработал последний игрок",
            "какое количество очков набрал последний игрок",
            "сколько баллов получил игрок на последнем месте",
            "каков итоговый счет последнего игрока",
            "сколько очков набрал игрок, занявший последнее место",
            "какое число очков заработал игрок на последнем месте"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " условие: " + conditions1 + " " 
            + String::from_int(pointsPerWin) + " " + Main::declOfNum(pointsPerWin, ["очко", "очка", "очков"])
            + ", а за поражение 0, он выиграл " + String::from_int(wins) + " " + Main::declOfNum(wins, ["игру", "игры", "игр"]) + "."
            + "\nЕё попросили " + whatDo +  " " + conditions2 + " и записать полученный результат в ответ умножив на коэффициент " + String::from_int(coef) + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано условие: " + conditions1 + " " 
                + String::from_int(pointsPerWin) + " " + Main::declOfNum(pointsPerWin, ["очко", "очка", "очков"])
                + ", а за поражение 0, он выиграл " + String::from_int(wins) + " " + Main::declOfNum(wins, ["игру", "игры", "игр"]) + "."
                + " Требуется определить " + conditions2 + " и записать полученный результат в ответ умножив на коэффициент " + String::from_int(coef) + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"5\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассчитаем количетсво очков полученных игрком: " + String::from_int(pointsPerWin) + " * " + String::from_int(wins) + " = " + String::from_int(total)
            + "\n Получим ответ: " + String::from_int(total) + " * " + String::from_int(coef) + " = " + String::from_int(ans);

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
}
*/