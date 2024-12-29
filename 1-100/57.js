/*
?Создайте генератор паззлов, который будет генерировать число - обязательное количество карт на руках у игрока, а также 2 числа - количество карт, которые игрок сбросил за 2 раздачи. Генератор будет просить найти сумму карт, которые игрок должен добрать, чтобы в руке было обязательное количество карт.

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
        let requiredCards = Main::getRandomIntInRange(5, 10);
  
        let round1 = Main::getRandomIntInRange(0, requiredCards / 2);
        let round2 = Main::getRandomIntInRange(0, requiredCards / 2);

        let total = round1 + round2;

        let cardsNeed = requiredCards - total;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сумму карт, которые игрок должен добрать, чтобы в руке было обязательное количество карт",
            "число карт, которые игроку нужно добрать, чтобы достичь обязательного количества в руке",
            "количество карт, которых не хватает игроку до обязательного числа карт в руке",
            "суммарное количество карт, необходимых игроку для достижения обязательного лимита в руке",
            "общее число карт, которые игрок должен взять для соблюдения обязательного количества карт в руке",
            "количество карт, которое нужно игроку, чтобы в руке было нужное количество карт",
            "число карт, которое игрок обязан добрать для достижения требуемого количества карт в руке",
            "количество недостающих карт, которые игроку нужно взять для обязательного лимита в руке",
            "общее количество карт, которые игрок должен взять, чтобы соблюсти обязательное количество карт",
            "число карт, необходимых для достижения игроком обязательного количества в руке",
            "общее количество карт, которые игроку нужно добрать, чтобы в руке было положенное количество"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " обязательное количество карт на руках у игрока: " + String::from_int(requiredCards) 
            + ". В первой раздаче он сбросил " + String::from_int(round1) + Main::declOfNum(round1, [" карту", " карты", " карт"]) + ", во второй " + String::from_int(round2) + Main::declOfNum(round2, [" карту", " карты", " карт"])
            + ".\nЕё попросили " + whatDo +  " " + conditions + ". Если количство карт у него на руках, соответствовало количеству обязательных карт.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано обязательное количество карт на руках у игрока: " + String::from_int(requiredCards) 
                + ". В первой раздаче он сбросил " + String::from_int(round1) + Main::declOfNum(round1, [" карту", " карты", " карт"]) + ", во второй " + String::from_int(round2) + Main::declOfNum(round2, [" карту", " карты", " карт"])
                + ". Требуется определить " + conditions + ". Если количство карт у него на руках, соответствовало количеству обязательных карт.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем сколько карт нужно добрать игроку: " + String::from_int(round1) + " + " + String::from_int(round2) + " = " + String::from_int(total);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(total)
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