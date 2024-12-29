/*
?Сделайте генератор паззлов на подсчёт максимального\минимального количества очков в каких-либо соревнованиях по известному количеству участников и за что дают очки. Например: в соревнованиях участвуют Х игроков. За победу игрок получает 2 очка. Сколько максимум очков может набрать игрок?

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
import community::near::spensa2::plural::PluralRu;

class Main {
    function gen_puzzle() -> Puzzle {
        let players = Main::getRandomIntInRange(2, 10);
        let points = Main::getRandomIntInRange(1, 10);
        let more = Main::getRandomIntInRange(0, 1) == 1;
        
        let ans = if (!more) {0}
                  else {points * (players - 1)}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "количество очков, которое может набрать игрок?",
            "число очков, которое может собрать игрок?",
            "число очков, которое может получить игрок?",
            "количество очков, которое может заполучить игрок?",
            "число очков, которое игрок может набрать за игру?",
            "количество очков, которое возможно для игрока?",
            "число очков, которое сможет набрать игрок в игре?",
            "количество очков, которое может заработать игрок?"
        ][Main::getRandomIntInRange(0, 7)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " какое-то соревнования формата 1 против всех в котором участвует " + PluralRu::pluralify(players, "человек", "человека", "человек") + " и за победу над одним из участников дают " + PluralRu::pluralify(points, "очко", "очка", "очков") + "."
            + "\nЕё попросили " + whatDo + " " + if (more) {"максимальное"} else {"минимальное"} + " " + conditions + "";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано какое-то соревнования формата 1 против всех в котором участвует " + PluralRu::pluralify(players, "человек", "человека", "человек") + " и за победу над одним из участников дают " + PluralRu::pluralify(points, "очко", "очка", "очков") + "."
                + "\nТребуется определить " + if (more) {"максимальное"} else {"минимальное"} + " " + conditions + "";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        let expl = if (more) {"Т.к. на нужно найти максимальное количество очков, посчитаем количество участников которое может победить игрок и умножим на количество очков за одну победу: \n" 
                            + String::from_int(points) + " * (" + String::from_int(players) + " - 1) = " + String::from_int(ans)} 
                else {"Т.к. на нужно найти минимальное количество очков, получается что игрок не победил ни одного участника, следовательно ответ будет: 0"};

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