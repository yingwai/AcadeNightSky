//
/*
?Сгененировать паззлы, где дается какой сейчас год и месяц и нужно определить какой будет год через k месяцев (k<100)
*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::puzzle::RevealImprecise;
import std::collections::List;
import std::math::Math;
import std::string::String;

class Date {
    public month: String,
    public month_index: int,
    public year: int
}

class Main {   
    // Функция для получения случайного числа в диапозоне
    public function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    // Функция для определения правильного окончания слова
    public function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    public function getDate() -> Date {
        let ms = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
        let y: int = Main::getRandomIntInRange(1800, 2024);
        
        let index = Main::getRandomIntInRange(0, 11);
        
        return new Date {
            month: ms[index],
            month_index: index + 1,
            year: y
        }
    }
    
    public function getRandomMonth() -> int {
        return Main::getRandomIntInRange(1, 99);
    }
    
    public function getYear(currentData: Date, k: int) -> int {
        let month = currentData.month_index;
        let year = currentData.year;
        
        for (let i in 0..k+1) {
            if (month >= 12) {
                month = 1;
                year += 1;
            } else {
                month += 1;
            }
        }
        
        return year;
    }
    
    function gen_puzzle() -> Puzzle {
        let date = Main::getDate();
        let k = Main::getRandomMonth();
        let answer = Main::getYear(date, k)
            
        let task="отмечена|показана|выставлена|указана|видна|обведена|зачёркнута|выделена".split("|")[Main::getRandomIntInRange(0, 7)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[Main::getRandomIntInRange(0, 3)];

        let sc="Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[Main::getRandomIntInRange(0, 14)] +
            " получила "+ wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 4)] +". "
             + "На листке " + task + " дата: " + date.month + " " + String::from_int(date.year) + " года. Её попросили " +whatDo+ " какой год будет через " + String::from_int(k) + " " + Main::declOfNum(k, ["месяц", "месяца", "месяцев"]) + "."
                 + "\n <reveal ans>Ответ</reveal>";
        if(Main::getRandomIntInRange(0, 1) == 1){sc="Требуется определить год через " + String::from_int(k) + " " + Main::declOfNum(k, ["месяц", "месяца", "месяцев"]) + ", при том что известено что сейчас " + date.month + " " + String::from_int(date.year) + " года." + "\n <reveal ans>Ответ</reveal>";}
        let desc = sc + "\n Формат вывода, следующий: число. \n Пример: 2024";

        let expl = "Получаем случайную дату \"" + 
            date.month + " " + String::from_int(date.year) + 
            "\". После получаем количество месяцев " + 
            String::from_int(k) + 
            ". \n Если сумма месяцев превышает количество месяцев в году, то меняем год на следующий и сбрасываем месяц на 1."
                + "\n Итого получаем " + String::from_int(answer);
        
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::from_int(answer)
                } as Reveal
            ]
        }
    }
}
*/
