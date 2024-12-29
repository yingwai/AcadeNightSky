/*
?Сделайте генератор пазлов, который генерирует пиксельные изображение, а человек должен посчитать количество пикселей какого цвета в данном изображении больше всего.

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

class MyColor {
    public name: String,
    public color: Color
}
class Main {
    function gen_puzzle() -> Puzzle {
        let all_colors = [
            new MyColor {name: "чёрный", color: Color::rgb(0, 0, 0)},
            new MyColor {name: "белый", color: Color::rgb(255, 255, 255)},
            new MyColor {name: "красный", color: Color::rgb(255, 0, 0)},
            new MyColor {name: "зелёный", color: Color::rgb(0, 255, 0)},
            new MyColor {name: "синий", color: Color::rgb(0, 0, 255)},
            new MyColor {name: "жёлтый", color: Color::rgb(255, 255, 0)},
            new MyColor {name: "голубой", color: Color::rgb(0, 255, 255)},
            new MyColor {name: "пурпурный", color: Color::rgb(255, 0, 255)},
            new MyColor {name: "оранжевый", color: Color::rgb(255, 165, 0)},
            new MyColor {name: "фиолетовый", color: Color::rgb(128, 0, 128)},
            new MyColor {name: "серый", color: Color::rgb(128, 128, 128)}
        ];
        
        let colors: List<MyColor> = [];
        
        for (let i in 1..101) {
            colors.push(all_colors[Main::getRandomIntInRange(0, 10)])    
        }
        
        let canvas = Main::getImg(colors);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "количество пикселей какого цвета в данном изображении больше всего",
            "какого цвета пикселей больше всего в данном изображении",
            "какого цвета пикселей наибольшее количество в изображении",
            "какого цвета пикселей в этом изображении содержится больше всего",
            "какой цвет имеет наибольшее количество пикселей в данном изображении",
            "какого цвета пикселей больше всего в этом изображении"
        ][Main::getRandomIntInRange(0, 5)];
        
        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " пиксельное изображение:\n<img canvas>\n"
            + "\nЕё попросили " + whatDo + " " + conditions + ". Если есть одинаковое количество цветов, в ответ записывает тот, что первее идёт в алфавитном порядке.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано пиксельное изображение:\n<img canvas>\n"
                + "Требуется определить " + conditions + ". Если есть одинаковое количество цветов, в ответ записывает тот, что первее идёт в алфавитном порядке.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"красный\""
            + "\n<reveal ans>Ответ</reveal>";

        let count_color = Main::mostFrequentColor(colors);
        let expl = "";
        for (let i in 0..count_color.length()) {
            expl += count_color[i][0] + " - " + String::from_int(count_color[i].length()) + "\n"
        }
        
        let max = Main::maxInt(count_color);
        let ans = count_color[max][0];
        
        expl += "\n Следовательно ответ: " + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: canvas
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
    
    function mostFrequentColor(colors: List<MyColor>) -> List<List<String> > {
        let name_color: List<String> = [];
        
        for (let c in colors) {
            name_color.push(c.name);
        }
        
        name_color = ListSort::<String>::stable_sort(name_color);
        
        let arr_colors: List<List<String> > = [];
        let currentGroup = [name_color[0]];
        
        for (let i in 1..name_color.length()) {
            if (name_color[i] == name_color[i - 1]) {
                currentGroup.push(name_color[i]);
            } else {
                arr_colors.push(currentGroup);
                currentGroup = [name_color[i]];
            }
        }
        
        return arr_colors;
    } 
    
    function maxInt(arr: List<List<String> >) -> int {
        let max = arr[0].length();
        let index = 0;

        for (let i in 1..arr.length()) {
            if (arr[i].length() > max) {
                max = arr[i].length();
                index = i;
            }
        }

        return index;
    }
    
    function getImg(colors: List<MyColor>) -> Canvas {
        let canvas = Canvas::create(500, 500, Color::rgb(255, 255, 255));
        let x = 0;
        let y = 0;
        
        for (let i in 1..101) {            
            Canvas::fillRect(canvas, x, y, 50, 50, colors[i-1].color, colors[i-1].color, 0);
            
            x += 50;
            
            if (i % 10 == 0) {
                y += 50;
                x = 0;
            }
        }
        
        return canvas;
    }
    
    function shuffleArray(array: List<Color>) -> List<Color> {
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