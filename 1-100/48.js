/*
?Создайте генератор паззлов, которой генерирует два числа, одно из которых является целым набором каких-то объектов (бОльшее число), а второе - часть этого набора (объекты с общим свойством). Требуется определить количество оставшихся объектов, если известно, что сумма количеств данных объектов равна количеству объектов в целом наборе. К примеру (не используйте его) в копилке 8 монет, 3 из которых двухрублёвые, определить, сколько других монет. Ответ 5.

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
        let n: List<int> = [Main::getRandomIntInRange(10, 100)];
        n.push(Main::getRandomIntInRange(1, n[0]));
        let ans = n[0] - n[1];
        let list = [
            "В копилке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["монета", "монеты", "монет"]) + ", " + String::from_int(n[1]) + " из которых двухрублёвые, определить. Сколько других монет?",
            "В коробке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["карандаш", "карандаша", "карандашей"]) + ", " + String::from_int(n[1]) + " из которых синие. Сколько карандашей другого цвета?",
            "В саду " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["дерево", "дерева", "деревьев"]) + ", " + String::from_int(n[1]) + " из них – яблони. Сколько других деревьев в саду?",
            "На полке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["книга", "книги", "книг"]) + ", " + String::from_int(n[1]) + " из которых – романы. Сколько книг других жанров?",
            "В аквариуме " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["рыба", "рыбы", "рыб"]) + ", " + String::from_int(n[1]) + " из которых – золотые. Сколько остальных рыб?",
            "В классе " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["ученик", "ученика", "учеников"]) + ", " + String::from_int(n[1]) + " из которых – девочки. Сколько мальчиков в классе?",
            "В парке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["скамейка", "скамекий", "скамеек"]) + ", " + String::from_int(n[1]) + " из которых деревянные. Сколько других скамеек?",
            "В зоопарке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["животное", "животных", "животных"]) + ", " + String::from_int(n[1]) + " из которых – слоны. Сколько других животных в зоопарке?",
            "В корзине " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["яблоко", "яблока", "яблок"]) + ", " + String::from_int(n[1]) + " из которых зелёные. Сколько остальных яблок?",
            "В шкафу " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["футболка", "футболки", "футболок"]) + ", " + String::from_int(n[1]) + " из которых красные. Сколько футболок других цветов?",
            "В гараже " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["автомобиль", "автомобиля", "автомобилей"]) + ", " + String::from_int(n[1]) + " из которых – грузовые. Сколько остальных автомобилей?",
            "В коробке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["маркер", "маркера", "маркеров"]) + ", " + String::from_int(n[1]) + " из которых с тонким наконечником. Сколько маркеров с другим наконечником?",
            "На витрине " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["игрушка", "игрушки", "игрушек"]) + ", " + String::from_int(n[1]) + " из которых мягкие. Сколько игрушек другого типа?",
            "В стаде " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["корова", "коровы", "коров"]) + ", " + String::from_int(n[1]) + " из которых чёрные. Сколько коров другого цвета?",
            "В саду " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["куст", "куста", "кустов"]) + ", " + String::from_int(n[1]) + " из которых – розы. Сколько других кустов?",
            "В библиотеке " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["книга", "книги", "книг"]) + ", " + String::from_int(n[1]) + " из которых – энциклопедии. Сколько других книг?"
        ][Main::getRandomIntInRange(0, 15)];
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " условие: " + list.split("Сколько")[0]
            + "\nЕё попросили " + whatDo + " сколько" + list.split("Сколько")[1];

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = list;
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"15\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Рассчитаем сколько" + list.split("Сколько")[1];
        expl = expl[0..expl.length()-1] + ": " + String::from_int(n[0]) + " - " + String::from_int(n[1]) + " = " + String::from_int(ans)
            + "\n Следовательно ответ: " + String::from_int(ans);

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
    
    function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/