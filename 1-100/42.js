/*
?Создайте генератор паззлов, который рисует на изображении несколько равенств с числами с операцией деления. Далее генератор просит проверить данные равенства методом умножения делителя на частное (результат от деления) и указать равенство, где была допущена ошибка.

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
        let am = Main::getRandomIntInRange(3, 10);
        let ch: List<int> = [];
        let zn: List<int> = [];
        let ans: List<int> = [];
        let canvas: List<PuzzleImage> = [];
        
        for (let i in 0..am) {
            ch.push(Main::getRandomIntInRange(10, 100));
            zn.push(Main::getRandomIntInRange(1, ch[i]));
            
            while (ch[i] % zn[i] != 0) {
                zn[i] = Main::getRandomIntInRange(1, ch[i]);
            }
            
            ans.push(ch[i]/zn[i]);
        }
        
        let index = Main::getRandomIntInRange(0, am-1);
        ans[index] = ans[index] + Main::getRandomIntInRange(1, 3);
        
        for (let i in 0..am) {
            let canva = Canvas::create(100, 38, Color::rgb(255, 255, 255));
                
            Canvas::text(canva, 15, 25, String::from_int(i+1) + ".", 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::text(canva, 35, 15, String::from_int(ch[i]), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canva, 25, 20, 45, 20, Color::rgb(0, 0, 0), 1);
            Canvas::text(canva, 35, 38, String::from_int(zn[i]), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::text(canva, 55, 25, " = ", 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::text(canva, 75, 25, String::from_int(ans[i]), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            
            canvas.push(new PuzzleImage {
                name: "canvas_" + String::from_int(i),
                image: canva
            })
        }
        
        //String::from_int(i+1) + ". \\(\\frac{" + String::from_int(ch[i]) + "}{" + String::from_int(zn[i]) + "} = " + String::from_int(ans[i]) + "\\)\n\n"
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "ряд равенств",
            "набор равенств",
            "перечень равенств"
        ][Main::getRandomIntInRange(0, 2)];
        let conditions2 = [
            "номер неверного равенства",
            "индекс ошибочного равенства",
            "порядковый номер некорректного равенства",
            "позицию неверного равенства",
            "номер неправильного равенства",
            "индекс неверного равенства"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": ";
        for (let i in 0..am) {
            sc += "\n<img canvas_" + String::from_int(i) + ">"
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions2
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditions + ": ";
            for (let i in 0..am) {
                sc += "\n<img canvas_" + String::from_int(i) + ">"
            }
            sc += "\nТребуется определить " + conditions2
                + ". ";;
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"4\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем каждое равенство умножением делителя на частное: \n";
        for (let i in 0..am) {
            expl += String::from_int(i+1) + ". " + String::from_int(zn[i]) + " * " + String::from_int(ans[i]) + " = " + String::from_int(zn[i]*ans[i]);
            
            if (i == index) {
                expl += " - неверное равенство\n"
            } else {
                expl += " - верное равенство\n"
            }
        }
        
        expl += "\nСледовательно ответ: " + String::from_int(index+1);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canvas,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(index+1)
                } as Reveal
            ],
        }
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/