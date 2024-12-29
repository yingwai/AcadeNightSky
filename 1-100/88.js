/*
?Вам предстоит создать генератор, где вы укажете некое число, которое выступит в роли количества полномочий. Далее задайте некое количество сотрудников и текстом опишите как кто делит полномочия. Задача человека найти какое количество полномочий достанется последнему сотруднику. К примеру: число полномочий 12 и есть 3 сотрудника. Известно, что первый сотрудник забирает половину полномочий, а второй и третий делят поровну оставшееся полномочия. Следовательно, 12/2 = 6 – количество полномочий первого сотрудника, 6/2 = 3 – количество полномочий второго и третьего сотрудника. Значит последний сотрудник, то есть третий получил 3 полномочия. Конкретный пример не используйте.

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
        let total = Main::getRandomIntInRange(10, 60)
        let people = Main::getRandomIntInRange(2, 6)

        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какое количество полномочий достанется последнему сотруднику",
            "сколько полномочий будет у последнего сотрудника",
            "какое число полномочий перейдет к последнему сотруднику",
            "определить количество полномочий у последнего сотрудника",
            "сколько полномочий достанется последнему сотруднику",
            "число полномочий, которое получит последний сотрудник",
            "какое общее количество полномочий получит последний сотрудник",
            "сколько полномочий будет закреплено за последним сотрудником",
            "какое количество полномочий перейдет к последнему сотруднику",
            "число полномочий, достающихся последнему сотруднику",
            "сколько полномочий будет у последнего сотрудника"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " число " + String::from_int(total) + ", которое выступает в роли количества полномочий для " + String::from_int(people) + " " + Main::declOfNum(people, ["человека","человек","человек"]) + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ". Если известно, что ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано число " + String::from_int(total) + ", которое выступает в роли количества полномочий для " + String::from_int(people) + " " + Main::declOfNum(people, ["человека","человек","человек"]) + ". "
                + "Требуется определить " + conditions + ". Если известно, что ";
        }

        let expl = "Посчитаем сколько полномочий получил каждый сотрудник: \n";
        
        let remainingPowers = total;
        let divisions: List<int> = [];
        for (let i in 1..people+1) {
            if (i == people) {
                expl += "Сотрудник " + String::from_int(i) + " получает все оставшиеся полномочия (" + String::from_int(remainingPowers) + ").\n"
                    + "\n Следовательно ответ: " + String::from_int(remainingPowers);                
                sc += "сотрудник " + String::from_int(i) + " забирает все оставшиеся полномочия. ";
                divisions.push(remainingPowers);
            } else {
                let share = if (Main::getRandomIntInRange(0, 1) == 1) {"половину"} else {"одну треть"};
                let factor = if (share == "половину") {2} else {3};
                let taken = remainingPowers / factor;
                expl += "Сотрудник " + String::from_int(i) + " забирает " + share + " полномочий (" + String::from_int(remainingPowers) + " / " + String::from_int(factor) + " = " + String::from_int(taken) + ").\n";
                sc += "сотрудник " + String::from_int(i) + " забирает " + share + " полномочий" + if (i != 1) {" от оставшихся, "} else {", "}
                remainingPowers -= taken;
                divisions.push(taken);
            }
        }

        let desc = sc + " При условии, что во всех расчётах отбрасываем дробную часть."
            + "\n Пример вывода, следующий: \"6\""
            + "\n<reveal ans>Ответ</reveal>";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(remainingPowers)
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