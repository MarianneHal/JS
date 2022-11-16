// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minvalue = (a,b,c) => {
    if(a<b && a<c) {
        console.log(a);
    } else if (b<c && b<a) {
        console.log(b);
    }
    else if (c<a && c<b ) {
        console.log(c);
    }
    else {
        console.log('Error');
    }
}
minvalue(10, 15, 4)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxvalue = (a,b,c) => {
    if(a>b && a>c) {
        console.log(a);
    } else if (b>c && b>a) {
        console.log(b);
    }
    else if (c>a && c>b ) {
        console.log(c);
    }
    else {
        console.log('Error');
    }
}
maxvalue(10, 15, 4)
// - створити функцію яка повертає найбільше число з масиву
let arr = (array) => {
    let max = array[0];
    for (const arrayElement of array) {
        if (arrayElement > max){
            max=arrayElement;
        }
    }
    return max;
}
let arrmax = arr([1,5,8,9,3]);
console.log(arrmax);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumarray = (array) => {
    let sum=0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
let arraysum = sumarray([1,2,3,4,5,6])
console.log(arraysum);
// - Дано натуральное число n. Выведите все числа от 1 до n.

let number = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i)
        }
    }
    let numbers = number(10);
console.log(numbers);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let abnumber = (a, b) => {
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }
}
let numberab = abnumber(15,10);
console.log(numberab);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arrnumber = (array, i) => {
    let y = array[i];
    let z = array[i+1];
    for (let j = 0; j < array.length; j++) {
        array[i]=z;
        array[i+1]=y;
    }
    console.log(array);
}
 arrnumber([1,2,3,4], 2);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let change = (arr) => {
    let array=[];
    let array2=[]
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        if(x!==0) {
            array.push(x);
            }
        if (x===0) {
            array2.push(x);
        }
        }
    for (let i = 0; i < array2.length; i++) {
        array.push(array2[i]);
    }
console.log(array);
    }

let y = change([1, 0, 0, 2]);
console.log(y);



