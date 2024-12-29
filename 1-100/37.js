/*
?Создайте генератор задач, который на входе показывает несколько предложений, в которых упоминается некоторое количество дней на любые действия. Человек должен расставить предложения в порядке увеличения или уменьшения количества дней в них.

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
        let more = Main::getRandomIntInRange(0, 1) == 1;
        let actions = [
            "На уборку подъезда даётся ",
            "На поход в магазин есть ",
            "На подготовку презентации выделено ",
            "На ремонт машины у вас есть ",
            "На выполнение домашнего задания отводится ",
            "На планирование отпуска выделено ",
            "Для окончания проекта есть ",
            "На уборку квартиры выделено ",
            "На организацию вечеринки предоставляется ",
            "На оформление документов отведено ",
            "На завершение курса обучения есть ",
            "На замену электропроводки выделено ",
            "На пересдачу экзамена даётся ",
            "На выполнение ремонтных работ отводится ",
            "На подготовку отчёта есть ",
            "На прохождение курса по программированию даётся ",
            "Для проверки системы нужно ",
            "На согласование условий контракта предоставляется ",
            "Для установки нового оборудования выделено ",
            "На доставку посылки в ваш регион требуется "
        ];
        let days: List<int> = [];
        let days_s: List<String> = [];
        
        for (let i in 0..20) {
            actions = Main::shuffleArray(actions);
        }
        
        let len = Main::getRandomIntInRange(2, 10);
        
        for (let i in 0..len) {
            days.push(Main::getRandomIntInRange(1, 20));
        }
        
        days = ListSort::<int>::stable_sort(days);
        for (let i in 1..len) {
            if (days[i] == days[i-1]) {
                days[i] = days[i] + 1;
            }
        }
        
        for (let i in 0..len) {
            if (more) {
                days_s.push(
                    actions[i] + " " + String::from_int(days[i])
                    + Main::declOfNum(days[i], [" день.", " дня.", " дней."])
                );
            } else {
                days_s.push(
                    actions[i] + " " + String::from_int(days[days.length()-1-i])
                    + Main::declOfNum(days[days.length()-1-i], [" день.", " дня.", " дней."])
                );
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "предложений, в которых упоминается некоторое количество дней на любые действия",
            "предложений, где указано количество дней для выполнения различных действий",
            "предложений, в которых упоминается число дней для любых мероприятий",
            "предложений с упоминанием количества дней, отведённых на разные действия",
            "предложений, где говорится о количестве дней, необходимых для каких-либо действий",
            "фраз с указанием количества дней, требуемых для выполнения каких-либо действий",
            "предложений, включающих информацию о днях, отведённых на те или иные действия",
            "предложений, в которых говорится о количестве дней, доступных для любых задач",
            "фраз, где упомянуто определённое количество дней на разные действия",
            "предложений, включающие количество дней, нужных для выполнения различных действий",
            "фраз с указанием количества дней, необходимых для любых действий"
        ][Main::getRandomIntInRange(0, 10)];

        let expl_a: List<String> = [];
        for (let i in 0..len) {
            expl_a.push(days_s[i])
        }
        Main::shuffleArray(expl_a);
        
        let expl = "";
        for (let i in 0..len) {
            expl += String::from_int(i+1) + ". " + expl_a[i] + "\n"
        }
        
        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько "
            + conditions + ":\n"
            + expl
            + "\nЕё попросили " + whatDo 
            + " и расставить предложения в порядке " 
            + if (more) {"увеличения"}
              else {"уменьшения"}
            + " количества дней в них"
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько "
                + conditions + ":\n"
                + expl 
                + "\nТребуется определить и расставить предложения в порядке " 
                + if (more) {"увеличения"}
                  else {"уменьшения"}
                + " количества дней в них"
                + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2, 3, 1, 4\""
            + "\n<reveal ans>Ответ</reveal>\n";

        let sbs = "Расставим строки в правильном порядке: \n";
        let ans = "";
        for (let i in 0..len) {
            for (let j in 0..len) {
                if (days_s[i] == expl_a[j]) {
                    sbs += String::from_int(j+1) + ". " + expl_a[j] + "\n";
                    ans += String::from_int(j+1) + ", "
                }
            }
        }
        
        ans = ans[0..ans.length()-2];        
        sbs += "\nСледовательно ответ: " + ans;
        
        return new Puzzle {
            question: desc,
            solution: sbs,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
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