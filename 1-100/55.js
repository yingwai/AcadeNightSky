/*
?Сделайте генератор, выводящий направление стрелки (вверх/вниз/влево/вправо) и 3-4 поворота (в градусах). Человек должен ответить, куда направлена стрелка, после всех поворотов. (пример: изначально стрелка направлена вверх, куда она будет направлена, если ее повернут: влево на 180, вправо на 270, вправо на 90 - не используйте этот пример).

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
        let directions = ["вверх", "вниз", "влево", "вправо"];
        let rotations = [90, 180, 270, 360];
        let sidePlus = ["влево", "вправо"];
        let start = directions[Main::getRandomIntInRange(0, 3)];
        let side: List<String> = [];
        
        for (let i in 0..Main::getRandomIntInRange(3, 4)) {
            side.push(sidePlus[Main::getRandomIntInRange(0, 1)] + " на " + String::from_int(rotations[Main::getRandomIntInRange(0, 3)]));
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "начальное направление стрелки",
            "исходное направление стрелки",
            "первоначальное направление стрелки",
            "начальное положение стрелки"
        ][Main::getRandomIntInRange(0, 3)];
        let conditions2 = [
            "куда направлена стрелка, после всех поворотов",
            "в каком направлении указывает стрелка после всех поворотов",
            "куда будет направлена стрелка по завершении всех поворотов",
            "направление стрелки после выполнения всех поворотов",
            "в какую сторону указывает стрелка после всех изменений положения",
            "какое направление у стрелки после всех поворотов"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions + ": " + start + " и несколько направлений: "
        for (let i in 0..side.length()) {
            sc += side[i] + "°, "
        }
        sc = sc[0..sc.length()-2] + ".\nЕё попросили " + whatDo + " " + conditions2 + ". Если известно что вправо - это по часовой стрелки, а влево - против.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано " + conditions + ": " + start + " и несколько направлений: ";
            for (let i in 0..side.length()) {
                sc += side[i] + "°, "
            }
            sc = sc[0..sc.length()-2] + ". Требуется определить " + conditions2 + ". Если известно что вправо - это по часовой стрелки, а влево - против.";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"вверх\" / \"вниз\" / \"влево\" / \"вправо\""
            + "\n<reveal ans>Ответ</reveal>";

        let ans = Main::getFinalDirection(start, side);
        
        let expl = "Определим все направления стрелки по очереди: \n";
        for (let i in 0..side.length()) {
            if (i == 0) {
                expl += "Стрелка указывает " + start + ", поворачиваем " + side[i] + "° и получаем стрелку " + Main::getFinalDirection(start, side[0..i+1]) + ";\n";
            }
            else {
                expl += "Стрелка указывает " + Main::getFinalDirection(start, side[0..i]) + ", поворачиваем " + side[i] + "° и получаем стрелку " + Main::getFinalDirection(start, side[0..i+1]) + ";\n";
            }
        }
        
        expl += "\n Следовательно ответ: " + ans;

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
    
    function getFinalDirection(initialDirection: String, turns: List<String>) -> String {
      let directions = ["вверх", "вправо", "вниз", "влево"];      
      let currentDirectionIndex = 0;
        if (initialDirection == "вверх") {currentDirectionIndex=0}
        if (initialDirection == "вправо") {currentDirectionIndex=1}
        if (initialDirection == "вниз") {currentDirectionIndex=2}
        if (initialDirection == "влево") {currentDirectionIndex=3}

      for (let i in 0..turns.length()) {
        let turn = turns[i];
        let angle = String::to_int(turn.split(" ")[2]);         
        if (turn.split(" ")[0] == "вправо") {
          currentDirectionIndex = (currentDirectionIndex + angle / 90) % 4;
        }
        else if (turn.split(" ")[0] == "влево") {
          currentDirectionIndex = (currentDirectionIndex - angle / 90 + 4) % 4;
        }
      }

      return directions[currentDirectionIndex];
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/