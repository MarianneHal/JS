//Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=0;
if(x!==0) {console.log('Вірно!')
} else {console.log('Не вірно!')}



//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let time=56;
if(time<=15 && time>=0) {console.log('I')
} else if (time<=30 && time>15) {console.log('II')
} else if (time<=45 && time>=30) {console.log('III')
}else if (time<=59 && time>=45) {console.log('IV')}



//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a=+prompt('Number 1')
let b=+prompt('number 2')
if (a>b) {document.write(a)}
else if (b>a) {document.write(b)}
else if (a===b) {document.write(a+b)}
else {document.write('Try again')}

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch ('1') {
    case '1':
        console.log('monday');
        break;
    case '2':
        console.log('tuesday');
        break;
    case'3':
        console.log('wednesday');
        break;
    case'4':
        console.log('thursday');
        break;
    case'5':
        console.log('friday');
}

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y=prompt() || 'default';
console.log(y);
