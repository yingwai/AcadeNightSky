/*
?Создайте генератор задач, на входе предлагается поле с буквами и последовательность, в которой буквы должны стоять по порядку номеров в будущем слове. Нужно оставить буквы в соответствии с указанной последовательность, а потом записать слово.

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
        let len = Main::getRandomIntInRange(4, 12);
        let letters: List<String> = [];
        let index: List<int> = [];
        
        for (let i in 0..len) {
            index.push(i);
            letters.push("абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("")[Main::getRandomIntInRange(1, 33)])
        }
        
        for (let i in 0..len) {
            community::near::dtalalaev::shuffleIntArray::Main::shuffle(index);
        }
        
        let indexlist = "";
        let ans = "";
        
        for (let i in 0..len) {
            indexlist += String::from_int(index[i]+1) + " ";
            ans += letters[index[i]] + "";
        }
        
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "составить буквы в соответствии с указанной последовательностью, а потом записать слово в ответ", 
            "согласно указанной последовательности, составить буквы и записать слово",
            "выбрать буквы по указанной последовательности и записать полученное слово",
            "составить буквы в порядке, соответствующем указанной последовательности, и записать слово в ответ",
            "составить слово, оставив буквы в соответствии с последовательностью и записать его в ответ",
            "составить слово, буквы которого соответствуют последовательности, и записать слово",
            "по указанной последовательности выбрать буквы и записать слово в ответ",
            "выбрать буквы согласно последовательности и записать полученное слово",
            "составить буквы по указанной последовательности и записать слово как ответ",
            "составить слово, составив буквы в нужном порядке, и записать его",
            "составить буквы в соответствии с последовательностью и записать слово в ответ"
        ][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " поле с буквами и последовательность, в которой буквы должны стоять по порядку номеров в будущем слове: \n Поле с буквами: " + String::join(letters, "") 
            + "\n Поле с последовательностью: " + indexlist
            + "\nЕё попросили " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано поле с буквами и последовательность, в которой буквы должны стоять по порядку номеров в будущем слове: \n Поле с буквами: " + String::join(letters, "") 
                + "\n Поле с последовательностью: " + indexlist
                + "\nТребуется " + conditions + ".";
        }

        let desc = sc
            + "\n Пример ответа: \"гшщэвохъ\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы получить нужное слово, сначала нужно определить номер каждой буквы в слове: \n";
        for (let i in 0..len) {
            expl += String::from_int(i+1) + " - " + letters[i] + ", "
        }
        expl = expl[0..expl.length()-2] + "\n Теперь расставим буквы в порядке, представленным в задаче: \n"
        for (let i in 0..len) {
            expl += String::from_int(index[i]+1) + " - " + letters[index[i]] + ", "
        }
        expl = expl[0..expl.length()-2] + "\n Следовательно ответ: " + ans

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