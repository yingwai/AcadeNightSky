//?Создайте генератор паззлов, который генерирует скачивание определенной игры, генератор выводит память, которую занимает игра на компьютере и скорость интернета. Генератор будет просить посчитать время, за которое скачается игра.


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
        let gameSize = Main::getRandomIntInRange(1000, 10000);
        let internetSpeed = Main::getRandomIntInRange(10, 100); 

        let gameSizeInBits = gameSize * 8 * 1024 * 1024;
        let internetSpeedInBits = internetSpeed * 1024 * 1024;
        let correctTime = Main::round(gameSizeInBits as float / internetSpeedInBits as float, 2);
    
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "время, за которое скачается игра",
            "время, необходимое для загрузки игры",
            "период, за который игра будет скачана",
            "длительность процесса скачивания игры",
            "время, которое потребуется, чтобы скачать игру",
            "период времени, за который игра загрузится",
            "время завершения скачивания игры",
            "длительность, необходимая для загрузки игры",
            "время, за которое завершится процесс скачивания игры",
            "время ожидания до завершения загрузки игры",
            "время, которое занимает скачивание игры"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " память, которую занимает игра на компьютере " + String::from_int(gameSize) + "Мб и скорость интернета " + String::from_int(internetSpeed) + "Мбит/с."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана память, которую занимает игра на компьютере " + String::from_int(gameSize) + "Мб и скорость интернета " + String::from_int(internetSpeed) + "Мбит/с."
                + "Требуется определить " + conditions + ".";
        }

        let desc = sc + " Ответ округлить до сотых."
            + "\n Пример вывода, следующий: \"1213.76\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала переведём размер игры в биты: " + String::from_int(gameSize) + " * 8 * 1024 * 1024 = " + String::from_int(gameSizeInBits)
            + "\nПереведём скорость игры в бит/с: " + String::from_int(internetSpeed) + " * 1024 * 1024 = " + String::from_int(internetSpeedInBits)
            + "\nНайдём время которое будет скачиваться игра: " + String::from_int(gameSizeInBits) + "/" + String::from_int(internetSpeedInBits) + " = " + correctTime + "c.";

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: correctTime
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
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
}
*/