/*
?Сделайте генератор пазлов, который будет генерировать таблицу типов ветра по их скорости. Также генерировать прогноз погоды в котором будет указана скорость ветра по часам и человеку нужно будет определить во сколько был какой-либо тип ветра.

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
import community::near::spensa2::plural::PluralRu;
import community::near::cfuser::ah04919::Contains::IntInList;

class Main {
    function gen_puzzle() -> Puzzle {
        let w = ["штиль", "слабый", "умеренный", "сильный", "шторм", "ураган"];
        let v: List<List<int> > = [];
        let s: List<int> = [];
                                    
        for (let i in 0..4) {
            let n = if (i==0) {Main::getRandomIntInRange(1, 3)} else {v[i-1][1]+1}
            v.push([n, Main::getRandomIntInRange(n+Main::getRandomIntInRange(3, 6), n+Main::getRandomIntInRange(6, 9))]);
            s.push(Main::getRandomIntInRange(0, 35))
        }                             
         
        let table = "<table><tr><td>Название</td><td>Скорость в м/с</td></tr>"
            + "<tr><td>штиль</td><td>" + if (v[0][0] != 0) {"< " + String::from_int(v[0][0])} else {"0"} + "</td></tr>";   
        for (let i in 0..v.length()) {
            table += "<tr><td>" + w[i+1] + "</td><td>" + String::from_int(v[i][0]) + " - " + String::from_int(v[i][1]) + "</td></tr>"
        }     
        table += "<tr><td>ураган</td><td> > " + String::from_int(v[3][1]) + "</td></tr></table>"; 
        
        let time = [0];
        
        for (let i in 1..Main::getRandomIntInRange(3, 5)) {
            let n = Main::getRandomIntInRange(0, 23);
            
            while (IntInList::contains(time, n)) {
                n = Main::getRandomIntInRange(0, 23);
            }
            
            time.push(n)
        }
        
        while (time.length() % 2 != 0) {
            time = [0];
        
            for (let i in 1..Main::getRandomIntInRange(3, 5)) {
                let n = Main::getRandomIntInRange(0, 23);

                while (IntInList::contains(time, n)) {
                    n = Main::getRandomIntInRange(0, 23);
                }

                time.push(n)
            }
        }
        
        if (!IntInList::contains(time, 23)) {time.push(23)}
        time = ListSort::<int>::stable_sort(time);
        
        let ans: List<String> = [];
        for (let i in 0..s.length()) {
            if (s[i] < v[0][0]) {ans.push(w[0])} 
            else if (Main::isInRange(s[i], v[0][0], v[0][1])) {ans.push(w[1])}
            else if (Main::isInRange(s[i], v[1][0], v[1][1])) {ans.push(w[2])}
            else if (Main::isInRange(s[i], v[2][0], v[2][1])) {ans.push(w[3])}
            else if (Main::isInRange(s[i], v[3][0], v[3][1])) {ans.push(w[4])}
            else if (s[i] > v[3][1]) {ans.push(w[5])}
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какой тип ветра был в каждом промежутке времени, если известен следующий прогноз",
            "тип ветра в каждом временном интервале согласно прогнозу",
            "какой вид ветра в каждом промежутке времени по прогнозу",
            "тип ветра для каждого временного отрезка исходя из прогноза",
            "вид ветра в каждом интервале времени по предоставленному прогнозу",
            "какой тип ветра в каждом промежутке времени на основе прогноза"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица типов ветра по их скорости: \n" + table
            + "\nЕё попросили " + whatDo + " " + conditions + ":\n";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица типов ветра по их скорости: \n" + table
                + "Требуется определить " + conditions + ":\n";
        }
        for (let i in 1..time.length()) {
            sc += "С " + String::from_int(time[i-1]) + ":00 до " + String::from_int(time[i]) + ":00 - " + String::from_int(s[i-1]) + " м/с \n"
        }

        let desc = sc + " В ответ записать типы ветра по очереди прогноза через запятую. "
            + "\n Пример вывода, следующий: \"ураган, штиль, сильный, слабый\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим тип ветра в каждом промежутке исходя из данных таблицы: \n";
        
        for (let i in 1..time.length()) {
            expl += "С " + String::from_int(time[i-1]) + ":00 до " + String::from_int(time[i]) + ":00: ветер " + String::from_int(s[i-1]) + " м/с"
                + if (s[i-1] < v[0][0]) {", что \\(<\\) " + String::from_int(v[0][0]) + ", значит записываем: " + w[0] + "\n"} 
                  else if (Main::isInRange(s[i-1], v[0][0], v[0][1])) {", что \\(\\geqslant\\)" + String::from_int(v[0][0]) + " и \\(\\leqslant\\)" + String::from_int(v[0][1]) + ", значит записываем: " + w[1] + "\n"}
                  else if (Main::isInRange(s[i-1], v[1][0], v[1][1])) {", что \\(\\geqslant\\)" + String::from_int(v[1][0]) + " и \\(\\leqslant\\)" + String::from_int(v[1][1]) + ", значит записываем: " + w[2] + "\n"}
                  else if (Main::isInRange(s[i-1], v[2][0], v[2][1])) {", что \\(\\geqslant\\)" + String::from_int(v[2][0]) + " и \\(\\leqslant\\)" + String::from_int(v[2][1]) + ", значит записываем: " + w[3] + "\n"}
                  else if (Main::isInRange(s[i-1], v[3][0], v[3][1])) {", что \\(\\geqslant\\)" + String::from_int(v[3][0]) + " и \\(\\leqslant\\)" + String::from_int(v[3][1]) + ", значит записываем: " + w[4] + "\n"}
                  else {", что \\(>\\) " + String::from_int(v[3][1]) + ", значит записываем: " + w[5] + "\n"};
        }
        expl += "\n Следовательно ответ: " + String::join(ans, ", ");

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(ans, ", ")
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function isInRange(number: int, min: int, max: int) -> bool {
      return number >= min && number <= max;
    }
}
*/