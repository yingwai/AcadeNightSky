/*
?Создать генератор, который выводит числовой промежуток любого вида: (a ; b; c ; d...) [a ; b; c ; d...) [a ; b; c ; d...], где a ; b; c ; d - случайные числа и в каждом интервале имеют разное значение. Требуется определить сумму каждого второго числа в промежутке.

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
        let len = Main::getRandomIntInRange(4, 16);
        let times: List<int> = [];
        
        for (let i in 0..len) {
            times.push(Main::getRandomIntInRange(0, 100));
        }
        
        times = ListSort::<int>::stable_sort(times);
        
        for (let i in 1..len) {
            if (times[i] == times[i-1]) {
                times[i] = times[i] + 1;
            }
        }
        
        let ans = 0;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let interval = "";
        for (let i in 0..len) {
            if (i == 0) {
                interval += "([".split("")[Main::getRandomIntInRange(1, 2)]
            }
            
            interval += String::from_int(times[i]);
            
            if (i == len-1) {
                interval += "..." + ")]".split("")[Main::getRandomIntInRange(1, 2)]
            } else {
                interval += " ; ";
            }
        }
        
        let conditions = [
            "сумму каждого второго числа в промежутке",
            "сумму каждого второго числа в указанном промежутке",
            "сумму чисел на каждой второй позиции в промежутке",
            "сумму чисел, стоящих на втором, четвертом и так далее местах в промежутке",
            "сумму чисел на каждой чётной позиции в промежутке",
            "сумму каждого второго по порядку числа в диапазоне",
            "сумму чисел, идущих на втором, четвертом и следующих чётных местах в промежутке",
            "сумму чисел, расположенных на каждой второй позиции в промежутке",
            "сумму чисел на всех чётных позициях в диапазоне",
            "сумму каждого второго числа по порядку в промежутке",
            "сумму чисел, стоящих на каждой второй позиции в указанном диапазоне"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " числовой промежуток: "
            + interval + ". Её попросили " + whatDo 
            + " " + conditions + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан числовой промежуток: " + interval 
                + ". Требуется определить " + conditions + ". ";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: целое число"
            + "\n Пример: 542"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем сумму каждого второго числа в промежутке: ";
        for (let i in 0..len) {
            if ((i + 1) % 2 == 0) {
                ans += times[i];
                expl += String::from_int(times[i]) + " + "
            }
        }
        expl = String::join(expl.split("")[0..expl.split("").length()-2], "")
            + "= " + String::from_int(ans) 
            + "\n Получается что в ответ запишем: " + String::from_int(ans);
        

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