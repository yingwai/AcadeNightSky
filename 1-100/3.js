//
/*
?Создайте генератор, который будет генерировать последовательность символов (букв), кодировать её при помощи шифра Цезаря и просить решающего воссоздать исходную последовательность букв. Шифр Цезаря — это вид шифра подстановки, в котором каждый символ в открытом тексте заменяется символом, находящимся на некотором постоянном числе позиций левее или правее него в алфавите. То есть генератор должен выдавать последовательность и ключ (количество букв, на которое происходит "сдвиг"). Решающий должен воссоздать исходную последовательность и расшифровать шифр при помощи ключа.
*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::puzzle::RevealImprecise;
import std::collections::List;
import std::math::Math;
import std::string::String;

class Main {
    public function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    public function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    public function genCharacterSequences() -> String {
        let count = Main::getRandomIntInRange(5, 20);
        let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        
        let str: List<String> = [];
        
        for (let i in 0..count) {
            if (Main::getRandomIntInRange(0, 1) == 1) {
                str.push(alphabet[Main::getRandomIntInRange(1, 26)]);
            } else {
                str.push(alphabetUpper[Main::getRandomIntInRange(1, 26)]);
            }
        }
        
        return String::join(str, "");;
    }
    
    public function caesarCipher(str: String, shift: int) -> String {
        let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let result: List<String> = [];

        for (let i in 1..str.length() + 1) {
            let char = str.split("")[i];
            let newChar = char;

            // Поиск в строчных буквах
            for (let j in 1..lowerAlphabet.length()) {
                if (lowerAlphabet[j] == char) {
                    if (j + shift > 26) {
                        newChar = lowerAlphabet[(j + shift + 26) % 26];
                    } else {
                        newChar = lowerAlphabet[j + shift];
                    }
                    break;
                }
            }
            
            // Поиск в заглавных буквах
            for (let j in 1..upperAlphabet.length()) {
                if (upperAlphabet[j] == char) {
                    if (j + shift > 26) {
                        newChar = upperAlphabet[(j + shift + 26) % 26];
                    } else {
                        newChar = upperAlphabet[j + shift];
                    }
                    break;
                }
            }

            result.push(newChar);
        }

        return String::join(result, "")
    }
    
    function gen_puzzle() -> Puzzle {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let str = Main::genCharacterSequences();
        let shift = Main::getRandomIntInRange(1, 25);
        let str_cipher = Main::caesarCipher(str, shift)
            
        let task="отмечена|показана|выставлена|указана|видна|обведена|зачёркнута|выделена".split("|")[Main::getRandomIntInRange(0, 7)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let whatDo = "расшифровать|определить|найти|понять|написать".split("|")[Main::getRandomIntInRange(0, 4)];

        let sc="Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[Main::getRandomIntInRange(0, 14)] +
            " получила "+ wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 4)] +". "
             + "На листке " + task + " строка зашифрованная шифром Цезаря: " + str_cipher + ". Её попросили " +whatDo+ " какая была исходная строка используя алфавит: " + alphabet + " (учитывая капс) и зная что \"сдвиг\" происходит на " + String::from_int(shift) + Main::declOfNum(shift, [" символ", " символа", " символов"]) + " (если доходим до начала алфавита, продолжаем считать с конца).";
        if(Main::getRandomIntInRange(0, 1) == 1){sc="У нас есть строка зашифрованная шифром Цезаря: " + str_cipher + ". Требуется определить какая была исходная строка используя алфавит: " + alphabet + " (учитывая капс) и зная что что \"сдвиг\" был на " + String::from_int(shift) + Main::declOfNum(shift, [" символ", " символа", " символов"]) + " (если доходим до начала алфавита, продолжаем считать с конца).";}
        let desc = sc + "<reveal ans>Ответ</reveal> \n Формат вывода, следующий: расшифрованная строка. \n Пример: YYFHFbyNVNrl";

        let expl = "Получаем зашифрованную строку " + str_cipher
            + " и число сдвига символов " + String::from_int(shift)
            + ". Чтобы получить исходную строку, нужно от имеющейся буквы идти в лево на " + String::from_int(shift)
            + Main::declOfNum(shift, [" символ", " символа", " символов"]) +", если же доходим до начала алфавита, дальше считать с последней буквы, и получаем ответ "
            + str;
        
        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: str
                } as Reveal
            ]
        }
    }
}
*/