//'use strict';
//
///**
// * Эту функцию трогать не нужно
// */
//function print (text) {
//    alert(text);
//}
//
//
///**
// * Эту функцию нужно поменять так,
// * чтобы функция sayHello работала корректно
// */
//function isValid (name){
//    
//if (!name){
//    return false;
//} 
//if (name.length < 4){
//    return false;
//}
//if (name.indexOf(' ') !== -1 ){
//    return false;
//}
//    
//    return true;
//}
//
//function sayHello () {
//  
//    let userName = prompt('Введите ваше имя');
//    if (isValid(userName)) {
//        print('Welcome back, ' + userName + '!');
//    } else {
//        print('Некорректное имя');
//    }
//}
//sayHello();

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
function isValid (name){
    if ((!name) || (name.length < 4) || (name.indexOf(' ') !== -1 )){
        name = false;
    }  
    else  {
       name = true;
    }
 
  return name;

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
