/*
?Сделайте генератор пазлов, который генерирует дату в обычном представлении. Человек должен сократить данную дату насколько это возможно.

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

class Date {
    public day: int,
    public month: String,
    public year: int
}

class Main {
    function gen_puzzle() -> Puzzle {
        let date = Main::getDate();
        let dateString = String::from_int(date.day) + " " 
            + date.month + " "
            + String::from_int(date.year) + " год";
        let dateReduction = Main::shortenDate(dateString);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let conditions = [
            "Её попросили сократить данную дату до Ч.М.ГГ.",
            "Ей предложили сократить дату до формата Ч.М.ГГ.",
            "Её попросили отформатировать дату как Ч.М.ГГ.",
            "Её попросили записать дату в формате Ч.М.ГГ.",
            "Ей нужно было сократить данную дату до Ч.М.ГГ.",
            "Её попросили изменить формат даты на Ч.М.ГГ.",
            "Ей предложили представить дату в виде Ч.М.ГГ.",
            "Её попросили конвертировать дату в формат Ч.М.ГГ.",
            "Ей было предложено использовать формат Ч.М.ГГ для сокращения даты.",
            "Ей нужно было привести дату к формату Ч.М.ГГ.",
            "Её попросили оформить дату в сокращённом виде Ч.М.ГГ."
        ][Main::getRandomIntInRange(0, 10)];
        let conditions1 = [
            "сократить данную дату до Ч.М.ГГ.",
            "сократить дату до формата Ч.М.ГГ.",
            "отформатировать дату как Ч.М.ГГ.",
            "записать дату в формате Ч.М.ГГ.",
            "сократить данную дату до Ч.М.ГГ.",
            "изменить формат даты на Ч.М.ГГ.",
            "представить дату в виде Ч.М.ГГ.",
            "конвертировать дату в формат Ч.М.ГГ.",
            "использовать формат Ч.М.ГГ для сокращения даты.",
            "привести дату к формату Ч.М.ГГ.",
            "оформить дату в сокращённом виде Ч.М.ГГ."
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " дата: " + dateString
            + ".\n" + conditions;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана дата " + dateString 
                + ". Требуется " + conditions1 + "";
        }

        let desc = sc 
            + "\n Формат вывода, следующий: Ч.М.ГГ"
            + "\n Пример: 5.10.04"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы перевести дату в нужный формат, нужно вместо прописной даты, перевести в номер: \n"
            + date.month + " - " + dateReduction.split(".")[1]
            + "\nСледовательно ответ получается " + dateReduction;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: dateReduction
                } as Reveal
            ],
        }
    }
    
    function getDate() -> Date {
        let d = 0;
        let m = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let y: int = Main::getRandomIntInRange(2000, 2024);
        
        let n = Main::getRandomIntInRange(0, 11);
        
        if (n == 0 || n + 1 % 2 == 0) {
            d = Main::getRandomIntInRange(1, 31);
        }
        else if (n == 1) {
            d = Main::getRandomIntInRange(1, 28);
        }
        else {
            d = Main::getRandomIntInRange(1, 30);
        }
        
        return new Date {
            day: d,
            month: m[n],
            year: y
        }
    }
    
    function shortenDate(dateString: String) -> String {
        let d = dateString.split(" ")[0];
        let m = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let ms = "";
        let y = String::join(dateString.split(" ")[2].split("")[3..5], "");
        
        for (let i in 1..13) {
            if (m[i-1] == dateString.split(" ")[1]) {
                ms = String::from_int(i)
            }
        }

        return String::join([d, ms, y], ".");
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/