/*
?Напишите генератор паззлов, в котором на входе будет показана последовательность из взрослых и детей с указанием из возраста, а на выходе необходимо записать в ответ возраст N-ого ребенка/взрослого с конца/с начала очереди.

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
import community::near::spensa2::plural::PluralRu;

class People {
    public name: String,
    public age: int
}

class Main {
    function gen_puzzle() -> Puzzle {
        let names = [
            "Александр", "Анастасия", "Дмитрий", "Екатерина", "Михаил", "Ольга", "Сергей", "Мария", "Андрей", "Наталья", "Иван", "Татьяна", "Владимир", "Елена", "Николай", "Юлия", "Павел", "Светлана", "Борис", "Людмила", "Инна", "Аня", "Алина", "Оля", "Катя", "Полина", "Арина", "Вера", "Надя", "Соня", "Бьянка", "Василиса", "Ванесса", "Вероника", "Жанна"
        ];
        let people: List<People> = [];
        for (let i in 0..Main::getRandomIntInRange(5, 15)) {
            people.push(new People {name: names[Main::getRandomIntInRange(0, names.length()-1)], age: Main::getRandomIntInRange(1, 100)})
        }
        
        let index = Main::getRandomIntInRange(0, people.length()/2-1);
        let end = Main::getRandomIntInRange(0, 1) == 1;
        let baby = Main::getRandomIntInRange(0, 1) == 1;
        
        let ans = "Такого " + if(baby) {"ребёнка"} else {"взрослого"} + " нет.";
        
        let current = 0;
        if (!end) {
            for (let i in 0..people.length()) {
                if ((baby && people[i].age <= 17) || (!baby && people[i].age >= 18)) {
                    current += 1;
                }
                if (current == index + 1) {
                    ans = String::from_int(people[i].age);
                    break;
                }
            }
        } else {
            let startIndex = people.length() - 1;
            for (let i in 0..people.length()) {
                let reverseIndex = startIndex - i;
                if ((baby && people[reverseIndex].age <= 17) || (!baby && people[reverseIndex].age >= 18)) {
                    current += 1;
                }
                if (current == index + 1) {
                    ans = String::from_int(people[reverseIndex].age);
                    break;
                }
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "записать в ответ возраст",
            "указать возраст в ответе",
            "записать ответ в виде возраста",
            "представить в ответе возраст",
            "внести возраст в ответ"
        ][Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " последовательность из взрослых и детей с указанием из возраста: ";
        for (let p in people) {
            sc += p.name + " " + PluralRu::pluralify(p.age, "год", "года", "лет") + ", ";
        }
        sc = sc[0..sc.length()-2] + ". \nЕё попросили " + conditions + " " + String::from_int(index+1) + "-го " + if(baby) {"ребёнка"} else {"взрослого"} + " с " + if (!end) {"начала"} else {"конца"} + " очереди.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана последовательность из взрослых и детей с указанием из возраста: ";
            for (let p in people) {
                sc += p.name + " " + PluralRu::pluralify(p.age, "год", "года", "лет") + ", ";
            }
            sc = sc[0..sc.length()-2] + ". \nТребуется " + conditions + " " + String::from_int(index+1) + "-го " + if(baby) {"ребёнка"} else {"взрослого"} + " с " + if (!end) {"начала"} else {"конца"} + " очереди.";
        }

        let desc = sc + " Если известно, что с 18 лет человек считается взрослым. Если такого " + if(baby) {"ребёнка"} else {"взрослого"} + " нет, так и указать в ответе: \"Такого " + if(baby) {"ребёнка"} else {"взрослого"} + " нет.\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассмотрим всех людей из списка: \n";
        for (let p in people) {
            expl += p.name + " " + PluralRu::pluralify(p.age, "год", "года", "лет") + " - " + if (p.age > 17) {"взрослый"} else {"ребёнок"} + "\n";
        }
        expl += "Следовательно, ответ: " + ans

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/