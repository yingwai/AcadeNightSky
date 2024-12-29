/*
?Создайте генератор паззлов, который будет генерировать количество воды в большой бутылке и просить указать, сколько бутылок меньшего объема понадобится, чтобы перелить всю воду.

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
        let total = Main::getRandomIntInRange(10, 100);
        let mal = Main::getRandomIntInRange(1, 20);
        let ans = 0;
        
        for (let i in 1..total+1) {
            if (total - (mal * i) <= 0) {
                ans = i;
                break;
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько бутылок меньшего объема понадобится, чтобы перелить всю воду",
            "сколько бутылок меньшего объема нужно для переливания всей воды",
            "какое количество бутылок меньшего объема потребуется, чтобы перелить всю воду",
            "сколько бутылок меньшего объема понадобится для переноса всей воды",
            "какое количество бутылок меньшего объема необходимо, чтобы перелить воду",
            "сколько потребуется бутылок меньшего объема, чтобы в них поместилась вся вода",
            "сколько бутылок меньшего объема понадобится для перелива всей воды",
            "какое число бутылок меньшего объема потребуется, чтобы перелить воду полностью",
            "сколько бутылок меньшего объема потребуется для перемещения всей воды",
            "сколько бутылок меньшего объема нужно, чтобы вместить весь объем воды",
            "сколько бутылок с меньшим объемом нужно, чтобы перелить всю воду"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " количество воды в большой бутылке: " + String::from_int(total) + "л. "
            + "\nЕё попросили " + whatDo + ", " + conditions + ". Если изветсно, что большая бутылка наполнена польностью, а объем бутылок поменьше составляет " + String::from_int(mal) + "л. ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано количество воды в большой бутылке: " + String::from_int(total) + "л. "
                + "\nТребуется определить, " + conditions + ". Если изветсно, что большая бутылка наполнена польностью, а объем бутылок поменьше составляет " + String::from_int(mal) + "л. ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"7\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы посчитать сколько меньших бутылок понадобится для опустошения большей, поделим общий объем на меньший и округлим до целого числа в большую сторону: "
            + String::from_int(total) + "/" + String::from_int(mal) + " = " + String::from_int(ans);

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
}
*/