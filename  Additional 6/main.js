//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function stringcut (str, n) {
    let res=[];
    for (let i = 0; i < str.length; i+=n) {
        res.push(str.substring(i, Math.min(str.length, i+n)))
    }
    return res;
}
document.write(stringcut('пропозиція', 3));




// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, lenght) => {
    let result2 = str.substring(0, lenght);
    return result2;
}
let characters = delete_characters('ревуть воли як ясла повні', 8);
console.log(characters);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    let result = str.toUpperCase().replaceAll(' ', '-');
    return result;
}
let insert = insert_dash('хіба ревуть воли як ясла повні');
console.log(insert);




// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let regfirst = (str) => {
    let result = str[0].toUpperCase()+str.substring(1);
    return result;
}
let resregfirst = regfirst('хіба ревуть воли як ясла повні');
console.log(resregfirst);


// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let optimization = (name) => {
    let result = name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
    return result;
}
console.log(optimization(n3));




// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (value, limit) => {
    let arr=[];
    for (let i = 0; i < value; i++) {
        arr.push(Math.round(Math.random()*limit));
    }
   return arr;
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let randomarr = random(11, 100);
console.log(randomarr);
let resultrandom = randomarr.sort(function (a, b) {
    return a - b;
});
console.log(resultrandom);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let arrrandom = random(15, 100);
let result2 = arrrandom.filter(function (item) {
    return item % 2 ===0;
})
console.log(result2);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
  let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
       arr[i]=arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);

    }
    let str2=arr.join(" ");
    console.log(str2);
}
let result6 = capitalize('хіба ревуть воли');
console.log(result6);


// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
function validate (email) {
        if(email.indexOf('@')) {
            let x = email.indexOf('@');
            if (email[x-1]){
            let y = email.indexOf('.');
            if (y-x>=2) {
                console.log('valid');}
                else {console.log('Error')}}
        else {console.log('Error')}

        }
        else {console.log('Error')}
    }

let test = validate('someemail@gmail.com');
console.log(test);




// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.




let coursesArray = [
           {
                 title: 'JavaScript Complex',
               monthDuration: 5,
                 hourDuration: 909,
                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
              },
            {
                  title: 'Java Complex',
                  monthDuration: 6,
                  hourDuration: 909,
                  modules: ['html',
                     'css',
                     'js',
                      'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                    'git',
                    'java core',
                    'java advanced']
            },
            {
                  title: 'Python Complex',
                  monthDuration: 6,
                  hourDuration: 909,
                  modules: ['html',
                      'css',
                      'js',
                      'mysql',
                      'mongodb',
                      'angular',
                      'aws',
                      'docker',
                      'python core',
                      'python advanced']
              },
              {
                  title: 'QA Complex',
                  monthDuration: 4,
                  hourDuration: 909,
                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
              },
              {
                  title: 'FullStack',
                  monthDuration: 7,
                  hourDuration: 909,
                  modules: ['html',
                      'css',
                      'js',
                      'mysql',
                      'mongodb',
                      'react',
                      'angular',
                      'aws',
                      'docker',
                      'git',
                      'node.js',
                      'python',
                      'java']
              },
              {
                  title: 'Frontend',
                  monthDuration: 4,
                  hourDuration: 909,
                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
              }
          ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort(function (a, b) {
    return b.modules.length - a.modules.length;
}));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (string, stringsearch) => {
    let array =[];
    for (let i = 0; i < string.length; i++) {
        if(string[i]===stringsearch) {
            array.push(string[i]);
        }
    }
    console.log(array.length);
}
let result10 = count('Астрономия это наука о небесных объектах', 'о');
console.log(result10);


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString2 = (str,n) => {
    let arr = str.split(" ");
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(arr[i]);

    }
    let str2=array.join(" ");
    console.log(str2);
}
let resultcutString = cutString2('Сила тяжести приложена к центру масс тела', 5);
console.log(resultcutString);



// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню

let booksarray = [
    {
        name: 'Три товариші',
        numberofpages: 216,
        author: 'Еріх Марія Ремарк',
        genre: 'роман'

    },
    {
        name: 'Маленький Принц',
        numberofpages: 128,
        author: 'Антуан де Сент-Екзюпері',
        genre: 'казка'

    },
    {
        name: 'Джордж і незламний код',
        numberofpages: 350,
        author: ['Люсі Гокінг', 'Стівен Гокінг'],
        genre: 'роман'

    },
]
function themostbig (arr) {
    arr.sort((a,b) => b.numberofpages - a.numberofpages);
    console.log(arr[0]);
}
let themostbigbook = themostbig(booksarray);
console.log(themostbigbook);

function themostlong (arr) {
    arr.sort((a,b) => b.name.length - a.name.length);
    console.log(arr[0]);
}
let themostlongname = themostlong(booksarray);
console.log(themostlongname);


let twoauthors = booksarray.filter((authors) => authors.author.length === 2);
console.log(twoauthors);
console.log(booksarray.sort(function (a, b) {
    return b.numberofpages - a.numberofpages
}));

