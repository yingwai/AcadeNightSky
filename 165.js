/*
?Создайте генератор задач, в котором дается последовательность услуг, которыми воспользовался клиент салона красоты в указанной очередности с ценами. Однако есть уточнение, что у клиента была сумма денег недостаточная для одной из услуг, поэтому алгоритм составлен неверно. Нужно указать услугу, которой не воспользовался человек, сопоставив сумму всех услуг и сумму средств человека.

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
import community::near::cfuser::ah04919::Contains::IntInList;

class Main {
    function gen_puzzle() -> Puzzle {
        let len = Main::getRandomIntInRange(3, 10);
        let cost: List<int> = [];
        let sum = 0;
        
        for (let i in 0..len) {
            let n = Main::getRandomIntInRange(100, 1000);
            
            while (IntInList::contains(cost, n)) {
                n = Main::getRandomIntInRange(100, 1000);
            }
            
            cost.push(n);
            sum += n;
        }
        
        let index = Main::getRandomIntInRange(0, cost.length()-1);
        sum -= cost[index];
        
        let list = "";
        for (let i in 0..len) {
            list += "Услуга " + String::from_int(i+1) + " - " + String::from_int(cost[i]) + "₽\n"
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "услугу, которой не воспользовался человек, сопоставив сумму всех услуг и сумму средств клиента",
            "услугу, которой не воспользовался клиент, сравнив стоимость всех услуг и сумму его средств",
            "услугу, которая не была использована, сопоставив общий чек и доступные средства клиента",
            "какая услуга не была заказана исходя из разницы между суммой услуг и средствами клиента",
            "услугу, которую клиент не смог оплатить, исходя из его бюджета",
            "какая из услуг исключена из списка из-за недостатка средств у клиента",
            "какую услугу клиент пропустил, сравнив сумму всех услуг с его деньгами",
            "услугу, которая не была выбрана клиентом из-за нехватки средств",
            "какую услугу клиент не смог оплатить, сравнив итоговую стоимость с имеющейся суммой",
            "услугу, которой клиент не воспользовался из-за ограниченного бюджета",
            "какая услуга отсутствует в списке оплаченных, исходя из доступных средств клиента"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " последовательность услуг, которыми воспользовался клиент салона красоты с их ценами: \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + ", если изветсно, что у него было " + String::from_int(sum) + "₽ и он потратил всё до нуля.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана последовательность услуг, которыми воспользовался клиент салона красоты с их ценами: \n" + list
                + "\nТребуется определить " + conditions + ", если изветсно, что у него было " + String::from_int(sum) + "₽ и он потратил всё до нуля.";
        }

        let desc = sc 
            + "\n Пример ответа: \"Услуга 1\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Для начала посчитаем общую сумму всех услуг: ";
        for (let i in 0..len) {
            expl += String::from_int(cost[i]) + " + ";
        }
        expl = expl[0..expl.length()-2] + " = " + String::from_int(sum + cost[index]) + "\n Теперь определим сколько стоит услуга, которой не воспользовался клиент: " 
            + String::from_int(sum + cost[index]) + " - " + String::from_int(sum) + " = " + String::from_int(cost[index]) + "\n Следовательно ответ: Услуга " + String::from_int(index+1)

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: "Услуга " + String::from_int(index+1)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/