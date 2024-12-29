/*
?Создайте набор заданий, где будут находиться карты различных значений и мастей. Просите решающих указывать на определенные карты.

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
        let suits = ["♠", "♣", "♥", "♦"];
        let n = Main::getRandomIntInRange(0, 3);
        let need = "пики.трефы.черви.бубны".split(".")[n];
        let values = [
            "2", "3", "4", "5", "6", "7", "8", 
            "9", "10", "J", "Q", "K", "A"
        ];
        let arr: List<String> = [];
        let len = Main::getRandomIntInRange(5, 12);
        let ans = "";
        
        for (let i in 0..len) {
            arr.push(suits[Main::getRandomIntInRange(0, 3)] + values[Main::getRandomIntInRange(0, 12)]);
            if (arr[i].split("")[1] == suits[n]) {
                ans += arr[i] + ", "
            }
        }
        
        ans = ans[0..ans.length()-2]
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let rad = "";
        for (let i in 0..len) {
            if (i == len-1) {
                rad += arr[i] + ". ";
                break;
            }
            rad += arr[i] + ", "
        }
        let conditions = [
            "карты различных значений и мастей",
            "карты с разными значениями и мастями",
            "карты разных номиналов и мастей",
            "набор карт различных мастей и значений",
            "карты с разнообразными значениями и мастями",
            "колода карт с разными мастями и значениями",
            "карты разных мастей и значений",
            "различные карты по мастям и значениям",
            "карты с различными номиналами и мастями",
            "карты с разными мастями и номиналами",
            "набор карт с разными значениями и мастями"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": " + rad
            + " Её попросили " + whatDo + " и записать все " + need 
            + " в том порядке, в котором они даны. Если таких карт нет, в ответ записать \"Таких карт нет\"";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны "  + conditions + ": " + rad
                + " Требуется определить и записать все " + need 
                + " в том порядке, в котором они даны. Если таких карт нет, в ответ записать \"Таких карт нет\"";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"♥K, ♥8, ♥5, ♥9\" / \"Таких карт нет\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем просматривать все карты по очереди: \n";
        for (let i in 0..len) {
            expl += arr[i] + " - ";
            
            if (arr[i].split("")[1] == "♠") {
                expl += "пика \n";
            } else if (arr[i].split("")[1] == "♣") {
                expl += "трефа \n";
            } else if (arr[i].split("")[1] == "♥") {
                expl += "черва \n";
            } else if (arr[i].split("")[1] == "♦") {
                expl += "бубна \n";
            }
        }
        expl += "\n Следовательно получим ответ: " + ans;
        
        if (ans.length() == 0) {
            ans = "Таких карт нет";
        }

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