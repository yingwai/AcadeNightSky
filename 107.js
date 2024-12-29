/*
?Сделайте генератор паззлов с использованием изображения. На изображение нужно вывести одну вертикальную и одну горизонтальную прямую, тем самым разделив картинку на 4 части. В данных частях нужно вывести произвольные числа, но в этих частях должно быть некоторое количество нулей. Генератор должен выдавать ответ. Как найти ответ - необходимо найти сумму всех цифр от 5 до 15 в правой нижней части картинки. Необходимо узнать количество нулей на всем изображении. После нужно умножить сумму чисел на количество нулей. Полученный ответ и должен выдавать генератор

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

class Main {
    function gen_puzzle() -> Puzzle {
        let nums: List<int> = [];
        
        for (let i in 0..4) {
            nums.push(Main::getRandomIntInRange(0, 1000) * [1, 10, 100, 1000][Main::getRandomIntInRange(0, 3)])
        }
        
        let canvas = Canvas::create(250, 250, Color::rgb(255, 255, 255));
        Canvas::line(canvas, 125, 0, 125, 250, Color::rgb(0, 0, 0), 2);
        Canvas::line(canvas, 0, 125, 250, 125, Color::rgb(0, 0, 0), 2);
        
        Canvas::text(canvas, 63, 63, String::from_int(nums[0]), 20, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        Canvas::text(canvas, 63*3, 63, String::from_int(nums[1]), 20, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        Canvas::text(canvas, 63, 63*3, String::from_int(nums[2]), 20, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        Canvas::text(canvas, 63*3, 63*3, String::from_int(nums[3]), 20, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        let sum = 0;
        let count = 0;
        
        for (let i in 0..4) {
            for (let j in String::from_int(nums[i]).split("")) {
                if (j == "0") {
                    count += 1;
                }
            }
        }        
        
        let n = Main::getRandomIntInRange(0, 3);
        let side = ["левой верхней", "правой верхней", "левой нижней", "правой нижней"][n];
        let p: List<String> = [];
        
        for (let j in String::from_int(nums[n]).split("")) {
            if (j == "5") {
                sum += 5;
                p.push(j)
            } else if (j == "6") {
                sum += 6;
                p.push(j)
            } else if (j == "7") {
                sum += 7;
                p.push(j)
            } else if (j == "8") {
                sum += 8;
                p.push(j)
            } else if (j == "9") {
                sum += 9;
                p.push(j)
            }
        }
        
        let ans = String::from_int(sum * count);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "И записать в ответ произведение суммы цифр на количество нулей",
            "И указать в ответе результат умножения суммы цифр на число нулей",
            "И записать в ответ результат произведения суммы всех цифр на количество нулей",
            "И определить итог умножения суммы цифр на число содержащихся нулей, записав это в ответ",
            "И вычислить произведение суммы цифр числа на число нулей, указав его в ответе",
            "И в качестве ответа записать результат умножения суммы цифр на количество нулей"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " изображение разделённое на 4 части. В данных частях находится произвольные число: \n<img canvas>"
            + "\nЕё попросили " + whatDo + " сумму всех цифр от 5 до 9 включительно в " + side + " части картинки, узнать количество нулей на всём изображении. " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано изображение разделённое на 4 части. В данных частях находится произвольные число: \n<img canvas>"
                + "\nТребуется определить сумму всех цифр от 5 до 9 включительно в " + side + " части картинки, узнать количество нулей на всём изображении. " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"144\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала цифры от 5 до 9 включительно в " + side + " части картинки: ";
        if (p.length() > 1) {
            expl += String::join(p, ", ")
                + "\nНайдём сумму этих цифр: "
                + String::join(p, " + ") + " = " + String::from_int(sum);
        } else {
            expl += String::from_int(sum);
        }
        
        expl += "\nТеперь посчитаем количество нулей на всём изображении: " + String::from_int(count)
            + "\n И найдём ответ умножив сумму цифр на количество нулей: " + String::from_int(sum) + "*" + String::from_int(count) + "=" + ans;
        
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
}
*/