/*
?Создайте генератор задач, который на входе показывает 3-5 чисел в строку, между которыми есть пропуски для вставки арифметических операций. На выходе человек должен найти и вставить нужные арифметические операции и вычислить полученный пример. Создайте критерии по выбору арифметической операции в каждой позиции, например, если число слева и справа четное то ставим -, если оба четные, то проверяем следующее условие, например, если первая цифра числа слева больше первой цифры числа справа, то ставим +. Не используйте именно эти примеры. Придумайте свои критерии выбора арифметической операции, но сделать это нужно так, чтобы при любых числах можно было выбрать операцию однозначно.

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
        let sum = 0;
        let znaki: List<String> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 5)) {
            nums.push(Main::getRandomIntInRange(1, 99));
            
            if (i == 0) {
                sum += nums[i]
            } else {
                if ((nums[i-1] + nums[i]) % 2 == 0) {
                    sum += nums[i];
                    znaki.push("+");
                } else {
                    sum -= nums[i];
                    znaki.push("-");
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "выражение с пропущенными арифметическими знаками",
            "выражение с отсутствующими арифметическими знаками",
            "выражение, в котором пропущены арифметические знаки",
            "выражение, где не указаны арифметические знаки",
            "выражение с пропусками на месте арифметических знаков",
            "выражение, в котором отсутствуют знаки операций"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions1 = [
            "и вставить нужные арифметические операции и вычислить полученный пример",
            "и подставить нужные арифметические операции, затем вычислить полученное выражение",
            "и добавить подходящие арифметические знаки, после чего вычислить пример",
            "и вставить правильные арифметические операции, затем найти значение примера",
            "и поставить нужные знаки операций, затем рассчитать итоговое выражение",
            "и вставить необходимые знаки операций, после чего вычислить результат"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": ";
        for (let i in nums) {
            sc += String::from_int(i) + "_"
        }
        sc = sc[0..sc.length()-1] + ". \nЕё попросили " + whatDo + " " + conditions1 + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ": ";
            for (let i in nums) {
                sc += String::from_int(i) + "_"
            }
            sc = sc[0..sc.length()-1] + ". \nТребуется определить " + conditions1 + ".";
        }

        let desc = sc + " Если известно, что знак + находится между тем числами, сумма которых чётная, иначе ставится знак -."
            + "\n Пример вывода, следующий: \"+ - +, 105\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы понять какие знаки пропущены, посчитаем сумму чисел между пропущенными знаками (a_b: a + b), если сумма будет чётной, ставим +, если нечётной -: \n";
        for (let i in 1..nums.length()) {
            expl += String::from_int(nums[i - 1]) + "+" + String::from_int(nums[i]) + "=" + String::from_int(nums[i - 1] + nums[i]) + " - " + if ((nums[i - 1] + nums[i]) % 2 == 0) {"чётное"} else {"нечётное"} + "\n";
        }
        expl += "Следовательно последовательность знаков будет: " + String::join(znaki, " ")
            + "\n\nТеперь посчитаем сумму выражения: " + String::from_int(nums[0]);
        for (let i in 1..nums.length()) {
            expl += znaki[i-1] + String::from_int(nums[i])
        }
        expl += "=" + String::from_int(sum)
            + "\n\n Получаем ответ: " + String::join(znaki, " ") + ", " + String::from_int(sum);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(znaki, " ") + ", " + String::from_int(sum)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/