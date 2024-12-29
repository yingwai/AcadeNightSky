/*
?Создайте генератор паззлов, который будет генерировать количество яиц, которые несут определенное количество куриц за какое-то время и будет формировать математический пример и несколько условий на вводные данные, а затем просить указать условие, которое будет удовлетворять данному примеру.

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

class Main {
    function gen_puzzle() -> Puzzle {
        let A = Main::getRandomIntInRange(2, 10);
        let B = Main::getRandomIntInRange(1, 10);
        let C = Main::getRandomIntInRange(1, 10);
        
        let math = String::from_int(B) + " * " + String::from_int(A) + " * " + String::from_int(C);
        
        let index = Main::getRandomIntInRange(0, 10);
        let str = [
            "За 1 день одна курица приносит {B}, сколько яиц принесут {A} за {C}?",
            "За 1 день одна корова дает {B} молока, сколько литров молока дадут {A} за {C}?",
            "За 1 день одна овца приносит {B} шерсти, сколько килограмм шерсти принесут {A} за {C}?",
            "За 1 час один рабочий кладет {B}, сколько кирпичей могут положить {A} за {C}?",
            "За 1 месяц одна пчела производит {B} меда, сколько граммов меда произведут {A} за {C}?",
            "За 1 день одна машина проезжает {B}, сколько километров проедут {A} за {C}?",
            "За 1 год одно дерево дает {B}, сколько яблок дадут {A} за {C}?",
            "За 1 день один студент читает {B}, сколько страниц прочитают {A} за {C}?",
            "За 1 месяц одна семья тратит {B} электроэнергии, сколько киловатт электроэнергии потратят {A} за {C}?",
            "За 1 неделю один турист проходит {B}, сколько километров пройдут {A} за {C}?",
            "За 1 день один дизайнер создает {B}, сколько макетов создадут {A} за {C}?"
        ][index];
        
        let ans = Main::getRandomIntInRange(1, 4);
        let expl = "Сначала выясним какие примеры составляются из задач: \n";
        let con = "";
        for (let i in 0..4) {
            if (i+1 == ans) {
                let strCon = Main::getStrCon(index, A, B, C);
                
                con += String::from_int(i+1) + ". " + String::join(String::join(String::join(str.split("{B}"), strCon[0]).split("{A}"), strCon[1]).split("{C}"), strCon[2]) + "\n";
                expl += String::from_int(i+1) + ". " + String::from_int(B) + " * " + String::from_int(A) + " * " + String::from_int(C) + "\n";
            } else {
                let num1 = Main::getRandomIntInRange(2, 10);
                let num2 = Main::getRandomIntInRange(1, 10);
                let num3 = Main::getRandomIntInRange(1, 10);
                let strCon = Main::getStrCon(index, num1, num2, num3);
                
                con += String::from_int(i+1) + ". " + String::join(String::join(String::join(str.split("{B}"), strCon[0]).split("{A}"), strCon[1]).split("{C}"), strCon[2]) + "\n";                
                expl += String::from_int(i+1) + ". " + String::from_int(num2) + " * " + String::from_int(num1) + " * " + String::from_int(num3) + "\n";
            }
        }
            
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "которое будет удовлетворять данному примеру",
            "которое соответствует данному примеру",
            "подходящее для данного примера",
            "которое выполняется для этого примера",
            "которое удовлетворяет этому примеру",
            "подходящий для решения этого примера",
            "которое удовлетворяет данной задаче",
            "которое подходит под этот пример",
            "соответствующее приведённому примеру",
            "которому следует этот пример",
            "выполняемое в рамках этого примера"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " математический пример: " + math + " и несколько условий: \n" + con
            + "\nЕё попросили " + whatDo + " условие, " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан математический пример: " + math + " и несколько условий: \n" + con
                + "\nТребуется определить условие, " + conditions + ".";
        }

        let desc = sc + " В ответ записать номер нужного условия."
            + "\n<reveal ans>Ответ</reveal>";
        
        expl += "\n Т.к. номер " + String::from_int(ans)
            + " соответствует примеру, ответ будет: "
            + String::from_int(ans);

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
    
    function getStrCon(index: int, A: int, B: int, C: int) -> List<String> {
        let strCon = [
            [PluralRu::pluralify(B, "яйцо", "яйца", "яиц"), PluralRu::pluralify(A, "курица", "курицы", "куриц"), PluralRu::pluralify(C, "день", "дня", "дней")],
            [PluralRu::pluralify(B, "литр", "литра", "литров"), PluralRu::pluralify(A, "корова", "коровы", "коров"), PluralRu::pluralify(C, "день", "дня", "дней")],
            [PluralRu::pluralify(B, "килограмм", "килограмма", "килограммов"), PluralRu::pluralify(A, "овца", "овецы", "овец"), PluralRu::pluralify(C, "день", "дня", "дней")],
            [PluralRu::pluralify(B, "кирпич", "кирпича", "кирпичей"), PluralRu::pluralify(A, "рабочий", "рабочих", "рабочих"), PluralRu::pluralify(C, "час", "часа", "часов")],
            [PluralRu::pluralify(B, "грамм", "грамма", "граммов"), PluralRu::pluralify(A, "пчела", "пчелы", "пчел"), PluralRu::pluralify(C, "месяц", "месяца", "месяцев")],
            [PluralRu::pluralify(B, "километр", "километра", "километров"), PluralRu::pluralify(A, "машина", "машины", "машин"), PluralRu::pluralify(C, "день", "дня", "дней")],
            [PluralRu::pluralify(B, "яблоко", "яблока", "яблок"), PluralRu::pluralify(A, "дерево", "дерева", "деревьев"), PluralRu::pluralify(C, "год", "года", "лет")],
            [PluralRu::pluralify(B, "страницу", "страницы", "страниц"), PluralRu::pluralify(A, "студент", "студента", "студентов"), PluralRu::pluralify(C, "день", "дня", "дней")],
            [PluralRu::pluralify(B, "киловатт", "киловатта", "киловатт"), PluralRu::pluralify(A, "семья", "семьи", "семей"), PluralRu::pluralify(C, "месяц", "месяца", "месяцев")],
            [PluralRu::pluralify(B, "километр", "километра", "километров"), PluralRu::pluralify(A, "турист", "туриста", "туристов"), PluralRu::pluralify(C, "неделю", "недели", "недель")],
            [PluralRu::pluralify(B, "макет", "макета", "макетов"), PluralRu::pluralify(A, "дизайнер", "дизайнера", "дизайнеров"), PluralRu::pluralify(C, "день", "дня", "дней")]
        ][index];
        
        return strCon
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/