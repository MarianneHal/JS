
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averege (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
let x = averege ([1,2,3,4,5]);
console.log(x);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minmax () {
    let min = arguments[0];
    let max = arguments[0];
    for (const Element of arguments) {
        if (Element < min) min = Element;
        if (Element > max) max = Element;
    }
    console.log(max);
    return min;
}
let y = minmax(1,2,3,4,5);
console.log(y);



// - створити функцію яка заповнює масив рандомними числами
let random = (value) => {
    let arr=[];
    for (let i = 0; i < value; i++) {
        arr.push(Math.round(Math.random()*100));
    }
   console.log(arr);
}
let xx = random(10);
console.log(xx);

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let random2 = (value, limit) => {
    let arr=[];
    for (let i = 0; i < value; i++) {
        arr.push(Math.round(Math.random()*limit));
    }
    console.log(arr);
}
let xxx = random2(10, 30);
console.log(xxx);




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reversearr (array) {
        array.reverse();
        console.log(array)
}
let a = reversearr([1,3,4,6]);
console.log(a);


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function arrayif () {
    if(arguments.length===1) {
        console.log(arguments[0]);
    }
    else if(arguments.length===2) {
       let x = arguments[0] + arguments[1];
       console.log(x);
    }
}
arrayif(3, 5);




// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function arrayadd (arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]+arr2[i]);
    }
    return arr3;
}
let resultarr = arrayadd([1,2,3], [1,2,3]);
console.log(resultarr);




// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function arrobject (array) {
    let arraykey=[];
    for (let i = 0; i < array.length; i++) {
        arraykey.push(Object.keys(array[i]));
    }
    return arraykey;
}

let n = arrobject([{name: 'Dima', age:13}, {model: 'Camry'}]);
console.log(n);

function arrvalue (array) {
    let result=[];
    for (let i = 0; i < array.length; i++) {
        result.push(Object.values(array[i]));
    }
    return result;
}
let m = arrvalue([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(m);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]