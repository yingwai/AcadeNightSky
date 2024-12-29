/*
?Сделайте генератор, который будет выводить на экран несколько вариаций задачи про калории с использованием примера "800/20". Человеку нужно выбрать правильно составленную задачу. Например, на экран выводится 3 вариации задачи:
?1 - В 20 одинаковых блюдах содержится 800 калорий. Сколько калорий содержит 1 порция блюда?
?2 - В 800 одинаковых блюдах содержится 1 калория. Сколько калорий содержит 20 порция блюда?
?3 - В 20 одинаковых бочках содержится 800 килограммов рыбы. Сколько килограммов рыбы содержит одна бочка?
?Правильно составленной задачей, согласно условию, является первая, которая совмещает в себе как указанные числа, так и указанную тематику.

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
        let nums = [
            Main::getRandomIntInRange(5, 20),
            Main::getRandomIntInRange(100, 140)
        ];
        let instance = String::from_int(nums[1]) + " / " + String::from_int(nums[0]);
        
        let dabl = [
                ["блюде", "блюдах", "блюдах"],
                ["бочке", "бочках", "бочках"],
                ["районе", "районах", "районах"],
                ["доме", "домах", "домах"],
                ["здании", "зданиях", "зданиях"],
                ["дереве", "деревьях", "деревьях"],
                ["школе", "школах", "школах"],
                ["городе", "городах", "городах"],
                ["муравейнике", "муравейниках", "муравейниках"]
        ];
        let cuka = [
                ["калория.", "калории.", "калорий."],
                ["килограмм рыбы.", "килограмма рыбы.", "килограммов рыбы."],
                ["дом.", "дома.", "домов."],
                ["квартира.", "квартиры.", "квартир."],
                ["помещение.", "помещения.", "помещений."],
                ["яблоко.", "яблока.", "яблок."],
                ["компьютер.", "компьютера.", "компьютеров."],
                ["больница.", "больницы.", "больниц."],
                ["муравей.", "муравья.", "муравьёв."]
        ];
        let tasks = [
            [
                "В ",
                "В ",
                "В ",
                "В ",
                "В ",
                "На ",
                "В ",
                "В ",
                "В "
            ],
            [""],
            [
                " содержится ",
                " содержится ",
                " находится ",
                " находится ",
                " находится ",
                " находится ",
                " находится ",
                " находится ",
                " находится "
            ],
            [""],
            [
                " Сколько калорий содержится в одном блюде?",
                " Сколько килограммов рыбы содержит в одном бочке?",
                " Сколько домов в одном районе?",
                " Сколько квартир в одном доме?",
                " Сколько помещений в одном здании?",
                " Сколько яблок на одном дереве?",
                " Сколько компьютеров в одном школе?",
                " Сколько больниц в одном городе?",
                " Сколько муравьёв в одном муравейнике?"
            ]
        ];
        
        let len = Main::getRandomIntInRange(2, 7);
        let ans = Main::getRandomIntInRange(0, len-1);
        let ans_n = Main::getRandomIntInRange(0, 8);
                
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            " правильно составленную задачу, согласно условию, если по условию нам дана тема: ",
            " корректно сформулированную задачу, если по условию нам дана тема: ",
            " правильно составленное задание по условиям для темы: ",
            " задачу, составленную корректно и соответствующую теме: ",
            " задачу, которая правильно отражает условие по теме: ",
            " корректное задание, полностью соответствующее данному условию по теме: ",
            " задачу, сформулированную верно с учётом условия по теме: ",
            " корректное формулирование задачи с условием по теме: ",
            " задачу, которая соответствует данному условию по теме: ",
            " правильное задание, составленное в соответствии с условием и темой: ",
            " корректное формулирование задачи в рамках условия и темы: "
        ][Main::getRandomIntInRange(0, 10)];

        let expl = "Сначала выясним какие примеры составляются из задач: \n";
        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько похожих задач: \n\n";
        for (let i in 0..len) {
            let n = Main::getRandomIntInRange(0, 8);
            
            if (i == ans) {
                n = ans_n;
                
                sc += String::from_int(i+1) + ". " + tasks[0][n] + String::from_int(nums[0]) + " " + Main::declOfNum(nums[0], dabl[n]) + tasks[2][n]
                    + String::from_int(nums[1]) + " " + Main::declOfNum(nums[1], cuka[n]) + tasks[4][n] + "\n";
                
                expl += String::from_int(i+1) + ". " + instance + "\n";
            } else {
                let num1 = nums[0] + Main::getRandomIntInRange(0, 5);
                let num2 = nums[1] + Main::getRandomIntInRange(1, 5);
                
                sc += String::from_int(i+1) + ". " + tasks[0][n] + String::from_int(num1) + " " + Main::declOfNum(num1, dabl[n]) + tasks[2][n]
                    + String::from_int(num2) + " " + Main::declOfNum(num2, cuka[n]) + tasks[4][n] + "\n";
                                
                expl += String::from_int(i+1) + ". " + String::from_int(num2) + " / " + String::from_int(num1) + "\n";
            }
        }
        sc += "\nЕё попросили " + whatDo 
            + conditions + 
            [
                "блюда/калории",
                "бочки/рыба",
                "районы/дома",
                "дома/квартиры",
                "здания/помещения",
                "деревья/яблоки",
                "школы/компьютеры",
                "города/больницы",
                "муравейник/муравьи"
            ][ans_n] + " и пример \"" + instance + "\""
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны несколько похожих задач: \n\n";
            expl = "Сначала выясним выясним какие примеры составляются из задач: \n";
            for (let i in 0..len) {
                let n = Main::getRandomIntInRange(0, 8);

                if (i == ans) {
                    n = ans_n;
                
                    sc += String::from_int(i+1) + ". " + tasks[0][n] + String::from_int(nums[0]) + " " + Main::declOfNum(nums[0], dabl[n]) + tasks[2][n]
                        + String::from_int(nums[1]) + " " + Main::declOfNum(nums[1], cuka[n]) + tasks[4][n] + "\n";
                    
                    expl += String::from_int(i+1) + ". " + instance + "\n";
                } else {
                    let num1 = nums[0] + Main::getRandomIntInRange(0, 5);
                    let num2 = nums[1] + Main::getRandomIntInRange(1, 5);

                    sc += String::from_int(i+1) + ". " + tasks[0][n] + String::from_int(num1) + " " + Main::declOfNum(num1, dabl[n]) + tasks[2][n]
                        + String::from_int(num2) + " " + Main::declOfNum(num2, cuka[n]) + tasks[4][n] + "\n";

                    expl += String::from_int(i+1) + ". " + String::from_int(num2) + " / " + String::from_int(num1) + "\n";
                }
            }
            sc += "\nТребуется определить " + conditions + 
                [
                    "блюда/калории",
                    "бочки/рыба",
                    "районы/дома",
                    "дома/квартиры",
                    "здания/помещения",
                    "деревья/яблоки",
                    "школы/компьютеры",
                    "города/больницы",
                    "муравейник/муравьи"
                ][ans_n] + " и пример \"" + instance + "\""
                + ". ";
        }

        let desc = sc
            + "В ответ записать номер нужной задачи."
            + "\n Пример: \"4\""
            + "\n<reveal ans>Ответ</reveal>";
        
        expl += "\n Т.к. номер " + String::from_int(ans+1)
            + " соответствует примеру и теме, ответ будет: "
            + String::from_int(ans+1);
            
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans+1)
                } as Reveal
            ],
        }
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
}
*/