/*
?Сделайте текстовый генератор логических задач, который на входе будет описывать какую либо техническую характеристику и давать варианты ответов. Требуется указать вариант ответа, в котором будет верно указан технический предмет, которой может обладать данной технической характеристикой. Например, герцовкой может обладать монитор, но никак не блендер. Пожалуйста, не используйте данный пример.

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

class Tech {
    public spec: String,
    public ans: String,
    public wrong: List<String>
}
class Main {
    function gen_puzzle() -> Puzzle {
        let con = [
            new Tech {
                spec: "объем памяти",
                ans: "смартфон",
                wrong: ["шкаф", "кружка", "дверь"]
            },
            new Tech {
                spec: "микроволновое излучение",
                ans: "микроволновка",
                wrong: ["подставка", "тумбочка", "зеркало"]
            },
            new Tech {
                spec: "разрешение экрана",
                ans: "телевизор",
                wrong: ["барный стул", "гриф", "книга"]
            },
            new Tech {
                spec: "время работы от аккумулятора",
                ans: "ноутбук",
                wrong: ["конверт", "проводные наушники", "портфель"]
            },
            new Tech {
                spec: "скорость вращения",
                ans: "дрель",
                wrong: ["подставка", "чехол", "деньги"]
            },
            new Tech {
                spec: "частота процессора",
                ans: "компьютер",
                wrong: ["стол", "картридж", "пачка"]
            },
            new Tech {
                spec: "емкость аккумулятора",
                ans: "смартфон",
                wrong: ["бумажная книга", "флешка", "одежда"]
            },
            new Tech {
                spec: "объем бака для воды",
                ans: "стиральная машина",
                wrong: ["стол", "книга", "очки"]
            },
            new Tech {
                spec: "количество скоростей",
                ans: "миксер",
                wrong: ["флешка", "проводные наушники", "стол"]
            },
            new Tech {
                spec: "герцовка",
                ans: "монитор",
                wrong: ["свитр", "пластик", "упаковка"]
            },
            new Tech {
                spec: "максимальная дальность действия",
                ans: "дрон",
                wrong: ["кровать", "барный стул", "флешка"]
            },
            new Tech {
                spec: "количество ядер процессора",
                ans: "ноутбук",
                wrong: ["гриф", "папка", "подставка"]
            },
            new Tech {
                spec: "большой уровень шума",
                ans: "пылесос",
                wrong: ["шкаф", "флешка", "чехол"]
            },
            new Tech {
                spec: "температура нагрева",
                ans: "утюг",
                wrong: ["стул", "гриф", "цветочный горшок"]
            },
            new Tech {
                spec: "количество каналов звука",
                ans: "домашний кинотеатр",
                wrong: ["стол", "кровать", "папка"]
            }
        ][Main::getRandomIntInRange(0, 14)];
        
        let arr = con.wrong;
        arr.push(con.ans);
        for (let i in 0..15) {
            community::near::dtalalaev::shuffleStringArray::Main::shuffle(arr);
        }
        
        let ans = 0;
        let list = "";
        for (let i in 0..arr.length()) {
            list += String::from_int(i+1) + ". " + arr[i] + "\n";
            if (arr[i] == con.ans) {ans = i+1}
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "указать номер варианта ответа, в котором будет верно указан технический предмет, который может обладать данной технической характеристикой",
            "указать номер ответа с техническим предметом, обладающим данной характеристикой",
            "выбрать номер варианта, где указан предмет с заданной технической характеристикой",
            "найти вариант ответа с предметом, соответствующим данной характеристике",
            "определить номер ответа с техническим предметом, который обладает заданной характеристикой",
            "записать номер варианта с предметом, подходящим под указанную характеристику",
            "указать правильный номер ответа с техническим предметом для данной характеристики",
            "выбрать ответ, где предмет соответствует заданной технической характеристике",
            "найти номер ответа предмета, который удовлетворяет указанной характеристике",
            "записать вариант ответа с предметом, имеющим данную характеристику",
            "определить правильный номер варианта с техническим предметом для указанной характеристики"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " техническая характеристика: " + con.spec + ". "
            + "\nЕё попросили " + conditions + ": \n" + list;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана техническая характеристика: " + con.spec + ". "
                + "\nТребуется " + conditions + ": \n" + list;
        }

        let desc = sc + " В ответ записать номер варианта ответа. "
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим все представленные варианты ответа: \n" + list + "\n Из представленных предметов, нужной нам характеристикой: " + con.spec + ", обладает " + con.ans + ", следовательно ответ: " + String::from_int(ans);

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

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/