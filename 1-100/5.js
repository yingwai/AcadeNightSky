/*
?Сделайте генератор, который будет выводить на экран список услуг в отеле, включающий в себя несколько пунктов с разными ценами на них. Среди пунктов должно быть: завтрак в номер; парковочное место; камера хранения вещей; уборка в номер; мини-бар; ужин в номер; бассейн; массаж. Можете дополнить список по своему желанию. Человек должен посчитать процент услуг, стоимость которых превышает 500 рублей. Цены на услуги должны генерироваться случайным образом в пределах от 100 до 1500. Если ответ получается дробным, его необходимо округлить вверх до десятых.
!не сохранено full
*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import std::string::String;
import std::collections::List;
import std::collections::ListSort;
import std::math::Math;

class Main {
    function gen_puzzle() -> Puzzle {
        let services = Main::getRandomService();
        let prices = Main::getRandomPriceFromService(services.length());
        let ans = Main::calculatePercentage(prices);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)]
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task= "Отмечен|Показан|Выставлен|Указан|Виден|Обведен|Подчеркнут|Выделен".split("|")[Main::getRandomIntInRange(0, 7)];
        let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];
        
        let sc=name + " получила " + wher + " " + what + ". "
            + task + " список услуг отеля и их цены: ";
        for (let i in 0..services.length()-1) {
            sc += "\n Услуга: " + services[i] + ". Цена " 
                + String::from_int(prices[i]) 
                + Main::declOfNum(prices[i], [" рубль", " рубля", " рублей"]);
        }
        sc += "\n Её попросили " + whatDo 
            + " процент услуг, стоимость которых превышает 500 рублей. Ответ округляем вверх до десятых по математическим правилам.";
        if(Main::getRandomIntInRange(0, 1) == 1 ) {
            sc = "Дан список услуг отеля и их цены: ";
            
            for (let i in 0..services.length()-1) {
                sc += "\n Услуга: " + services[i] + ". Цена " 
                    + String::from_int(prices[i]) 
                    + Main::declOfNum(prices[i], [" рубль", " рубля", " рублей"]);
            }
            
            sc += "\n Требуется определить процент услуг, стоимость которых превышает 500 рублей. Ответ округляем вверх до десятых по математическим правилам."
        }
        
        let desc = sc 
            + "\n Формат вывода, следующий: число округлённое до десятых. \n Пример: 25,0%"
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "Получаем список услуг и их цены, берём цены выше 500 рублей: \n";
        let n = 0;
        for (let i in 0..services.length()-1) {
            if (prices[i] > 500) {
                expl += String::from_int(prices[i]) + " ";
                n += 1;
            }
        }
        expl += "\n Берём данное количество и считаем процент (ответ округляем вверх до десятых по математическим правилам): "
            + String::from_int(n) + "/" + String::from_int(services.length()-1) + "*100=" + ans;
            
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
    
    public function declOfNum(n: int, text_forms: List<String>) -> String {  
        n = n % 100; 

        let n1 = n % 10;

        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }

        return text_forms[2];
    }
    
    public function getRandomIntInRange(a: int, b: int) -> int {
      return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    public function shuffleArray(array: List<String>) -> List<String> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    
    public function round(p: float, after_dot: int) -> String {  
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

        return (sign + String::from_int((int_p / coeff)as int) + ","  + after_string);
    }
    
    public function getRandomService() -> List<String> {
        let hotelServices = [
            "Завтрак в номер",
            "Парковочное место",
            "Камера хранения вещей",
            "Уборка в номер",
            "Мини-бар",
            "Ужин в номер",
            "Бассейн",
            "Массаж",
            "Скоростной Wi-Fi",
            "Трансфер от/до аэропорта",
            "Фитнес-зал",
            "Услуги прачечной",
            "Конференц-зал",
            "Спа-процедуры",
            "Заказ такси",
            "Детская комната",
            "Прокат велосипедов",
            "Экскурсионное обслуживание",
            "Услуги няни",
            "Услуги консьержа",
            "Лимузин-сервис",
            "Индивидуальный шеф-повар",
            "Прокат автомобилей",
            "Услуги химчистки",
            "Доставка цветов в номер",
            "Йога-классы",
            "Пляжные полотенца"
        ];
        
        let nFrom = Main::getRandomIntInRange(0, hotelServices.length() - 1);
        let nTo = Main::getRandomIntInRange(0, hotelServices.length() - 1);
        while (nTo - nFrom < 3) {
            nFrom = Main::getRandomIntInRange(0, hotelServices.length() - 1);
            nTo = Main::getRandomIntInRange(0, hotelServices.length() - 1);
        }
        
        let res = Main::shuffleArray(hotelServices)[nFrom..nTo];
            
        return res;
    }
    
    public function getRandomPriceFromService(count: int) -> List<int> {
        let price: List<int> = [];
        for (let i in 1..count) {
            price.push(Main::getRandomIntInRange(100, 1500));
        }
            
        return price
    }
    
    function calculatePercentage(prices: List<int>) -> String {
        let totalServices = prices.length();
        let count = 0;

        for (let i in 0..totalServices) {
            if (prices[i] > 500) {
                count += 1;
            }
        }

        let percentage = (count as float / totalServices as float) * 100.0;

        return Main::round(percentage, 1) + "%";
    }
}
*/
