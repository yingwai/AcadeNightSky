/*
?Создайте набор заданий, в котором будут представлены различные арифметические примеры разных цветов. Решающий должен определить сумму результатов примеров определенного цвета, в которых сам результат является четным/нечетным числом.

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
        let nums: List<List<int> > = [];
        let opers: List<String> = [];
        let colors: List<int> = [];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 8)) {
            let temp = [Main::getRandomIntInRange(1, 100), Main::getRandomIntInRange(1, 100)];
            
            nums.push(temp);
            opers.push(["+", "-"][Main::getRandomIntInRange(0, 1)]);
            colors.push([1, 2, 5][Main::getRandomIntInRange(0, 2)])
            
            let canvas = Canvas::create(1000, 30, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 5, 24, String::from_int(nums[i][0]) + opers[i] + String::from_int(nums[i][1]) + " = ?", 16, new TextAlignLeft{} as TextAlign, 
                         if (colors[i] == 1) {Color::rgb(255, 0, 0)} else if (colors[i] == 2) {Color::rgb(0, 155, 0)} else {Color::rgb(0, 0, 155)});
            
            canva.push(
                new PuzzleImage {
                    name: "n_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        
        let list = "";
        for (let i in canva) {
            list += "<img " + i.name + ">\n"
        }
        
        let cColor = [1, 2, 5][Main::getRandomIntInRange(0, 2)];
        let chet = Main::getRandomIntInRange(0, 1) == 1;
        let sum = 0;
        for (let i in 0..nums.length()) {
            if (colors[i] == cColor) {
                let temp = 0;
                if (opers[i] == "+") {
                    temp = nums[i][0] + nums[i][1]
                }
                else {
                    temp = nums[i][0] - nums[i][1]
                }
                
                if (chet && temp % 2 == 0) {
                    sum += temp
                } else if (!chet && temp % 2 != 0) {
                    sum += temp
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сумму результатов примеров",
            "сумму результатов всех примеров",
            "сумму ответов из всех примеров",
            "сложите результаты примеров",
            "общую сумму ответов примеров",
            "сумму чисел, полученных в примерах"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " различные арифметические примеры разных цветов: \n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + " " + PluralRu::pluralify(cColor, "красного", "зелёного", "синего").split(" ")[1] + " цвета, в которых сам результат является " + if (chet) {"четным"} else {"нечётным"} + " числом.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны различные арифметические примеры разных цветов: \n" + list
                + "\nТребуется определить " + conditions + " " + PluralRu::pluralify(cColor, "красного", "зелёного", "синего").split(" ")[1] + " цвета, в которых сам результат является " + if (chet) {"четным"} else {"нечётным"} + " числом.";
        }

        let desc = sc + " Если таких примеров нет или если результат нужных примеров не является " + if (chet) {"четным"} else {"нечётным"} + ", то в ответ запишем \"0\". "
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти ответ, сначала найдём все примеры " + PluralRu::pluralify(cColor, "красного", "зелёного", "синего").split(" ")[1] + " цвета: \n";
        for (let i in 0..canva.length()) {
            if (colors[i] == cColor) {
                expl += "<img " + canva[i].name + ">\n"
            }            
        }
        if (expl.split("\n").length() == 2) {
            expl += "Т.к. примеров нужного цвета нет, запишем в ответ 0.\n"
        } else {
            expl += "Теперь посчитаем все примеры и выясним какие из них четные и нечётные: \n";
            for (let i in 0..canva.length()) {
                if (colors[i] == cColor) {
                    expl += String::from_int(nums[i][0]) + opers[i] + String::from_int(nums[i][1]) + " = " 
                        + if (opers[i] == "+") {String::from_int(nums[i][0] + nums[i][1])}
                          else {String::from_int(nums[i][0] - nums[i][1])} + "\n"
                }            
            }
            if (sum == 0) {
                expl += "Т.к. " + if (chet) {"четных"} else {"нечётных"} + " результатов нет, запишем в ответ 0.\n"
            } else {
                expl += "Найдём сумму " + if (chet) {"четных"} else {"нечётных"} + " примеров: ";
                for (let i in 0..canva.length()) {
                    if (colors[i] == cColor) {
                        let temp = 0;
                        if (opers[i] == "+") {
                            temp = nums[i][0] + nums[i][1]
                        }
                        else {
                            temp = nums[i][0] - nums[i][1]
                        }

                        if (chet && temp % 2 == 0) {
                            expl += if (temp < 0) {"("+String::from_int(temp)+")"} else {String::from_int(temp)} + " + "
                        } else if (!chet && temp % 2 != 0) {
                            expl += if (temp < 0) {"("+String::from_int(temp)+")"} else {String::from_int(temp)} + " + "
                        }
                    }            
                }
                expl = expl[0..expl.length()-2] + " = " + String::from_int(sum)
            }
        }

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
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