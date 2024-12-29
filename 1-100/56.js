/*
?Сделайте генератор, который будет выдавать произведение двух чисел, и если одно умножить на 2,5, а другое оставить без изменений, то получится определенное число. И человеку необходимо будет найти эти числа, а после написать сначала чему равно большее число, а далее чему равно меньшее число.

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
        let xy = [Main::getRandomIntInRange(1, 15), Main::getRandomIntInRange(1, 15)];
        
        while (xy[0] == xy[1]) {
            xy = [Main::getRandomIntInRange(1, 15), Main::getRandomIntInRange(1, 15)];
        }
        
        xy = ListSort::<int>::stable_sort(xy);
        
        let nf = xy[0] as float * 2.5 * xy[1] as float;
        while (Main::round(nf, 2).split(".")[1] != "00") {
            xy = [Main::getRandomIntInRange(1, 15), Main::getRandomIntInRange(1, 15)];
            xy = ListSort::<int>::stable_sort(xy);
            
            nf = xy[0] as float * 2.5 * xy[1] as float;
        }
        
        let num = nf as int
        
        let list_num: List<int> = [];
        
        for (let i in 0..8) {
            list_num.push(Main::getRandomIntInRange(1, 15));
            
            if (i != 0) {
                while (list_num[i] * list_num[i-1] == xy[0] * xy[1]) {
                    list_num[i] = Main::getRandomIntInRange(1, 15);
                    list_num[i-1] = Main::getRandomIntInRange(1, 15);
                }
            }
        }
        
        let index = Main::getRandomIntInRange(0, 3);
        
        let list = "";
        for (let i in 0..4) {
            if (i == index) {
                list += String::from_int(i+1) + ". " + String::from_int(xy[1]) + ", " + String::from_int(xy[0]) + "\n";
                continue;
            }
            
            list += String::from_int(i+1) + ". " + String::from_int(list_num[i]) + ", " + String::from_int(list_num[i+1]) + "\n";
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "произведение двух чисел, одно из которых умножено на 2.5",
            "результат умножения двух чисел, из которых одно умножено на 2.5",
            "произведение пары чисел, где одно увеличено в 2.5 раза",
            "умножение двух чисел, одно из которых предварительно умножено на 2.5",
            "произведение чисел, при условии что одно умножено на 2.5",
            "результат произведения двух чисел, одно из которых умножено на коэффициент 2.5"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "номер чисел, которые будут равны произведению двух чисел без учёта 2.5",
            "позиция чисел, которые равны произведению двух чисел без учета 2.5",
            "номер чисел, равных произведению двух чисел без множителя 2.5",
            "индекс чисел, совпадающих с произведением двух чисел, не учитывая 2.5",
            "номер чисел, соответствующих произведению двух чисел, без умножения на 2.5",
            "порядковый номер чисел, равных произведению двух чисел без учета 2.5"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": x*y=" + String::from_int(num)
            + "\nЕё попросили " + whatDo +  " " + conditions2 + ", а после написать сначала чему равно большее число, а далее чему равно меньшее число. \nВарианты ответа: \n" + list;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ": x*y=" + String::from_int(num)
                + ". Требуется определить " + conditions2 + ", а после написать сначала чему равно большее число, а далее чему равно меньшее число. \nВарианты ответа: \n" + list;
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Узнаем чему равно выражение x*y: " + String::from_int(num) + "/2.5=" + String::from_int((num as float/2.5) as int)
            + "\n\nТеперь посчитаем чему равно выважение в каждом из вариантов ответа: \n";
        for (let i in 0..4) {            
            let ints = list.split("\n")[i].split(". ")[1].split(", ");
            
            expl += String::from_int(i+1) + ". " + ints[0] + " * " + ints[1] + " = " + String::from_int(String::to_int(ints[0]) * String::to_int(ints[1])) + "\n";
        }
        expl += "\nСледовательно ответ: " + String::from_int(index+1);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(index+1)
                } as Reveal
            ],
        }
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
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/