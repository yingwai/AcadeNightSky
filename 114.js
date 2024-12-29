/*
?Создайте генератор паззлов, который генерирует случайные браузеры и скорость их работы. Генератор будет просить упорядочить браузеры от самого медленного к самому быстрому.

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
        let browsers = [
            "Google Chrome",
            "Mozilla Firefox",
            "Microsoft Edge",
            "Safari",
            "Opera",
            "Brave",
            "Vivaldi",
            "Tor Browser",
            "DuckDuckGo",
            "Maxthon"
        ];
        let speeds: List<int> = [];
        
        for (let i in 0..50) {
            browsers = community::near::dtalalaev::shuffleStringArray::Main::shuffle(browsers);
        }
        
        browsers = browsers[0..Main::getRandomIntInRange(3, 6)];
        
        for (let i in 0..browsers.length()) {
            speeds.push(Main::getRandomIntInRange(10, 250));
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "упорядочить браузеры от самого медленного к самому быстрому",
            "расположить браузеры в порядке от самого медленного к самому быстрому",
            "упорядочить список браузеров по возрастанию скорости",
            "распределить браузеры от менее быстрого к более быстрому",
            "составить последовательность браузеров по увеличению их скорости",
            "выстроить браузеры в порядке возрастания скорости работы",
            "сортировать браузеры от наиболее медленного до самого быстрого",
            "расположить браузеры в порядке увеличения производительности",
            "упорядочить браузеры от низкой скорости работы к высокой",
            "составить список браузеров по нарастанию скорости выполнения операций",
            "упорядочить браузеры от самого медленного до самого быстрого"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " список браузеров и их скорость: \n";
        for (let i in 0..browsers.length()) {
            sc += String::from_int(i+1) + ". " + browsers[i] + " - " + String::from_int(speeds[i]) + " Мб/с \n"
        }
        sc += "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан список браузеров и их скорость: \n";
            for (let i in 0..browsers.length()) {
                sc += String::from_int(i+1) + ". " + browsers[i] + " - " + String::from_int(speeds[i]) + " Мб/с \n"
            }
            sc += "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Если в списке есть браузеры с одинаковой скоростью, первый будет тот что встречается в списке первее."
            + "\n Пример ответа: \"DuckDuckGo, Brave, Vivaldi, Opera\""
            + "\n<reveal ans>Ответ</reveal>";

        let ans = Main::bubbleSort(speeds, browsers);
        
        let expl = "Расположим все скорости браузеров в порядке от самого медленного к самому быстрому: ";
        for (let i in 0..browsers.length()) {
            expl += String::from_int(speeds[i]) + " Мб/с, "
        }
        expl = expl[0..expl.length()-2] + ". \n Соотнесём эти скорости с скоростями из списка и получим нужный список браузеров: " + String::join(ans, ", ")
        
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
    
    function bubbleSort(a: List<int>, b: List<String>) -> List<String> {
        let arr = a;
        let arr1 = b;
        let n = arr.length();

        for (let i in 0..n - 1) {
            for (let j in 0..n - i - 1) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    
                    let temp1 = arr1[j];
                    arr1[j] = arr1[j + 1];
                    arr1[j + 1] = temp1;
                }
            }
        }
        return arr1;
    }
}
*/