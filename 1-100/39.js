/*
?Сделайте генератор паззлов, который рисует координатную плоскость и рисует на ней квадрат (чтобы по координатам можно было точно определить его размеры) и просит написать площадь квадрата, что получится, если умножить показанный на плоскости на какой-то коэффициент, что задается дробью.

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
        let sq = [
            Main::getRandomIntInRange(1, 10),
            Main::getRandomIntInRange(1, 10)
        ];
        let canva = Main::getCube(sq);
        let coef = Main::getRandomFloat(3, 2);
        let ans = Main::round((sq[0] * sq[1]) as float * coef, 2);
        let fig = if (sq[0] == sq[1]) {"квадрат"} else {"прямоуголник"}
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "координатная плоскость и на ней",
            "координатная плоскость, на которой",
            "плоскость координат, на которой",
            "система координат, на которой",
            "система координат и на ней",
            "координатная система и на ней"
        ][Main::getRandomIntInRange(0,5)];
        let conditions1 = [
            "умноженную на какой-то коэффициент, равный",
            "умноженную на определённый коэффициент, равный",
            "умноженную на некоторый коэффициент, который равен",
            "умноженную на коэффициент, значение которого равно",
            "умноженную на коэффициент, равный",
            "умноженную на заданный коэффициент, равный"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + " " + fig + ", "
            + " её попросили " + whatDo + " площадь " + fig + "а " + conditions1 + " " + Main::round(coef, 2)
            + ". \n<img canvas>";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана " + conditions + " " + fig + ", требуется определить площадь " + fig + "а " + conditions1 + " " + Main::round(coef, 2)
            + ". Ответ округлить до сотых. \n<img canvas>";
        }

        let desc = sc 
            + "\n Пример вывода, следующий:  \"80.64\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала найдём площадь " + fig + "а: " + String::from_int(sq[0]) + " * " + String::from_int(sq[1]) + " = " + String::from_int(sq[0] * sq[1])
            + "\nТеперь умножим площадь на коэффициент и найдём ответ: " + String::from_int(sq[0] * sq[1]) + " * " + Main::round(coef, 2) + " = " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canva
                }
            ],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign = "";
        if (p < 0.0) {
          sign = "-";
          p = -p;
        }

        let coeff = 1;
        for (let i in 0..after_dot) {
            coeff *= 10;
        }

        p *= coeff as float;
        let int_p = (p + 0.5) as int;

        let after_string = String::from_int(int_p % coeff);
        for (let i in after_string.length()..after_dot) {
            after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
    
    function getRandomFloat(num: int, digit: int) -> float {
        let t = 10;
        for(let i in 0..digit-1){
            t *= 10;
        }

        return (Main::getRandomIntInRange(0, num * t) as float / t as float) as float;
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function getCube(sq: List<int>) -> Canvas {
        let pow = 2
        let canvas = Canvas::create(1200/pow, 1200/pow, Color::rgb(255, 255, 255));
        
        for (let i in 1..12) {
            Canvas::text(canvas, 100*i/pow, 30/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 100*i/pow, 40/pow, 100*i/pow, 1200/pow, Color::rgb(0, 0, 0), 2);
            
            Canvas::text(canvas, 15/pow, 100*i/pow, String::from_int(i-1), 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            Canvas::line(canvas, 40/pow, 100*i/pow, 1200/pow, 100*i/pow, Color::rgb(0, 0, 0), 2);
        }
        
        Canvas::fillRect(canvas, 100/pow, 100/pow, sq[0]*100/pow, sq[1]*100/pow, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 0)
        
        return canvas
    }
}
*/