//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length);

let str2 ='lorem ipsum';
console.log(str2.length);

let str3='javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let str21 = 'hello world';
console.log(str21.toUpperCase());

let str22='lorem ipsum';

console.log(str22.toUpperCase());

let str23 = 'javascript is cool';
console.log(str23.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str31= 'HELLO WORLD';
console.log(str31.toLowerCase());

let str32='LOREM IPSUM';
console.log(str32.toLowerCase());

let str33='JAVASCRIPT IS COOL';
console.log(str33.toLowerCase());



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let result = str4.trim();
console.log(result);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToarray (str) {
    let split = str.split(' ');
    console.log(split);
}
stringToarray('Ревуть воли як ясла повні')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr=[10,8,-7,55,987,-1011,0,1050,0];
let map = arr.map(arr => String(arr));
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending' ) {
       let res = nums.sort(function (a,b) {
            if(a>b) return 1;
            if(a<b) return -1;
        });
        console.log(res);
    }
    else if (direction === 'descending') {
       let res = nums.sort(function (a,b) {
            if(a>b) return -1;
            if(a<b) return 1;
        });
       console.log(res);
    }
}
sortNums([1,8,4,2,6], 'ascending');


// - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ]
console.log(coursesAndDurationArray.sort(function (a, b) {
    return b.monthDuration - a.monthDuration;
}));
let coursfilter = coursesAndDurationArray.filter((duration) => duration.monthDuration > 5);
console.log(coursfilter);



//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//{
   // cardSuit: '', // 'spade(піка)', 'diamond(бубна)','heart', 'clubs(хркст)'
     //   value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    // color:'', // 'red','black'

 let cards = [
     {cardsSuit: 'spade', value: '6', color: 'black'},
     {cardsSuit: 'spade', value: '10', color: 'black'},
     {cardsSuit: 'spade', value: 'ace', color: 'black'},
     {cardsSuit: 'spade', value: 'jack', color: 'black'},
     {cardsSuit: 'spade', value: 'queen', color: 'black'},
     {cardsSuit: 'spade', value: 'king', color: 'black'},
     {value: 'jocker', color: 'black'},
     {cardsSuit: 'diamond', value: '6', color: 'red'},
     {cardsSuit: 'diamond', value: '10', color: 'red'},
     {cardsSuit: 'diamond', value: 'ace', color: 'red'},
     {cardsSuit: 'diamond', value: 'jack', color: 'red'},
     {cardsSuit: 'diamond', value: 'queen', color: 'red'},
     {cardsSuit: 'diamond', value: 'king', color: 'red'},
     {value: 'jocker', color: 'red'},
     {cardsSuit: 'heart', value: '6', color: 'red'},
     {cardsSuit: 'heart', value: '10', color: 'red'},
     {cardsSuit: 'heart', value: 'ace', color: 'red'},
     {cardsSuit: 'heart', value: 'jack', color: 'red'},
     {cardsSuit: 'heart', value: 'queen', color: 'red'},
     {cardsSuit: 'heart', value: 'king', color: 'red'},
     {value: 'jocker', color: 'red'},
     {cardsSuit: 'clubs', value: '6', color: 'black'},
     {cardsSuit: 'clubs', value: '10', color: 'black'},
     {cardsSuit: 'clubs', value: 'ace', color: 'black'},
     {cardsSuit: 'clubs', value: 'jack', color: 'black'},
     {cardsSuit: 'clubs', value: 'queen', color: 'black'},
     {cardsSuit: 'clubs', value: 'king', color: 'black'},
     {value: 'jocker', color: 'black'}
 ]

let cardsfilter = cards.filter((card) => card.cardsSuit === 'spade' && card.value === 'ace');
console.log(cardsfilter);
let cardsfilter2 = cards.filter((card) => card.value === '6');
console.log(cardsfilter2);
let cardsfilter3 = cards.filter((card) => card.color === 'red');
console.log(cardsfilter3);
let cardsfilter4 = cards.filter((card) => card.cardsSuit === 'diamond');
console.log(cardsfilter4);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((accumulator, card ) => {
    if (card.cardsSuit==='spade'){
        accumulator.spades.push(card);
    }
    else if (card.cardsSuit==='heart'){
        accumulator.hearts.push(card);
    }
    else if (card.cardsSuit==='clubs'){
        accumulator.clubs.push(card);
    }
    else if (card.cardsSuit==='diamond'){
        accumulator.diamonds.push(card);
    }
    return accumulator;

},{spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);