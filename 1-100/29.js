/*
?Создайте генератор паззлов, в которых будет дана высота дерева перед началом недели, а в виде таблице для каждого дня недели будет записан рост дерева в этот день. Требуется определить, во сколько раз выше дерево стало через N дней недели, по сравнению с началом недели. Число N так же задаете вы. При этом убедитесь, что ответ на задание не является целочисленным.

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
        let n = Main::getRandomIntInRange(1, 7);
        let initH = Main::getRandomIntInRange(1, 10);
        let dayH: List<int> = [];
        let totalH = initH;
        
        for (let i in 0..n) {
            dayH.push(Main::getRandomIntInRange(0, 4));
            totalH += dayH[i];
        }

        let ans = totalH as float / initH as float;
        
        while (Main::round(ans, 2).split(".")[1] == "00") {
            n = Main::getRandomIntInRange(1, 7);
            initH = Main::getRandomIntInRange(1, 10);
            dayH = [];
            totalH = initH;

            for (let i in 0..n) {
                dayH.push(Main::getRandomIntInRange(0, 4));
                totalH += dayH[i];
            }

            ans = totalH as float / initH as float;
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let table = "<table><tr><td>День недели</td><td>Рост за день (в метрах)</td></tr>";
        for (let i in 0..n) {
            table += "<tr><td>" 
                + String::from_int(i+1) 
                + "</td><td>" 
                + String::from_int(dayH[i]) 
                + "</td></tr>"
        }
        table += "</table>"
        let conditions1 = [
            "во сколько раз стало выше дерево через",
            "во сколько раз увеличилась высота дерева через",
            "во сколько раз дерево стало выше спустя",
            "насколько увеличилась высота дерева через",
            "во сколько раз выросло дерево спустя",
            "насколько выше стало дерево через"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "по сравнению с началом недели",
            "в сравнении с началом недели",
            "относительно начала недели",
            "по сравнению с первыми днями недели",
            "если сравнивать с началом недели",
            "по отношению к началу недели"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица c двумя колонками:\n\n"
            + table + "\n\nЕё попросили " + whatDo + " " + conditions1 + " " 
            + String::from_int(n) 
            + Main::declOfNum(n, [" день", " дня", " дней"])
            + ", " + conditions2
            + ", если известно, что в начале недели дерево было "
            + String::from_int(initH) 
            + Main::declOfNum(initH, [" метр", " метра", " метров"])
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица c двумя колонками:\n\n" 
                + table
              + "\n\nТребуется определить " + " " + conditions1 + " " 
            + String::from_int(n) 
            + Main::declOfNum(n, [" день", " дня", " дней"])
            + ", " + conditions2
            + ", если известно, что в начале недели дерево было "
            + String::from_int(initH) 
            + Main::declOfNum(initH, [" метр", " метра", " метров"])
            + ". ";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: число округлённое до сотых."
            + "\n Пример: 3.12"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала посчитаем весь рост дерева: " 
            + String::from_int(initH) + " + ";
        for (let i in 0..n) {
            if (i == n-1) {expl += String::from_int(dayH[i]) + " = "}
            else {expl += String::from_int(dayH[i]) + " + "}
        }
        expl += String::from_int(totalH) + ". \n Теперь посчитаем во сколько раз выше дерево стало через "
            + String::from_int(n) 
            + Main::declOfNum(n, [" день", " дня", " дней"])
            + ": " + String::from_int(totalH) 
            + " / " + String::from_int(initH) 
            + " = " + Main::round(ans, 2) ;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(ans, 2) 
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
        for (let i in after_string.length()..after_dot) {
          after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
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