/*
?Создайте генератор заданий, в котором будет выводиться несколько арифметических примеров, переменные в которых будут представлены в виде арабских и римских чисел. Также должно выводиться какое то "главное число". Решающий должен решить оба уравнения и определить, результат какого уравнения равняется "главному числу".

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::canvas::Canvas;
import nightsky::canvas::Color;
import nightsky::canvas::TextAlign;
import nightsky::canvas::TextAlignLeft;
import nightsky::canvas::TextAlignRight;
import nightsky::canvas::TextAlignCenter;
import std::math::Math;
import std::collections::List;
import std::collections::ListSort;
import std::string::String;

class Expression {
    public expression: String,
    public num1: int,
    public num2: int,
}
class ArbRim {
    public arb: int,
    public rim: String
}
class Main {
    function gen_puzzle() -> Puzzle {
        let len = Main::getRandomIntInRange(3, 8);
        let main_int = Main::getRandomIntInRange(10, 999);
        let n: List<int> = [];
        let expressions: List<Expression> = [];
        let rims: List<ArbRim> = [];
        
        for (let i in 0..len) {
            n.push(Main::getRandomIntInRange(10, 999));
            while (n[i] == main_int) {
                n[i] = Main::getRandomIntInRange(10, 999);
            }
            expressions.push(Main::generateExpression(n[i], "+-".split("")[Main::getRandomIntInRange(1, 2)]));
        }
        
        let ans = Main::getRandomIntInRange(0, len-1);
        n[ans] = main_int;
        expressions[ans] = Main::generateExpression(main_int, "+-".split("")[Main::getRandomIntInRange(1, 2)]);
        
        for (let i in 0..len) {
            if (Main::getRandomIntInRange(0, 1) == 1) {
                if (expressions[i].num1 < 0) {
                    rims.push(new ArbRim {
                        arb: expressions[i].num1,
                        rim: "-" + Main::convertRim(-1*expressions[i].num1)
                    });
                }
                else {
                    rims.push(new ArbRim {
                        arb: expressions[i].num1,
                        rim: Main::convertRim(expressions[i].num1)
                    });
                }
            } else {
                if (expressions[i].num2 < 0) {
                    rims.push(new ArbRim {
                        arb: expressions[i].num2,
                        rim: "-" + Main::convertRim(-1*expressions[i].num2)
                    });
                }
                else {
                    rims.push(new ArbRim {
                        arb: expressions[i].num2,
                        rim: Main::convertRim(expressions[i].num2)
                    });
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "несколько арифметических примеров, представлены в виде арабских и римских чисел.",
            "некоторые арифметические примеры включающие арабские и римские числа.",
            "арифметические примеры представленые с использованием римских и арабских чисел.",
            "примеры включающие арифметические примеры с арабскими и римскими числами.",
            "примеры включающие арифметические примеры с числами в римской и арабской записи."
        ][Main::getRandomIntInRange(0, 4)];
        let conditionsAns = [
            " и записать номер примера, ответ которого будет равен числу ",
            " и указать номер примера, где ответ равен числу ",
            " и указать номер примера, результат которого равен числу ",
            " и записать номер того примера, ответ которого совпадает с числом ",
            " и найти номер примера, в котором результат будет равен числу ",
            " и определить номер примера, чье решение даст число "
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + " \n";
        for (let i in 0..len) {
            sc += "\n" 
                + String::join(
                    expressions[i]
                        .expression
                        .split(String::from_int(rims[i].arb)),
                    rims[i].rim
                )  
                + "?"
        }
        sc += "\n\nЕё попросили " + whatDo + conditionsAns
            + String::from_int(main_int) + ". ";

        if(Main::getRandomIntInRange(1, 1) == 1) {
            sc = "Даны " + conditions + "\n";
            for (let i in 0..len) {
                sc += "\n" 
                    + String::join(
                        expressions[i]
                            .expression
                            .split(String::from_int(rims[i].arb)),
                        rims[i].rim
                    )  
                    + "?"
            }
            sc += "\n\nТребуется определить" + conditionsAns 
                + String::from_int(main_int) + ". ";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: номер примера"
            + "\n Пример: 2"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем по очереди решать каждый пример: \n";
        for (let i in 0..ans+1) {
            expl += "\nПереведём число " 
                + rims[i].rim + " и получим "
                + String::from_int(rims[i].arb)
                + "\nТеперь решим сам пример: "
                + expressions[i].expression + String::from_int(n[i]);
            
            if (i == ans) {
                expl += "\n Это нужное нам число, по этому ответ получается "
                    + String::from_int(ans+1);
            }
            else {
                expl += "\n Это не то число которое нам нужно\n\n ";
            }
        }

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
    
    function generateExpression(result: int, oper: String) -> Expression {
        let num1 = 0;
        let num2 = 0;

        if (oper == "+") {
          num1 = Main::getRandomIntInRange(1, 999);
          num2 = result - num1;
        }
        else if (oper == "-") {
          num1 = Main::getRandomIntInRange(1, 999);
          num2 = num1 - result;
        }
        
        if (Main::getRandomIntInRange(0, 1) == 1) {
            if (oper == "+") {
                return new Expression {
                    expression: String::from_int(num2) 
                                        + "+" + String::from_int(num1)
                                        + "=",
                    num1: num2,
                    num2: num1,
                }
            }
            else {
                return new Expression {
                    expression: "-(" + String::from_int(num2) 
                                + ")+" + String::from_int(num1)
                                + "=",
                    num1: num2,
                    num2: num1,
                }
            }
        }
        
        if (num2 < 0) {
            return new Expression {
                expression: String::from_int(num1) 
                            + oper + "(" + String::from_int(num2)
                            + ")=",
                num1: num1,
                num2: num2,
            }
        }

        return new Expression {
            expression: String::from_int(num1) 
                        + oper + String::from_int(num2)
                        + "=",
            num1: num1,
            num2: num2,
        }
    }

    
    function convertRim(num:int) -> String {
        let c=[
            ["","I","II","III","IV","V","VI","VII","VIII","IX"],
            ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            ["","M","MM","MMM"]
        ];

        if (num == 0) {return "0"}

        return c[3][num / 1000 % 10]+c[2][num / 100 % 10]+c[1][num / 10 % 10]+c[0][num % 10];
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/