/*
?Напишите генератор заданий, который формирует небольшую квадратную сетку с мозаическими элементами и временным интервалом. Например: мальчик смог сложить/заполнить её на четверть, за 20 минут. Напишите, за сколько минут он соберёт весь рисунок из мозаики, при условии, что дальше будет собирать вдвое/втрое быстрее.
?Придумайте свои вариации.
?Не используйте предложенный пример.
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

class Main {
    function gen_puzzle() -> Puzzle {
        let x = Main::getRandomIntInRange(8, 18);
        let y = Main::getRandomIntInRange(8, 18);
        let totalPuzzle = x * y;
        let hw = Main::getRandomIntInRange(0, 6);
        let perStr = ["на четверть", "на треть", "на половину", "на одну вторую", "на две четверти", "на две трети", "на три четверти"][hw];
        let per = if (hw == 0) {25.0} else if (hw == 1) {33.33} else if (hw == 2 || hw == 3 || hw == 4) {50.0} else if (hw == 5) {66.67} else {75.0};
        
        let time = Main::getRandomIntInRange(5, 60);
        
        let V1 = per / time as float;
        let boost = Main::getRandomIntInRange(1, 3);
        let V2 = V1 * boost as float;
        let lastPuzzle = 100.0-per;
        let T = lastPuzzle/V2;
        let ans = time + if (Main::round(T, 2).split(".")[1] != "00") {(T + 1.0) as int} else {T as int};
        
        let tab = Main::getRandomIntInRange(2, 4);
        let canvas = Canvas::create(x*20, y*20+35, Color::rgb(255, 255, 255));
        
        for (let i in 0..y) {
            for (let j in 0..x) {
                Canvas::rect(canvas, 0 + 20 * j, 0 + 20 * i, 20, 20, Color::rgb(0,0,0), 2);
            }
        }
        
        
        Canvas::text(canvas, x*20/2, y*20+15, "Собирается от " + String::from_int(time), 14, new TextAlignCenter{} as TextAlign, Color::rgb(0,0,0));
        Canvas::text(canvas, x*20/2, y*20+30, "до " + PluralRu::pluralify(time*5, "минуты", "минут", "минут"), 14, new TextAlignCenter{} as TextAlign, Color::rgb(0,0,0));
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let timeOut = Main::getRandomIntInRange(0, 60);
        let cInd = Main::getRandomIntInRange(0, 2);
        let con = [
            "что дальше мальчик будет собирать " + if (boost == 2) {"вдвое быстрее"} else if (boost == 3) {"втрое быстрее"} else {"с такой же скоростью"},
            "что дальше мальчик будет собирать " + if (boost == 2) {"мозаику вместе с другом"} else if (boost == 3) {"мозаику вместе с двумя друзьями"} else {"с такой же скоростью"},
            if (boost == 1) {"что мальчик сделает перерыв на " + PluralRu::pluralify(timeOut, "минуту", "минуты", "минут")} else {"что дальше мальчик будет собирать в " + String::from_int(boost) + " раза быстрее"}
        ][cInd];
        if (cInd == 2 && boost == 1) {ans += timeOut}

        let conditions = [
            "за сколько минут он соберёт всю мозаику",
            "сколько минут потребуется, чтобы собрать всю мозаику",
            "за какое время он сможет собрать всю мозаику",
            "сколько минут уйдёт на сбор всей мозаики",
            "за сколько времени он справится с мозаикой полностью",
            "сколько времени ему нужно, чтобы закончить сбор мозаики"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " мозаика и временной интервал её сбора и мальчик который смог собрать её " + perStr + ", за " + PluralRu::pluralify(time, "минуту", "минуты", "минут") + ": \n<img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ", при условии, " + con + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана мозаика и временной интервал её сбора и мальчик который смог собрать её " + perStr + ", за " + PluralRu::pluralify(time, "минуту", "минуты", "минут") + ": \n<img canvas>"
                + "\nТребуется определить " + conditions + ", при условии, " + con + ".";
        }

        let desc = sc + " Если ответ дробь округлить до целого числа в большую сторону, иначе просто записать целое число."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначла посчитаем общее количество пазлов в мозаике: " + String::from_int(x) + " * " + String::from_int(y) + " = " + String::from_int(totalPuzzle)
            + "\n Пазл собран только " + perStr + ", что равняется " + if (Main::round(per, 2).split(".")[1] == "00") {Main::round(per, 2).split(".")[0]} else {Main::round(per, 2)} + "%"
            + "\n Посчитаем скорость работы в начале: " + if (Main::round(per, 2).split(".")[1] == "00") {Main::round(per, 2).split(".")[0]} else {Main::round(per, 2)} + "/" + String::from_int(time) + " = " + Main::round(V1, 2)
            + if (boost != 1) {"\n Посчитаем скорость работы после ускорения: " + Main::round(V1, 2) + " * " + String::from_int(boost) + " = " + Main::round(V2, 2)} else {""}
            + "\n Узнаем оставшуюся часть пазла 100% - " + if (Main::round(per, 2).split(".")[1] == "00") {Main::round(per, 2).split(".")[0]} else {Main::round(per, 2)} + "% = " + Main::round(lastPuzzle, 2)
            + "\n Определим время, необходимое для завершения: " + Main::round(lastPuzzle, 2) + "/" + Main::round(V2, 2) + " = " + Main::round(lastPuzzle/V2, 2)
            + "\n Посчитаем сколько времени понадобиться на весь пазл: " + String::from_int(time) + " + " + Main::round(lastPuzzle/V2, 2) + if (cInd == 2 && boost == 1) {" + " + String::from_int(timeOut)} else {""} + " = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canvas
                }
            ],
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