/*
?Создайте генератор, который на входе выписывает общее население в стране, в которой два города, при этом есть информация, что в одном городе проживает на 10 000 человек больше, чем в другом, задачей будет найти сколько людей живет в каждом городе. (Конкретный пример с разницей на 10 000 человек больше, не используйте, однако можете подставить или придумать любое другое количество)

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
        let total = Main::getRandomIntInRange(10, 1000);
        let dif = Main::getRandomIntInRange(1, total - 5);
        total *= 1000;
        dif *= 1000;
        let city = Main::cityPopulations(total, dif);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions1 = [
            "общее население страны",
            "численность населения страны",
            "общую численность жителей страны",
            "общее количество населения страны",
            "общее численность населения страны",
            "численность населения в стране"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "сколько людей живет в каждом городе",
            "число жителей в каждом городе",
            "сколько населения в каждом городе",
            "количество людей, проживающих в каждом городе",
            "численность населения по каждому городу",
            "сколько человек живет в каждом городе"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " число обозначающее " + conditions1 + " " + String::from_int(total) + " человек. В стране есть два города, в одном городе проживает на " + String::from_int(dif) + " человек больше, чем в другом."
            + " Её попросили " + whatDo + " " + conditions2 + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано число обозначающее " + conditions1 + " " + String::from_int(total) + " человек. В стране есть два города, в одном городе проживает на " + String::from_int(dif) + " человек больше, чем в другом."
                + "Требуется определить " + conditions2 + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"327000, 199000\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассчитаем численность одного города: \\(\\frac{" + String::from_int(total) + " + " + String::from_int(dif) + "}{2} = " + String::from_int(city[0]) 
            + "\\) \n Рассчитваем сколько живёт в другом городе: \\(\\frac{" + String::from_int(total) + " - " + String::from_int(dif) + "}{2} = " + String::from_int(city[1])
            + "\\) \n\n Следовательно получаем ответ: " + String::from_int(city[0]) + ", " + String::from_int(city[1]);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(city[0]) + ", " + String::from_int(city[1])
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function cityPopulations(total: int, dif: int) -> List<int> {
        let city1 = (total + dif) / 2;
        let city2 = (total - dif) / 2;

        return [city1, city2];
    }
}
*/