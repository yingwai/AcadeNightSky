/*
?Создайте генератор паззлов, который на входе показывает слово, а на выходе просит посчитать количество букв в этом слове, и указать ответ в римском представлении.

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
        let word = [
            "абажур", "абажуры", "абаз", "абак", "абака", "аббат", "аббатство", "аббревиатура",
            "выпуск", "выручка", "выставка", "выход", "гадание", "гаджет", "газета", "галерея", 
            "гармония", "гарантия", "гарнизон", "гастрономия", "география", "герой", "гимнастика", 
            "гипотеза", "главарь", "глобус", "гном", "гобелен", "государство", "гравировка", 
            "грамматика", "гранат", "грация", "авиаматка", "гроздь", "грузовик", "губернатор", "гудок", 
            "абвер", "абзац", "абонемент", "абонент", "абордаж", "аквалангистка", "аборт", "абракадабра",
            "адиабата", "абсолют", "абстракция", "абсцесс", "абсурд", "авангард", "аванс", "аванпост",
            "авантюра", "авантюризм", "аккомпаниаторша", "август", "авиабаза", "авиабилет", "авиапочта", 
            "авиарейс", "авиастроение", "автобус", "амальгама", "автодорога", "автомат", "автоматика", 
            "автомобилист", "автономия", "автор", "авторадио", "авторитет", "автотранспорт", 
            "агава", "агент", "агитация", "агломерация", "агнец", "агрегат", "агрессия", "агробизнес", 
            "аудиенция", "аудитория", "аура", "афганец", "афера", "афиша", "анаплазма", "ацетон", 
            "африка", "бакалавр", "багаж", "бакенбарды", "балалайка", "балет", "балкон", "баланс", 
            "банан", "банк", "банкир", "банкомат", "анафаза", "банкротство", "баня", "баржа", "абракадабра", 
            "барьер", "баскетбол", "батарея", "бахрома", "баянист", "бегемот", "бензин", "береза", 
            "беседа", "библиотека", "анаграмма", "биржа", "благодарность", "бланк", "аванкамера", 
            "авторадиограмма", "бобр", "богатырь", "богиня", "богородица", "богослужение", "бодрость", 
            "бокал", "боксер", "болезнь", "боль", "борьба", "ботинок", "аппаратура", "братство", 
            "бревно", "бригадир", "бриллиант", "брошюра", "аппаратчица", "бублик", "будущее", "булавка", 
            "агропропаганда", "буклет", "булка", "буржуазия", "буфет", "бухгалтерия", "быстрота", "бюджет", 
            "вагон", "валюта", "вандализм", "варвар", "варенье", "вафля", "вахта", "ведро", "веер", 
            "вектор", "великан", "венгрия", "вентиляция", "версия", "вертолет", "ветер", "ветеринар", 
            "взгляд", "взломщик", "анабаптистка", "вода", "воздействие", "возмездие", "волк", "авиабаза", 
            "авиатрасса", "вопль", "воронка", "восклицание", "астраханка", "впечатление", "враг", 
            "азербайджанка", "агроэкология", "адвокат", "администрация", "адмирал", "административный", 
            "азарт", "азбука", "азия", "академия", "акация", "аквариум", "аккумулятор", "аккорд", 
            "аккуратность", "акробат", "акробатика", "аксельбант", "акселерация", "аксиома", 
            "активация", "актив", "активист", "активность", "актуальность", "акула", "алгоритм", 
            "алебарда", "алебастр", "александр", "александра", "александрович", "алиби", "алкоголь", 
            "аллея", "аллигатор", "алмаз", "алхимия", "алфавит", "альбатрос", "альбом", "альтернатива", 
            "альтруизм", "аляска", "амазонка", "амбразура", "амбиция", "америка", "амнистия", "аморальность", 
            "ампула", "амфибия", "анализ", "аналог", "ананас", "анатомия", "ангел", "анекдот", 
            "анемия", "аниматор", "анонс", "анормальность", "антарктида", "антенна", "антология", 
            "антураж", "анфилада", "анютины", "аншлаг", "апатия", "апелляция", "апельсин", "аппарат", 
            "аппетит", "апрель", "арабика", "аранжировка", "арбат", "арбитраж", "аргумент", "ареал", 
            "арена", "аристократ", "аристократия", "армия", "аромат", "артиллерия", "арфист", 
            "архив", "архитектура", "архипелаг", "арьергард", "аспект", "ассортимент", "астрология", 
            "астронавт", "астрономия", "атаковала", "атлант", "атмосфера", "атмосферность", "атрибут", 
            "врата", "время", "вселенная", "встреча", "выгода", "выдача", "выдумка", "выживание", 
            "авиаразведка", "гуманитарий", "авиаразведка"
        ][Main::getRandomIntInRange(0, 255)];
        
        let count = word.length();
        let ans = Main::convertRim(count);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "количество букв в этом слове, и указать ответ в римском представлении",
            "число букв в этом слове, представив его в римской записи",
            "количество букв в слове, указав ответ римскими цифрами",
            "общую длину слова, записав результат римскими цифрами",
            "длину этого слова, выразив ответ в римской нотации",
            "число букв в слове, ответ представить римскими цифрами",
            "длину слова, указав её в римском формате",
            "число букв в слове, обозначив его римской цифрой",
            "количество букв в слове, записав результат в римской форме",
            "общую длину слова, представив её римской цифрой",
            "число букв в слове, выразив его в римской записи"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " слово \"" + word + "\". "
            + "Её попросили " + whatDo + " " + conditions
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано слово \"" + word + "\". " 
                + "Требуется определить " + conditions
                + ". ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"IX\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем количество букв в слове " + word + " - " + String::from_int(count) + ". \n Переведём в римское представление и получим ответ: " + ans;

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
    
    function convertRim(num:int) -> String {
        let c=[
            ["","I","II","III","IV","V","VI","VII","VIII","IX"],
            ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            ["","M","MM","MMM"]
        ];

        if (num == 0) {return "0"}

        return c[3][num / 1000 % 10]+c[2][num / 100 % 10]+c[1][num / 10 % 10]+c[0][num % 10];
    }
}
*/