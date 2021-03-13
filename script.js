jQuery(function() {

    let timer = 5;
    let count = 0;
    let colors = ["#6dd5ed", "#F7971E", "#5D26C1", "#f64f59", "#a8ff78", "#f5af19", "#20002c"];
    let width = $(document).width() - 100;
    let height = $(document).height() - 100;
    
    
//           Таймер

    function setTimer() {   
        $("#timer").text(timer);
    setInterval ( function() {

       if(timer > 0) {
          timer--; 
        $("#timer").text(timer);  
        
      }else {
        $("#text").css("display", "flex");
        $("#message").text("You lose");
        
      }
       }
     , 1000);
      }
     
    setTimer();

//        Рандомное положение фигур

    function randomPosition(el) {
       let x = Math.floor(Math.random()*width);
       let y = Math.floor(Math.random()*height);

        $(el).css("left", x);
        $(el).css("top", y);
    }
    function circleToggle(el) {
        $(el).toggleClass("circle");
    }
    function colorsChange(el) {
        $("#block").css("background-color", colors[count % 6]);  
    }
    console.log(9 % 7);
    //           Нажатие

        $("#block").on("click", function() {
    randomPosition(this);
    circleToggle(this);
    colorsChange(this)

        count++;
        timer++;
        $("#count").text(count);
        $("#timer").text(timer);

    //            Победа

    if (count == 10) {
        $("#text").css("display", "flex");
        $("#message").text("You won");
    }

   })
              
//           Кнопка = "Новая игра"

        $("#newgame").on("click", function() {
        timer = 5;
        count = 0;
        $("#count").text(count);
        $("#timer").text(timer);
        $("#text").css("display", "none");
        $("#block").css("left", 0);
        $("#block").css("top", 0);

  
    })
   
   
   
   
   
   


})



/*
1. строка, число, объект, null, undefined, NaN, bigInt, bool

let obj = [
    "key" : "value"
    "ключ" : "значение"
    "name" : "Java"
    "surname" : "Script"
]
obj.name; //Java
obj.sername; //Script

Инкремент и декремент
i++  увеличение на 1
i--  уменьшение на 1
             План
1.Таймер обратонго отсчета:
   Нужно использовать сетинтервал.На мнужно каждую менять цифру на экране.
            Условия.Базовая конструкция JS.
    if(true) {                   
        что-нибудьделать
    }
    let a;
    a = 20;  

   if(a > 100) {
        console.log('a больше 100 на' + (a-100));
  } else {
        console.log(a);
     }

2. Функция рамдомного положения фигур
   2.1 Функция измения формы фигуры
   2.2 функция изменения цвета самой фигуру
3. Функция которая добавляет очки по клику на фигуру и вызывает функцию (2)
4. Отображение текста по выигрышу/проигрушу
5. Обработчик нажатия на кпонку
-------------------------------------------------------------------------
Таймер
Функции(методы) планирования которые заранее описаны в JS.
Данные функции(методы) через определенные промежутки времени.
1. setInterval - позволяет выполнять функции через какие-то интервалы.
    let timer = setInteerval(funtion||code, dealy{задерка}, arg [необязательно])
2. setTimeout - позволяет использовать функции единожды(только один раз)
    setTimeout(funtion||code, delay[], arg[])

    function bonus() {
        alert('Вы находитесь на нашем сайте 3 секунды. За это мы дарим вам БОНУС');

    }
    
    setTimeout(bonus, 3000);

    for, while, doWhile. Методы циклов 
    for(i; i<x; i++)

    while(true) {
        сделать что-то
    }
    __________________
    let a = 5;
    while(a > 0) {
        a--;
        console.log(a)
    }
    ____________________

    for(переменная, условие, итерация/шаг) {
        сделать что-то
    }
    for( let a = 5; a > 0; a--;) {
        console.log(a);
    }
    if(count == 6) {
            count = 0;
        }
        $(el).css("background-color", colors[count]);

        % - дробная част при делении.Все время убирает целое число
        7 % 6 = 1/6
        1 % 6 = 1/6
        13 % 6 = 2 1/6
*/

