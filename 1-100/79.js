//?Сделайте генератор паззлов, который выводит на изображение простой арифметический пример но на большое количество арифметических действий (сложение, вычитание, умножение, деление). Для удобства можно пронумеровать каждое арифметическое действие. Далее генератор должен решить пример, но порядок действий нужно производить не по правилам математики, а в той последовательности, которую задаст генератор. Генератор задает последовательный алгоритм для решения данного примера и выдает на выходе ответ, который был получен в результате данного решения. Поясню: по правилам математики первым действием будет умножение либо деление, находящееся левее. Однако если в генераторе задано сделать сложение (под номером 2 к примеру, если генератор пронумеровал все действия), то нужно делать первым действием данное сложение, игнорируя правила математики.

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
        let nums: List<int> = [];
        let znaki: List<String> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            nums.push(Main::getRandomIntInRange(1, 50))
        }
        
        for (let i in 0..nums.length()-1) {
            znaki.push(["+", "-", "*", "/"][Main::getRandomIntInRange(0, 3)]);
        }
        
        let prim = String::from_int(nums[0]);
        for (let i in 1..nums.length()) {
            prim += znaki[i-1] + String::from_int(nums[i])
        }
        let canvas = Canvas::create(1500, 30, Color::rgb(255,255,255));
        Canvas::text(canvas, 0, 20, prim, 18, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "решить пример, но порядок действий нужно производить не по правилам математики, а в той последовательности, в которой они представленны в примере",
            "решить задачу, выполняя действия в том порядке, в котором они даны, а не по математическим правилам",
            "выполнить вычисления, следуя последовательности действий в примере, а не стандартным математическим правилам",
            "решить пример, но соблюдать порядок действий, как он представлен в задаче, а не по математическим правилам",
            "провести вычисления в порядке, указанном в примере, а не согласно правилам математики",
            "выполнить все операции в примере в той последовательности, в которой они указаны, а не по общим математическим правилам",
            "решить задачу, следуя порядку действий, как указано в примере, а не по правилам математики",
            "выполнить все математические операции в том порядке, в котором они представлены в примере, а не по правилам",
            "решить пример, не соблюдая математические правила, а выполняя действия в том порядке, как они представлены",
            "выполнить вычисления в том порядке, как они даны в примере, а не согласно математическим правилам",
            "решить задачу, используя последовательность действий, представленную в примере, а не по математическим правилам"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " арифмитический пример: \n <img canvas>" 
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан арифмитический пример: \n <img canvas>" 
                + ".\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Все решения оставлять целыми числами, отбрасывая числа после запятой."
            + "\n Пример вывода, следующий: \"918\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем по очереди считать пример, в той последовательности, в которой он представлен: \n";
        
        let sum = nums[0];
        
        for (let i in 1..nums.length()) {
            if (znaki[i - 1] == "+") {
                expl += String::from_int(sum);
                sum += nums[i];
                expl += "+" + String::from_int(nums[i]) + "=" + String::from_int(sum) + "\n";
            } else if (znaki[i - 1] == "-") {
                expl += String::from_int(sum);
                sum -= nums[i];
                expl += "-" + String::from_int(nums[i]) + "=" + String::from_int(sum) + "\n";
            } else if (znaki[i - 1] == "*") {
                expl += String::from_int(sum);
                sum *= nums[i];
                expl += "*" + String::from_int(nums[i]) + "=" + String::from_int(sum) + "\n";
            } else if (znaki[i - 1] == "/") {
                expl += String::from_int(sum);
                sum /= nums[i];
                expl += "/" + String::from_int(nums[i]) + "=" + String::from_int(sum) + "\n";
            }
        }
        
        expl += "\nСледовательно ответ: " + String::from_int(sum);

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
                    answer: String::from_int(sum)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/