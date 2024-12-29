/*
?Сделайте генератор, который будет выдавать произведение двух чисел, и если одно умножить на 2,5, а другое оставить без изменений, то получится определенное число. И человеку необходимо будет найти эти числа, а после написать сначала чему равно большее число, а далее чему равно меньшее число.
!Инвалид
*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import std::math::Math;
import std::collections::List;
import std::string::String;

class Main {
    public function getRandomNumber(a: int, b: int) -> int {
      return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    public function getMultipliedNumbers(number: int) -> int {
        let m = 2.5;
        
        return (number as float * m) as int
    }
    
    public function getHigherNumber(nums: List<int>) -> String {
        if (nums[0] > nums[1]) {
            return String::from_int(nums[0] as int) + " большее число, а " + String::from_int(nums[1] as int) + " меньшее."
        }
        else if (nums[0] < nums[1]) {
            return String::from_int(nums[1] as int) + " большее число, а " + String::from_int(nums[0] as int) + " меньшее."
        }
        else {
            return "Числа равны."
        }
    }
    
    function gen_puzzle() -> Puzzle {
        let nums = [Main::getRandomNumber(1, 99), Main::getRandomNumber(1, 99)];
        let index = Main::getRandomNumber(0, 1);
        let index_not = 0;
        if (index == index_not) {index_not = 1};
        
        let num_mp = Main::getMultipliedNumbers(nums[index]);
        let ans = Main::getHigherNumber([num_mp * nums[index_not], nums[index] * nums[index_not]]);
        
        let name = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[Main::getRandomNumber(0, 14)]
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomNumber(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomNumber(0, 5)]
        let task= "Отмечено|Показано|Выставлено|Указано|Видно|Обведено|Зачёркнуто|Выделено".split("|")[Main::getRandomNumber(0, 7)];
        let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[Main::getRandomNumber(0, 4)];

        let sc=name + " получила " + wher + " " + what + ". "
            + task + " выражение: " + String::from_int(nums[0]) + " * " + String::from_int(nums[1]) 
            + ", её попросили " + whatDo 
            + " чему равно большее число, а далее чему равно меньшее число, при условии если " + String::from_int(index + 1) + " число умножить на 2,5 и округлить в меньшую сторону, а другое оставить без изменений.";
        if(Main::getRandomNumber(0, 1) == 1 ) {
            sc="Требуется определить чему равно большее число, а далее чему равно меньшее в выражении: " 
                + String::from_int(nums[0]) + " * " + String::from_int(nums[1]) + ". При условии если " + String::from_int(index + 1) + " число умножить на 2,5 и округлить в меньшую сторону, а другое оставить без изменений."
        }
        
        let desc = sc 
            + "\n Формат вывода, следующий: N большее число, а M меньшее или Числа равны. \n Пример: 197 большее число, а 17 меньшее или Числа равны."
            + "\n<reveal ansMore>Больший ответ</reveal>, <reveal ansLess>Меньший ответ</reveal>";
        
        let expl = "Получаем выражение " 
            + String::from_int(nums[0]) + " * " + String::from_int(nums[1]) 
            + " и номер числа которое нужно умножить на 2.5: "
            + String::from_int(index + 1) + "." 
            + " Сначала умножаем данное нам выражение и получаем число "
            + String::from_int(nums[index] * nums[index_not]) 
            + ". Потом умножаем " + String::from_int(nums[index]) 
            + " на 2.5 округляем до меньшего числа и получаем " 
            + String::from_int(num_mp)
            + ", решаем выражение " + String::from_int(num_mp)
            + " * " + String::from_int(nums[index_not])
            + " получаем ответ " + String::from_int(num_mp * nums[index_not])
            + ". \n Сравниваем 2 числа и получаем ответ: " + ans;
        
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ansMore",
                    answer: ans.split(",")[0]
                } as Reveal,
                new RevealPrecise {
                    name: "ansLess",
                    answer: ans.split(",")[1]
                } as Reveal
            ],
        }
    }
}
*/