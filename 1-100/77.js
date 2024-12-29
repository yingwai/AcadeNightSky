//?Создайте генератор, который будет выводить изображение школьной доски, на ней всё записанное будет числами. Необходимо посчитать разницу самого большого и самого маленького числа. В случае если полученное число в ходе вычисления разницы будет четным - то нужно решить математический пример на умножение, если нечетное - то на деление



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
        let prim = [
            String::from_int(Main::getRandomIntInRange(0, 99)) + " * " + String::from_int(Main::getRandomIntInRange(0, 99)),
            String::from_int(Main::getRandomIntInRange(0, 99)) + " / " + String::from_int(Main::getRandomIntInRange(0, 99))
        ];
        
        let nums = [String::to_int(prim[0].split(" * ")[0]), String::to_int(prim[0].split(" * ")[1]),
                   String::to_int(prim[1].split(" / ")[0]), String::to_int(prim[1].split(" / ")[1])];
        
        nums = ListSort::<int>::stable_sort(nums);
        
        let ans = if ((nums[3] - nums[0]) % 2 == 0) {String::to_int(prim[0].split(" * ")[0]) * String::to_int(prim[0].split(" * ")[1])}
                    else {String::to_int(prim[1].split(" / ")[0]) / String::to_int(prim[1].split(" / ")[1])};
            
        prim = Main::shuffleArray(prim);
        
        let canvas = Canvas::create(500, 300, Color::rgb(255,255,255));
        Canvas::fillRect(canvas, 0, 0, 500, 300, Color::rgb(0,0,0), Color::rgb(68,148,74), 5);
        Canvas::text(canvas, 250, 42, "Примеры:", 30, new TextAlignCenter {} as TextAlign, Color::rgb(255,255,255));
        Canvas::text(canvas, 20, 80, prim[0] + " = ?", 22, new TextAlignLeft {} as TextAlign, Color::rgb(255,255,255));
        Canvas::text(canvas, 20, 110, prim[1] + " = ?", 22, new TextAlignLeft {} as TextAlign, Color::rgb(255,255,255));
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "разницу самого большого и самого маленького числа на таблице. В случае если полученное число в ходе вычисления разницы будет четным - то нужно решить математический пример на умножение, если нечетное - то на деление",
            "разницу между самым большим и самым маленьким числом на таблице, а затем, если результат четный, решить пример на умножение, если нечетный — на деление",
            "разность самого большого и самого маленького числа на таблице, после чего выполнить умножение, если результат четный, или деление, если нечетный",
            "разницу между максимальным и минимальным числом на таблице; если число четное — выполнить умножение, если нечетное — деление",
            "разность максимального и минимального числа на таблице и решить пример: умножение для четного результата или деление для нечетного",
            "разницу между наибольшим и наименьшим числом на таблице, затем решить пример на умножение для четного результата и деление для нечетного",
            "разницу самого большого и самого маленького числа на таблице, затем выполнить умножение, если результат четный, или деление, если нечетный",
            "разность между самым большим и самым маленьким числом на таблице; для четного значения решить пример на умножение, для нечетного — на деление",
            "разницу максимального и минимального числа на таблице и решить пример: умножение для четного результата или деление для нечетного",
            "разность между наибольшим и наименьшим числом на таблице, а затем выполнить умножение для четного результата и деление для нечетного",
            "разницу максимального и минимального числа на таблице, если четное — выполнить умножение, если нечетное — деление"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На доске " + task + " два примера: \n <img canvas>"
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны два примера: \n <img canvas>"
                + "\n Требуется определить " + conditions + ".";
        }

        let desc = sc + " В ответ написать целое число отбросив числа после знака."
            + "\n Пример вывода, следующий: \"121\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём разницу между максимальным и минимальным числом на таблице: " + String::from_int(nums[3]) + " - " + String::from_int(nums[0]) + " = " + String::from_int(nums[3] - nums[0])
            + if ((nums[3] - nums[0]) % 2 == 0) {"\nТ.к. число чётное, найдём ответ примера на умножение: "}
              else {"\nТ.к. число нечётное, найдём ответ примера на деление: "};
        
        if ((nums[3] - nums[0]) % 2 == 0 && prim[0].split("*").length()>1) {
            expl += prim[0]
        } else if ((nums[3] - nums[0]) % 2 == 0 && prim[1].split("*").length()>1) {
            expl += prim[1]
        } else if ((nums[3] - nums[0]) % 2 != 0 && prim[0].split("/").length()>1) {
            expl += prim[0]
        } else if ((nums[3] - nums[0]) % 2 != 0 && prim[1].split("/").length()>1) {
            expl += prim[1]
        }
        
        expl += " = " + String::from_int(ans);
        
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
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }
    
    function shuffleArray(array: List<String>) -> List<String> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/