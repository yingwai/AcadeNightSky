/*
?Сформируйте генератор заданий, который будет создавать небольшой список из песен. Каждая строчка будет состоять из названия песни/исполнителя и временного интервала - длительности песни. В задании надо будет определить какое-то свойство исходя из названий, либо характеристик интервалов. Например: напишите общую длительность всех песен, которые исполняет группа "Quenn", или посчитайте количество композиций, длительность которых составляет меньше четырёх минут.

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

class Song {
    public name: String,
    public group: String,
    public time: String
}

class Main {
    function gen_puzzle() -> Puzzle {
        let songs = [
            new Song { name: "Imagine", group: "John Lennon", time: "3:07"},
            new Song { name: "Jealous Guy", group: "John Lennon", time: "4:16"},
            new Song { name: "Instant Karma!", group: "John Lennon", time: "3:21"},
            new Song { name: "Shape of You", group: "Ed Sheeran", time: "4:24"},
            new Song { name: "Perfect", group: "Ed Sheeran", time: "4:23"},
            new Song { name: "Thinking Out Loud", group: "Ed Sheeran", time: "4:41"},
            new Song { name: "Bohemian Rhapsody", group: "Queen", time: "5:55"},
            new Song { name: "We Will Rock You", group: "Queen", time: "2:02"},
            new Song { name: "Don't Stop Me Now", group: "Queen", time: "3:29"},
            new Song { name: "Blinding Lights", group: "The Weeknd", time: "3:20"},
            new Song { name: "Save Your Tears", group: "The Weeknd", time: "3:35"},
            new Song { name: "Starboy", group: "The Weeknd", time: "3:50"},
            new Song { name: "Rolling in the Deep", group: "Adele", time: "3:48"},
            new Song { name: "Hello", group: "Adele", time: "4:55"},
            new Song { name: "Set Fire to the Rain", group: "Adele", time: "4:02"},
            new Song { name: "Smells Like Teen Spirit", group: "Nirvana", time: "5:01"},
            new Song { name: "Come as You Are", group: "Nirvana", time: "3:39"},
            new Song { name: "Heart-Shaped Box", group: "Nirvana", time: "4:39"},
            new Song { name: "Billie Jean", group: "Michael Jackson", time: "4:54"},
            new Song { name: "Thriller", group: "Michael Jackson", time: "5:57"},
            new Song { name: "Beat It", group: "Michael Jackson", time: "4:18"},
            new Song { name: "Hotel California", group: "Eagles", time: "6:30"},
            new Song { name: "Take It Easy", group: "Eagles", time: "3:32"},
            new Song { name: "Desperado", group: "Eagles", time: "3:33"},
            new Song { name: "Uptown Funk", group: "Bruno Mars", time: "4:30"},
            new Song { name: "24K Magic", group: "Bruno Mars", time: "3:46"},
            new Song { name: "Treasure", group: "Bruno Mars", time: "3:10"},
            new Song { name: "Someone Like You", group: "Adele", time: "4:45"},
            new Song { name: "When We Were Young", group: "Adele", time: "4:50"},
            new Song { name: "Skyfall", group: "Adele", time: "4:46"}
        ];
        
        for (let i in 0..50) {
            songs = Main::shuffleArray(songs);
        }
        
        songs = songs[0..Main::getRandomIntInRange(3, 10)];
        
        let n = Main::getRandomIntInRange(0, 8);
        let gp = Main::getRandomIntInRange(0, songs.length()-1);
        let more = Main::getRandomIntInRange(0, 1) == 1;
        let end = Main::getRandomIntInRange(3, 5);
        let con = [
            "общее количество песен группы " + songs[gp].group + " из списка",
            "общее количество песен из списка, которое не исполняла группа " + songs[gp].group + " ",
            "общую длительность всех песен, которые исполняет группа " + songs[gp].group,
            "общую длительность всех песен, которые не исполняет группа " + songs[gp].group,
            "количество песен, длительность которых составляет " + if (more) {"больше"} else {"меньше"} + " " + String::from_int(end) + " минут",
            "количество песен, которые состоят из одного слова",
            "количество песен, которые состоят больше чем из одного слова",
            "количество песен, у которых длительность (в секундах) " + if (more) {"кратно"} else {"не кратно"} + " 10",
            "количество песен, у которых длительность (в секундах) " + if (more) {"чётное число"} else {"нечётное число"}
        ][n];
        
        let ans = Main::getAns(songs, n, gp, more, end);
        
        let name = "Инна|Аня|Алина|Оля|Катя|Полина|Арина|Вера|Надя|Соня|Бьянка|Василиса|Ванесса|Вероника|Жанна".split("|")[Main::getRandomIntInRange(0, 14)];
        let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[Main::getRandomIntInRange(0, 3)];
        let what = "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[Main::getRandomIntInRange(0, 5)];
        let task = "отмечен|показан|выставлен|указан|виден".split("|")[Main::getRandomIntInRange(0, 4)];
        let whatDo = "вычислить|понять|выяснить|определить|найти".split("|")[Main::getRandomIntInRange(0, 4)];

        let sc = name + " получила " + wher + " " + what + ". "
            + " На листике " + task + " список песен состоящих из названия, исполнителя и длительности песни: \n"
        for (let i in 0..songs.length()) {
            sc += String::from_int(i+1) + ": " + songs[i].name + " - " + songs[i].group + " (" + songs[i].time + ")\n";
        }
        sc += "\nЕё попросили " + whatDo + " " + con + ".";

        if(Main::getRandomIntInRange(0, 1) == 1) {
            sc = "Дан список песен состоящих из названия, исполнителя и длительности песни: \n"
            for (let i in 0..songs.length()) {
                sc += String::from_int(i+1) + ": " + songs[i].name + " - " + songs[i].group + " (" + songs[i].time + ")\n";
            }
            sc += "\nТребуется определить " + con + ".";
        }

        let desc = sc 
            + if (n == 2 || n == 3) {"\n Пример ответа: \"5:05\""} else {""}
            + "\n<reveal ans>Ответ</reveal>";
        
        let expl = "Просмотрим все песни подряд: \n";
        if (n == 0) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group == songs[i].group) {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - подходит\n"
                } else {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - не подходит\n"
                }
            }
        }
        else if (n == 1) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group != songs[i].group) {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - подходит\n"
                } else {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - не подходит\n"
                }
            }
        }
        else if (n == 2) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group == songs[i].group) {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - учитываем\n"
                } else {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - не учитываем\n"
                }
                
                if (i == songs.length()-1) {
                    expl += "Находим общую длительность: ";
                    for (let j in 0..songs.length()) {
                        if (songs[gp].group == songs[j].group) {
                            expl += songs[i].time + " + "
                        }
                        
                        
                    }
                    
                    expl = expl[0..expl.length()-2] + " = " + ans + "\n"
                }
            }
        }
        else if (n == 3) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group != songs[i].group) {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - учитываем\n"
                } else {
                    expl += String::from_int(i+1) + " песню исполняет " + songs[i].group + " - не учитываем\n"
                }
                
                if (i == songs.length()-1) {
                    expl += "Находим общую длительность: ";
                    for (let j in 0..songs.length()) {
                        if (songs[gp].group != songs[j].group) {
                            expl += songs[j].time + " + "
                        }
                        
                        
                    }
                    
                    expl = expl[0..expl.length()-2] + " = " + ans + "\n"
                }
            }
        }
        else if (n == 4) {
            for (let i in 0..songs.length()) {
                if (more) {
                    if (String::to_int(songs[i].time.split(":")[0]) * 60 + String::to_int(songs[i].time.split(":")[1]) > end * 60) {
                        expl += String::from_int(i+1) + ". " + songs[i].time + " > " + String::from_int(end) + ":00 - подходит\n"
                    } else {
                        expl += String::from_int(i+1) + ". " + songs[i].time + " < " + String::from_int(end) + ":00 - не подходит\n"
                    }
                } else {
                    if (String::to_int(songs[i].time.split(":")[0]) * 60 + String::to_int(songs[i].time.split(":")[1]) < end * 60) {
                        expl += String::from_int(i+1) + ". " + songs[i].time + " < " + String::from_int(end) + ":00 - подходит\n"
                    } else {
                        expl += String::from_int(i+1) + ". " + songs[i].time + " > " + String::from_int(end) + ":00 - не подходит\n"
                    }
                }
            }
        }
        else if (n == 5) {
            for (let i in 0..songs.length()) {
                if (songs[i].name.split(" ").length() == 1) {
                    expl += String::from_int(i+1) + ". " + songs[i].name + " состоит из одного слова - подходит\n"
                } else {
                    expl += String::from_int(i+1) + ". " + songs[i].name + " состоит не из одного слова - не подходит\n"
                }
            }
        }
        else if (n == 6) {
            for (let i in 0..songs.length()) {
                if (songs[i].name.split(" ").length() > 1) {
                    expl += String::from_int(i+1) + ". " + songs[i].name + " состоит больше чем из одного слова - подходит\n"
                } else {
                    expl += String::from_int(i+1) + ". " + songs[i].name + " состоит из одного слова - не подходит\n"
                }
            }
        }
        else if (n == 7) {
            expl += "Отбрасываем минуты, т.к. если их перевести в секунды получается тот же ответ.\n";
            for (let i in 0..songs.length()) {
                if (more) {
                    if (String::to_int(songs[i].time.split(":")[1]) % 10 == 0) {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " кратно 10 - подходит\n"
                    } else {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " не кратно 10 - не подходит\n"
                    }
                } else {
                    if (String::to_int(songs[i].time.split(":")[1]) % 10 != 0) {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " не кратно 10 - подходит\n"
                    } else {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " кратно 10 - не подходит\n"
                    }
                }
            }
        }
        else if (n == 8) {
            expl += "Отбрасываем минуты, т.к. если их перевести в секунды получается тот же ответ.\n";
            for (let i in 0..songs.length()) {
                if (more) {
                    if (String::to_int(songs[i].time.split(":")[1]) % 2 == 0) {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " чётное - подходит\n"
                    } else {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " нечётное - не подходит\n"
                    }
                } else {
                    if (String::to_int(songs[i].time.split(":")[1]) % 2 != 0) {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " нечётное - подходит\n"
                    } else {
                        expl += String::from_int(i+1) + ". " + songs[i].time.split(":")[1] + " чётное - не подходит\n"
                    }
                }
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

    function getRandomIntInRange(a: int, b: int) -> int {
        return (Math::random() * (b - a + 1) as float + a as float) as int;
    }
    
    
    function shuffleArray(array: List<Song>) -> List<Song> {
        for (let i in 1..array.length()) {
            let j = Main::getRandomIntInRange(i-1, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    
    function getAns(songs: List<Song>, n: int, gp: int, more: bool, end: int) -> String {
        let ans = "0"
        let iterval = 0;
        if (n == 0) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group == songs[i].group) {
                    ans = String::from_int(String::to_int(ans) + 1);
                }
            }
        }
        else if (n == 1) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group != songs[i].group) {
                    ans = String::from_int(String::to_int(ans) + 1);
                }
            }
        }
        else if (n == 2) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group == songs[i].group) {
                    iterval += String::to_int(songs[i].time.split(":")[0]) * 60 + String::to_int(songs[i].time.split(":")[1]);
                }
                
                if (i == songs.length()-1) {
                    ans = String::from_int(iterval / 60) + ":" + if (iterval % 60 < 10) {"0" + String::from_int(iterval % 60)} else {String::from_int(iterval % 60)}
                }
            }
        }
        else if (n == 3) {
            for (let i in 0..songs.length()) {
                if (songs[gp].group != songs[i].group) {
                    iterval += String::to_int(songs[i].time.split(":")[0]) * 60 + String::to_int(songs[i].time.split(":")[1]);
                }
                
                if (i == songs.length()-1) {
                    ans = String::from_int(iterval / 60) + ":" + if (iterval % 60 < 10) {"0" + String::from_int(iterval % 60)} else {String::from_int(iterval % 60)}
                }
            }
        }
        else if (n == 4) {
            for (let i in 0..songs.length()) {
                if (more) {
                    if (String::to_int(songs[i].time.split(":")[0]) * 60 + String::to_int(songs[i].time.split(":")[1]) > end * 60) {
                        ans = String::from_int(String::to_int(ans) + 1);
                    }
                } else {
                    if (String::to_int(songs[i].time.split(":")[0]) * 60 + String::to_int(songs[i].time.split(":")[1]) < end * 60) {
                        ans = String::from_int(String::to_int(ans) + 1);
                    }
                }
            }
        }
        else if (n == 5) {
            for (let i in 0..songs.length()) {
                if (songs[i].name.split(" ").length() == 1) {
                    ans = String::from_int(String::to_int(ans) + 1);
                }
            }
        }
        else if (n == 6) {
            for (let i in 0..songs.length()) {
                if (songs[i].name.split(" ").length() > 1) {
                    ans = String::from_int(String::to_int(ans) + 1);
                }
            }
        }
        else if (n == 7) {
            for (let i in 0..songs.length()) {
                if (more) {
                    if (String::to_int(songs[i].time.split(":")[1]) % 10 == 0) {
                        ans = String::from_int(String::to_int(ans) + 1);
                    }
                } else {
                    if (String::to_int(songs[i].time.split(":")[1]) % 10 != 0) {
                        ans = String::from_int(String::to_int(ans) + 1);
                    }
                }
            }
        }
        else if (n == 8) {
            for (let i in 0..songs.length()) {
                if (more) {
                    if (String::to_int(songs[i].time.split(":")[1]) % 2 == 0) {
                        ans = String::from_int(String::to_int(ans) + 1);
                    }
                } else {
                    if (String::to_int(songs[i].time.split(":")[1]) % 2 != 0) {
                        ans = String::from_int(String::to_int(ans) + 1);
                    }
                }
            }
        }
    
        return ans;
    }
}
*/