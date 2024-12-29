/*
?Создайте генератор паззлов, в которых будет дано местное время отправки партии льда из одного часового пояса и время прибытия партии в другой пояс (также местное). Укажите скорость таяния льда. Например, тает 10% от текущей массы ежечасно. Требуется определить, чему будет равна масса льда по прибытии в пункт назначения. Часовые пояса указывайте, они нужны для расчета общего времени льда в пути.

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
import community::near::cfuser::ah04919::abs::AbsInt;

class Main {
    function gen_puzzle() -> Puzzle {
        let utc1 = Main::getRandomIntInRange(-11, 14);
        let utc2 = Main::getRandomIntInRange(-11, 14);
        
        while (utc1 == utc2) {
            utc1 = Main::getRandomIntInRange(-11, 14);
            utc2 = Main::getRandomIntInRange(-11, 14);
        }
        
        let startMass = Main::getRandomIntInRange(100, 1000);
        let per = Main::getRandomIntInRange(1, 20);
        
        
        let startTime = Main::getRandomIntInRange(0, 23);
        let travelTime = Main::getRandomIntInRange(1, 12) + 1;
        let endTime = (startTime + travelTime) % 24;
        
        let diff = AbsInt::abs(utc1-utc2);
        let totalTime = travelTime+diff;
        
        let endMass = 1.0 - per as float/100.0;
        for (let t in 1..totalTime) {
            endMass *= 1.0 - per as float/100.0;
        }
        endMass *= startMass as float;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "чему будет равна масса льда по прибытии в пункт назначения",
            "какой будет масса льда, когда он прибудет в пункт назначения",
            "чему равна масса льда по прибытии в конечный пункт",
            "какой окажется масса льда в точке назначения",
            "чему будет равняться масса льда при достижении пункта назначения",
            "какова масса льда по приезду в конечный пункт",
            "сколько будет весить лёд в пункте назначения",
            "чему будет равна масса льда в месте назначения",
            "какой окажется масса льда по достижении конечного пункта",
            "чему равна конечная масса льда в пункте назначения"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " местное время отправки партии льда (" + String::from_int(startTime) + ":00) из одного часового пояса (UTC" + if (utc1 >= 0) {"+" + String::from_int(utc1)} else {String::from_int(utc1)} 
            + ") и время прибытия льда (" + String::from_int(endTime) + ":00) в другой пояс (UTC" + if (utc2 >= 0) {"+" + String::from_int(utc2)} else {String::from_int(utc2)} + ")"
            + "\nЕё попросили " + whatDo + ", " + conditions + ", если известно, что лёд тает " 
            + String::from_int(per) + "% от начальной массы (" + String::from_int(startMass) + " кг) ежечасно.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано местное время отправки партии льда (" + String::from_int(startTime) + ":00) из одного часового пояса (UTC" + if (utc1 >= 0) {"+" + String::from_int(utc1)} else {String::from_int(utc1)} 
                + ") и время прибытия льда (" + String::from_int(endTime) + ":00) в другой пояс (UTC" + if (utc2 >= 0) {"+" + String::from_int(utc2)} else {String::from_int(utc2)} + ")"
                + ". Требуется определить , " + conditions + ", если известно, что лёд тает " 
                + String::from_int(per) + "% от начальной массы (" + String::from_int(startMass) + " кг) ежечасно.";
        }

        let desc = sc + " Ответ округлить до сотых."
            + "\n Пример ответа: \"240.61\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала узнаем сколько часов будут траспортировать лёд в одном часовом поясе: с " + String::from_int(startTime) + ":00 до " + String::from_int(endTime) + ":00, доставлять будут " + String::from_int(travelTime)
            + " ч\nПосчитаем модуль разницы между часовыми поясами: |" + if (utc2 >= 0) {String::from_int(utc2)} else {String::from_int(utc2)} + " - " + if (utc1 >= 0) {String::from_int(utc1)} else {"(" + String::from_int(utc1) + ")"} + "| = " + String::from_int(diff)
            + " ч\nИ найдём общее время траспортировки льда: " + String::from_int(travelTime) + " + " + String::from_int(diff) + " = " + String::from_int(totalTime)
            + " ч\nНайдём конечную массу по прибытии в пункт назначения: " + String::from_int(startMass) + " * (1 - " + String::from_int(per) + "/100)\\(^{" + String::from_int(totalTime) + "}\\) = " + Main::round(endMass, 2) + " кг";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(endMass, 2)
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