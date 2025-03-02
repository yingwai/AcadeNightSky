/*
?Создайте генератор паззлов, в которых будет дана информация по нескольким группам: количество бюджетников, количество платников, количество платников со скидкой N%. Нужно указать стоимость обучения для платника, сумму выплат ВУЗу за каждого бюджетника (сумма должна отличаться от оплаты за обучения для платника), а также величину скидки N. Требуется посчитать, сколько денег ВУЗ получает за всех студентов этих групп. Не делайте количество студентов в группах слишком большим. Лучше, чтобы в каждой было до 15 человек.

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
        let budgetStudents = Main::getRandomIntInRange(5, 15);
        let payingStudents = Main::getRandomIntInRange(5, 15);
        let discountStudents = Main::getRandomIntInRange(1, payingStudents);

        let tuitionFee = Main::getRandomIntInRange(20000, 50000);
        let budgetCompensation = Main::getRandomIntInRange(10000, tuitionFee - 5000);
        let discountPercent = Main::getRandomIntInRange(10, 50);

        let totalBudgetIncome = budgetStudents * budgetCompensation;
        let fullPayingIncome = payingStudents * tuitionFee;
        let discountedIncome = discountStudents as float * (tuitionFee as float * (1.0 - (discountPercent as float / 100.0)));
        let totalIncome = totalBudgetIncome as float + fullPayingIncome as float + discountedIncome;
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
            "сколько денег ВУЗ получает за всех студентов этих групп",
            "сколько средств ВУЗ имеет за всех обучающихся этих групп",
            "какую сумму ВУЗ получает за всех студентов этих групп",
            "сколько денег поступает в ВУЗ за студентов этих групп",
            "какой доход ВУЗ получает за всех студентов этих групп",
            "сколько ВУЗ зарабатывает на всех студентах этих групп",
            "какой объем финансирования ВУЗ получает за студентов этих групп",
            "сколько средств ВУЗ получает за всех студентов в этих группах",
            "какую сумму ВУЗ получает за обучение студентов этих групп",
            "сколько денег ВУЗ получает за всех учащихся этих групп"
        ][Main::getRandomIntInRange(0, 9)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " три группы студентов: \n 1. Бюджетников: " + PluralRu::pluralify(budgetStudents, "человек", "человека", "человек") + " (выплата ВУЗу за одного бюджетника: " + String::from_int(budgetCompensation) + "₽).\n"
            + "2. Платников: " + PluralRu::pluralify(payingStudents, "человек", "человека", "человек") + " (стоимость обучения: " + String::from_int(tuitionFee) + "₽).\n"
            + "3. Платников со скидкой " + String::from_int(discountPercent) + "%: " + PluralRu::pluralify(discountStudents, "человек", "человека", "человек") + "."
            + "\nЕё попросили " + whatDo + " " + conditions + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дано три группы студентов: \n 1. Бюджетников: " + PluralRu::pluralify(budgetStudents, "человек", "человека", "человек") + " (выплата ВУЗу за одного бюджетника: " + String::from_int(budgetCompensation) + "₽).\n"
                + "2. Платников: " + PluralRu::pluralify(payingStudents, "человек", "человека", "человек") + " (стоимость обучения: " + String::from_int(tuitionFee) + "₽).\n"
                + "3. Платников со скидкой " + String::from_int(discountPercent) + "%: " + PluralRu::pluralify(discountStudents, "человек", "человека", "человек") + "."
                + "\nТребуется определить " + conditions + ".";
        }

        let desc = sc + " Сумма оплаты студентов платников со скидкой округляйте до сотых. В ответ записать число округлённое до сотых."
            + "\n Пример ответа: \"336920.36\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "1. Рассчитаем сколько ВУЗ получит за выплаты всех студентов на бюджете: " + String::from_int(budgetStudents) + " * " + String::from_int(budgetCompensation) + " = " + String::from_int(totalBudgetIncome)
            + "\n 2. Рассчитаем сколько ВУЗ получит за оплату всех студентов платников: " + String::from_int(payingStudents) + " * " + String::from_int(tuitionFee) + " = " + String::from_int(fullPayingIncome)
            + "\n 3. Рассчитаем сколько ВУЗ получит за оплату всех студентов платников со скидкой " + String::from_int(discountPercent) + "%: " + String::from_int(discountStudents) + " * (" + String::from_int(tuitionFee) + " * (1 - " + String::from_int(discountPercent) + "/100)) = " + Main::round(discountedIncome, 2)
            + "\n Теперь посчитаем сумму которую ВУЗ получает за всех студентов этих групп: " + String::from_int(totalBudgetIncome) + " + " + String::from_int(fullPayingIncome) + " + " + Main::round(discountedIncome, 2) + " = " + Main::round(totalIncome, 2);

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: Main::round(totalIncome, 2)
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
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
        if (after_dot == 0) {
            return sign + String::from_int((int_p / coeff)as int)
        }
      
        for (let i in after_string.length()..after_dot) {
            after_string = "0" + after_string;
        }

        return (sign + String::from_int(int_p / coeff) + "." + after_string);
    }
}
*/