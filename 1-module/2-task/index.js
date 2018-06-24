'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
//    let userName = name;
//    if ((userName === '') || (userName.length < 4) ||(userName.indexOf(' ') !== -1 )){
//        return false;
//    }
//    else  {
//      return true;
//    }
    console.log(name);
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

