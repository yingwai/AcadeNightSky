/*
?Сделайте генератор, в котором будет дана таблица с числами следующего вида: 1-ый столбец – фамилии спортсменов, все остальные столбцы – очки, набранные за раунд стрельбы из лука или оружия по мишени. Необходимо найти сумму очков каждого спортсмена за все раунды стрельбы и для каждого спортсмена написать место, которое он занял в общем зачете в соответствии с результатами подсчета. Формат ответа можете задать как: "1, 4, 3, 2, 5", где порядок записи мест соответствует порядку фамилий спортсменов сверху-вниз. Можете придумать свой формат записи.
?Можете, в целом, заменять стрельбу на другие дисциплины, в которых есть похожие системы подсчета очков (по раундам).

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
        let lastNames = [
            "Иванов",
            "Смирнов",
            "Кузнецов",
            "Попов",
            "Васильев",
            "Петров",
            "Соколов",
            "Михайлов",
            "Новиков",
            "Фёдоров",
            "Морозов",
            "Волков",
            "Алексеев",
            "Лебедев",
            "Семенов",
            "Егоров",
            "Павлов",
            "Козлов",
            "Степанов",
            "Николаев",
            "Орлов",
            "Андреев",
            "Макаров",
            "Никитин",
            "Захаров"
        ];
        
        for (let i in 0..Main::getRandomIntInRange(10, 15)) {
            lastNames = Main::shuffleArray(lastNames);
        }
        
        lastNames = lastNames[0..Main::getRandomIntInRange(3, 7)];
        
        let points = [
            [Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10)]
        ];
        let sum: List<int> = [];
        
        for (let i in 0..lastNames.length()) {
            if (i != 0) {
                points.push([Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10), Main::getRandomIntInRange(0, 10)]);
            }
            
            let s = 0;

            for (let j in 0..points[i].length()) {
                s += points[i][j];
            }

            sum.push(s);
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let table = "<table>"
        for (let i in 0..lastNames.length()) {
            table += "<tr><td>" + lastNames[i] + "</td>";
            
            for (let j in 0..points[i].length()) {
                table += "<td>" + String::from_int(points[i][j]) + "</td>";
            }
            
            table += "</tr>";
        }
        table += "</table>"
        let conditions = [
            "сумму очков каждого спортсмена за все раунды стрельбы и записать, кто какое место занял",
            "общие очки каждого спортсмена за все раунды стрельбы и указать, кто на каком месте",
            "итоговые очки спортсменов по всем раундам и записать, какое место занял каждый",
            "сумму очков спортсменов за все раунды стрельбы и определить, кто на каком месте",
            "общую сумму очков каждого спортсмена по всем раундам и указать, кто на каком месте",
            "итоги по очкам для каждого спортсмена за все раунды стрельбы и записать, кто на каком месте"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " таблица с числами следующего вида: 1-ый столбец – фамилии спортсменов, все остальные столбцы – очки, набранные за раунд стрельбы из лука по мишени. \n" + table
            + "\nЕё попросили " + whatDo + " " + conditions + ". Если количество очков у нескольких участников одинаковое, первый будет тот, кто первый идёт в списке.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана таблица с числами следующего вида: 1-ый столбец – фамилии спортсменов, все остальные столбцы – очки, набранные за раунд стрельбы из лука по мишени. \n" + table
                + "\nТребуется определить " + conditions + ". Если количество очков у нескольких участников одинаковое, первый будет тот, кто первый идёт в списке.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"Попов, Соколов, Петров, Михайлов, Кузнецов\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем сумму каждого участника: \n";
        for (let i in 0..sum.length()) {
            expl += lastNames[i] + ": ";
            
            for (let j in 0..points[i].length()) {
                expl += String::from_int(points[i][j]) + " + ";
            }
            
            expl = expl[0..expl.length()-2] + " = " + String::from_int(sum[i]) + "\n"
        }
        
        let ans = Main::sortNamesByScores(lastNames, sum);
        
        expl += "\nСледовательно ответ: " + ans;

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
    
    function sortNamesByScores(names: List<String>, scores: List<int>) -> String {
        let sortedNames = names;
        let sortedScores = scores;

        for (let i in 1..sortedScores.length()) {
            let keyScore = sortedScores[i];
            let keyName = sortedNames[i];
            let j = i - 1;

            while (j >= 0 && sortedScores[j] < keyScore) {
                sortedScores[j + 1] = sortedScores[j];
                sortedNames[j + 1] = sortedNames[j];
                j = j - 1;
            }
            sortedScores[j + 1] = keyScore;
            sortedNames[j + 1] = keyName;
        }

        return String::join(sortedNames, ", ");
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
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
}
*/