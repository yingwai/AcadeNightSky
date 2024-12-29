/*
?Создайте генератор *текстовых* пазлов, в которой на входе дается уравнение с примером из реальной жизни с одним неизвестным, данное уравнение будет сводиться к тому, что будет найдено то самое неизвестное, а результатом будет присваивание этого неизвестного какому-то предмету или объекту из реальной жизни.

*/

/*
import nightsky::puzzle::Puzzle;
import nightsky::puzzle::PuzzleImage;
import nightsky::puzzle::Reveal;
import nightsky::puzzle::RevealPrecise;
import nightsky::puzzle::RevealMultipleChoice;
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

class Scen {
    public description: String,
    public calculateStr: String,
    public calculate: int,
    public assignTo: List<String>
}

class Params {
    public price: int,
    public total: int,
    public distance: int,
    public fuelConsumption: int,
    public totalCandies: int,
    public friends: int,
    public length: int,
    public postSpace: int,
    public pizzas: int,
    public slices: int,
    public ticketPrice: int,
    public people: int,
    public bricksPerWall: int,
    public walls: int,
    public pages: int,
    public pagesPerDay: int,
    public pricePerLitre: int,
    public totalLitres: int
}

class Main {
    function gen_puzzle() -> Puzzle {
        let params = new Params {
            price: Main::getRandomIntInRange(10, 100),
            total: Main::getRandomIntInRange(100, 1000),
            distance: Main::getRandomIntInRange(100, 1000),
            fuelConsumption: Main::getRandomIntInRange(5, 20),
            totalCandies: Main::getRandomIntInRange(10, 100),
            friends: Main::getRandomIntInRange(2, 10),
            length: Main::getRandomIntInRange(100, 600),
            postSpace: Main::getRandomIntInRange(1, 10),
            pizzas: Main::getRandomIntInRange(1, 5),
            slices: Main::getRandomIntInRange(4, 12),
            ticketPrice: Main::getRandomIntInRange(50, 350),
            people: Main::getRandomIntInRange(2, 10),
            bricksPerWall: Main::getRandomIntInRange(100, 600),
            walls: Main::getRandomIntInRange(4, 8),
            pages: Main::getRandomIntInRange(50, 550),
            pagesPerDay: Main::getRandomIntInRange(5, 35),
            pricePerLitre: Main::getRandomIntInRange(10, 60),
            totalLitres: Main::getRandomIntInRange(1, 10)
        };
        
        let scenarios = [
            new Scen {
                description: "Алиса купила яблоки по цене " + String::from_int(params.price) + "₽ за килограмм. Она потратила " + String::from_int(params.total) + "₽. Сколько килограммов яблок она купила?",
                calculateStr: String::from_int(params.total) + "/" + String::from_int(params.price),
                calculate: params.total / params.price,
                assignTo: ["яблоки", "яблоко", "деньги", "рубли", "рубль"]
            },
            new Scen {
                description: "Бензин стоит " + String::from_int(params.price) + "₽ за литр. Машина заправлена на " + String::from_int(params.total) + "₽. Сколько литров бензина было залито?",
                calculateStr: String::from_int(params.total) + "/" + String::from_int(params.price),
                calculate: params.total / params.price,
                assignTo: ["бензин", "литры", "машина", "деньги", "рубли", "рубль"]
            },
            new Scen {
                description: "Для поездки в соседний город требуется проехать " + String::from_int(params.distance) + " км. Машина расходует " + String::from_int(params.fuelConsumption) + " л топлива на 100 километров. Сколько литров топлива понадобится для поездки?",
                calculateStr: String::from_int(params.distance) + "/100 *" + String::from_int(params.fuelConsumption),
                calculate: (params.distance / 100) * params.fuelConsumption,
                assignTo: ["топливо", "литры", "машина"]
            },
            new Scen {
                description: "У Вани есть " + PluralRu::pluralify(params.totalCandies, "конфета", "конфеты", "конфет") + ", и он раздал их " + String::from_int(params.friends) + " друзьям поровну. Сколько конфет получил каждый друг?",
                calculateStr: String::from_int(params.totalCandies) + "/" + String::from_int(params.friends),
                calculate: params.totalCandies / params.friends,
                assignTo: ["конфеты", "конфета", "друзья"]
            },
            new Scen {
                description: "Длина забора составляет " + String::from_int(params.length) + " м. Каждый столбик занимает " + String::from_int(params.postSpace) + " м. Сколько столбиков нужно, чтобы построить забор?",
                calculateStr: String::from_int(params.length) + "/" + String::from_int(params.postSpace),
                calculate: params.length / params.postSpace,
                assignTo: ["столбики", "столбик", "забор"]
            },
            new Scen {
                description: "В кафе заказали " + PluralRu::pluralify(params.pizzas, "пиццу", "пиццы", "пицц") + ". Каждая пицца режется на " + String::from_int(params.slices) + " кусочков. Сколько всего кусочков пиццы получится?",
                calculateStr: String::from_int(params.pizzas) + " * " + String::from_int(params.slices),
                calculate: params.pizzas * params.slices,
                assignTo: ["кусочки пиццы", "пицца", "кусочки"]
            },
            new Scen {
                description: "Цена билета на поезд составляет " + String::from_int(params.ticketPrice) + "₽. Группа из " + String::from_int(params.people) + " человек покупает билеты. Сколько денег потребуется?",
                calculateStr: String::from_int(params.ticketPrice) + " * " + String::from_int(params.people),
                calculate: params.ticketPrice * params.people,
                assignTo: ["билеты", "билет", "поезд", "деньги", "ребль", "группа людей", "группа", "люди", "человек"]
            },
            new Scen {
                description: "Для строительства здания требуется " + PluralRu::pluralify(params.bricksPerWall, "кирпич", "кирпича", "кирпичей") + " на одну стену. Здание имеет " + PluralRu::pluralify(params.walls, "стену", "стены", "стен") + ". Сколько всего кирпичей понадобится?",
                calculateStr: String::from_int(params.bricksPerWall) + " * " + String::from_int(params.walls),
                calculate: params.bricksPerWall * params.walls,
                assignTo: ["кирпичи", "кирпич", "здание", "стены", "стена"]
            },
            new Scen {
                description: "У Лены есть книга с " + PluralRu::pluralify(params.pages, "страницой", "страницами", "страницами") + ". Она читает по " + PluralRu::pluralify(params.pagesPerDay, "странице", "страницы", "страниц") + " в день. Сколько дней ей понадобится, чтобы дочитать книгу?",
                calculateStr: String::from_int(params.pages) + "/" + String::from_int(params.pagesPerDay),
                calculate: params.pages / params.pagesPerDay,
                assignTo: ["дни", "книга", "страница", "страницы", "день"]
            },
            new Scen {
                description: "Магазин продаёт сок по " + String::from_int(params.pricePerLitre) + "₽ за литр. Покупатель купил " + String::from_int(params.totalLitres) + " л. Сколько денег он потратил?",
                calculateStr: String::from_int(params.pricePerLitre) + " * " + String::from_int(params.totalLitres),
                calculate: params.pricePerLitre * params.totalLitres,
                assignTo: ["сок", "деньги", "рубль", "литр", "литры"]
            }
        ][Main::getRandomIntInRange(0, 9)];

        let sc = scenarios.description + " \nТребуется найти неизвестное, а его результат присвоить какому-то предмету или объекту из реальной жизни связанному с текстом."

        let desc = sc + " Ответ округлить до целого числа в меньшую сторону."
            + "\n Пример ответа: \"топливо, 128\""
            + "\n<reveal ans>Ответ</reveal>"
            + "<reveal ans1>Ответ</reveal>";
        
        let key = Main::getRandomIntInRange(0, scenarios.assignTo.length()-1);

        let expl = "Сначала рассчитаем неизвестное: " + scenarios.calculateStr + " = " + String::from_int(scenarios.calculate)
            + "\n Присвоим неизвестное к объекту и получим ответ: " + scenarios.assignTo[key] + ", " + String::from_int(scenarios.calculate);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                RevealMultipleChoice::create("ans", scenarios.assignTo, key) as Reveal,
                new RevealPrecise {
                    name: "ans1",
                    answer: ", " + String::from_int(scenarios.calculate)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
}
*/