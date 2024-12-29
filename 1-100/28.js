/*
?Создайте генератор, который определяет на основании последовательного алгоритма результат того, будет ли заполнена канистра полностью за некоторое время, к примеру за 28 минут, если известно, что в канистре 20 литров, а каждую минуту она заполняется за 200 мл. Таким образом необходимо заполнение привести в литры в общие единицы измерения, а генератор должен вывести результат алгоритма на основании поставленного условия: "Будет ли она заполнена за 28 минут?". Такие значения не используйте.

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
        let totalWater = Main::getRandomIntInRange(10, 50);
        let fillingWater = Main::getRandomIntInRange(200, 2000);
        let time = Main::getRandomIntInRange(10, 60);
        
        let ans = Main::willBeFull(totalWater, fillingWater, time);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            "каждую минуту она заполняется на ",
            "каждую минуту она наполняется на ",
            "с каждой минутой она заполняется на ",
            "каждую минуту уровень заполнения увеличивается на ",
            "с каждой минутой она наполняется на ",
            "каждую минуту объём заполнения увеличивается на "
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "будет ли заполнена канистра за ",
            "успеет ли канистра заполниться за ",
            "будет ли канистра полна через ",
            "сможет ли канистра заполниться за ",
            "заполнится ли канистра полностью за ",
            "наполнилась ли бы канистра за "
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " следующие условия: у вас есть канистра на " 
            + String::from_int(totalWater) + " "
            + Main::declOfNum(totalWater, ["литра", "литра", "литров"])
            + ", " + conditions1
            + String::from_int(fillingWater) + " "
            + Main::declOfNum(fillingWater, ["миллилитр", "миллилитра", "миллилитров"])
            + ". \nЕё попросили " + whatDo + ", "
            + conditions2
            + String::from_int(time) + " "
            + Main::declOfNum(time, ["минута", "минуты", "минут"])
            + "?";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "У вас есть канистра на " 
                + String::from_int(totalWater) + " "
                + Main::declOfNum(totalWater, ["литра", "литра", "литров"])
                + ", " + conditions1
                + String::from_int(fillingWater) + " "
                + Main::declOfNum(fillingWater, ["миллилитр", "миллилитра", "миллилитров"])
                + ". Требуется определить " + conditions2
                + String::from_int(time) + " "
                + Main::declOfNum(time, ["минута", "минуты", "минут"])
                + "?";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: Да или Нет"
            + "\n Пример: Да"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала переведём мл в л: L = "
            + String::from_int(fillingWater) + " / 1000 \n Теперь узнаем на сколько литров заполниться канистра за "
            + String::from_int(time) + " "
            + Main::declOfNum(time, ["минута", "минуты", "минут"])
            + ": F = L * " + String::from_int(time) 
            + "\nСравниваем результат с общим и "
            + if (ans) {"т.к. F > " + String::from_int(totalWater) + ". Ответ получается: Да"}
              else {"т.к. F < " + String::from_int(totalWater) + ". Ответ получается: Нет"};
                        
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
    
    function willBeFull(total: int, filling: int, time: int) -> bool {
        let litr = filling as float / 1000.0;
        
        let isFull = litr as float * time as float;

        return isFull as float >= total as float;
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