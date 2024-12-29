/*
?Создайте генератор паззлов, в которы будет дано количество страниц в книге, а также общее количество символов в тексте книги. Нужно определить среднее количество символов на одной странице. Деление должно быть не целочисленным, т.е. количество символов не должно быть кратно количеству страниц. Укажите точность округления ответа.

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
        let list = Main::getRandomIntInRange(200, 300);
        let sym = (list * Main::getRandomIntInRange(200, 250) * 5) - 10;
        let ans = Main::round(sym as float / list as float, 2);
        
        while (ans.split(".")[1] == "00") {
            list = Main::getRandomIntInRange(200, 300);
            sym = (list * Main::getRandomIntInRange(200, 250) * 5) - 10;
            ans = Main::round(sym as float / list as float, 2);
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "определить среднее количество символов на одной странице",
            "подсчитать среднее число символов на странице",
            "определить среднее количество символов, содержащихся на одной странице",
            "выяснить среднее число символов на каждой странице",
            "определить какое среднее количество символов приходится на одну страницу",
            "посчитать среднее значение символов на странице",
            "узнать, сколько символов в среднем содержится на странице",
            "узнать среднее число символов, размещённых на одной странице",
            "определить, сколько символов в среднем приходится на страницу",
            "вычислить среднее количество символов на каждую страницу",
            "рассчитать среднее число символов на одну страницу"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " количество страниц в книге " + String::from_int(list) + ", а также общее количество символов в тексте книги " + String::from_int(sym) + ". "
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано количество страниц в книге " + String::from_int(list) + ", а также общее количество символов в тексте книги " + String::from_int(sym) + ". "
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + " Ответ необходимо округлить до сотых."
            + "\n Пример вывода, следующий: \"1209.96\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти среднее количество символов на одной странице, нужно разделить общее количество символов в книге на общее количество страниц: \n" 
            + "\\(\\dfrac{" + String::from_int(sym) + "}{" + String::from_int(list) + "} = " + ans + "\\) \n Следовательно ответ: " + ans;

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