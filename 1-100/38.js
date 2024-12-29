/*
?Сделайте генератор задач, который сообщает за сколько минут человек может побрить лицо новой бритвой. При этом, если он использует её повторно - время на бритье удваивается (либо добавляется X минут к бритью). Сегодня бритве N дней. Нужно ответить, успевает ли человек побриться этой бритвой или ему следует взять новую, если через Y минут ему нужно выходить на работу.

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
        let startTime = Main::getRandomIntInRange(5, 15);
        let dayUse = Main::getRandomIntInRange(2, 6);
        let extraTime = Main::getRandomIntInRange(2, 6);
        let leaveTime = Main::getRandomIntInRange(15, 60);
        
        let totalTime = startTime + (dayUse - 1) * extraTime;
        let ans = if (totalTime <= leaveTime) {"Этой бритвой"}
                       else {"Другой бритвой"};
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            "человек может побрить лицо новой бритвой за",
            "человек способен побрить лицо новой бритвой за",
            "человек может сбрить щетину новой бритвой за",
            "человек может побриться новой бритвой за",
            "новая бритва позволяет человеку побрить лицо за",
            "человек способен побриться новой бритвой за"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            " успевает ли человек побриться этой бритвой или ему следует взять новую, если через ",
            " сможет ли человек побриться этой бритвой или стоит взять новую, если через ",
            " успевает ли человек побриться этой бритвой или ему нужно выбрать новую, если через ",
            " подходит ли эта бритва человеку для бритья или лучше взять новую, если через ",
            " справится ли человек с бритьём этой бритвой или ему нужна новая, если через ",
            " подойдёт ли эта бритва для бритья или ему стоит взять другую, если через "
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " условие: " + conditions1 + " " 
            + String::from_int(startTime) + " "
            + Main::declOfNum(startTime, ["минуту", "минуты", "минут"])
            + ". При этом, если он использует её повторно - время к бритью добавляется на " 
            + String::from_int(extraTime) + " "
            + Main::declOfNum(extraTime, ["минуту", "минуты", "минут"]) + "."
            + " Её попросили " + whatDo + conditions2
            + String::from_int(leaveTime) + " "
            + Main::declOfNum(leaveTime, ["минуту", "минуты", "минут"]) 
            + " (включительно) ему нужно выходить на работу. " 
            + "При условии что бритве "
            + String::from_int(dayUse) + " "
            + Main::declOfNum(dayUse, ["день", "дня", "дней"]) 
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано условие: " + conditions1 + " " 
                + String::from_int(startTime) + " "
                + Main::declOfNum(startTime, ["минуту", "минуты", "минут"])
                + ". При этом, если он использует её повторно - время к бритью добавляется на " 
                + String::from_int(extraTime) + " "
                + Main::declOfNum(extraTime, ["минуту", "минуты", "минут"]) + "."
                + " Требуется определить" + conditions2
                + String::from_int(leaveTime) + " "
                + Main::declOfNum(leaveTime, ["минуту", "минуты", "минут"]) 
                + " (включительно) ему нужно выходить на работу. " 
                + "При условии что бритве "
                + String::from_int(dayUse) + " "
                + Main::declOfNum(dayUse, ["день", "дня", "дней"]) 
                + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"Этой бритвой\" / \"Другой бритвой\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Т.к. при использовании бритвы в 1 день, у неё износа нет, то уменьшаем дни на 1: \n"
            + String::from_int(dayUse) + " - 1 = " + String::from_int(dayUse-1)
            + "\n Теперь посчитаем общее время за которое побреется человек: \n"
            + String::from_int(startTime) + " + " + String::from_int(dayUse - 1) 
            + " * " + String::from_int(extraTime) + " = "
            + String::from_int(totalTime) + "\n"
            + if (totalTime <= leaveTime) 
                {"Т.к. время хватает, ответ: Этой бритвой"}
              else {"Т.к. время не хватает, ответ: Другой бритвой"};

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
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
}
*/