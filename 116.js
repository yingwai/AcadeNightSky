/*
?Создайте генератор заданий, который будет выдавать выражение, последнее действие в котором деление вида a/b, где хотя бы одно из чисел a или b - отрицательное(должна быть возможность, что после преобразований оба числа будут отрицательными). Пользователя просят записать в десятичном виде или целым числом ответ, обязательно указывая знак. Соответственно ответ в заданиях генератора не должен иметь только форму обыкновенной дроби.

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
        let a = [Main::getRandomIntInRange(0, 100), Main::getRandomIntInRange(0, 100)];
        let az = [["+", "-"][Main::getRandomIntInRange(0, 1)]]
        if (Main::getRandomIntInRange(0, 1) == 1) {az.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); a.push(Main::getRandomIntInRange(0, 100))}
        if (Main::getRandomIntInRange(0, 1) == 1) {az.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); a.push(Main::getRandomIntInRange(0, 100))}
        
        let aa = Main::getAns(a, az);
        
        let b = [Main::getRandomIntInRange(0, 100), Main::getRandomIntInRange(0, 100)];
        let bz = [["+", "-"][Main::getRandomIntInRange(0, 1)]]
        if (Main::getRandomIntInRange(0, 1) == 1) {bz.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); b.push(Main::getRandomIntInRange(0, 100))}
        if (Main::getRandomIntInRange(0, 1) == 1) {bz.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); b.push(Main::getRandomIntInRange(0, 100))}
        
        let ba = Main::getAns(b, bz);
        
        while (aa > 0 || ba == 0) {
            a = [Main::getRandomIntInRange(0, 100), Main::getRandomIntInRange(0, 100)];
            az = [["+", "-"][Main::getRandomIntInRange(0, 1)]]
            if (Main::getRandomIntInRange(0, 1) == 1) {az.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); a.push(Main::getRandomIntInRange(0, 100))}
            if (Main::getRandomIntInRange(0, 1) == 1) {az.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); a.push(Main::getRandomIntInRange(0, 100))}

            aa = Main::getAns(a, az);

            b = [Main::getRandomIntInRange(0, 100), Main::getRandomIntInRange(0, 100)];
            bz = [["+", "-"][Main::getRandomIntInRange(0, 1)]]
            if (Main::getRandomIntInRange(0, 1) == 1) {bz.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); b.push(Main::getRandomIntInRange(0, 100))}
            if (Main::getRandomIntInRange(0, 1) == 1) {bz.push(["+", "-"][Main::getRandomIntInRange(0, 1)]); b.push(Main::getRandomIntInRange(0, 100))}

            ba = Main::getAns(b, bz);
        }
        
        let ast = Main::getStr(a, az);
        let bst = Main::getStr(b, bz);
        
        let ans = Main::round(aa as float / ba as float, 2);
        if (ans.split(".")[1] == "00") {ans = ans.split(".")[0]};
            
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "и записать ответ округлив до сотых, если ответ дробное число, иначе записать ответ в виде целого числа",
            "и записать результат, округлив его до сотых, если он дробный, иначе оставить в виде целого числа",
            ", если результат дробный, округлить до сотых и записать, иначе указать в виде целого числа",
            ", результат записать округленным до сотых для дробных чисел или в целочисленном формате для целых",
            "и записать результат для дробных чисел с округлением до сотых, для целых оставить без изменений",
            "и представить ответ округленным до сотых, если это дробь, либо как целое число в противном случае",
            ", если ответ является дробным числом, записать его с округлением до сотых, иначе оставить целым",
            ", для дробного ответа округлить до сотых и записать, а целый ответ указать без изменений",
            "и записать результат округленным до сотых для дробей, а для целых чисел оставить исходное значение",
            "и округлить до сотых, если число дробное, и записать ответ; если число целое, оставить его как есть",
            ", ответ записать в виде числа с округлением до сотых для дробных значений или как целое для целых"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " выражение \\(\\dfrac{" + ast + "}{" + bst + "}\\) последнее действие в котором деление вида a/b."
            + "\nЕё попросили " + whatDo + " выражение" + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано выражение \\(\\dfrac{" + ast + "}{" + bst + "}\\) последнее действие в котором деление вида a/b."
                + "\nТребуется определить выражение" + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"5\" или \"0.50\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём чему равен числитель: " + ast + "=" + String::from_int(aa) + "\n"
            + "Теперь найдём чему равен знаменатель: " + bst + "=" + String::from_int(ba) + "\n"
            + "Посчитаем чему равно выражение a/b: \\(\\dfrac{" + String::from_int(aa) + "}{" + String::from_int(ba) + "} = " + Main::round(aa as float / ba as float, 2) + "\\)\n"
            + if (ans.split(".")[1] == "00") {"Т.к. число целое, записываем в ответ только его целую часать: " + ans} else {"Т.к. число дробное, записываем его в ответ: " + ans};

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
    
    function getAns(a: List<int>, az: List<String>) -> int {
        let aa = a[0];
        for (let i in 1..a.length()) {
            let num = a[i];
            let oper = az[i-1];
            
            if (oper == "+") {
                aa += num;
            } else if (oper == "-") {
                aa -= num;
            }
        }
        
        return aa;
    }
    
    function getStr(a: List<int>, az: List<String>) -> String {
        let ast = String::from_int(a[0]);
        for (let i in 1..a.length()) {
            let num = a[i];
            let oper = az[i-1];
            
            if (oper == "+") {
                ast += "+" + String::from_int(num);
            } else if (oper == "-") {
                ast += "-" + String::from_int(num);
            }
        }
        
        return ast;
    }
}
*/