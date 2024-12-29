/*
*База
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::canvas::Canvas;
import nightsky::canvas::Color;
import nightsky::canvas::TextAlign;
import nightsky::canvas::TextAlignLeft;
import nightsky::canvas::TextAlignRight;
import nightsky::canvas::TextAlignCenter;
import std::math::Math;
import std::collections::List;
import std::collections::ListSort;
import std::string::String;

function gen_puzzle() -> Puzzle {
    let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)]
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
    let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
    let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
    let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
    let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

    let conditions = [][Main::getRandomIntInRange(0, 0)];

    let sc=name + " получила " + wher + " " + what + ". "
        + " На листике " + task + " "
        + "\nЕё попросили " + whatDo + conditions + ", если " 
        + ". ";
    
    if(Main::getRandomIntInRange(0, 1) == 1 ) {
        sc="Требуется определить ";
    }

    let desc = sc 
        + "\n Формат вывода, следующий: "
        + "\n Пример: "
        + "\n<reveal ans>Ответ</reveal>";

    let expl = "";

    return new Puzzle {
        question: desc,
        solution: expl,
        images: [
            new PuzzleImage {
                name: "canvas",
                image: canvas
            }
        ],
        reveals: [
            new RevealPrecise {
                name: "ans",
                answer: ans
            } as Reveal
        ],
    }
}

*Цикл
for (let i in 0..a.length()) {}

*Пустой массив
let result: List<String> = [];

*Определение окончаний
function declOfNum(n: int, text_forms: List<String>) -> String {  
    n = n % 100; 

    let n1 = n % 10;

    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }

    return text_forms[2];
}

*Cлучайное число в диапозоне
function getRandomIntInRange(a: int, b: int) -> int {
    return (Math::random() * (b - a + 1) as float + a as float) as int;
}

*Cлучайный float
function rand_float(num: int, digit: int) -> float {
    let t = 10;
    for(let i in 0..digit){
        t *= 10;
    }

    return ((Math::random() as int * num * t) as float / t as float) as float;
    //return float(float(rand_int(num * t))/float(t));
}

*Сокращение до сотых
function round(p: float, after_dot: int) -> String {  
    let sign : String = " ";
    if (p < 0.0) {
        sign = "-";
        p = -p;
    }

    let coeff: int = 1;
    for (let i in 0..after_dot) {
        coeff *= 10;
    }

    p *= (coeff as float);
    let int_p = (p + 0.5) as int;

    let after_string: String = String::from_int(int_p % coeff);
    if (after_dot == 0) {
        return sign + String::from_int((int_p / coeff)as int)
    }

    return (sign + String::from_int((int_p / coeff)as int) + "."  + after_string);
}

*Строку в float
function stringToFloat(str: String) -> float {
    let n = str.split(".");
    let z = "1";
    for (let i in 0..n[1].length()) {
        z+="0"
    }
    
    return String::to_int(n[0]) as float + (String::to_int(n[1]) as float / String::to_int(z) as float) as float
}

*степень
function pow(num: int, power: int) -> int {
    if (num == 0 && power != 0) {return 0;};
    if (num == 0) {return 0;};
    let t = 1;
    for (let i in 0..power){
        t *= num;
    };
    return t;
}


*Перетасовка массива
function shuffleArray(array: List<String>) -> List<String> {
    for (let i in 1..array.length()) {
        let j = Main::getRandomIntInRange(i-1, i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

*Нахождение максимального числа в массиве (можно использовать arr.sort() и выбрать первый или последний элемент в массиве).
function maxInt(arr: List<int>) -> int {
    let max = arr[0];

    for (let i in 1..a.length()) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

*Перевод в двоичное число
function decimalToBinary(decimal:int) -> String {
    let binary = "";
    while (decimal > 0) {
        binary = String::from_int(decimal % 2) + binary;
        decimal = decimal / 2
    }

    return binary;
}

*Римские
function convertRim(num:int) -> String {
    let c=[
		["","I","II","III","IV","V","VI","VII","VIII","IX"],
		["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
		["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
		["","M","MM","MMM"]
	];
    
    if (num == 0) {return "0"}
    
    return c[3][num / 1000 % 10]+c[2][num / 100 % 10]+c[1][num / 10 % 10]+c[0][num % 10];
}

*Случайная дробь
function createRandomFraction(level: int) -> float[] {
  let numerator = float(rand_int(level * 5 - 1) + 1);
  let denominator = float(rand_int(level * 5 - 1) + 1);
    
  return [numerator, denominator];
}
function createRandomFraction(level: int) -> int[] {
    let celoe = rand_int(level * 5 - 1) + 1;
    let numerator = rand_int(level * 5 - 1) + 2;
    let denominator = rand_int(level * 5 - 1) + 1;
    while (denominator >= numerator) {
        denominator = rand_int(level * 5 - 1) + 1;
    }

    return [celoe, numerator, denominator];
}

*Остаток
function divideAndReturnRemainder(a: int, b: int) -> int[] {
    if(a >= b){
        return [a / b, a % b];
    } else {
        return [b / a, b % a];
    }
}

*GCD, НОД, Наибольший общий делитель
function findGcd(arr: int[]) -> int {
  let gcd = arr[0];
  for (let i = 1; i < arr.length(); i += 1) {
    let x = arr[i]; 
    let y = gcd;
    while (y > 0) {
        let t = y;
        y = x % y;
        x = t;
    }
    gcd = x;
  }
  return gcd;
}
*/
