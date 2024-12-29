/*
?Сделайте генератор задач в котором на входе задан уровень заряда батареи любого прибора и известно, сколько он еще проработает, нужно вычислить отработанное время и % заряда, потраченный на это время.

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
        let battery = Main::getRandomIntInRange(1, 99); // 81% есть
        let time1 = Main::getRandomIntInRange(1, 5); // Время работы на 1%
        let timeOst = battery * time1; // Осталось время работать
        let totalTime = time1*100; // Время работы при 100%
        let timeWorking = (100-battery) * time1; //Отработанное время
        let battaryWorking = 100 - battery; // Отработанный процент
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            "уровень заряда батареи какого-то прибора",
            "уровень заряда батареи устройства",
            "уровень заряда аккумулятора прибора",
            "текущий заряд батареи какого-либо устройства",
            "состояние заряда батареи прибора",
            "показатель заряда аккумулятора устройства"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "отработанное время и % заряда, потраченный на это время",
            "отработанное время и процент заряда, потраченный на это время",
            "отработанное время и израсходованный на него процент заряда",
            "потраченное время и процент заряда, израсходованный за этот период",
            "отработанное время и процент заряда, ушедший на его обеспечение",
            "время использования и процент заряда, потраченный за это время"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions1 + " " + String::from_int(battery) + "% и время которое это устройство ещё проработает " + String::from_int(timeOst) + Main::declOfNum(timeOst, [" час", " часа", " часов"]) + ". "
            + "\nЕё попросили " + whatDo + " " + conditions2 + ", если известно, что время работы при 1% - " + String::from_int(time1) + Main::declOfNum(time1, [" час", " часа", " часов"])
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditions1 + " " + String::from_int(battery) + "% и время которое это устройство ещё проработает " + String::from_int(timeOst) + Main::declOfNum(timeOst, [" час", " часа", " часов"]) + ". "
                + "\nТребуется определить " + conditions2 + ", если известно, что время работы при 1% - " + String::from_int(time1) + Main::declOfNum(time1, [" час", " часа", " часов"])
            + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"385 часов, 77%\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём оставшийся % заряда: 100% - " + String::from_int(battery) + "% = " + String::from_int(battaryWorking) + "%"
            + "\n И вычислим отработанное время прибора: " + String::from_int(battaryWorking) + "% * " + String::from_int(time1) + " = " + String::from_int(timeWorking) + Main::declOfNum(timeWorking, [" час", " часа", " часов"])
            + "\n Следовательно ответ: " + String::from_int(timeWorking) + Main::declOfNum(timeWorking, [" час", " часа", " часов"]) + ", " + String::from_int(battaryWorking) + "%";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(timeWorking) + Main::declOfNum(timeWorking, [" час", " часа", " часов"]) + ", " + String::from_int(battaryWorking) + "%"
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