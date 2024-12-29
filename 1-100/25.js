/*
?Создайте генератор паззлов, который генерирует среднечасовую норму выпадения осадков (снега, дождя) и временной промежуток в часах, а человек должен ответить какой уровень выпавших осадков окажется в конце временного отрезка.

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
        let precipitationRate = Main::getRandomIntInRange(1, 10);
        let timeInterval = Main::getRandomIntInRange(1, 24);
        let ans = precipitationRate * timeInterval;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            " какой уровень выпавших осадков окажется в конце временного отрезка",
            " какой уровень осадков будет в конце временного периода",
            " какой объём осадков накопится к завершению временного отрезка",
            " какой уровень выпавших осадков будет в конце периода",
            " какой объём осадков окажется по завершении временного периода",
            " какой итоговый уровень осадков будет в конце отрезка времени",
            " какой уровень осадков накопится к концу временного отрезка",
            " сколько осадков выпадет к завершению данного периода",
            " какой итоговый объём осадков будет к концу временного отрезка",
            " сколько осадков окажется в конце временного периода",
            " какой общий уровень осадков будет по завершении периода"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " уловие: дана " 
            + "среднечасовая норма выпадения осадков: " + String::from_int(precipitationRate)
            + " и временной промежуток в часах: " + String::from_int(timeInterval)
            + ". \nЕё попросили " + whatDo +  conditions + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана среднечасовая норма выпадения осадков: " 
                + String::from_int(precipitationRate)
                + " и временной промежуток в часах: " 
                + String::from_int(timeInterval)
                + ". Требуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: целое число"
            + "\n Пример: 27"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти уровень выпавших осадков в конце временного отрезка нужно количество осадков * на время их выпадения: \n"
            + String::from_int(precipitationRate) + " * " + String::from_int(timeInterval)
            + " = " + String::from_int(ans);

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