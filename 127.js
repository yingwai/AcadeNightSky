/*
?Создайте генератор паззлов, который будет формировать таблицу с указанием общего веса продукта и процентного содержания в каждом определенных элементов. В задании будет требоваться осуществить определенное арифметическое действие с общим весом и содержанием элементов, а результат округлить и ввести в целых значениях.

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
import community::near::dtalalaev::sum::SumArr;

class Main {
    function gen_puzzle() -> Puzzle {
        let products = Main::getRandomIntInRange(2, 6);
        let elements = ["Алюминий", "Железо", "Медь", "Золото", "Серебро"];
        for (let i in 0..50) {
            community::near::dtalalaev::shuffleStringArray::Main::shuffle(elements);
        }
        elements = elements[0..Main::getRandomIntInRange(1, 4)];
        
        let weight: List<int> = [];
        for (let i in 0..products) {
            weight.push(Main::getRandomIntInRange(100, 500))
        }
        
        let el: List<List<int> > = [];
        for (let i in 0..products) {
            let arr: List<int> = [];
            
            for (let i in elements) {
                arr.push(Main::getRandomIntInRange(1, 50));
            }
            
            while (SumArr::intSum(arr) > 100) {
                arr = [];
                for (let i in elements) {
                    arr.push(Main::getRandomIntInRange(1, 50));
                }
            }
            
            el.push(arr)
        }
        
        let list = "<table><tr><td>№ продукта</td><td>Вес, кг.</td>";
        for (let i in elements) {
            list += "<td>" + i + ", %</td>"
        }
        list += "</tr>";
        
        for (let i in 0..products) {
            list += "<tr><td>Продукт " + String::from_int(i+1) + "</td><td>" + String::from_int(weight[i]) + "</td>";
            
            for (let e in el[i]) {
                list += "<td>" + String::from_int(e) + "</td>";
            }
            
            list += "</tr>"
        }
        list += "</table>";
        
        let oper = Main::getRandomIntInRange(0, 3);
        let con = [
            "сложить вес самого продукта с весом всех элементов",
            "вычесть из веса самого продукта вес всех элементов",
            "умножить вес самого продукта на вес всех элементов",
            "поделить вес самого продукта на вес всех элементов"
        ][oper];
        
        let ans: List<String> = [];
        for (let i in 0..products) {
            if (oper == 0) {
                ans.push(String::from_int(community::near::dtalalaev::precision::Precision::roundInt(weight[i] as float + (weight[i] as float * (SumArr::intSum(el[i]) as float/100.0)))));
            } else if (oper == 1) {
                ans.push(String::from_int(community::near::dtalalaev::precision::Precision::roundInt(weight[i] as float - (weight[i] as float * (SumArr::intSum(el[i]) as float/100.0)))));
            } else if (oper == 2) {
                ans.push(String::from_int(community::near::dtalalaev::precision::Precision::roundInt(weight[i] as float * (weight[i] as float * (SumArr::intSum(el[i]) as float/100.0)))));
            } else if (oper == 3) {
                ans.push(String::from_int(community::near::dtalalaev::precision::Precision::roundInt(weight[i] as float / (weight[i] as float * (SumArr::intSum(el[i]) as float/100.0)))));
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сумму всех элементов продукта",
            "общую сумму составных частей продукта",
            "общую сумму элементов продукта",
            "сумму всех составных частей продукта",
            "сумму всех элементов, составляющих продукт",
            "общую сумму элементов продукта, составляющих продукт"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица с указанием общего веса продукта и процентного содержания в каждом определенных элементов: \n" + list 
            + "\nЕё попросили " + whatDo + " " + conditions + ", после " + con + " этого продукта.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица с указанием общего веса продукта и процентного содержания в каждом определенных элементов: \n" + list 
                + "Требуется определить " + conditions + ", после " + con + " этого продукта.";
        }

        let desc = sc + " В ответ записать конечный результат операций по каждому продукту от первого до последнего, округлив их до целого числа."
            + "\n Пример ответа: \"396, 193, 75\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала найдём сумму процентов элементов каждого продукта: \n";
        for (let i in 0..products) {
            expl += "Продукт " + String::from_int(i+1) + ": ";
            
            for (let e in el[i]) {
                expl += String::from_int(e) + " + ";
            }
            
            expl = expl[0..expl.length()-2] + " = " + String::from_int(SumArr::intSum(el[i])) + "\n"
        }
        
        expl += "\n Теперь определим чему равняется вес этой суммы в каждом продукте: \n";
        for (let i in 0..products) {
            expl += "Продукт " + String::from_int(i+1) + ": ";
            
            expl += String::from_int(weight[i]) + " * " + String::from_int(SumArr::intSum(el[i])) + "/100 = " + Main::round(weight[i] as float * (SumArr::intSum(el[i]) as float/100.0), 2) + "\n";
        }        
        
        expl += "\n И определим чему будет равнять ответ для каждого проудкта округляя его до целого числа: \n"
        for (let i in 0..products) {
            expl += "Продукт " + String::from_int(i+1) + ": " 
                + String::from_int(weight[i]) 
                + if (oper == 0) {" + "} else if (oper == 1) {" - "} else if (oper == 2) {" * "} else if (oper == 3) {" / "} else {""} 
                + Main::round(weight[i] as float * (SumArr::intSum(el[i]) as float/100.0), 2) + " = " + ans[i] + "\n";
        }
        expl += "\n Следовательно ответ: " + String::join(ans, ", ")

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