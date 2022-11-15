//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b) {
    let result = a*b;
    return result;
}
let x=area(10,15);
console.log(x);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sircle(r) {
    let result = Math.PI*r^2;
    return result;
}
let y=sircle(10);
console.log(y);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h,r) {
    let result=2*Math.PI*r*h+2*Math.PI*r^2;
    return result;
}
let z=cylinder(5,10);
console.log(z);

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayPrint(arr) {
    for (const l of arr) {
        console.log(l);

    }
    }
arrayPrint([1,2,3,4,5,6]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragrapf (text) {
    document.write(`<p>`);
    document.write(`${text}`)
    document.write(`</p>`)
}
paragrapf('Good morning')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 function list (text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
     document.write(`<li>${text}</li>`);
     document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
list('one');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2 (text, number) {
    document.write(`<ul>`);
    for (let i=0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list2('two', 4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrlist (arr) {
    document.write('<ul>');
    for (let l=0; l<arr.length; l++) {
        document.write(`<li>${arr[l]}</li>`);
    }
    document.write('</ul>');
}
arrlist([1,2,'one','two']);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

users=[
    {  name: 'Ira',
        id: 1234,
        age:24
    },
    {   name: 'Lina',
        id: 1235,
        age:25
    },
    {  name: 'Igor',
        id: 1236,
        age:26
    },

]



let userPrint = (array) => {
    for (let l=0; l<array.length; l++) {
        document.write(`<div>`);
        document.write(`<h1>${array[l].name}</h1>`);
        document.write(`<h1>${array[l].id}</h1>`);
        document.write(`<h1>${array[l].age}</h1>`);
        document.write(`</div>`);
    }
}

userPrint(users);


// - створити функцію яка повертає найменьше число з масиву

let arrmin = (array)=> {
    let min=array[0];
    for (const minElement of array) {
        if (minElement<min) min=minElement;
    }
    return min;
}
let minElementarr=arrmin([1,4,5,6,7,8]);
console.log(minElementarr);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumarray =(array) => {
    let i=0;
    for (const arrayElement of array) {
        i+=arrayElement;
    }
    return i;
}
let arr=sumarray([1,2,3,7])
console.log(arr);