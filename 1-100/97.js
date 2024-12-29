/*
?Сделайте генератор паззлов, который на входе показывает буквы, связанные линией. Таких связей должно быть несколько (связанных поочередно букв). В одной из связей должно быть слово. Сделайте ответ текстом (слово, которое получилось в одной из связей).

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
        let word = [
            "дом", "мир", "кот", "солнце", "окно", "машина", "человек", "река", "лес", "звезда",
            "любовь", "друг", "цветок", "дождь", "гора", "снег", "берег", "луна", "утро", "вечер",
            "море", "жизнь", "весна", "осень", "лето", "зима", "рыба", "небо", "птица", "город",
            "яблоко", "вода", "свет", "стол", "часы", "дерево", "трава", "ветер", "облако", "книга",
            "стул", "ручка", "картина", "парк", "песня", "музыка", "сон", "мама", "папа", "брат",
            "сестра", "школа", "учитель", "друг", "работа", "еда", "магазин", "улица", "день", "ночь",
            "вопрос", "ответ", "цель", "мечта", "путь", "слово", "язык", "мост", "камень", "замок",
            "веселый", "сильный", "красивый", "умный", "добрый", "смелый", "вкусный", "тихий", "быстрый", "интересный",
            "новый", "старый", "большой", "маленький", "чистый", "громкий", "высокий", "низкий", "холодный", "теплый",
            "горячий", "сладкий", "острый", "богатый", "бедный", "дорогой", "дешевый", "легкий", "тяжелый", "светлый",
            "темный", "жаркий", "скучный", "спокойный", "медленный", "грустный", "радостный", "уютный", "крепкий", "пустой",
            "полный", "узкий", "широкий", "гладкий", "шероховатый", "жесткий", "мягкий", "сухой", "мокрый", "глубокий",
            "мелкий", "плохой", "хороший", "голубой", "желтый", "зеленый", "красный", "синий", "черный", "белый",
            "коричневый", "серый", "фиолетовый", "розовый", "оранжевый", "алый", "золотой", "серебряный", "простой", "сложный",
            "длинный", "короткий", "ровный", "кривой", "чужой", "свой", "старший", "младший", "главный", "обычный",
            "редкий", "честный", "справедливый", "жадный", "щедрый", "скромный", "гордый", "злой", "ленивый", "работящий",
            "смелость", "глупость", "лень", "жадность", "щедрость", "скромность", "гордость", "злость", "радость", "грусть",
            "честность", "справедливость", "любовь", "дружба", "семья", "детство", "юность", "взрослость", "старость", "мудрость",
            "счастье", "печаль", "здоровье", "болезнь", "богатство", "бедность", "добро", "зло", "сила", "слабость",
            "храбрость", "трусость", "долг", "честь", "успех", "провал", "память", "знание", "опыт", "мысль",
            "вера", "надежда", "истина", "ложь", "воля", "судьба", "время", "пространство", "наука", "искусство",
            "творчество", "мастерство", "труд", "отдых", "игра", "спорт", "учеба", "работа", "праздник", "традиция"
        ][Main::getRandomIntInRange(0, 220)];
        
        let canva: List<PuzzleImage> = [];
        
        for (let n in 0..Main::getRandomIntInRange(2, 6)) {
            let canvas = Canvas::create(2500, 30, Color::rgb(255, 255, 255));
            
            let len = Main::getRandomIntInRange(5, 9)
            for (let i in 1..len) {
                Canvas::text(canvas, 0 + 30 * (i-1), 25, "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("")[Main::getRandomIntInRange(1, 33)], 18, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
            }
            
            Canvas::line(canvas, 0, 20, 0 + 30 * (len-1) - 10, 20, Color::rgb(0, 0, 0), 1);
            
            canva.push(
                new PuzzleImage {
                    name: "c_" + String::from_int(n),
                    image: canvas
                }
            )
        }
        
        let canvas = Canvas::create(2500, 30, Color::rgb(255, 255, 255));
        for (let i in 1..word.split("").length()) {
            if (word.split("")[i] != "") {
                Canvas::text(canvas, 0 + 30 * (i-1), 25, word.split("")[i], 18, new TextAlignLeft{} as TextAlign, Color::rgb(0, 0, 0));
            }
        }
        Canvas::line(canvas, 0, 20, 0 + 30 * (word.split("").length()-1) - 10, 20, Color::rgb(0, 0, 0), 1);

        let ind = Main::getRandomIntInRange(0, canva.length()-1);
        canva[ind] = new PuzzleImage {
            name: "c_" + String::from_int(ind),
            image: canvas
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "слово, которое получилось в одной из связей",
            "слово, образованное в одной из связей",
            "слово, которое возникло в одном из соединений",
            "слово, получившееся в результате одной из связей",
            "слово, сформировавшееся в одной из связок",
            "слово, созданное в рамках одной из связей"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " буквы, связанные линией: \n";
        for (let n in 0..canva.length()) {
            sc += "<img c_" + String::from_int(n) + ">\n"
        }
        sc += "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны буквы, связанные линией: \n";
            for (let n in 0..canva.length()) {
                sc += "<img c_" + String::from_int(n) + ">\n"
            } 
            sc += "\nТребуется определить " + conditions + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"брат\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Найдём какое слово образуется: \n";
        for (let n in 0..ind+1) {
            if (n == ind) {
                expl += String::from_int(n+1) + " связь образует слово " + word + "\n";
                break;
            }
            expl += String::from_int(n+1) + " связь слово не образует\n";
        }
        expl += "\n Следовательно ответ: " + word;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: word
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/