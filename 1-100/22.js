/*
?Создайте генератор задач, который на входе показывает, сколько пельменей съел брат на обед, и говорится, что сестра съела на N больше. За ужином сестра съела столько, сколько брат за обедом, а брат наоборот, за ужином съел на N больше. Известно, сколько пельменей осталось у брата на завтра. Нужно определить, сколько пельменей осталось на завтра у сестры.

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
        let brotherL = Main::getRandomIntInRange(10, 20);
        let dif = Main::getRandomIntInRange(1, brotherL);
        let sisterL = brotherL + dif;
        let sisterD = brotherL;
        let brotherD = sisterL + dif;
        let brotherOst = Main::getRandomIntInRange(1, (brotherD - sisterD + 1) + (brotherD - sisterD));
        let sisterOst = (brotherOst + brotherD + brotherL) - sisterL - sisterD;
        
        
        let porps_item = [
            ["пельмень", "пельменя", "пельменей"],
            ["печенье", "печенья", "печенья"],
            ["ягоду", "ягоды", "ягод"],
            ["яблоко", "яблока", "яблок"],
            ["шоколадка", "шоколадки", "шоколадок"]
        ][Main::getRandomIntInRange(0, 4)];
        
        let props = "Брат на обед съел " + String::from_int(brotherL) + " "
            + Main::declOfNum(brotherL, porps_item)
            + ", а сестра съела на " + String::from_int(dif)
            + " больше. За ужином сестра съела столько, "
            + "сколько брат за обедом, а брат наоборот, за ужином съел на "
            + String::from_int(dif) + " больше. "
            + "Известно, что у брата на завтра " 
            + Main::declOfNum(brotherOst, ["остался ", "осталось ", "осталось "])
            + String::from_int(brotherOst) + " "
            + Main::declOfNum(brotherOst, porps_item)
            + ".";
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько " + porps_item[2] + " осталось на завтра у сестры",
            "сколько " + porps_item[2] + " осталось у сестры на завтра",
            "сколько " + porps_item[2] + " у сестры останется на завтра",
            "какое количество " + porps_item[2] + " у сестры останется на завтра",
            "сколько " + porps_item[2] + " сестре останется на следующий день",
            "сколько " + porps_item[2] + " у сестры будет завтра"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions1 = [
            "что количество " + porps_item[2] + " у брата и сестры было одинаковое.",
            "что у брата и сестры было одинаковое количество " + porps_item[2] + ".",
            "что количество " + porps_item[2] + " у брата и сестры было одинаковое.",
            "что брат и сестра имели равное количество " + porps_item[2] + ".",
            "что " + porps_item[2] + " у брата и сестры было одинаковое.",
            "что число " + porps_item[2] + " у брата и сестры было одинаковым."
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " задача: " + props
            + "\nЕё попросили " + whatDo + ", " + conditions 
            + ", если известно, " + conditions1;;

        if (Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана задача: " + props + "\nТребуется определить, "
            + conditions + ", если известно, " + conditions1;
        }

        let desc = sc 
            + "\n Пример вывода, следующий: 54"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала найдём сколько " + porps_item[2] + " съела сестра на обед: "
            + String::from_int(brotherL) + " + " + String::from_int(dif)
            + " = " + String::from_int(sisterL) + "\n"
            + "Теперь посчитаем сколько брат за ужином съел " + porps_item[2] + ": "
            + String::from_int(sisterL) + " + " + String::from_int(dif)
            + " = " + String::from_int(brotherD) + "\n"
            + "Посчитаем сколько всего " + porps_item[2] + " было у брата: "
            + String::from_int(brotherL) + " + " + String::from_int(brotherD)
            + " + " + String::from_int(brotherOst) + " = " 
            + String::from_int(brotherOst + brotherD + brotherL) + "\n"
            + "И посчитаем сколько " + porps_item[2] + " осталось у сестры на завтра: "
            + String::from_int(brotherOst + brotherD + brotherL) 
            + " - " + String::from_int(sisterL)
            + " - " + String::from_int(sisterD)
            + " = " + String::from_int(sisterOst)
            + "\nПолучается ответ: " + String::from_int(sisterOst);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(sisterOst)
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