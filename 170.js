/*
?Создайте генератор паззлов, в которых будут даны показатели производства деталей для двух рабочих для двух разных временных отрезков (их указывать не обязательно, можно просто писать до/после). Нужно написать имя того рабочего, у которого лучше показатели прироста производства деталей. Т.е. для каждого нужно поделить количество деталей "после" на количество деталей "до". Подбирайте такие числа, чтобы показатели прироста были не целочисленными.

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
        let worker1Before = Main::getRandomIntInRange(50, 150)
        let worker1After = Main::getRandomIntInRange(160, 300)

        let worker2Before = Main::getRandomIntInRange(50, 150)
        let worker2After = Main::getRandomIntInRange(160, 300)

        let growth1 = worker1After as float / worker1Before as float;
        let growth2 = worker2After as float / worker2Before as float;
        
        let name1 = ["Алексей", "Дмитрий", "Иван", "Максим", "Андрей", "Сергей", "Владимир", "Павел", "Роман", "Олег"][Main::getRandomIntInRange(0, 9)];
        let name2 = ["Алексей", "Дмитрий", "Иван", "Максим", "Андрей", "Сергей", "Владимир", "Павел", "Роман", "Олег"][Main::getRandomIntInRange(0, 9)];
        while (name1==name2) {name2 = ["Алексей", "Дмитрий", "Иван", "Максим", "Андрей", "Сергей", "Владимир", "Павел", "Роман", "Олег"][Main::getRandomIntInRange(0, 9)];}

        let ans = if (growth1 > growth2) {name1} else {name2};
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 3)];

        let conditions = [
            "имя того рабочего, у которого лучше показатели прироста производства деталей",
            "имя рабочего с наилучшими показателями роста производства деталей",
            "имя рабочего, у которого лучший прирост в производстве деталей",
            "имя работника, продемонстрировавший наибольший прирост в производстве деталей",
            "кто из рабочих показал наилучшие результаты прироста производства деталей, в ответ указать его имя",
            "имя рабочего с лучшими показателями роста в производстве деталей",
            "работника с наибольшим приростом производства деталей, в ответ указать его имя",
            "имя рабочего, чей прирост в производстве деталей оказался наибольшим",
            "рабочего, который продемонстрировал лучший прирост в производстве деталей, в ответ указать его имя",
            "кто из работников имеет наибольший прирост производства деталей, в ответ указать его имя",
            "у какого рабочего прирост в производстве деталей оказался выше всего, в ответ указать его имя"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " два рабочих, где первый рабочий (" + name1 + ") производит до прироста производит " + String::from_int(worker1Before) + " деталей, а после " + String::from_int(worker1After) + ". "
            + " Второй рабочий (" + name2 + ") до прироста производит " + String::from_int(worker2Before) + " деталей, а после " + String::from_int(worker2After) + ". "
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два рабочих, где первый рабочий (" + name1 + ") производит до прироста производит " + String::from_int(worker1Before) + " деталей, а после " + String::from_int(worker1After) + ". "
                + " Второй рабочий (" + name2 + ") до прироста производит " + String::from_int(worker2Before) + " деталей, а после " + String::from_int(worker2After) + ". "
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"Андрей\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала посчитаем уровень прироста каждого работника: \n Рабочий 1: " + String::from_int(worker1After) + "/" + String::from_int(worker1Before) + " = " + Main::round(growth1,2)
            + "\n Рабочий 2: " + String::from_int(worker2After) + "/" + String::from_int(worker2Before) + " = " + Main::round(growth2,2)
            + "\n Т.к. " + if (growth1 > growth2) {Main::round(growth1,2) + " > " + Main::round(growth2,2)} else {Main::round(growth2,2) + " > " + Main::round(growth1,2)} + ", следовательно ответ: " + ans

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
    
    
    function round(p: float, after_dot: int) -> String {  
        let sign = "";
        if (p < 0.0) {
          sign = "-";
          p = -p;
        }

        let coeff = 1;
        for (let i in 0..after_dot) {
            coeff *= 10;
        }

        p *= coeff as float;
        let int_p = (p + 0.5) as int;

        let after_string = String::from_int(int_p % coeff);
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }
      
        for (let i in after_string.length()..after_dot) {
            after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
}
*/