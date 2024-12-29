/*
?Сделайте генератор пазлов, который генерирует n объектов и x человек. Известно, что x человек работает на 1 объекте. Задача человека: определить, сколько всего человек будет работать на n объектах, если известно, что на каждый объект с каждым днем прибавляется/убывает по Z человек. Решать задачу с помощью умножения и его свойств.

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
        let n = Main::getRandomIntInRange(2, 10);
        let x = Main::getRandomIntInRange(1, n);
        let z = Main::getRandomIntInRange(-x, x);
        let days = Main::getRandomIntInRange(1, 5);
        
        let r = x;
        for (let day in 0..days) {
            r += z;
        }
        let ans = n * r;
        
        while (ans < 5) {
            n = Main::getRandomIntInRange(2, 10);
            x = Main::getRandomIntInRange(1, n);
            z = Main::getRandomIntInRange(-x, x);
            days = Main::getRandomIntInRange(1, 5);

            r = x;
            for (let day in 0..days) {
                r += z;
            }
            ans = n * r;
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько всего человек будет работать на",
            "общее количество людей, которые будут работать на",
            "сколько человек в общей сложности будут задействованы на",
            "общее число сотрудников, которые будут работать на",
            "сколько людей будет занято на",
            "какое количество человек будет выполнять работу на",
            "число работников, которые будут трудиться на",
            "сколько всего сотрудников будет работать на",
            "какое общее количество людей будет занято на",
            "число людей, которые примут участие в работе на",
            "общее количество сотрудников, задействованных на"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " фабрика на которой " + String::from_int(n) + " " + Main::declOfNum(n, ["объект","объекта","объектов"]) + ". На 1 объекте работает " + String::from_int(x) + " " + Main::declOfNum(x, ["человек","человека","человек"])
            + ".\nЕё попросили " + whatDo + ", " + conditions + " " + String::from_int(n) + " " + Main::declOfNum(n, ["объекте","объектах","объектах"]) 
            + ", если известно, что на каждом объекте с каждым днем (всего " + String::from_int(days) + " " + Main::declOfNum(days, ["день","дня","дней"]) 
            + ") " + if (z < 0) {"убывает"} else {"прибавляется"} + " по " + if (z < 0) {String::from_int(z * - 1)} else {String::from_int(z)}
            + " " + Main::declOfNum(if (z < 0) {z * - 1} else {z}, ["человеку","человека","человек"]) + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана  фабрика на которой " + String::from_int(n) + " " + Main::declOfNum(n, ["объект","объекта","объектов"]) + ". На 1 объекте работает " + String::from_int(x) + " " + Main::declOfNum(x, ["человек","человека","человек"])
                + ". Требуется определить, " + conditions + " " + String::from_int(n) + " " + Main::declOfNum(n, ["объекте","объектах","объектах"]) 
                + ", если известно, что на каждом объекте с каждым днем (всего " + String::from_int(days) + " " + Main::declOfNum(days, ["день","дня","дней"]) 
                + ") " + if (z < 0) {"убывает"} else {"прибавляется"} + " по " + if (z < 0) {String::from_int(z * - 1)} else {String::from_int(z)}
                + " " + Main::declOfNum(if (z < 0) {z * - 1} else {z}, ["человеку","человека","человек"]) + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"35\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем по очереди считать количество людей для каждого дня: \n";
        let r = x;
        for (let day in 0..days+1) {
            expl += "День " + String::from_int(day) + ": " + String::from_int(n) + " * " + String::from_int(r) + " = " + String::from_int(n*r) + "\n";
            r += z;
        }
        expl += "\n Следовательно, на " + String::from_int(n) + " " + Main::declOfNum(n, ["объекте","объектах","объектах"]) + " в последний день будет работать " + String::from_int(ans) + " " + Main::declOfNum(ans, ["человек","человека","человек"])

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