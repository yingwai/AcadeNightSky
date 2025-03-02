/*
?Сделайте генератор задач, который на входе показывает несколько плоских фигур, заштрихованных разными типами штриховки (вертикальные штрихи/горизонтальные штрихи/наклонные штрихи и т.д.). Требуется разделить эти фигуры на группы по типу штриховки (в одной группе фигуры с одинаковым типом штриховки), посчитать, сколько фигур в самой большой и самой маленькой группе, и найти разность этих значений.

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
        let type = [0, 0, 0];
        let canva: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(4, 10)) {
            let n = Main::getRandomIntInRange(0, 2);
            
            type[n] = type[n] + 1;
            let canvas = Canvas::create(100, 100, Color::rgb(255, 255, 255));
            Canvas::rect(canvas, 10, 10, 80, 80, Color::rgb(0, 0, 0), 2);
            
            if (n == 0) {                
                for (let i in 0..8) {
                    Canvas::line(canvas, 20 + 10*i, 10, 20 + 10*i, 90, Color::rgb(0, 0, 0), 2);
                }
            } else if (n == 1) {                
                for (let i in 0..8) {
                    Canvas::line(canvas, 10, 20 + 10*i, 90, 20 + 10*i, Color::rgb(0, 0, 0), 2);
                }
            } else if (n == 2) {              
                for (let i in 0..13) {
                    if (i <= 6) {
                        Canvas::line(canvas, 10, 30 + 10*i, 30 + 10*i, 10, Color::rgb(0, 0, 0), 2);  
                    } else {
                        Canvas::line(canvas, 90, 70 - 10*(12-i), 70 - 10*(12-i), 90, Color::rgb(0, 0, 0), 2); 
                    }                    
                }
            }
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(i),
                    image: canvas
                }
            )
        }
        let list = "";
        for (let i in canva) {
            list += "<img " + i.name + ">"
        }
        
        let ans = community::near::dtalalaev::max::Max::maxArr(type) - community::near::dtalalaev::min::Main::minArr(type);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "разделить эти фигуры на группы по типу штриховки, посчитать, сколько фигур в самой большой и самой маленькой группе, и найти разность этих значений",
            "разделить фигуры по типу штриховки, определить количество фигур в самой большой и самой маленькой группе, и найти разницу",
            "разделить фигуры на группы по типу штриховки, посчитать количество фигур в самой большой и самой маленькой группе, и вычислить разницу",
            "классифицировать фигуры по типу штриховки, подсчитать количество фигур в самой крупной и самой мелкой группе, и найти их разницу",
            "сгруппировать фигуры по типу штриховки, посчитать фигуры в самой крупной и самой маленькой группе и найти разницу",
            "разделить фигуры на группы по типу штриховки, подсчитать количество фигур в самой большой и самой маленькой группе, и вычислить разницу"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько плоских фигур, заштрихованных разными типами штриховки: \n" + list
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько плоских фигур, заштрихованных разными типами штриховки: \n" + list
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc + " Если присутствует несколько одинаковых чисел, берём любое из них."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала посчитаем сколько фигур каждой штриховки: \n Вертикальная: " + String::from_int(type[0]) + "\n Горизантальная: " + String::from_int(type[1]) + "\n Наклонная: " + String::from_int(type[2])
            + "\n Найдём разность самой большой и самой маленькой группы: " + String::from_int(community::near::dtalalaev::max::Max::maxArr(type)) + " - " + String::from_int(community::near::dtalalaev::min::Main::minArr(type)) + " = " + String::from_int(ans);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(ans)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/