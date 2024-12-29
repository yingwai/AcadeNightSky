/*
?Создайте генератор, который будет выдавать предложение, состоящее из 8 и более слов. Решающему нужно будет использовать шифр: каждая буква в каждом слове имеет свой "вес" - это порядковый номер буквы в алфавите. Чтобы определить "стоимость" слова - нужно сложить все порядковые номера букв в этом слове. Далее решающему нужно будет определить, какое слово имеет наибольшую/наименьшую стоимость, и записать в ответ это слово.

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

class Word {
	public name: String,
    public index: int
}
        
class Main {
    function gen_puzzle() -> Puzzle {
        let letter = ["аА", "бБ", "вВ", "гГ", "дД", "еЕ", "ёЁ", "жЖ", "зЗ", "иИ", "йЙ", "кК", "лЛ", "мМ", "нН", "оО", "пП", "рР", "сС", "тТ", "уУ", "фФ", "хХ", "цЦ", "чЧ", "шШ", "щЩ", "ъЪ", "ыЫ", "ьЬ", "эЭ", "юЮ", "яЯ"];
        let cost: List<Word> = [];
        
        for (let i in 0..letter.length()) {
            cost.push(new Word{name: letter[i], index: i+1})
        }
        
        let inpt = [
            "Для современного мира убеждённость некоторых оппонентов позволяет выполнить важные задания по разработке благоприятных перспектив.",
            "Картельные сговоры не допускают ситуации, при которой ключевые особенности структуры проекта своевременно верифицированы.",
            "В частности, убеждённость некоторых оппонентов требует определения и уточнения поставленных обществом задач.",
            "Таким образом, граница обучения кадров в значительной степени обусловливает важность прогресса профессионального сообщества.",
            "Сложно сказать, почему реплицированные с зарубежных источников, современные исследования могут быть ассоциативно распределены по отраслям.",
            "Разнообразный и богатый опыт говорит нам, что существующая теория создаёт предпосылки для системы массового участия."
        ][Main::getRandomIntInRange(0, 5)];
        
        let nums: List<int> = [];
        let place: List<int> = [];
        for (let i in 0..inpt.split(" ").length()) {
            nums.push(Main::findLongestWord(inpt.split(" ")[i], cost));
            place.push(Main::findLongestWord(inpt.split(" ")[i], cost));
        }

        let max = Main::getRandomIntInRange(0, 1) == 1;
        
        nums = ListSort::<int>::stable_sort(nums);
        let ans = "";
        if (max) {
            for (let i in 0..nums.length()) {
                if (nums[nums.length() - 1] == place[i]) {
                    ans = Main::print(inpt.split(" ")[i]);
                }
            }
        }
        else {
            for (let i in 0..nums.length()) {
                if (nums[0] == place[i]) {
                    ans = Main::print(inpt.split(" ")[i]);
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "При условии, что количество очков за букву = индекс, на котором она расположена в алфавите",
            "Если очки за букву равны её позиции в алфавите",
            "При условии, что баллы за букву совпадают с её порядковым номером в алфавите",
            "Когда количество очков за букву определяется её местом в алфавите",
            "Если буква приносит столько же очков, как и номер буквы в алфавите",
            "При условии, что за букву начисляется количество очков, равное её позиции в алфавите",
            "Очки за букву равны её номеру в алфавите",
            "Когда буква оценивается количеством очков, равным её порядковому номеру в алфавите",
            "При условии, что баллы за букву определяются её позицией в алфавите",
            "Когда количество очков буквы равно её порядковому номеру в алфавите"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " предложение: " + inpt
            + "\nЕё попросили " + whatDo + " слово с " 
            + if (max) {"наибольшим количество очков."}
              else {"наименьшим количество очков."}
            + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано предложение: " + inpt 
                + "\nТребуется определить слово с " 
                + if (max) {"наибольшим количество очков."}
                  else {"наименьшим количество очков."}
                + " " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"профессионального\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим каждое слово отдельно: \n";
        for (let i in 0..nums.length()) {
    	    expl += Main::print(inpt.split(" ")[i]) + " - " + PluralRu::pluralify(place[i], "очко", "очка", "очков") + " \n";
        }
        expl += "\n Следовательно ответ: " + ans + "";

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

    function print(str: String) -> String {
        let res = "";
        for (let i in 1..str.split("").length()) {
            let word = str.split("")[i];
            
            if (word != "," && word != "." && word != "!" && word != "?" && word != ":") {
                res += word;
            }
        }
        return res;
    }

    function findLongestWord(str: String, cost: List<Word>) -> int {
        let value = 0;
        for (let i in 0..str.split("").length()) {
            let word = str.split("")[i];
            
            if (word != "," && word != "." && word != "!" && word != "?" && word != ":") {
                for (let j in 0..cost.length()) {
                    if (word == cost[j].name.split("")[1] || word == cost[j].name.split("")[2]) {
                        value += cost[j].index;
                    }
                }
            }
        }
        return value;
    }
}
*/