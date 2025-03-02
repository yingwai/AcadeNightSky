/*
?Сформируйте генератор заданий, в которых будет показано несколько слов. Каждое из слов подчеркните несколькими разноцветными линиями. Далее попросите сделать предложение из слов, под которыми прочерчены (например) жёлтые линии. Количество линий будет указывать на порядок слова в предложении. Например, если вам нужно построить из "жёлтых" линий, то первым будет слово под которым одна жёлтая линия, вторым - где две жёлтые и так далее. Придумайте свои интересные зависимости, связанные с линиями и словами.

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
        let pr = [
            "Солнце светит ярко.",
            "Кот спит на диване.",
            "Дети играют во дворе.",
            "Чашка упала на пол.",
            "Ветер дует сильно.",
            "Цветы расцвели весной.",
            "Книга лежит на столе.",
            "Птицы поют утром.",
            "Дождь идет весь день.",
            "Мама готовит обед.",
            "Собака бежит быстро.",
            "Звезды светят ночью.",
            "Чай горячий и вкусный.",
            "Мальчик читает книгу.",
            "Луна ярко светит.",
            "Автобус едет медленно.",
            "Река течет спокойно.",
            "Девочка рисует картину.",
            "Снег падает тихо.",
            "Окно открыто настежь."
        ][Main::getRandomIntInRange(0, 19)];
        
        let var = Main::getRandomIntInRange(0, 1)
        
        let canva: List<PuzzleImage> = [];
        for (let i in 0..pr.split(" ").length()) {
            let canvas = Canvas::create(200, 50, Color::rgb(255, 255, 255));
            Canvas::text(canvas, 100, 20, pr.split(" ")[i], 16, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
            
            if (var == 0) {
                for (let j in 0..i+1) {
                    Canvas::line(canvas, 65, 25 + 5*j, 135, 25 + 5*j, Color::rgb(255, 0, 0), 2);
                }
            } else if (var == 1) {
                for (let j in 0..i+1) {
                    if (j == i) {
                        Canvas::line(canvas, 65, 25 + 5*j, 135, 25 + 5*j, Color::rgb(255, 0, 0), 2);
                    } else {
                        Canvas::line(canvas, 65, 25 + 5*j, 135, 25 + 5*j, Color::rgb(0, if (Main::getRandomIntInRange(0, 1) == 1) {255} else {0}, if (Main::getRandomIntInRange(0, 1) == 1) {255} else {0}), 2);
                    }
                }
            }
            
            canva.push(
                new PuzzleImage {
                    name: pr.split(" ")[i]+"_"+String::from_int(i),
                    image: canvas
                }
            );
        }
        for (let i in 0..10) {
            canva = Main::shuffleArray(canva);
        }
        let list = "";
        for (let i in canva) {
            list += "<img " + i.name + ">"
        }
            
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "составить|выстроить|построить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "предложение из этих слов",
            "предложение составленное из этих слов",
            "предложение созданное из этих слов",
            "предложение сформированное из этих слов",
            "предложение составленное из данных слов",
            "предложение построенное из этих слов"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько слов подчёркнутых "
            + if (var == 0) {"красными линиями: "} else {"разноцветными линиями: "} + "\n" + list
            + "\nЕё попросили " + whatDo + " " + conditions + ". " + if (var == 0) {"Количество линий будет указывать на порядок слова в предложении"} else {"Номер красной линии будет указывать на порядок слова в предложении"} + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько слов подчёркнутых "
                + if (var == 0) {"красными линиями: "} else {"разноцветными линиями: "} + "\n" + list
                + "\nТребуется определить " + conditions + ". " + if (var == 0) {"Количество линий будет указывать на порядок слова в предложении"} else {"Номер красной линии будет указывать на порядок слова в предложении"} + ".";
        }

        let desc = sc 
            + "\n Пример ответа: \"Солнце светит ярко.\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы построить предложение, сначала нужно определить " + if (var == 0) {"количество красных линий под каждым словом: "} else {"номер красной линии под каждым словом: "} + "\n";
        for (let i in canva) {
            expl += i.name.split("_")[0] + " - " + if (var == 0) {PluralRu::pluralify(String::to_int(i.name.split("_")[1])+1, "красная линия", "красные линии", "красных линий")} else {"номер красной линии " + String::from_int(String::to_int(i.name.split("_")[1])+1)} + "\n"
        }
        expl += "Следовательно ответ: " + pr

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: pr
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    function shuffleArray(array: List<PuzzleImage>) -> List<PuzzleImage> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
*/