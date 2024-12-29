/*
?Сделайте генератор, который будет выводить на экран несколько вариаций задачи про дома/квартиры с использованием примера "66 - 20 - 12". Человеку нужно выбрать правильно составленную задачу. Например, на экран выводится 3 вариации задачи:
?1 - В одном районе 66 домов. Во втором — на 20 меньше чем в первом, а в третьем — на 12 меньше, чем во втором. Сколько всего домов в третьем районе?
?2 - В одном районе 66 домов. Во втором — на 26 больше чем в первом, а в третьем — на 18 больше, чем во втором. Сколько всего домов в третьем районе?
?3 - В одном муравейнике 66 муравьев. Во втором — на 20 меньше чем в первом, а в третьем — на 12 меньше, чем во втором. Сколько всего муравьев в третьем муравейнике?
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
            Main::getRandomIntInRange(100, 140), 
            Main::getRandomIntInRange(50, 99),
            Main::getRandomIntInRange(10, 49)
        ];
        let more = [
            "+-".split("")[Main::getRandomIntInRange(1, 2)], 
            "+-".split("")[Main::getRandomIntInRange(1, 2)]
        ];
        let instance = String::from_int(nums[0]) + more[0]
            + String::from_int(nums[1]) + more[1]
            + String::from_int(nums[2]);
        
        let tasks = [
            [
                "В одном районе ",
                "В одном доме ",
                "В одном здании ",
                "На одном дереве ",
                "В одной школе ",
                "В одном городе ",
                "В одном муравейнике "
            ],
            [
                " дом. | дома. | домов. ",
                " квартира. | квартиры. | квартир. ",
                " помещение. | помещения. | помещений. ",
                " яблоко. | яблока. | яблок. ",
                " компьютер. | компьютера. | компьютеров. ",
                " больница. | больницы. | больниц. ",
                " муравей. | муравья. | муравьёв. "
            ],
            [
                "Во втором — на 0 = чем в первом, ",
                "Во втором — на 0 = чем в первом, ",
                "Во втором — на 0 = чем в первом, ",
                "Во втором — на 0 = чем на первом, ",
                "Во второй — на 0 = чем в первой, ",
                "Во втором — на 0 = чем в первом, ",
                "Во втором — на 0 = чем в первом, "
            ],
            [
                "а в третьем — на 0 =, чем во втором. Сколько всего домов в третьем районе?",
                "а в третьем — на 0 =, чем во втором. Сколько всего квартир в третьем доме?",
                "а в третьем — на 0 =, чем во втором. Сколько всего помещений в третьем здании?",
                "а на третьем — на 0 =, чем на втором. Сколько всего яблок на третьем дереве?",
                "а в третьей — на 0 =, чем во второй. Сколько всего компьютеров в третьей школе?",
                "а в третьем — на 0 =, чем во втором. Сколько всего больниц в третьем городе?",
                "а в третьем — на 0 =, чем во втором. Сколько всего муравьев в третьем муравейнике?"
            ]
        ];
        
        let len = Main::getRandomIntInRange(2, 7);
        let ans = Main::getRandomIntInRange(0, len-1);
        let ans_n = Main::getRandomIntInRange(0, 6);
                
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
            let n = Main::getRandomIntInRange(0, 6);
            
            if (i == ans) {
                n = ans_n;
                
                sc += String::from_int(i+1) + ". "
                    + tasks[0][n] + String::from_int(nums[0])
                    + Main::declOfNum(nums[0], tasks[1][n].split("|"))
                    + String::join(
                        tasks[2][n].split("0"), 
                        String::from_int(nums[1])
                    ).split("=")[0];
                if (more[0] == "+") {
                    sc += "больше"
                } else {
                    sc += "меньше"
                }
                sc += String::join(
                        tasks[2][n].split("0"), 
                        String::from_int(nums[1])
                    ).split("=")[1]
                    + String::join(
                        tasks[3][n].split("0"), 
                        String::from_int(nums[2])
                    ).split("=")[0];
                if (more[1] == "+") {
                    sc += "больше"
                } else {
                    sc += "меньше"
                }
                sc += String::join(
                        tasks[3][n].split("0"), 
                        String::from_int(nums[2])
                    ).split("=")[1] + "\n";
                
                expl += String::from_int(i+1) + ". " + instance + "\n";
            } else {
                let num1 = nums[0] + Main::getRandomIntInRange(0, 5);
                let num2 = nums[1] + Main::getRandomIntInRange(0, 5);
                let num3 = nums[2] + 1 + Main::getRandomIntInRange(0, 5);
                
                sc += String::from_int(i+1) + ". "
                    + tasks[0][n] 
                    + String::from_int(num1)
                    + Main::declOfNum(num1, tasks[1][n].split("|"))
                    + String::join(
                        tasks[2][n].split("0"), 
                        String::from_int(num2)
                    ).split("=")[0];
                                
                expl += String::from_int(i+1) + ". " 
                    + String::from_int(num1); 
                if (Main::getRandomIntInRange(0, 1) == 1) {
                    sc += "больше";
                    expl += "+";
                } else {
                    sc += "меньше"
                    expl += "-";
                }
                sc += String::join(
                        tasks[2][n].split("0"), 
                        String::from_int(num2)
                    ).split("=")[1]
                    + String::join(
                        tasks[3][n].split("0"), 
                        String::from_int(num3)
                    ).split("=")[0];
                                
                expl += String::from_int(num2); 
                if (Main::getRandomIntInRange(0, 1) == 1) {
                    sc += "больше";
                    expl += "+";
                } else {
                    sc += "меньше";
                    expl += "-";
                }
                sc += String::join(
                        tasks[3][n].split("0"), 
                        String::from_int(num3)
                    ).split("=")[1] + "\n";
                                
                expl += String::from_int(num3) + "\n"; 
            }
        }
        sc += "\nЕё попросили " + whatDo 
            + conditions + 
            [
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
                let n = Main::getRandomIntInRange(0, 6);

                if (i == ans) {
                    n = ans_n;

                    sc += String::from_int(i+1) + ". "
                        + tasks[0][n] + String::from_int(nums[0])
                        + Main::declOfNum(nums[0], tasks[1][n].split("|"))
                        + String::join(
                            tasks[2][n].split("0"), 
                            String::from_int(nums[1])
                        ).split("=")[0];
                    if (more[0] == "+") {
                        sc += "больше"
                    } else {
                        sc += "меньше"
                    }
                    sc += String::join(
                            tasks[2][n].split("0"), 
                            String::from_int(nums[1])
                        ).split("=")[1]
                        + String::join(
                            tasks[3][n].split("0"), 
                            String::from_int(nums[2])
                        ).split("=")[0];
                    if (more[1] == "+") {
                        sc += "больше"
                    } else {
                        sc += "меньше"
                    }
                    sc += String::join(
                            tasks[3][n].split("0"), 
                            String::from_int(nums[2])
                        ).split("=")[1] + "\n";

                    expl += String::from_int(i+1) + ". " + instance + "\n";
                } else {
                    let num1 = nums[0] + Main::getRandomIntInRange(0, 5);
                    let num2 = nums[1] + Main::getRandomIntInRange(0, 5);
                    let num3 = nums[2] + 1 + Main::getRandomIntInRange(0, 5);

                    sc += String::from_int(i+1) + ". "
                        + tasks[0][n] 
                        + String::from_int(num1)
                        + Main::declOfNum(num1, tasks[1][n].split("|"))
                        + String::join(
                            tasks[2][n].split("0"), 
                            String::from_int(num2)
                        ).split("=")[0];

                    expl += String::from_int(i+1) + ". " 
                        + String::from_int(num1); 
                    if (Main::getRandomIntInRange(0, 1) == 1) {
                        sc += "больше";
                        expl += "+";
                    } else {
                        sc += "меньше"
                        expl += "-";
                    }
                    sc += String::join(
                            tasks[2][n].split("0"), 
                            String::from_int(num2)
                        ).split("=")[1]
                        + String::join(
                            tasks[3][n].split("0"), 
                            String::from_int(num3)
                        ).split("=")[0];

                    expl += String::from_int(num2); 
                    if (Main::getRandomIntInRange(0, 1) == 1) {
                        sc += "больше";
                        expl += "+";
                    } else {
                        sc += "меньше";
                        expl += "-";
                    }
                    sc += String::join(
                            tasks[3][n].split("0"), 
                            String::from_int(num3)
                        ).split("=")[1] + "\n";

                    expl += String::from_int(num3) + "\n"; 
                }
            }
            sc += "\nТребуется определить " + conditions + 
                [
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
            + "\n Пример: 4"
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