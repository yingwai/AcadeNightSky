/*
?Создайте генератор, создающий вариации следующей задачи:
?Дана матрица размера m*n. Указаны две точки - ячейка, откуда заходит человек и ячейка где стоит Горгона Медуза, а также направление её взгляда (вгляд идёт прямо и покрывает весь стобец, если направлен вертикально или всю строку, если горизонтально). Также в матрице размещены колонны в некоторых точках, которые "отбивают" взгляд Горгоны во всех 4 направлениях (то есть по всему столбцу и всей строке, где находится) , распространяя его. Известно, что человек окаменеет, как только зайдёт через дверь, если взгляд медузы проходит через стартовую ячейку человека или взгляд отбивается при помощи колонн так, чтобы проходить через стартовую ячейку.
?Генератор должен нарисовать матрицу произвольного размера, точку входа человека (она может находится любой крайней строке или столбце), точку расположения Горгоны и направление её взгляда. Также в произвольных ячейках матрицы нужно изобразить колонны. Решающий пазл должен будет определить, будет ли человек превращён в камень как только войдёт (от взгляда Горгоны люди превращаются в камни) или же нет?
! Не доделал, слишком много боли + фобия гпт
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
        let matrix_orig: List<List<int> > = [];
        let matrix_duo: List<List<int> > = [];
        let len = [Main::getRandomIntInRange(4, 10), Main::getRandomIntInRange(4, 10)];
        
        for (let i in 0..len[0]) {
            let row: List<int> = [];
            
            for (let j in 0..len[1]) {
                row.push(0)    
            }
            
            matrix_orig.push(row);
            matrix_duo.push(row);
        }
        
        let columns = Main::getRandomIntInRange(0, (len[0] + len[1]) / 2);
        for (let i in 0..columns) {
            let col = [Main::getRandomIntInRange(0, len[0]-1), Main::getRandomIntInRange(0, len[1]-1)];
            matrix_orig[col[0]][col[1]] = 2;
            matrix_duo[col[0]][col[1]] = 2;
        }
        
        let gargona = [Main::getRandomIntInRange(0, len[0]-1), Main::getRandomIntInRange(0, len[1]-1)];
        matrix_orig[gargona[0]][gargona[1]] = 3;
        matrix_duo[gargona[0]][gargona[1]] = 3;
        
        let side = ["влево", "вправо", "вверх", "вниз"][Main::getRandomIntInRange(0, 3)]
        
        matrix_duo = Main::processMatrix(matrix_duo, side);
        matrix_orig = Main::syncTwos(matrix_orig, matrix_duo);
        
        let person = [Main::getRandomIntInRange(0, len[0]-1), Main::getRandomIntInRange(0, len[1]-1)];
        let pos = true;
        while (pos && (person[0] == gargona[0] && person[1] == gargona[1])) {
            if (person[1] == 0 || person[1] == len[1]-1) {
                pos = false;
            } else if (person[0] == 0 || person[0] == len[0]-1) {
                pos = false;
            } else {
                person = [Main::getRandomIntInRange(0, len[0]-1), Main::getRandomIntInRange(0, len[1]-1)];
            }
        }
        
        let strMatrix = "\\(\\begin{pmatrix}";
        for (let m in 0..len[0]) {
            for (let i in 0..len[1]) {
                strMatrix += if (matrix_orig[m][i] == 0) {
                    "⬜"
                } else if (matrix_orig[m][i] == 1) {
                    "🟥"
                } else if (matrix_orig[m][i] == 2) {
                    "🔘"
                } else if (matrix_orig[m][i] == 3) {
                    "👩🏻"
                } else {""}
                + String::from_int(matrix_orig[m][i]);                
            
                if (m == person[0] && i == person[1]) {
                    strMatrix += "🧔🏼"
                }
                
                strMatrix += "&";
            }
            
            strMatrix = strMatrix[0..strMatrix.length()-1] + "\\\\"
        }
        strMatrix += "\\end{pmatrix}\\)";
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let task = "отмечено|показано|выставлено|указано|видно".split("|")[Main::getRandomIntInRange(0, 4)];
        let task = "отмечена|показана|выставлена|указана|видна".split("|")[Main::getRandomIntInRange(0, 4)];
        let task = "отмечены|показаны|выставлены|указаны|видны".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        //let conditions = [][Main::getRandomIntInRange(0, 10)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " "
            + "\nЕё попросили " + whatDo + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан " 
                + "Требуется определить ";
        }

        let desc = sc 
            + "\n Пример вывода, следующий: \"\""
            + "\n<reveal ans>Ответ</reveal>";

        let expl = "" + strMatrix;

        return new Puzzle {
            question: desc,
            solution: expl,
            images: [],
            reveals: [
                new RevealPrecise {
                    name: "ans",
                    answer: ""
                } as Reveal
            ],
        }
    }

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    function processMatrix(matrix: List<List<int> >, direction: String) -> List<List<int> > {
        let numRows = matrix.length();
        let numCols = matrix[0].length();
        
        let dx = 0;
        let dy = 0;
        if (direction == "влево") {
            dy = -1;
        } else if (direction == "вправо") {
            dy = 1;
        } else if (direction == "вверх") {
            dx = -1;
        } else if (direction == "вниз") {
            dx = 1;
        }

        let result = matrix;

        for (let i in 0..numRows) {
            for (let j in 0..numCols) {
                if (matrix[i][j] == 3) {
                    let x = i;
                    let y = j;

                    while (x >= 0 && x < numRows && y >= 0 && y < numCols) {
                        if (result[x][y] == 2) {
                            // Обрабатываем соседей вокруг 2
                            result = Main::markNeighbors(result, x, y);
                        } else if (result[x][y] == 0) {
                            // Меняем 0 на 1
                            result[x][y] = 1;
                        }
                        x += dx;
                        y += dy;
                    }
                }
            }
        }

        return result;
    }

    function markNeighbors(matrix: List<List<int> >, x: int, y: int) -> List<List<int> > {
        let numRows = matrix.length();
        let numCols = matrix[0].length();
        
        let res = matrix;
        
        let queue = [[x, y]];
        let index = 0; // Указатель на текущий элемент в очереди

        // Направления движения: вверх, вниз, влево, вправо
        let directions = [
            [-1, 0], // вверх
            [1, 0],  // вниз
            [0, -1], // влево
            [0, 1]  // вправо
        ];

        while (index < queue.length()) {
            let currentX = queue[index][0];
            let currentY = queue[index][1];
            index += 1;

            // Перебор направлений
            for (let d in 0..4) {
                let dx = directions[d][0];
                let dy = directions[d][1];

                let nx = currentX + dx;
                let ny = currentY + dy;

                while (nx >= 0 && nx < numRows && ny >= 0 && ny < numCols) {
                    if (res[nx][ny] == 0) {
                        // Меняем 0 на 1
                        res[nx][ny] = 1;
                    } else if (res[nx][ny] == 2) {
                        // Если нашли новую "2", добавляем её в очередь для обработки
                        res[currentX][currentY] = 1;
                        queue.push([nx, ny]);
                    } 
                    
                    nx += dx;
                    ny += dy;
                }
            }
        }

        return res;
    }
    
    function syncTwos(matrix: List<List<int> >, res: List<List<int> >) -> List<List<int> > {
        let numRows = matrix.length();
        let numCols = matrix[0].length();
        
        let updatedRes = res;

        for (let i in 0..numRows) {
            for (let j in 0..numCols) {
                // Если в matrix[i][j] стоит 2, добавляем 2 в updatedRes[i][j]
                if (matrix[i][j] == 2) {
                    updatedRes[i][j] = 2;
                }
            }
        }

        return updatedRes;
    }
}
*/