/*
?Сделайте генератор заданий, который выведет на экран три квадрата в порядке возрастания. Площадь каждого из квадратов соответствует возрасту одного члена семьи. Пользователю необходимо посчитать возраст членов семьи, состоящих из: отца, матери и дочери. Если отцу n-ое количество лет, дочь в несколько раз младше отца и в какое-то количество раз младше матери. Например, если отцу 40 лет, дочь в 8 раз младше отца и в 6 раз младше матери, тогда возраст дочери будет 40/8, то есть 5 лет, а возраст матери будет 5*6, то есть возраст матери 30 лет. Генератор должен подбирать числа таким образом, чтобы все промежуточные результаты и ответ, получились целыми числами.

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
        let fatherAge = Main::getRandomIntInRange(30, 60);
        let daughter = Main::getRandomIntInRange(8, 10);
        let mother = Main::getRandomIntInRange(5, 8);

        let daughterAge = fatherAge as float / daughter as float;
        let motherAge = daughterAge as float * mother as float;
        
        while (daughterAge as int as float != daughterAge) {
            fatherAge = Main::getRandomIntInRange(30, 60);
            daughter = Main::getRandomIntInRange(8, 10);
            mother = Main::getRandomIntInRange(5, 8);
            
            daughterAge = fatherAge as float / daughter as float
            motherAge = daughterAge as float * mother as float;
        }
        
        let cF = Canvas::create(140, 140, Color::rgb(255, 255, 255));
        Canvas::rect(cF, 10, 10, fatherAge*2, fatherAge*2, Color::rgb(0, 0, 0), 2);
        Canvas::text(cF, fatherAge+10, fatherAge+10, "S = " + String::from_int(fatherAge), 20, new TextAlignCenter{} as TextAlign, Color::rgb(0, 0, 0));
        
        let cD = Canvas::create(140, 140, Color::rgb(255, 255, 255));
        Canvas::rect(cD, 10, 10, daughterAge as int*2, daughterAge as int*2, Color::rgb(0, 0, 0), 2);
        
        let cM = Canvas::create(140, 140, Color::rgb(255, 255, 255));
        Canvas::rect(cM, 10, 10, motherAge as int*2, motherAge as int*2, Color::rgb(0, 0, 0), 2);
        
        let canva = [
            new PuzzleImage {
                name: "f",
                image: cF
            },
            new PuzzleImage {
                name: "d",
                image: cD
            },
            new PuzzleImage {
                name: "m",
                image: cM
            }
        ];
        
        let ans = "Отец: " + String::from_int(fatherAge) + "\n Мать: " + community::near::dtalalaev::floatToString::FloatToString::floatToStringPoint(motherAge) + "\n Дочь: " + community::near::dtalalaev::floatToString::FloatToString::floatToStringPoint(daughterAge)

        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "возраст членов семьи, состоящих из: отца, матери и дочери",
            "возраст членов семьи, включая отца, мать и дочь",
            "возраст членов семьи: отца, матери и дочери",
            "сколько лет членам семьи, состоящим из отца, матери и дочери",
            "возраст отца, матери и дочери в семье",
            "сколько лет отцу, матери и дочери в семье"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " три квадрата в порядке возрастания, где площадь каждого из квадратов соответствует возрасту одного члена семьи: \n<img d><img m><img f>"
            + "\nЕё попросили " + whatDo + " " + conditions + ". Если отцу " + PluralRu::pluralify(fatherAge, "год", "года", "лет") 
            + ", дочь в " + PluralRu::pluralify(daughter, "раз", "раза", "раз") + " младше отца и в " + PluralRu::pluralify(mother, "раз", "раза", "раз") + " младше матери.";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны три квадрата в порядке возрастания, где площадь каждого из квадратов соответствует возрасту одного члена семьи: \n<img d><img m><img f>"
                + "\nТребуется определить " + conditions + ". Если отцу " + PluralRu::pluralify(fatherAge, "год", "года", "лет") 
                + ", дочь в " + PluralRu::pluralify(daughter, "раз", "раза", "раз") + " младше отца и в " + PluralRu::pluralify(mother, "раз", "раза", "раз") + " младше матери.";
        }

        let desc = sc 
            + "\n Пример ответа: \"Отец: 40 \n Мать: 20 \n Дочь: 4\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Чтобы найти сколько лет каждому члену семьи, сначала найдём сколько лет дочери: "
            + String::from_int(fatherAge) + "/" + String::from_int(daughter) + "=" + community::near::dtalalaev::floatToString::FloatToString::floatToStringPoint(daughterAge) 
            + "\nТеперь определим сколько лет матери: " + community::near::dtalalaev::floatToString::FloatToString::floatToStringPoint(daughterAge) + " * " + String::from_int(mother) + "=" + community::near::dtalalaev::floatToString::FloatToString::floatToStringPoint(motherAge)
            + "\n Следовательно ответ: \n" + ans;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: canva,
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