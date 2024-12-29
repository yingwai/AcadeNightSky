/*
?Напишите генератор паззлов, в котором на входе вы задаете последовательность из разных видов конфет, а на выходе необходимо найти N-ную конфету с каким-то свойством(шоколадную или сосательную и т.д. в этом направлении), где N будет определяться исходя из отношения большего количества одного вида конфет к меньшему количеству в данной последовательности. Если отношение не целое, округлять до целого.

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
        let nCandies = ["батончик", "леденец", "поп", "пчёлка", "вишенка"];
        let tCandies = ["шоколадная", "сосательная", "шипучка", "жевательная", "ликерная"];
        let candies: List<String> = [];
        let counts: List<int> = [0, 0, 0, 0, 0];
        
        for (let i in 0..Main::getRandomIntInRange(4, 10)) {
            let c = Main::getRandomIntInRange(0, 4);
            
            candies.push(nCandies[c] + " (" + tCandies[c] + ")");
            
            if (c == 0) {
                counts[0] = counts[0] + 1;
            } else if (c == 1) {
                counts[1] = counts[1] + 1;
            } else if (c == 2) {
                counts[2] = counts[2] + 1;
            } else if (c == 3) {
                counts[3] = counts[3] + 1;
            } else if (c == 4) {
                counts[4] = counts[4] + 1;
            }
        }
        
        let n = Main::getRandomIntInRange(1, 2)
        while (counts[0] < n || counts[1] < n || counts[2] < n || counts[3] < n || counts[4] < n) {
            let c = Main::getRandomIntInRange(0, 4);
            
            candies.push(nCandies[c] + " (" + tCandies[c] + ")");
            
            if (c == 0) {
                counts[0] = counts[0] + 1;
            } else if (c == 1) {
                counts[1] = counts[1] + 1;
            } else if (c == 2) {
                counts[2] = counts[2] + 1;
            } else if (c == 3) {
                counts[3] = counts[3] + 1;
            } else if (c == 4) {
                counts[4] = counts[4] + 1;
            }
        }
        
        let index = community::near::dtalalaev::max::Max::maxArr(counts) / community::near::dtalalaev::min::Main::minArr(counts) -1;
        let vCandies = if (Main::getRandomIntInRange(0, 1) == 1) {tCandies[community::near::dtalalaev::max::Max::maxArr_ind(counts)]} else {tCandies[Main::getRandomIntInRange(0, 4)]}
        let ans = "Такой конфеты нет.";
        
        for (let i in 0..candies.length()) {
            if (candies[i].split(" ")[1] == "(" + vCandies + ")") {
                if (index == 0) {
                    ans = candies[i].split(" ")[0];
                    break;
                }
                index -= 1;
            }
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "последовательность из разных видов конфет", 
            "ряд различных видов конфет",
            "порядок разных видов конфет",
            "последовательность конфет, различающихся по видам",
            "набор конфет разных видов в определённом порядке",
            "чередование различных видов конфет",
            "последовательность, состоящая из конфет разных типов",
            "перечень конфет, каждая из которых имеет свой вид",
            "порядок конфет, каждая из которых отличается по виду",
            "последовательность разных типов конфет"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": " + String::join(candies, ", ") + ". "
            + "\nЕё попросили " + whatDo + " N-ную " + vCandies[0..vCandies.length()-2] + "ую"
            + " конфету, где N будет определяться исходя из отношения большего количества одного вида конфет к меньшему количеству в данной последовательности. Если отношение не целое, округлять до целого в меньшую сторону.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дана " + conditions + ": " + String::join(candies, ", ") + ". "
                + "\nТребуется определить N-ную " + vCandies[0..vCandies.length()-2] + "ую"
            + " конфету, где N будет определяться исходя из отношения большего количества одного вида конфет к меньшему количеству в данной последовательности. Если отношение не целое, округлять до целого в меньшую сторону.";
        }

        let desc = sc 
            + "\n Пример ответа: \"пчёлка\". Если такой конфеты нет в списке, записать \"Такой конфеты нет.\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Посчитаем количество каждой конфеты: \n";
        for (let i in 0..tCandies.length()) {
            expl += tCandies[i] + " конфета - " + String::from_int(counts[i]) + "\n"
        }
        expl += "\nНайдём отношение большего количества конфет, к меньшему: " + String::from_int(community::near::dtalalaev::max::Max::maxArr(counts)) + "/" + String::from_int(community::near::dtalalaev::min::Main::minArr(counts)) + " = "
            + String::from_int(community::near::dtalalaev::max::Max::maxArr(counts) / community::near::dtalalaev::min::Main::minArr(counts)) 
            + "\n Теперь найдём " + String::from_int(community::near::dtalalaev::max::Max::maxArr(counts) / community::near::dtalalaev::min::Main::minArr(counts)) + "-ую " + vCandies[0..vCandies.length()-2] + "ую" + " конфету: " + ans;
            
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