/*
?Сделайте генератор пазлов, который выдает время за которое изготавливается какая-либо деталь, время в которое ее начинают делать, и два часовых пояса(в котором начинают и закачивают). Человеку нужно будет определить во сколько закончат делать данную деталь, если учесть что процесс изготовления будет ускорен в Х раз.

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
        let production_time = Main::getRandomIntInRange(1, 12);
        let time = Main::getRandomIntInRange(0, 23);
        let UTC_start = Main::getRandomIntInRange(1, 12);
        let UTC_end = Main::getRandomIntInRange(1, 12);
        let x = Main::getRandomIntInRange(1, 4);
        while (x > production_time) {
            x = Main::getRandomIntInRange(1, 5);
        }
        
        let ans = Main::adjustTimeForUTC(time, production_time, UTC_start, UTC_end, x);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "дана|отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 5)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "во сколько закончат делать деталь по часовому поясу UTC+" + String::from_int(UTC_end),
            "время окончания изготовления детали по часовому поясу UTC+" + String::from_int(UTC_end),
            "во сколько завершат производство детали в часовом поясе UTC+" + String::from_int(UTC_end),
            "время завершения производства детали по UTC+" + String::from_int(UTC_end),
            "когда завершат делать деталь в UTC+" + String::from_int(UTC_end),
            "в какое время будет готова деталь по UTC+" + String::from_int(UTC_end),
            "во сколько работник закончит делать деталь по часовому поясу UTC+" + String::from_int(UTC_end),
            "во сколько работник завершит изготовление детали по часовому поясу UTC+" + String::from_int(UTC_end),
            "время окончания работы над деталью по UTC+" + String::from_int(UTC_end),
            "когда работник закончит делать деталь в часовом поясе UTC+" + String::from_int(UTC_end),
            "время завершения работы над деталью по UTC+" + String::from_int(UTC_end),
            "во сколько деталь будет готова по времени UTC+" + String::from_int(UTC_end)
        ][Main::getRandomIntInRange(0, 11)];

        let sc = name + " получила " + wher + " " + what + ", где просилось " 
            + whatDo + ", " + conditions + ", если известно что: "
            + "деталь изготавливается " + String::from_int(production_time)
            + Main::declOfNum(production_time, [" час"," часа"," часов"])
            + ", процесс изготовления ускорен в " 
            + String::from_int(x)
            + Main::declOfNum(x, [" раз"," раза"," раз"])
            + ". При условии, что деталь начали изготавливать в " 
            + Main::formatTime(time) + " в часовом поясе UTC+" 
            + String::from_int(UTC_start) + ". Все расчёты округляем до меньшего целого числа.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Требуется определить, "+ conditions + ", если известно что: "
                + "деталь изготавливается " + String::from_int(production_time)
                + Main::declOfNum(production_time, [" час"," часа"," часов"])
                + ", процесс изготовления ускорен в " 
                + String::from_int(x)
                + Main::declOfNum(x, [" раз"," раза"," раз"])
                + ". При условии, что деталь начали изготавливать в " 
                + Main::formatTime(time) + " в часовом поясе UTC+" 
                + String::from_int(UTC_start) + ". Все расчёты округляем до меньшего целого числа.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: 12:00"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём время изготовления с учётом ускорение время изготовления: \n"
            + String::from_int(production_time) + " / " + String::from_int(x)
            + " = " + String::from_int(production_time/x)
                
            + "\n Добавляем ускоренное время к текущему времени и приводим к 24-часовому формату: \n "
            + "(" + String::from_int(time) + "+" 
            + String::from_int(production_time/x) + ") % 24 = "
            + String::from_int((time + production_time/x) % 24)
                
            + "\n Преобразуем локальное время в UTC, учитывая часовой пояс начала: \n"
            + "(" + String::from_int((time + production_time/x) % 24) + " - " 
            + String::from_int(UTC_start) + " + 24) % 24" + " = " 
            + String::from_int((((time + production_time/x) % 24) - UTC_start + 24) % 24)
            
            + "\nПреобразуем UTC время к целевому часовому поясу: \n" + "("
            + String::from_int((((time + production_time/x) % 24) - UTC_start + 24) % 24)
            + " + " + String::from_int(UTC_end) + ") % 24 = "
            + String::from_int(((((time + production_time/x) % 24) - UTC_start + 24) % 24 + UTC_end) % 24)
            
            + "\n И получаем ответ " + Main::formatTime(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::formatTime(ans)
                } as Reveal
            ],
        }
        
    }
    function formatTime(time: int) -> String {
        let str = "";
        
        if (time < 10) {
            str = "0" + String::from_int(time);
        } else {
            str = String::from_int(time);
        }
        
        str += ":00"
        
        return str;
    }
    function adjustTimeForUTC(time: int, production_time: int, UTC_start: int, UTC_end: int, x: int) -> int {
        let acceleratedProductionTime = production_time / x;
        
        let localTime = (time + acceleratedProductionTime) % 24;

        let utcAdjustedStart = (localTime - UTC_start + 24) % 24;

        let finalAdjustedTime = (utcAdjustedStart + UTC_end) % 24;

        return finalAdjustedTime;
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