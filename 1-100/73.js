/*
?Создайте генератор паззлов, который генерирует таблицу чисел, а затем просит посчитать результат возведения определенного числа в степень, как либо связанную с размерностью таблицы. Например, просит посчитать результат возведения самого маленького числа таблицы чисел из промежутка от -2 до 7 включительно в степень, равную номеру столбца, в котором это число стоит. Не используйте конкретно этот пример.

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
        let nums: List<List<int> > = [];
        let col = Main::getRandomIntInRange(2, 5);
        let row = Main::getRandomIntInRange(2, 5);
        
        for (let i in 0..col) {
            let arr: List<int> = [];
            
            for (let j in 0..row) {
                arr.push(Main::getRandomIntInRange(-3, 7))
            }
            
            nums.push(arr);
        }
        
        let list = "<table><tr><td></td>";
        
        for (let i in 0..col+1) {  
            if (i != 0) {
                list += "<tr><td>Строка " + String::from_int(i) + "</td>";
            }
            
            for (let j in 0..row) {
                if (i == 0) {
                    list += "<td>Столбец " + String::from_int(j+1) + "</td>";
                }
                else {
                    list += "<td>" + String::from_int(nums[i-1][j]) + "</td>";
                }
            }
            
            list += "</tr>"
        }
        
        list += "</table>";
        
        let more = if (Main::getRandomIntInRange(0, 1) == 1) {"наибольшего"} else {"наименьшего"};
        let n = Main::getRandomIntInRange(0, row);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "посчитать результат возведения",
            "вычислить результат возведения",
            "определить результат возведения",
            "найти итог возведения",
            "получить результат возведения",
            "рассчитать итог возведения"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица: \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + " " + more + " числа в " + String::from_int(n+1) + " строке в степень равную столбцу найденого числа. Если таких числе несколько, берём столбец первого встречного числа.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица: \n" + list
                + "\nТребуется определить " + conditions + " " + more + " числа в " + String::from_int(n+1) + " строке в степень равную столбцу найденого числа. Если таких числе несколько, берём столбец первого встречного числа.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"25\""
            + "\n<reveal ans>Ответ</reveal>";
        
        let select = Main::maxInt(nums[n], more == "наибольшего");
        let selectCol = Main::maxIntIndex(nums[n], more == "наибольшего") + 1;
        let ans = Main::pow(select, selectCol);

        let expl = "Сначала найдём " + more[0..more.length()-2] + "е число в " + String::from_int(n+1) + " строке - это " + String::from_int(select)
            + "\n Теперь поймём в каком столбце находиться это число (или первое попавшиеся такое же число): "  + String::from_int(selectCol)
            + "\n В ответ запишем найденное число возведённое на столбец: \\(" + String::from_int(select) + "^{" + String::from_int(selectCol) + "}\\) = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }
    
    function maxInt(arr: List<int>, more: bool) -> int {
        let n = arr[0];

        if (more) {
            for (let i in 1..arr.length()) {
                if (arr[i] > n) {
                    n = arr[i];
                }
            }
        } else {
            for (let i in 1..arr.length()) {
                if (arr[i] < n) {
                    n = arr[i];
                }
            }
        }

        return n;
    }
    
    function maxIntIndex(arr: List<int>, more: bool) -> int {
        let n = arr[0];
        let index = 0;

        if (more) {
            for (let i in 1..arr.length()) {
                if (arr[i] > n) {
                    n = arr[i];
                    index = i;
                }
            }
        } else {
            for (let i in 1..arr.length()) {
                if (arr[i] < n) {
                    n = arr[i];
                    index = i;
                }
            }
        }

        return index;
    }
    
    
    function pow(num: int, power: int) -> int {
        if (num == 0 && power != 0) {return 0;};
        if (num == 0) {return 0;};
        if (power == 1) {return num}
        let t = 1;
        for (let i in 0..power){
            t *= num;
        };
        return t;
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/