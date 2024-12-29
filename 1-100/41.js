/*
?Создайте генератор, который выдаст числовой ряд. Решающему нужно будет определить, каким по порядку является число, обладающее заданным свойством (четность/нечетность, количество разрядов, самое большое число, самое маленькое число и так далее). В ответ записать порядковый номер подходящего числа. Старайтесь придумывать разнообразные свойства.

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
        let n = Main::getRandomIntInRange(0, 6);
        let cnd = "первого четного|первого нечетного|первого однозначного|первого двухзначного|первого трёхзначного|самого большого|самого маленького".split("|")[n];
        let arb: List<int> = [];
        let ans = 0;
        
        for (let i in 0..Main::getRandomIntInRange(3, 10)) {
            arb.push(Main::getRandomIntInRange(1, 200));
        }
        
        if (n == 0) {
            for (let i in 0..arb.length()) {
                if (arb[i] % 2 == 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 1) {
            for (let i in 0..arb.length()) {
                if (arb[i] % 2 != 0) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 2) {
            for (let i in 0..arb.length()) {
                if (arb[i] < 10) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 3) {
            for (let i in 0..arb.length()) {
                if (arb[i] >= 10 && arb[i] < 100) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 4) {
            for (let i in 0..arb.length()) {
                if (arb[i] >= 100 && arb[i] < 1000) {
                    ans = i + 1;
                    break;
                }
            }
        }
        else if (n == 5) {
            ans = Main::maxInt(arb, true)
        }
        else if (n == 6) {
            ans = Main::maxInt(arb, false)
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            " и записать порядковый номер ",
            " и указать порядковый номер ",
            " и записать индекс ",
            " и отметить порядковый номер ",
            " и вписать порядковый номер ",
            " и указать номер индекса ",
            " и внести порядковый номер ",
            " и отразить порядковый номер ",
            " и обозначить порядковый номер ",
            " и зафиксировать индекс ",
            " и обозначить индекс "
        ][Main::getRandomIntInRange(0, 0)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " ряд чисел: ";
        for (let i in 0..arb.length()) {
            sc += String::from_int(arb[i]) + ", "
        }
        sc = sc[0..sc.length() - 2] +  ". Её попросили " + whatDo + conditions + cnd + " числа"
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан ряд чисел: ";
            for (let i in 0..arb.length()) {
                sc += String::from_int(arb[i]) + ", "
            }
            sc = sc[0..sc.length() - 2] + ". Требуется определить " + conditions + cnd + " числа"
            + ". ";
        }

        let desc = sc + "Если такого числа нет, в ответ записать 0."
            + "\n Пример вывода, следующий: \"5\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем по очереди проверять каждое число: \n";        
        if (n == 0) {
            for (let i in 0..arb.length()) {
                expl += String::from_int(arb[i]) + " - "
                
                if (arb[i] % 2 == 0) {
                    expl += "чётное";
                    break;
                } else {
                    expl += "нечётное";
                }
                
                expl += "\n";
            }
        }
        else if (n == 1) {
            for (let i in 0..arb.length()) {
                expl += String::from_int(arb[i]) + " - "
                
                if (arb[i] % 2 != 0) {
                    expl += "нечётное";
                    break;
                } else {
                    expl += "чётное";
                }
                
                expl += "\n";
            }
        }
        else if (n == 2) {
            for (let i in 0..arb.length()) {
                expl += String::from_int(arb[i]) + " - "
                    
                if (arb[i] < 10) {
                    expl += "однозначное";
                    break;
                } else {
                    expl += "неоднозначное";
                }
                
                expl += "\n";
            }
        }
        else if (n == 3) {
            for (let i in 0..arb.length()) {
                expl += String::from_int(arb[i]) + " - "
                    
                if (arb[i] >= 10 && arb[i] < 100) {
                    expl += "двухзначное";
                    break;
                } else {
                    expl += "недвухзначное";
                }
                
                expl += "\n";
            }
        }
        else if (n == 4) {
            for (let i in 0..arb.length()) {
                expl += String::from_int(arb[i]) + " - "
                    
                if (arb[i] >= 100 && arb[i] < 1000) {
                    expl += "трёхзначное";
                    break;
                } else {
                    expl += "нетрёхзначное";
                }
                
                expl += "\n";
            }
        }
        else if (n == 5) {
            arb = ListSort::<int>::stable_sort(arb);
            
            for (let i in 0..arb.length()) {
                if (i != 0 && arb[i] == arb[i-1]) {
                    continue;
                }
                
                expl += String::from_int(arb[i]) + " < "
            }
            
            expl = expl[0..expl.length() - 2]
        }
        else if (n == 6) {
            arb = ListSort::<int>::stable_sort(arb);
            
            for (let i in 0..arb.length()) {
                if (i != 0 && arb[i] == arb[i-1]) {
                    continue;
                }
                
                expl += String::from_int(arb[i]) + " < "
            }
            
            expl = expl[0..expl.length() - 2]
        }
        
        expl += "\n\n Следовательно ответ: " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }

    function maxInt(arr: List<int>, more: bool) -> int {
        let max = arr[0]
        let index = 1;

        if (more) {
            for (let i in 1..arr.length()) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i+1;
                }
            }
        } else {
            for (let i in 1..arr.length()) {
                if (arr[i] < max) {
                    max = arr[i];
                    index = i+1;
                }
            }
        }

        return index;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/