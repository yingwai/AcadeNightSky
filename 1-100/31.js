/*
?Создайте генератор паззлов, который генерирует различные сорта древесины и длительность их горения. Генератор будет просить расположить сорта древесины в порядке возрастания по времени их горения.

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

class Wood {
    public name: String,
    public time: int
}

class Main {
    function gen_puzzle() -> Puzzle {
        let woods = [
            new Wood { name: "Дуб", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Сосна", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Береза", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Ясень", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Секвойя", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Тик", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Кедр", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Клен", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Орех", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Ель", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Бук", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Красное дерево", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Слива", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Олива", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Груша", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Яблоня", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Граб", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Липа", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Акация", time: Main::getRandomIntInRange(50, 200) },
            new Wood { name: "Каштан", time: Main::getRandomIntInRange(50, 200) }
        ];
        
        for (let i in 0..Main::getRandomIntInRange(5, 15)) {
            woods = Main::shuffleArray(woods);
        }
        
        let n1 = Main::getRandomIntInRange(0, woods.length()-4);
        let n2 = Main::getRandomIntInRange(n1, woods.length()-1);
        while (n2-n1<3) {
            n1 = Main::getRandomIntInRange(0, woods.length()-4);
            n2 = Main::getRandomIntInRange(n1, woods.length()-1);
        }
        
        woods = woods[n1..n2];

        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..woods.length()) {
            list += woods[i].name + " - " 
                + String::from_int(woods[i].time) + "\n"
        }
        
        let conditions1 = [
            "и расположить сорта древесины в порядке возрастания по времени их горения",
            "и упорядочить сорта древесины по времени горения в порядке возрастания",
            "и расставить сорта древесины по времени их горения от меньшего к большему",
            "и расположить сорта древесины по увеличению времени их горения",
            "и отсортировать виды древесины по времени горения в порядке возрастания",
            "и выстроить сорта древесины по времени горения, начиная с самого короткого"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "Если присутствуют сорта дерева с одинаковым временем горения, первый в списке будет тот, что первее попадается",
            "Если есть сорта дерева с одинаковым временем горения, в списке первым будет тот, который встречается первым",
            "При наличии сортов дерева с равным временем горения, первым в списке окажется тот, который встречается раньше",
            "Если встречаются сорта дерева с одинаковым временем горения, первым в списке будет тот, что встречается раньше остальных",
            "Если в списке есть сорта дерева с одинаковым временем горения, первым будет тот, который появляется первым в списке",
            "Если в наличии сорта дерева с равным временем горения, первым в списке будет тот, который находится раньше"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task 
            + " различные сорта древесины и длительность их горения: \n\n"
            + list + "\nЕё попросили " + whatDo + " " 
            + conditions1 + ". " + conditions2 + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Даны различные сорта древесины и длительность их горения: \n\n"
                + list + "\nТребуется определить "
                + conditions1 + ". " + conditions2 + ". ";
        }
        
        let ans = "";
        Main::bubbleSort(woods);
        for (let i in 0..woods.length()) {
            if (i == woods.length()-1) {
                ans += woods[i].name + "."
            } else {
                ans += woods[i].name + ", "
            }
        }

        let desc = sc 
            + "\n Пример вывода, следующий: Слива, Секвойя, Кедр."
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "Определим время горения, начиная с самого короткого: \n";
        for (let i in 0..woods.length()) {
            if (i != 0 && woods[i].time == woods[i-1].time) {
                continue;
            }
            
            if (i == woods.length()-1) {
                expl += String::from_int(woods[i].time)
            } else {
                expl += String::from_int(woods[i].time) + " > "
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
    
    function bubbleSort(a: List<Wood>) -> List<Wood> {
        let arr = a;
        let n = arr.length();

        for (let i in 0..n - 1) {
            for (let j in 0..n - i - 1) {
                if (arr[j].time > arr[j + 1].time) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    
    function shuffleArray(array: List<Wood>) -> List<Wood> {
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