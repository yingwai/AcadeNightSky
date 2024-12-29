/*
?Сделайте генератор заданий, в которых схематически будет показан небольшой кинозал. Занятые места покажите квадратами (прямоугольниками) одного цвета (например красным), пустые - другим цветом (например чёрные, синие).
?Человеку нужно найти определённое место по подсказкам, либо выявить ряд, на котором больше всего (меньше всего) пустых / заполненных мест.
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

class Main {
    function gen_puzzle() -> Puzzle {
        let zal: List<List<int> > = [];
        
        for (let i in 0..6) {
            let arr: List<int> = [];
            
            for (let i in 0..12) {
                arr.push(Main::getRandomIntInRange(0, 1));
            }
            
            zal.push(arr);
        }
        
        let canvas = Main::getCin(zal);
        
        let place = Main::getRandomIntInRange(0, 1) == 1;
        let con = if (!place) {
            if(Main::getRandomIntInRange(0, 1) == 1) {"больше"} else {"меньше"}
        } else {
            if(Main::getRandomIntInRange(0, 1) == 1) {"левое"} else {"правое"}
        }
        
        let ans = "0";
        
        if (!place) {
            if (con == "больше") {
                ans = String::from_int(Main::getRow(zal, true) + 1);
            } else {
                ans = String::from_int(Main::getRow(zal, false) + 1);
            }
        } else {
            if (con == "левое") {
                ans = String::from_int(Main::getPlace(zal, true) + 1);
            } else {
                ans = String::from_int(Main::getPlace(zal, false) + 1);
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "кинотеатр с занятами (отмечены красным) и свободными местами (отмечены чёрным)",
            "зал кинотеатра, где красным отмечены занятые места, а чёрным — свободные",
            "кинотеатр с местами, занятыми красным цветом, и свободными, отмеченными чёрным",
            "схема зала кинотеатра с выделением занятых мест красным и свободных чёрным",
            "места в кинотеатре, где занятые отмечены красным, а свободные — чёрным",
            "расположение мест в кинотеатре с занятыми красным и свободными чёрным"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": \n<img canvas>"
            + "\nЕё попросили " + whatDo + " " + if (place) {"на каком ряду свободно самое " + con + " место"} else {"ряд на котором " + con + " всего свободных мест"} + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditions + ": \n<img canvas>"
                + "\nТребуется определить " + if (place) {"на каком ряду свободно самое " + con + " место"} else {"ряд на котором " + con + " всего свободных мест"} + ".";
        }

        let desc = sc + " Если нужных вариантов несколько, берём тот, который находится ближне к экрану. Если нужного варианта нет, в ответ записываем \"0\". "
            + "\n Пример вывода, следующий: \"4\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "";
        if (!place) {
            expl += "Найдём ряд на котором " + con + " всего свободных мест, для этого проверим каждый ряд: \n";
            if (con == "больше") {
                let sum = 0;
                
                for (let i in 0..zal.length()) {
                    for (let j in 0..zal[i].length()) {
                        sum += zal[i][j];   
                    }

                    expl += String::from_int(i+1) + " ряд: " + String::from_int(12-sum) + " " + Main::declOfNum(12-sum, ["место","места","мест"]) + "\n";
                    sum = 0;
                }
            } else {
                let sum = 0;
                
                for (let i in 0..zal.length()) {
                    for (let j in 0..zal[i].length()) {
                        sum += zal[i][j];   
                    }

                    expl += String::from_int(i+1) + " ряд: " + String::from_int(12-sum) + " " + Main::declOfNum(12-sum, ["место","места","мест"]) + "\n";
                    sum = 0;
                }
            }
        } else {
            expl += "Найдём ряд на котором свободно самое " + con + " место, для этого проверим каждый ряд: \n"
            if (con == "левое") {
                for (let i in 0..zal.length()) {                
                    if (zal[i][0] == 0) {
                        expl += String::from_int(i+1) + " ряд: нужное нам место свободно \n";
                    } else {
                        expl += String::from_int(i+1) + " ряд: нужное нам место занято \n";
                    }
                }
            } else {
                for (let i in 0..zal.length()) {                
                    if (zal[i][11] == 0) {
                        expl += String::from_int(i+1) + " ряд: нужное нам место свободно \n";
                    } else {
                        expl += String::from_int(i+1) + " ряд: нужное нам место занято \n";
                    }
                }
            }
        }
            
        expl += "\n Следовательно ответ: " + ans;

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
    
    function getRow(arr: List<List<int> >, more: bool) -> int {
        let n = 0;
        let index = 0;

        if (more) {
            n = 12;
            for (let i in 0..arr.length()) {
                let sum = 0;
                for (let j in 0..arr[i].length()) {
                    sum += arr[i][j];   
                }
                
                if (sum < n) {
                    n = sum;
                    index = i;
                }
            }
        } else {
            for (let i in 0..arr.length()) {
                let sum = 0;
                for (let j in 0..arr[i].length()) {
                    sum += arr[i][j];   
                }
                
                if (sum > n) {
                    n = sum;
                    index = i;
                }
            }
        }

        return index;
    }
    
    function getPlace(arr: List<List<int> >, more: bool) -> int {
        let n = arr[0][if (more) {0} else {11}];
        let index = 0;

        if (more) {
            for (let i in 1..arr.length()) {                
                if (arr[i][0] < n) {
                    n = arr[i][0];
                    index = i;
                }
            }
        } else {
            for (let i in 1..arr.length()) {                
                if (arr[i][11] < n) {
                    n = arr[i][11];
                    index = i;
                }
            }
        }

        return index;
    }
    
    function getCin(zal: List<List<int> >) -> Canvas {
        let canvas = Canvas::create(500, 400, Color::rgb(255, 255, 255));
        Canvas::fillRect(canvas, 100, 10, 300, 10, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 2);
        Canvas::text(canvas, 250, 45, "Экран", 20, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        for (let i in 0..zal.length()) {   
            Canvas::text(canvas, 5, 100 + (50 * i), String::from_int(i+1) + " ряд", 16, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
            
            for (let j in 0..zal[i].length()) {
                let color = if (zal[i][j] == 0) {Color::rgb(0, 0, 0)} else {Color::rgb(255, 0, 0)}
                
                Canvas::fillRect(canvas, 50 + (35 * j), 85 + (50 * i), 20, 25, color, color, 2);  
            }                      
        }
        
        return canvas
    }
}
*/