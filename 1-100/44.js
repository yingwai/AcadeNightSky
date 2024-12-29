/*
?Создайте графический генератор, в котором на входе дается несколько квадратов разного размера и высчитывается площадь каждого. Площадь каждого квадрата - это количество набранных очков каждого участника. Необходимо выбрать две самые большие площади которые получились и сравнить их числовые значения. Полученный результат будет означать, сколько очков не хватило второму месту на турнире, чтобы добраться до золотой медали.

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
        let l: List<int> = [];
        let S: List<int> = [];
        let sq: List<PuzzleImage> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 5)) {
            l.push(Main::getRandomIntInRange(1, 10));
        }
        
        for (let i in 0..l.length()) {
            for (let j in i+1..l.length()) {
                while (l[i] == l[j]) {
                    l[j] = Main::getRandomIntInRange(1, 10)
                }
            }
        }
        
        for (let i in 0..l.length()) {            
            S.push(l[i]*l[i]);
            
            sq.push(new PuzzleImage {
                name: "sq_" + String::from_int(i),
                image: Main::getSq(l[i])
            })
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "несколько квадратов разного размера и их длина",
            "набор квадратов разного размера с указанием их длины",
            "несколько квадратов различных размеров с их длиной",
            "несколько квадратов разных размеров и их длина",
            "квадраты разных размеров и их длины",
            "несколько квадратов с разными размерами и указанием длины"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ".\n"
        for (let i in 0..l.length()) {
            sc += "<img sq_" + String::from_int(i) + ">"
        }
        sc += "\nЕё попросили " + whatDo + " площадь каждого квадрата - это количество набранных очков каждого участника. Необходимо выбрать две самые большие площади которые получились и сравнить их числовые значения. Полученный результат будет означать, сколько очков не хватило второму месту на турнире, чтобы добраться до золотой медали" 
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ".\n"
            for (let i in 0..l.length()) {
                sc += "<img sq_" + String::from_int(i) + ">"
            }
            sc += "\nТребуется определить площадь каждого квадрата - это количество набранных очков каждого участника. Необходимо выбрать две самые большие площади которые получились и сравнить их числовые значения. Полученный результат будет означать, сколько очков не хватило второму месту на турнире, чтобы добраться до золотой медали" 
                + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"17\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассчитаем площадь каждого квадрата:\n";
        for (let i in 0..l.length()) {
            expl += String::from_int(l[i]) + " * " + String::from_int(l[i]) + " = " + String::from_int(S[i]) + "\n";
        }
        S = ListSort::<int>::stable_sort(S);
        expl += "\nТеперь рассчитаем разницу между двумя наибольшами площадями (очками) и получим ответ: \n"
            + String::from_int(S[S.length()-1]) + " - " + String::from_int(S[S.length()-2]) + " = " + String::from_int(S[S.length()-1] - S[S.length()-2]);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: sq,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(S[S.length()-1] - S[S.length()-2])
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getSq(len: int) -> Canvas {
        let canvas = Canvas::create(30*len + 30, 30*len + 30, Color::rgb(255, 255, 255));
        Canvas::text(canvas, 10, (30*len + 30) / 2, String::from_int(len), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        Canvas::rect(canvas, 25, 10, 30*len, 30*len, Color::rgb(0,0,0), 2);
        
        return canvas
    }
}
*/