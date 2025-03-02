/*
?Создайте генератор задач, который на входе задает несколько предложений о любых явлениях природы или действиях человека, четко связанных с определенным сезоном года. И задается начальный сезон от которого по порядку нужно выстроить предложения так, как сезоны идут в году.
!Просрал таску :(
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
        let index = Main::getRandomIntInRange(0, 3);
        let seasons = ["весна", "лето", "осень", "зима"];

        let tasks = [
            [
                "Расцветают первые цветы, такие как подснежники.",
                "Люди начинают сажать рассаду в огородах.",
                "Реки освобождаются ото льда, и начинается половодье."
            ][Main::getRandomIntInRange(0, 2)],
            [
                "Солнце светит ярко, и дни становятся длиннее.",
                "Люди часто ходят на пляж, чтобы купаться и загорать.",
                "В садах созревают ягоды и фрукты."
            ][Main::getRandomIntInRange(0, 2)],
            [
                "Листья на деревьях меняют цвет и опадают.",
                "Люди собирают урожай и готовятся к зиме.",
                "Часто идут дожди, и погода становится прохладнее."
            ][Main::getRandomIntInRange(0, 2)],
            [
                "Выпадает снег, и все вокруг покрывается белым покровом.",
                "Люди катаются на лыжах и коньках.",
                "Дни становятся холоднее."
            ][Main::getRandomIntInRange(0, 2)]
        ];
        
        let list = String::join(tasks, "\n");
        
        let ans: List<String> = [];
        for (let i in 0..4) {
            ans.push(tasks[(index+i) % 4])
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "выстроить предложения так, как сезоны идут в году",
            "расположить предложения в порядке следования сезонов года",
            "выстроить предложения по очередности сезонов в году",
            "упорядочить предложения согласно последовательности сезонов года",
            "расставить предложения в порядке, как идут сезоны в году",
            "организовать предложения в последовательности сезонов года",
            "построить предложения в порядке, соответствующем сезонам года",
            "выстроить предложения в порядке, как сезоны следуют в году",
            "расположить предложения в последовательности сезонов года",
            "упорядочить предложения в соответствии с порядком сезонов года",
            "расставить предложения так, как сезоны идут в году"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " несколько предложений о любых явлениях природы или действиях человека, четко связанных с определенным сезоном года: \n" + list
            + "\n\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано несколько предложений о любых явлениях природы или действиях человека, четко связанных с определенным сезоном года: \n" + list
                + "\n\nТребуется " + conditions + ".";
        }

        let desc = sc + " Если известно, что начальный сезон от которого по порядку нужно выстроить предложения: " + seasons[index]
            + "\n Пример ответа: \"Люди собирают урожай и готовятся к зиме. \n Дни становятся короче, а ночи длиннее. \n Люди начинают сажать рассаду в огородах. \n В садах созревают ягоды и фрукты.\""
            + "\n\n<reveal ans>Ответ</reveal>";

        let expl = "Сначала определим к какой поре года относиться каждое предложение: \n";
        for (let i in 0..4) {
            expl += tasks[i] + " - " + seasons[i] + "\n"
        }
        expl += "\n Следовательно, т.к. наш начальный сезон " + seasons[index] + ", ответом будет: \n" + String::join(ans, "\n")

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: String::join(ans, "\n")
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/