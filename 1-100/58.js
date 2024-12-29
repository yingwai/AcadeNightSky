/*
?Создайте генератор, в котором будет проситься умножить все объекты, обладающие каким то свойством. Например: умножьте красные машины на желтые и тд.

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
        let n: List<int> = [Main::getRandomIntInRange(1, 50), Main::getRandomIntInRange(1, 50)];
        let ans = n[0] * n[1];
        let list = [
            "В копилке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["рублёвая монета", "рублёвые монеты", "рублёвых монет"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[0], ["двухрублёвая", "двухрублёвые", "двухрублёвых"]) + ".",
            "В коробке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["красный карандаш", "красных карандаша", "красных карандашей"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["синий", "синих", "синих"]) + ".",
            "В саду есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["берёза", "берёзы", "берёз"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["яблоня", "яблони", "яблонь"]) + ".",
            "На полке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["художественная книга", "художественные книги", "художественных книг"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["роман", "романа", "романов"]) + ".",
            "В аквариуме есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["красная рыбка", "красные рыбки", "красных рыбок"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["золотая", "золотых", "золотых"]) + ".",
            "В классе есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["мальчик", "мальчика", "мальчиков"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["девочка", "девочки", "девочек"]) + ".",
            "В парке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["железная скамейка", "железные скамейки", "железных скамеек"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["деревянная", "деревянные", "деревянных"]) + ".",
            "В зоопарке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["жираф", "жирафа", "жирафов"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["слон", "слона", "слонов"]) + ".",
            "В корзине есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["красное яблоко", "красных яблока", "красных яблок"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["зелёное", "зелёных", "зелёных"]) + ".",
            "В шкафу есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["белая футболка", "белые футболки", "белых футболок"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["красная", "красные", "красных"]) + ".",
            "В гараже есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["легковой автомобиль", "легковых автомобиля", "легковых автомобилей"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["грузовой", "грузовых", "грузовых"]) + ".",
            "В коробке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["чёрный маркер", "чёрных маркера", "чёрных маркеров"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["серый", "серых", "серых"]) + ".",
            "На витрине есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["мягкая игрушка", "мягкие игрушки", "мягких игрушек"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["конструктор", "конструктора", "конструкторов"]) + ".",
            "В стаде есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["корова", "коровы", "коров"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["бык", "быка", "быков"]) + ".",
            "В саду есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["куст", "куста", "кустов"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["роза", "розы", "роз"]) + ".",
            "В библиотеке есть " + String::from_int(n[0]) + " " + Main::declOfNum(n[0], ["художественная книга", "художественные книги", "художественных книг"]) + " и " + String::from_int(n[1]) + " " + Main::declOfNum(n[1], ["энциклопедия", "энциклопедии", "энциклопедий"]) + "."
        ][Main::getRandomIntInRange(0, 15)];
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        //let conditions = [][Main::getRandomIntInRange(0, 0)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " условие: " + list
            + " Её попросили " + whatDo + " произведение одного количества на другое и записать в ответ.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = list + " Найдите произведение одного количества на другое и запишите в ответ.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"700\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём произведение одного количества на другое: " + String::from_int(n[0]) + " * " + String::from_int(n[1]) + " = " + String::from_int(ans)
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