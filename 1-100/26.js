/*
?Создайте генератор паззлов, в которых перечислены несколько городов, с указанием их координат по широте и долготе в градусах. Требуется указать на 2 наиболее близко расположенных города. Старайтесь делать такие генерации, чтобы расстояния между городами были не слишком близкими между собой.

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

class City {
    public city: String,
    public coord: Coord
}

class Coord {
    public lat: float,
    public lon: float
}

class Main {
    function gen_puzzle() -> Puzzle {
        let cities = [
            new City { city: "Москва", coord: new Coord { lat: 55.7558, lon: 37.6176 } },
            new City { city: "Санкт-Петербург", coord: new Coord { lat: 59.9343, lon: 30.3351 } },
            new City { city: "Новосибирск", coord: new Coord { lat: 55.0084, lon: 82.9357 } },
            new City { city: "Екатеринбург", coord: new Coord { lat: 56.8389, lon: 60.6057 } },
            new City { city: "Нижний Новгород", coord: new Coord { lat: 56.3269, lon: 44.0059 } },
            new City { city: "Казань", coord: new Coord { lat: 55.8304, lon: 49.0661 } },
            new City { city: "Челябинск", coord: new Coord { lat: 55.1644, lon: 61.4368 } },
            new City { city: "Омск", coord: new Coord { lat: 54.9885, lon: 73.3242 } },
            new City { city: "Самара", coord: new Coord { lat: 53.2415, lon: 50.2212 } },
            new City { city: "Ростов-на-Дону", coord: new Coord { lat: 47.2357, lon: 39.7015 } },
            new City { city: "Нью-Йорк", coord: new Coord { lat: 40.7128, lon: -74.0060 } },
            new City { city: "Лос-Анджелес", coord: new Coord { lat: 34.0522, lon: -118.2437 } },
            new City { city: "Чикаго", coord: new Coord { lat: 41.8781, lon: -87.6298 } },
            new City { city: "Мехико", coord: new Coord { lat: 19.4326, lon: -99.1332 } },
            new City { city: "Лондон", coord: new Coord { lat: 51.5074, lon: -0.1278 } },
            new City { city: "Париж", coord: new Coord { lat: 48.8566, lon: 2.3522 } },
            new City { city: "Берлин", coord: new Coord { lat: 52.5200, lon: 13.4050 } },
            new City { city: "Рим", coord: new Coord { lat: 41.9028, lon: 12.4964 } },
            new City { city: "Мадрид", coord: new Coord { lat: 40.4168, lon: -3.7038 } },
            new City { city: "Амстердам", coord: new Coord { lat: 52.3676, lon: 4.9041 } },
            new City { city: "Токио", coord: new Coord { lat: 35.6895, lon: 139.6917 } },
            new City { city: "Сеул", coord: new Coord { lat: 37.5665, lon: 126.9780 } },
            new City { city: "Пекин", coord: new Coord { lat: 39.9042, lon: 116.4074 } },
            new City { city: "Шанхай", coord: new Coord { lat: 31.2304, lon: 121.4737 } },
            new City { city: "Сингапур", coord: new Coord { lat: 1.3521, lon: 103.8198 } },
            new City { city: "Сидней", coord: new Coord { lat: -33.8688, lon: 151.2093 } },
            new City { city: "Буэнос-Айрес", coord: new Coord { lat: -34.6037, lon: -58.3816 } },
            new City { city: "Каир", coord: new Coord { lat: 30.0444, lon: 31.2357 } },
            new City { city: "Дубай", coord: new Coord { lat: 25.276987, lon: 55.296249 } },
            new City { city: "Кейптаун", coord: new Coord { lat: -33.9249, lon: 18.4241 } }
        ];
        
        for (let i in 0..Main::getRandomIntInRange(5, 15)) {
            cities = Main::shuffleArray(cities);
        }
        
        let n1 = Main::getRandomIntInRange(0, cities.length()-5);
        let n2 = Main::getRandomIntInRange(n1, cities.length()-1);
        while (n2-n1<3) {
            n1 = Main::getRandomIntInRange(0, cities.length()-5);
            n2 = Main::getRandomIntInRange(n1, cities.length()-1);
        }
        
        cities = cities[n1..n2];
        let ans = Main::findClosestCities(cities);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let list = "";
        for (let i in 0..cities.length()) {
            list += cities[i].city + ": " 
                + Main::round(cities[i].coord.lat, 6) + ", " 
                + Main::round(cities[i].coord.lon, 6) + ". \n"
        }
        let conditions1 = [
            "список городов, с указанием их координат по широте и долготе в градусах",
            "список городов с их координатами по широте и долготе в градусах",
            "перечень городов с указанием широты и долготы в градусах",
            "список городов с градусными координатами широты и долготы",
            "перечень городов и их координаты по широте и долготе в градусах",
            "список городов с координатами широты и долготы в градусах"
        ][Main::getRandomIntInRange(0, 5)];
        let conditions2 = [
            "и записать в ответ два наиболее близко расположенных города",
            "и указать в ответе два города, расположенных ближе всего друг к другу",
            "и записать в ответ два ближайших города",
            "и отметить в ответе два наиболее близко расположенных города",
            "и отразить в ответе два города, находящихся ближе всего",
            "и записать в ответ два города с наименьшим расстоянием между ними"
        ][Main::getRandomIntInRange(0, 5)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " " + conditions1 + ": \n\n"
            + list + "\nЕё попросили " + whatDo + " " + conditions2
            + ". ";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " + conditions1 + ": \n\n" + list 
                + "\nТребуется определить " + conditions2 + ".";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: Пекин и Шанхай (где первый город этот тот, что первый стоит в списке)"
            + "\n<reveal ans>Ответ</reveal>";

        let latlon = "\\(lat_1 = " + Main::round(ans[0].coord.lat, 6) + " * (\\frac{3.14}{180})\\)\n"
                + "\\(lon_1 = " + Main::round(ans[0].coord.lon, 6) + " * (\\frac{3.14}{180})\\)\n"
                + "\\(lat_2 = " + Main::round(ans[1].coord.lat, 6) + " * (\\frac{3.14}{180})\\)\n"
                + "\\(lon_2 = " + Main::round(ans[1].coord.lon, 6) + " * (\\frac{3.14}{180})\\)\n\n";
        let dLatdLon = "dLat = lat2 - lat1 \n dLon = lon2 - lon1\n\n";
        let aExpl = "\\(a = sin^2(\\frac{Δlat}{2}) + cos(lat_1) \\cdot cos(lat_2) \\cdot sin^2(\\frac{Δlon}{2}) \\)\n\n";
        let cExpl = "\\(c = 2 \\cdot atan^2(\\sqrt{a}, \\sqrt{1 - a})\\) \n\n";
        let dExpl = "\\(d = R \\cdot c\\)\n\n";
        
        let expl = "Радиус Земли R составляет примерно 6371 км. \n\n Географические координаты обычно измеряются в градусах, но для математических расчетов они должны быть в радианах. Чтобы преобразовать градусы в радианы, умножаем их на π/180.\n";
        expl += latlon + "Вычисление разницы широт и долгот: \n" + dLatdLon;
        expl += "Теперь рассчитываем расстояние между двумя точками на сфере по формулы гаверсинуса: \n";
        expl += aExpl + "Рассчитываем угловое расстояния с: \n";
        expl += cExpl + "И наконец расчёт конечного расстояния: \n";
        expl += dExpl;
        expl += "Рассчитываем расстояние для каждого города и получаем ответ: ";
        expl += ans[0].city + " и " + ans[1].city;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ans[0].city + " и " + ans[1].city
                } as Reveal
            ],
        }
    }

    function findClosestCities(cities: List<City>) -> List<City> {
        let minDistance = 1000000000.0;
        let closestCities: List<City> = [];

        for (let i in 0..cities.length()) {
            for (let j in i + 1..cities.length()) {
                let distance = Main::haversineDistance(cities[i].coord, cities[j].coord);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCities = [cities[i], cities[j]];
                }
            }
        }

        return closestCities;
    }
    
    function haversineDistance(coord1: Coord, coord2: Coord) -> float {
        let R = 6371.0; // Радиус Земли в километрах
        let lat1 = coord1.lat * (3.14 / 180.0);
        let lon1 = coord1.lon * (3.14 / 180.0);
        let lat2 = coord2.lat * (3.14 / 180.0);
        let lon2 = coord2.lon * (3.14 / 180.0);

        let dLat = lat2 - lat1;
        let dLon = lon2 - lon1;

        let a =
            Math::sin(dLat / 2.0) * Math::sin(dLat / 2.0) +
            Math::cos(lat1) * Math::cos(lat2) *
            Math::sin(dLon / 2.0) * Math::sin(dLon / 2.0);

        let c = 2.0 * Math::atan2(Math::sqrt(a), Math::sqrt(1.0 - a));

        return R * c;
    }
    
    function round(p: float, after_dot: int) -> String {  
        let sign = "";
        if (p < 0.0) {
          sign = "-";
          p = -p;
        }

        let coeff = 1;
        for (let i in 0..after_dot) {
          coeff *= 10;
        }

        p *= coeff as float;
        let int_p = (p + 0.5) as int;

        let after_string = String::from_int(int_p % coeff);
        for (let i in after_string.length()..after_dot) {
          after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
    
    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function shuffleArray(array: List<City>) -> List<City> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
*/