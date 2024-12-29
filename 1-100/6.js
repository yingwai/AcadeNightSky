/*
?Создайте генератор, который будет на входе создавать прямую, а на ней будут отмечены 1 или несколько точек. Нужно будет определить что за промежуток на картинке(луч, интервал, отрезок, полуинтервал и тд.) Если крайняя точка входит в промежуток, она должна быть отмечена красным. Если не входит, то белым.

*/

/*
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

class Gap {
    public index: int,
    public name: String
}

class Main {
    function gen_puzzle() -> Puzzle {
        let gap = [
            new Gap {
                index: 0,
                name: "Луч (открытый луч)"
            },
            new Gap {
                index: 1,
                name: "Луч (замкнутый луч, закрытый луч)"
            },
            new Gap {
                index: 2,
                name: "Отрезок (сегмент)"
            },
            new Gap {
                index: 3,
                name: "Интервал (открытый интервал)"
            },
            new Gap {
                index: 4,
                name: "Полуинтервал (полусегмент)"
            }
        ][Main::getRandomIntInRange(0,4)]
        let canvas = Main::getGap(gap.index);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)]
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)]
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)]
        let task= "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let conditions = [
          " что это за промежуток",
          " что за промежуток",
          " какой это промежуток",
          " какой этот промежуток",
          " какой это интервал",
          " какой этот интервал",
          " что это за интервал",
          " что за интервал"
        ][Main::getRandomIntInRange(0, 7)];
        let conditionsIf = [
          "известно что крайние точки входящие в промежуток отмечены красным",
          "известно, что его крайние точки выделены красным",
          "его точки обозначены красным цветом",
          "его конечные точки отмечены красным",
          "его крайние точки помечены красным цветом",
          "его точки выделены красным",
          "его крайние точки выделены красным",
          "его точки отмечены красным цветом",
          "его крайние точки обозначены красным",
          "его точки помечены красным цветом"
        ][Main::getRandomIntInRange(0, 9)];
            
        let sc=name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " промежуток: \n <img canvas>"
            + "\nЕё попросили " + whatDo + conditions + ", если " 
            + conditionsIf + ". ";
        if(Main::getRandomIntInRange(0, 1) == 1 ) {
            sc="Требуется определить промежуток: \n <img canvas> " 
                + "\nEсли  " + conditionsIf + ".";
        }
        
        let desc = sc 
            + "\n Формат вывода, следующий: название промежутка"
            + "\n Пример: Полуинтервал (полусегмент)"
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "";
        if (gap.index == 0) {
            expl = "В данном нам промежутке находим красную точку, т.к. она \"открытая\" и больше на промежутке нет нужных нам точек, получается что ответ: " + gap.name;
        } else if (gap.index == 1) {
            expl = "В данном нам промежутке находим красную точку, т.к. она \"закрытая\" и больше на промежутке нет нужных нам точек, получается что ответ: " + gap.name;
        } else if (gap.index == 2) {
            expl = "В данном нам промежутке находим две красные точки, т.к. они обе \"закрытые\", получается что ответ: " + gap.name;
        } else if (gap.index == 3) {
            expl = "В данном нам промежутке находим две красные точки, т.к. они обе \"открытые\", получается что ответ: " + gap.name;
        } else if (gap.index == 4) {
            expl = "В данном нам промежутке находим две красные точки, т.к. одна из точек \"открытая\", а другая \"закрытая\", получается что ответ: " + gap.name;
        }
        
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
                    answer: gap.name
                } as Reveal
            ],
        }
    }
    
    public function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    function getGap(gap: int) -> Canvas {
        let canvas = Canvas::create(400, 150, Color::rgb(255, 255, 255));
        
        Canvas::line(canvas, 1, 75, 395, 75, Color::rgb(0, 0, 0), 2);
        Canvas::line(canvas, 390, 70, 395, 75, Color::rgb(0, 0, 0), 2);
        Canvas::line(canvas, 390, 80, 395, 75, Color::rgb(0, 0, 0), 2);
        
        let place: List<int> = [];
        
        if (gap == 0) {
            place.push(Main::getRandomIntInRange(1, 380));
                
            Canvas::fillEllipse(canvas, place[0], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 255, 255), 1)
        }
        else if (gap == 1) {
            place.push(Main::getRandomIntInRange(1, 380));
                
            Canvas::fillEllipse(canvas, place[0], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 0, 0), 1)
        }
        else if (gap == 2) {
            place.push(Main::getRandomIntInRange(1, 360));
            place.push(Main::getRandomIntInRange(place[0] + 9, 380));
            
            Canvas::fillEllipse(canvas, place[0], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 0, 0), 1)
            Canvas::fillEllipse(canvas, place[1], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 0, 0), 1)
        }
        else if (gap == 3) {
            place.push(Main::getRandomIntInRange(1, 360));
            place.push(Main::getRandomIntInRange(place[0] + 9, 380));
            
            Canvas::fillEllipse(canvas, place[0], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 255, 255), 1)
            Canvas::fillEllipse(canvas, place[1], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 255, 255), 1)
        }
        else if (gap == 4) {
            place.push(Main::getRandomIntInRange(1, 360));
            place.push(Main::getRandomIntInRange(place[0] + 9, 380));
            
            if (Main::getRandomIntInRange(0, 1) == 1) {
                Canvas::fillEllipse(canvas, place[0], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 0, 0), 1)
                Canvas::fillEllipse(canvas, place[1], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 255, 255), 1)
            } else {
                Canvas::fillEllipse(canvas, place[0], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 255, 255), 1)
                Canvas::fillEllipse(canvas, place[1], 71, 7, 7, Color::rgb(255, 0, 0), Color::rgb(255, 0, 0), 1)
            }
        }
        
        let count = Main::getRandomIntInRange(0, 8);
        
        while (count != 0) {
            let newPlace = Main::getRandomIntInRange(1, 380);
            let isDecrease = true;

            for (let i in 0..place.length()) {
                if (place[i] - newPlace <= 9 && place[i] - newPlace >= -9) {
                  isDecrease = false;
                  break;
                }
            }

            if (isDecrease) {                
                place.push(newPlace);

                if (Main::getRandomIntInRange(0, 1) == 1) {
                    Canvas::fillEllipse(canvas, newPlace, 71, 7, 7, Color::rgb(0, 0, 0), Color::rgb(0, 0, 0), 1)
                }
                else {
                    Canvas::fillEllipse(canvas, newPlace, 71, 7, 7, Color::rgb(0, 0, 0), Color::rgb(255, 255, 255), 1)
                }
                
                count -= 1;
            }
        }
        
        return canvas
    }
}
*/