/*
?Создайте генератор, который на входе будет создавать прямую, на которой будет несколько интервалов. Ниже будут прописаны даты праздников. Нужно будет эти даны расположить на числовой прямой в нужный интервал. Допустим сгенерировалась прямая, на которой левая точка - 1 января, вторая точка 10 марта (это первый интервал), третья точка 4 августа (это уже получается второй интервал) и четвертая точка 31 декабря (это третий интервал). Всего получилось 3 интервала: 1 января - 10 марта; 10 марта - 4 августа; 4 августа - 31 декабря. Далее под этой прямой должны сгенерироваться праздничные даты по типу 8 марта, 14 февраля и тд. Мы должны расположить данные праздники в нужный интервал и сказать в каком интервале получилось больше всего праздников.

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

class Date {
    public day: int,
    public month: String
}

class Main {
    function gen_puzzle() -> Puzzle {
        let intervals = Main::getRandomIntInRange(2, 4);
        let intervals_win:List<int> = [];
        let days:List<int> = [];
        let dates:List<Date> = [];
        let holidays = Main::getRandomHolidays();
        let holidays_day: List<int> = [];
        
        let repeat = true;
        
        for (let i in 0..intervals) {
            intervals_win.push(0)
        }
        
        while (repeat) {
            days = [];
            for (let i in 0..intervals*2) {
                days.push(Main::getRandomDay());
            }
            days = ListSort::<int>::stable_sort(days);
            
            let isOk = true;
            
            for (let i in 1..days.length()) {
                if (days[i] == days[i - 1]) {
                    isOk = false;
                    break;
                }
            }
            
            for (let i in 0..days.length() - 1) {
                if (i % 2 == 0) {
                    if (days[i + 1] - days[i] < 10) {
                        isOk = false;
                        break;
                    }
                } else {
                    if (days[i + 1] - days[i] < 15) {
                        isOk = false;
                        break;
                    }
                }
            }
            
            if (isOk) {
                repeat = false;
            }
        }
        
        for (let i in 0..days.length()) {
            dates.push(Main::dayOfYearToDate(days[i]));
        }
        
        for (let i in 0..holidays.length()) {
            let d = String::to_int(holidays[i].split("(")[1].split(" ")[0]);
            let m = holidays[i].split("(")[1].split(" ")[1].split(")")[0]
            holidays_day.push(Main::dayOfYear(d, m))
        }
        
        for (let i in 0..holidays_day.length()) {
            if (holidays_day[i] >= days[0] && holidays_day[i] <= days[1]) {
                intervals_win[0] = intervals_win[0] + 1;
            }
            
            if (holidays_day[i] >= days[2] && holidays_day[i] <= days[3]) {
                intervals_win[1] = intervals_win[1] + 1;
            }
            
            if (intervals == 3) {
                if (holidays_day[i] >= days[4] && holidays_day[i] <= days[5]) {
                    intervals_win[2] = intervals_win[2] + 1;
                }
            }
            
            
            if (intervals == 4) {
                if (holidays_day[i] >= days[4] && holidays_day[i] <= days[5]) {
                    intervals_win[2] = intervals_win[2] + 1;
                }
            
                if (holidays_day[i] >= days[6] && holidays_day[i] <= days[7]) {
                    intervals_win[3] = intervals_win[3] + 1;
                }
            }
        }
        
        let gap = Main::getGap(dates, days);
        let ans = Main::findMaxIndices(intervals_win);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "какие праздники находятся в интервале и сказать в каком интервале получилось больше всего праздников.",
            "какие праздники попадают в интервал и в каком из интервалов больше всего праздников.",
            "какие праздники находятся в интервале и в каком интервале их больше всего.",
            "праздники в временном интервале и указать, в каком из интервалов праздников больше всего.",
            "какие праздники выпадают на интервал и в каком из интервалов их больше всего.",
            "какие праздники находятся в интервале и в каком интервале наибольшее количество праздников."
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " прямая, а на ней несколько интервалов с датами. "
            + "Так же снизу есть список праздников: \n<img canvas>\n\n";
        for (let i in 0..holidays.length()) {
            sc += holidays[i] + "\n"
        }
        sc += "\nЕё попросили " + whatDo 
            + " " + conditions
            + " Если же таких несколько, указать их через запятую, если ни в одном интервале нет праздников, то ответ будет 0.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана прямая, а на ней несколько интервалов с датами. "
                + "Так же снизу дан список праздников: \n<img canvas>\n\n";
            for (let i in 0..holidays.length()) {
                sc += holidays[i] + "\n"
            }
            sc += "\nТребуется определить " + conditions
                + " Если же таких несколько, указать их через запятую, если ни в одном интервале нет праздников, то ответ будет 0.";;
        }

        let desc = sc 
            + "\n Пример вывода №1, следующий: 4"
            + "\n Пример вывода №2, следующий: 0"
            + "\n Пример вывода №3, следующий: 1, 4"
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Будем проверять каждую дату по очереди, входит ли она в определённый интервал или нет: \n";
        for (let i in 0..holidays.length()) {
            expl += holidays[i] + " - ";
            let str = "не входит ни в один интервал\n";
            
            if (holidays_day[i] >= days[0] && holidays_day[i] <= days[1]) {
                str = "входит в первый интервал т.к. находится между " 
                    + String::from_int(dates[0].day) + " " + dates[0].month
                    + " и "
                    + String::from_int(dates[1].day) + " " + dates[1].month
                    + "\n";
            }
            
            else if (holidays_day[i] >= days[2] && holidays_day[i] <= days[3]) {
                str = "входит во второй интервал т.к. находится между " 
                    + String::from_int(dates[2].day) + " " + dates[2].month
                    + " и "
                    + String::from_int(dates[3].day) + " " + dates[3].month
                    + "\n";
            }
            
            if (intervals == 3) {
                if (holidays_day[i] >= days[4] && holidays_day[i] <= days[5]) {
                    str = "входит в третий интервал т.к. находится между " 
                        + String::from_int(dates[4].day) + " " + dates[4].month
                        + " и "
                        + String::from_int(dates[5].day) + " " + dates[5].month
                        + "\n";
                }
            }
            
            
            if (intervals == 4) {
                if (holidays_day[i] >= days[4] && holidays_day[i] <= days[5]) {
                    str = "входит в третий интервал т.к. находится между " 
                        + String::from_int(dates[4].day) + " " + dates[4].month
                        + " и "
                        + String::from_int(dates[5].day) + " " + dates[5].month
                        + "\n";
                }
            
                if (holidays_day[i] >= days[6] && holidays_day[i] <= days[7]) {
                    str = "входит в четвёртый интервал т.к. находится между " 
                        + String::from_int(dates[6].day) + " " + dates[6].month
                        + " и "
                        + String::from_int(dates[7].day) + " " + dates[7].month
                        + "\n";
                }
            }
            
            expl += str
        }
        
        expl += "\n Считаем сколько праздников входит в каждый из интервалов, и получаем: ";
        for (let i in 0..intervals_win.length()) {
            expl += String::from_int(intervals_win[i]) + " "
        }
        expl += "\n Получается что ответ: " + ans;
        
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [
                new PuzzleImage {
                    name: "canvas",
                    image: gap
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
    
    function findMaxIndices(arr: List<int>) -> String {
        let maxVal = arr[0];
        let indices: List<String> = [];

        for (let i in 1..arr.length()) {
            if (arr[i] > maxVal) {
              maxVal = arr[i];
            }
        }

        for (let i in 0..arr.length()) {
            if (arr[i] == maxVal) {
              indices.push(String::from_int(i + 1));
            }
        }
        
        if (maxVal == 0) {
            return "0"
        }

        if (indices.length() == 1) {
            return indices[0];
        }
        
        return String::join(indices, ", ");
    }
    
    function getGap(date: List<Date>, day: List<int>) -> Canvas {
        let len = 365;
        let margin = 80;
        let canvas = Canvas::create(len + margin + 50, 150, Color::rgb(255, 255, 255));
        
        Canvas::line(canvas, margin + 1, 75, len + margin + 10, 75, Color::rgb(244, 164, 96), 2);
        Canvas::line(canvas, len + margin, 70, len + margin + 10, 75, Color::rgb(244, 164, 96), 2);
        Canvas::line(canvas, len + margin, 80, len + margin + 10, 75, Color::rgb(244, 164, 96), 2);
        
        for (let i in 0..date.length()) {   
            Canvas::fillEllipse(canvas, day[i] + margin, 71, 7, 7, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 1);
            
            if (i % 2 == 0) {
                Canvas::text(canvas, day[i] + margin, 90, String::from_int(date[i].day), 12, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
                Canvas::text(canvas, day[i] + margin, 100, String::join(date[i].month.split("")[0..4], ""), 12, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            }
            else {
                Canvas::text(canvas, day[i] + margin, 55, String::from_int(date[i].day), 12, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
                Canvas::text(canvas, day[i] + margin, 65, String::join(date[i].month.split("")[0..4], ""), 12, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            }
            
            if (i % 2 != 0) {
                Canvas::line(canvas, day[i - 1] + margin, 75, day[i] + margin, 75, Color::rgb(0, 0, 0), 2);
            }
        }
            
        return canvas
    }
    
    function getRandomDay() -> int {
        return Main::getRandomIntInRange(1, 365);
    }
    
    function getRandomHolidays() -> List<String> {
        let holidaysByMonth = [
            "Новый год (1 января)",
            "Рождество Христово (7 января)",
            "Старый Новый год (14 января)",
            "Крещение Господне (19 января)",
            "Татьянин день (25 января)",
            "День святого Валентина (14 февраля)",
            "День защитника Отечества (23 февраля)",
            "Международный день родного языка (21 февраля)",
            "День февральской революции (27 февраля)",
            "Международный женский день (8 марта)",
            "День святого Патрика (17 марта)",
            "День весеннего равноденствия (20 марта)",
            "Первое апреля (1 апреля)",
            "День космонавтики (12 апреля)",
            "Праздник труда (1 мая)",
            "День Победы (9 мая)",
            "Международный день семьи (15 мая)",
            "День славянской письменности и культуры (24 мая)",
            "День защиты детей (31 мая)",
            "Международный день друзей (9 июня)",
            "День России (12 июня)",
            "Международный день йоги (21 июня)",
            "День летнего солнцестояния (21 июня)",
            "День семьи, любви и верности (8 июля)",
            "Ивана Купала (7 июля)",
            "День фотографа (12 июля)",
            "Медовый Спас (14 августа)",
            "Яблочный Спас (19 августа)",
            "День российского флага (22 августа)",
            "День знаний (1 сентября)",
            "День интернета в России (30 сентября)",
            "Международный день музыки (1 октября)",
            "День учителя (5 октября)",
            "День животного (4 октября)",
            "День народного единства (4 ноября)",
            "Международный день мужчин (19 ноября)",
            "День учителя (5 ноября)",
            "День авиации (7 ноября)",
            "День Конституции (12 декабря)",
            "Рождество Христово (25 декабря)",
            "День энергетика (22 декабря)",
            "Новый год (31 декабря)",
            "День святого Николая (19 декабря)"
        ];         
        
        if (Main::getRandomIntInRange(0, 1) == 1) {
            holidaysByMonth = ListSort::<String>::stable_sort(holidaysByMonth)
        }
        
        let new_arr = Main::shuffleArray(holidaysByMonth);
        
        return new_arr[0..Main::getRandomIntInRange(2, 42)];
    }
    
    function dayOfYear(day: int, month: String) -> int {
        let months = [
            new Date {
                day: 31,
                month: "января",  
            },
            new Date {
                day: 28,
                month: "февраля",  
            },
            new Date {
                day: 31,
                month: "марта",  
            },
            new Date {
                day: 30,
                month: "апреля",  
            },
            new Date {
                day: 31,
                month: "мая",  
            },
            new Date {
                day: 30,
                month: "июня",  
            },
            new Date {
                day: 31,
                month: "июля",  
            },
            new Date {
                day: 31,
                month: "августа",  
            },
            new Date {
                day: 30,
                month: "сентября",  
            },
            new Date {
                day: 31,
                month: "октября",  
            },
            new Date {
                day: 30,
                month: "ноября",  
            },
            new Date {
                day: 31,
                month: "декабря",  
            }
        ];

        let dayOfYear = 0;

        for (let m in 0..months.length()) {
            if (months[m].month == month) {
                dayOfYear += day;
                break;
            }
            dayOfYear += months[m].day;
        }

        return dayOfYear;
    }
    
    function dayOfYearToDate(dayOfYear: int) -> Date {
        let months = [
            new Date {
                day: 31,
                month: "января",  
            },
            new Date {
                day: 28,
                month: "февраля",  
            },
            new Date {
                day: 31,
                month: "марта",  
            },
            new Date {
                day: 30,
                month: "апреля",  
            },
            new Date {
                day: 31,
                month: "мая",  
            },
            new Date {
                day: 30,
                month: "июня",  
            },
            new Date {
                day: 31,
                month: "июля",  
            },
            new Date {
                day: 31,
                month: "августа",  
            },
            new Date {
                day: 30,
                month: "сентября",  
            },
            new Date {
                day: 31,
                month: "октября",  
            },
            new Date {
                day: 30,
                month: "ноября",  
            },
            new Date {
                day: 31,
                month: "декабря",  
            }
        ];

        let currentDay = dayOfYear;

        for (let i in 0..months.length()) {
            if (currentDay <= months[i].day) {
                return new Date {
                    day: currentDay,
                    month: months[i].month
                }
            }
            currentDay -= months[i].day;
        }

        return new Date{day: -1, month: ""};
    }
    
    function shuffleArray(array: List<String>) -> List<String> {
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