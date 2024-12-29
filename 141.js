/*
?Сделайте генератор паззлов, который рисует несколько фигур, показывает числами их стороны и просит посчитать периметр каждой. С наибольшим/наименьшим периметром выполняется какое-либо математическое действие (x2/+10/-2)

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
        let nums: List<int> = [];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(2, 5)) {
            nums.push(Main::getRandomIntInRange(10, 50));
            
            let canvas = Canvas::create(140, 140, Color::rgb(255, 255, 255));
            Canvas::rect(canvas, 10, 30, 2 * nums[i], 2 * nums[i], Color::rgb(0, 0, 0), 2);
            Canvas::text(canvas, 20, 25, String::from_int(nums[i]), 16, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            )
        }

        let list = "";
        for (let i in canva) {
            list += "<img " + i.name + ">"
        }
        
        let expl = "Рассчитаем периметр каждой фигуры: \n";
        for (let i in nums) {
            expl += String::from_int(i) + " * 4 = " + String::from_int(i*4) + "\n";
        }
        
        let more = Main::getRandomIntInRange(0, 1) == 1;
        
        nums = ListSort::<int>::stable_sort(nums);
        let ans = if (more) {nums[nums.length()-1] * 4 * nums[nums.length()-1] * 4} else {nums[0] * 4 * nums[0] * 4}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let conditions = [
            "несколько фигур, и числа с их стороной",
            "несколько фигур и их соответствующие значения сторон",
            "множество фигур с числами, отображающими их стороны",
            "различные фигуры с числами, показывающими длину их сторон",
            "группа фигур и числа, обозначающие их сторону",
            "набор фигур и числовые значения, указывающие их стороны"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": \n" + list
            + "\nЕё попросили " + whatDo + " периметр каждой фигуры и " + if (more) {"наибольший"} else {"наименьший"} + " периметр возвести в 2 степень.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ": \n" + list
                + "\nТребуется определить периметр каждой фигуры и " + if (more) {"наибольший"} else {"наименьший"} + " периметр возвести в 2 степень.";
        }

        let desc = sc 
            + "\n<reveal ans>Ответ</reveal>";

        expl += "\n Теперь возведём " + if (more) {"наибольший"} else {"наименьший"} + " периметр в 2 степень: " + if (more) {String::from_int(nums[nums.length()-1]*4)} else {String::from_int(nums[0]*4)} + "^2 = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
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
}
*/