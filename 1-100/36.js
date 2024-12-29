/*
?Написать генератор, который будет выдавать картинку дерева, строения, какого-то средства передвижения и тд. А человек на выходе должен написать что изображено на картинке. Можно усложнить и сделать вывод нескольких картинок и тогда человек должен написать, что изображено на каждой картинке. (Как пример на картинке ель и человек надо написать, что это ель в ответ и тд не используйте этот пример). Для однозначности ответа, выведите варианты ответа, что бы человек мог выбрать, а затем вписать.

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

class Item {
    public name: String,
    public img: String
}

class Main {
    function gen_puzzle() -> Puzzle {
        let item = [
            new Item { name: "Лес", img: "<img forest>" },
            new Item { name: "Луг", img: "<img meadow>" },
            new Item { name: "Дом", img: "<img home>" },
            new Item { name: "Книга", img: "<img book>" },
            new Item { name: "Собака", img: "<img dog>" },
            new Item { name: "Кошка", img: "<img cat>" },
            new Item { name: "Птица", img: "<img bird>" },
            new Item { name: "Человек", img: "<img human>" },
            new Item { name: "Гора", img: "<img mount>" },
            new Item { name: "Море", img: "<img sea>" },
            new Item { name: "Камень", img: "<img stone>" }
        ][Main::getRandomIntInRange(0, 10)];
        let word = ["Река", "Дерево", "Город", "Рыба", "Машина", "Солнце", "Луна", "Парк"];
        
        for (let i in 0..10) {
            word = Main::shuffleArray(word);
        }
        
        if (Main::getRandomIntInRange(0, 1) == 1) {
            word = word[0..4];
        } else {
            word = word[4..8];
        }
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "выбрать что изображено на картинке",
            "выбрать какое содержание представлено на картинке",
            "выбрать что показано на картинке",
            "выбрать какое содержание у картинки",
            "выбрать что именно изображено на картинке",
            "выбрать что нарисовано на картинке"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " изображение. "
            + "Её попросили " + whatDo + " и " + conditions 
            + ". \n" + item.img;

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано изображение. Требуется определить и " 
                + conditions + ". \n" + item.img;
        }
        
        sc += "\n\n Варианты ответа: \n";
        let ans = Main::getRandomIntInRange(1, 4);
        for (let i in 0..word.length()) {
            if (i == ans-1) {
                sc += String::from_int(ans) + ". " + item.name + "\n";
                continue;
            }
            
            sc += String::from_int(i+1) + ". " + word[i] + "\n";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"2\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "На картинке изображён " + item.name
            + ".\nСледовательно ответ: " + String::from_int(ans);

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
    
    function shuffleArray(array: List<String>) -> List<String> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/