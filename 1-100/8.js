/*
?Сделайте генератор паззлов, который на входе показывает несколько рандомных единиц измерения времени (единицы измерения больше чем час; дни, недели, месяцы и т.д.) и просит определить, из скольких наименьших единиц состоит набольшая. Затем просит выполнить с этим количеством любое арифметическое действие (возвести в квадрат, умножить на 2 или др.)

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::canvas::Canvas;
import nightsky::canvas::Color;
import nightsky::canvas::TextAlign;
import nightsky::canvas::TextAlignLeft;
import nightsky::canvas::TextAlignRight;
import nightsky::canvas::TextAlignCenter;
import std::math::Math;
import std::collections::List;
import std::collections::ListSort;
import std::string::String;

class Time {
    public count: int,
    public index: int,
    public name: String
}

class Main {
    function gen_puzzle() -> Puzzle {
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            " состоит наибольшее количество из предложенных единиц",
            " состоит максимальное число из доступных единиц",
            " состоит самое большое количества представленных единиц",
            " состоит наибольшое количества представленных единиц",
            " состоит наибольшее количество из представленных вариантов",
            " состоит максимальное число из предложенных элементов"
        ][Main::getRandomIntInRange(0, 5)];
        let conditionsRes = [
            "На результат она должна применить следующее арифметическое действие",
            "С полученным результатом необходимо выполнить следующее арифметическое действие",
            "На результат нужно произвести следующую арифметическую операцию",
            "Необходимо выполнить следующее арифметическое действие с результатом",
            "Следующая арифметическая операция должна быть выполнена с полученным результатом"
        ][Main::getRandomIntInRange(0, 4)];
        
        let times = Main::getListRandomTime();
        let max_time = Main::getMaxTime(times);
        let min_index = Main::getRandomIntInRange(0, 2);
        let min_time = Main::getMinTime(max_time, min_index);
        let operation = "+ - * / sqrt".split(" ")[Main::getRandomIntInRange(0, 4)];
        let num = Main::getRandomIntInRange(1, 20);
        let ans = Main::performArithmeticOperation(min_time, operation, num);

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " список единиц измерения их их количество: ";
        for (let i in 0..times.length()) {
            sc += "\n" + String::from_int(i + 1) + ". "
                + String::from_int(times[i].count) + " " + times[i].name;
        }
        sc += "\nЕё попросили " + whatDo + " из скольки ";
        if (min_index == 0) {sc += "секунд"} 
        else if (min_index == 1) {sc += "минут"} 
        else if (min_index == 2) {sc += "часов"} 
        sc +=  conditions + ", если известно что за 1 год нужно взять 365 дней, а за 1 месяц - 30 дней. Если же в списке есть одинаковые числа нужные нам для дальнейших вычислений, берём любое из них." 
            + "\n" + conditionsRes + ": ";
        if (operation == "+") {sc += " прибавить к нему " + String::from_int(num)} 
        else if (operation == "-") {sc += " уменьшить его на " + String::from_int(num)}
        else if (operation == "*") {sc += " умножить его на " + String::from_int(num)}
        else if (operation == "/") {sc += " разделить его на " + String::from_int(num)}
        else if (operation == "sqrt") {sc += " найти из него корень квадрантый"}
        sc +=  ". Ответ, округлить до целого числа по математическим правилам.";

        if(Main::getRandomIntInRange(0, 1) == 1 ) {
            sc = "Дан список единиц измерения их их количество: ";
            for (let i in 0..times.length()) {
                sc += "\n" + String::from_int(i + 1) + ". "
                    + String::from_int(times[i].count) + " " + times[i].name;
            }
            sc += "\nТребуется определить из скольки ";
            if (min_index == 0) {sc += "секунд"} 
            else if (min_index == 1) {sc += "минут"} 
            else if (min_index == 2) {sc += "часов"} 
            sc += " состоит наибольшее из представленных единиц, если известно что за 1 год нужно взять 365 дней, а за 1 месяц - 30 дней. Если же в списке есть одинаковые числа нужные нам для дальнейших вычислений, берём любое из них."
                + "\nНеобходимо выполнить следующее арифметическое действие с результатом: ";
            if (operation == "+") {sc += " прибавить к нему " + String::from_int(num)} 
            else if (operation == "-") {sc += " уменьшить его на " + String::from_int(num)}
            else if (operation == "*") {sc += " умножить его на " + String::from_int(num)}
            else if (operation == "/") {sc += " разделить его на " + String::from_int(num)}
            else if (operation == "sqrt") {sc += " найти из него корень квадрантый"}
            sc +=  ". Ответ, округлить до целого числа по математическим правилам.";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: число"
            + "\n Пример: 20248"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала находим самое большое количество временных единиц из списка: "
            + String::from_int(max_time.count) + " " + max_time.name
            + ".\n Считаем количество ";
        if (min_index == 0) {
            expl += "секунд: ";
            
            if (max_time.index == 0) {
                expl += String::from_int(max_time.count) + " * 24 * 60 * 60";
            }
            else if (max_time.index == 1) {
                expl += String::from_int(max_time.count) + " * 7 * 24 * 60 * 60";
            }
            else if (max_time.index == 2) {
                expl += String::from_int(max_time.count) + " * 30 * 24 * 60 * 60";
            }
            else if (max_time.index == 3) {
                expl += String::from_int(max_time.count) + " * 365 * 24 * 60 * 60";
            }
        } 
        else if (min_index == 1) {
            expl += "минут: ";
            
            if (max_time.index == 0) {
                expl += String::from_int(max_time.count) + " * 24 * 60";
            }
            else if (max_time.index == 1) {
                expl += String::from_int(max_time.count) + " * 7 * 24 * 60";
            }
            else if (max_time.index == 2) {
                expl += String::from_int(max_time.count) + " * 30 * 24 * 60";
            }
            else if (max_time.index == 3) {
                expl += String::from_int(max_time.count) + " * 365 * 24 * 60";
            }
        } 
        else if (min_index == 2) {
            expl += "часов: ";
            
            if (max_time.index == 0) {
                expl += String::from_int(max_time.count) + " * 24";
            }
            else if (max_time.index == 1) {
                expl += String::from_int(max_time.count) + " * 7 * 24";
            }
            else if (max_time.index == 2) {
                expl += String::from_int(max_time.count) + " * 30 * 24";
            }
            else if (max_time.index == 3) {
                expl += String::from_int(max_time.count) + " * 365 * 24";
            }
        } 
        expl += " = " + String::from_int(min_time) 
            + ". \n Теперь произведём арифмитическое действие которое просится в условии и округляем до целого числа ";
        if (operation == "+") {expl += String::from_int(min_time) + " + " + String::from_int(num)} 
        else if (operation == "-") {expl += String::from_int(min_time) + " - " + String::from_int(num)}
        else if (operation == "*") {expl += String::from_int(min_time) + " * " + String::from_int(num)}
        else if (operation == "/") {expl += String::from_int(min_time) + " / " + String::from_int(num)}
        else if (operation == "sqrt") {expl += "√" + String::from_int(min_time)}
        expl += " = " + ans;

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
    
    function round(p: float, after_dot: int) -> String {  
        let sign : String = " ";
        if (p < 0.0) {
            sign = "-";
            p = -p;
        }

        let coeff: int = 1;
        for (let i in 0..after_dot) {
            coeff *= 10;
        }

        p *= (coeff as float);
        let int_p = (p + 0.5) as int;

        let after_string: String = String::from_int(int_p % coeff);
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }

        return (sign + String::from_int((int_p / coeff)as int) + "."  + after_string);
    }
    
    function performArithmeticOperation(time: int, operation: String, num: int) -> String {
        let res = "";
        if (operation == "+") {
            res = Main::round(time as float + num as float, 0);
        }
        else if (operation == "-") {
            res = Main::round(time as float - num as float, 0);
        }
        else if (operation == "*") {
            res = Main::round(time as float * num as float, 0);
        }
        else if (operation == "/") {
            res = Main::round(time as float / num as float, 0);
        }
        else if (operation == "sqrt") {
            res = Main::round(Math::sqrt(time as float) as float, 0);
        }
        
        return res
    }

    function getMinTime(time: Time, index: int) -> int {
        let res = 0;
        
        if (time.index == 0) {
            if (index == 0) {
                res = time.count * 24 * 60 * 60;
            }
            else if (index == 1) {
                res = time.count * 24 * 60;
            }
            else if (index == 2) {
                res = time.count * 24;
            }
        }
        else if (time.index == 1) {
            if (index == 0) {
                res = time.count * 7 * 24 * 60 * 60;
            }
            else if (index == 1) {
                res = time.count * 7 * 24 * 60;
            }
            else if (index == 2) {
                res = time.count * 7 * 24;
            }
        }
        else if (time.index == 2) {
            if (index == 0) {
                res = time.count * 30 * 24 * 60 * 60;
            }
            else if (index == 1) {
                res = time.count * 30 * 24 * 60;
            }
            else if (index == 2) {
                res = time.count * 30 * 24;
            }
        }
        else if (time.index == 3) {
            if (index == 0) {
                res = time.count * 365 * 24 * 60 * 60;
            }
            else if (index == 1) {
                res = time.count * 365 * 24 * 60;
            }
            else if (index == 2) {
                res = time.count * 365 * 24;
            }
        }
        
        return res
    }
    
    function getMaxTime(times: List<Time>) -> Time {
        let maxTime = times[0]; 
        
        for (let i in 1..times.length()) {
            let currentTime = times[i];

            if (currentTime.index > maxTime.index) {
                maxTime = currentTime;
            }
            else if (currentTime.index == maxTime.index && currentTime.count > maxTime.count) {
                maxTime = currentTime;
            }
        }

        return maxTime;
    }
    
    function getListRandomTime() -> List<Time> {
        let times: List<Time> = [];
        let amount = Main::getRandomIntInRange(2, 10);
        
        for (let i in 0..amount) {
            let chance = Main::getRandomIntInRange(0, 100);
            let index = 0;
            
            if (chance > 90) {
                index = 3;
            } 
            else if (chance > 75) {
                index = 2;
            } 
            else if (chance > 50) {
                index = 1;
            }
            
            times.push(Main::getRandomTime(index));
        }
        
        return times;
    }
    
    function getRandomTime(index: int) -> Time {
        let time: List<Time> = [];
        
        if (index == 0) {
            let c = Main::getRandomIntInRange(1, 25);
            time.push(new Time {
                count: c,
                index: index,
                name: Main::declOfNum(c, [" день"," дня"," дней"])
            })
        }
        else if (index == 1) {
            let c = Main::getRandomIntInRange(1, 3);
            time.push(new Time {
                count: c,
                index: index,
                name: Main::declOfNum(c, [" неделя"," недели"," недель"])
            })
        }
        else if (index == 2) {
            let c = Main::getRandomIntInRange(1, 11);
            time.push(new Time {
                count: c,
                index: index,
                name: Main::declOfNum(c, [" месяц"," месяца"," месяцев"])
            })
        }
        else if (index == 3) {
            let c = Main::getRandomIntInRange(1, 15);
            time.push(new Time {
                count: c,
                index: index,
                name: Main::declOfNum(c, [" год"," года"," лет"])
            })
        }
        
        return time[0];
    }
}
*/