 //Сворити масив не цензцрних слів.
 // Сворити інпут текстового типу.
 // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
 //кинути алерт з попередженням.
 //Перевірку робити при натисканні на кнопку

let arraywords = ['one', 'two', 'three', 'four', 'five'];
let inputOne = document.createElement('input');
 let button = document.createElement('button');
 button.innerText = 'Click';
document.body.append(inputOne, button)

 button.onclick = () => {
     for (let i = 0; i < arraywords.length; i++) {
         if (inputOne.value === arraywords[i]) {
             alert('Its a bad word')
         }
          else {console.log(inputOne.value)}
     }
 }


 //- Сворити масив не цензцрних слів.
 // Сворити інпут текстового типу.
 // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
 // Кинути алерт з попередженням у випадку якщо містить.
 // Перевірку робити при натисканні на кнопку

 let arraywordsTwo = ['one', 'two', 'three', 'four', 'five'];
 let inputTwo = document.createElement('input');
 let buttonTwo = document.createElement('button');
 buttonTwo.innerText = 'Click';
 document.body.append(inputTwo, buttonTwo)

 buttonTwo.onclick = () => {
    let str = inputTwo.value
     let newArray = str.split(' ')
     for (let i = 0; i < newArray.length; i++) {
         for (let j = 0; j < arraywordsTwo.length; j++) {
             if (newArray[i] === arraywordsTwo[j]) {
                 alert('Its a bad sentens')
             } else {
                 console.log(inputTwo.value)
             }
         }
     }
 }


 //- Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('mainButton')
 let menuButton = menu[0]
 let divmenu = document.getElementsByClassName('mainDiv')
 mainDiv = divmenu[0]

menuButton.onclick = (e) => {
     mainDiv.style.display = 'block'
menuButton.onclick = () => {
     mainDiv.style.display = 'none'
 }
}

 // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
 // Вывести список комментариев в документ, каждый в своем блоке.
 //  Добавьте каждому комментарию по кнопке для сворачивания его body.
let aarayComment =  [
    {
     tittle: 'lorem',
     body: 'lorem psum dolo sit ameti'
    },
    {
        tittle: 'lorem',
        body: 'lorem psum dolo sit ameti'
    },
    {
        tittle: 'lorem',
        body: 'lorem psum dolo sit ameti'
    },
    {
        tittle: 'lorem',
        body: 'lorem psum dolo sit ameti'
    },
    {
        tittle: 'lorem',
        body: 'lorem psum dolo sit ameti'
    }

 ]
 let mainCommentDiv = document.createElement('div')
 document.body.appendChild(mainCommentDiv)
 for (const aarayCommentElement of aarayComment) {
     let divComment = document.createElement('div')
     mainCommentDiv.appendChild(divComment)
     let h2 = document.createElement('h2')
     let p = document.createElement('p')
     let buttonHide = document.createElement('button')
     buttonHide.innerText = 'hide'
     h2.innerText = `${aarayCommentElement.tittle}`
     p.innerText = `${aarayCommentElement.body}`
     divComment.append(h2, p, buttonHide)
     buttonHide.onclick = () => {
         p.style.display = 'none'
     }
 }




 // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

 let newButton = document.createElement('button')
 newButton.innerText = 'hide me'
 let divButton = document.createElement('div')
 document.body.appendChild(divButton)
 divButton.appendChild(newButton)
 newButton.onclick = () => {
     divButton.style.display = 'none'
 }

 //Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
 // При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
 // Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//console.dir(mainCommentDiv)
 //console.dir(mainCommentDiv.offsetWidth)
 //let children = document.body.children
 //console.log(children)

 let arrayBody = document.body.children
 console.log(arrayBody)
 for (const arrayBodyElement of arrayBody) {
     arrayBodyElement.onclick = () => {
         console.log(arrayBodyElement.tagName, arrayBodyElement.className, arrayBodyElement.id, arrayBodyElement.clientWidth, arrayBodyElement.clientHeight )
     }
 }




 //- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
 // При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
 // Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

 let arrayBodyTwo = document.body.children
 console.log(arrayBody)
 let divinfo = document.getElementsByClassName('info')

 for (const arrayBodyTwoElement of arrayBodyTwo) {
     arrayBodyTwoElement.onclick = () => {
         let divInfo = document.createElement('div')
         document.body.appendChild(divInfo)
         divInfo.classList.add('info')
         let tagName = document.createElement('div')
         let className = document.createElement('div')
         let idName = document.createElement('div')
         let size = document.createElement('div')
         tagName.innerText = arrayBodyTwoElement.tagName
         className.innerText = arrayBodyTwoElement.className
         idName.innerText = arrayBodyTwoElement.id
         size.innerText = arrayBodyTwoElement.clientWidth * arrayBodyTwoElement.clientHeight
         divInfo.append(tagName, className, idName, size)
 }}


 //Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
 let divImg = document.createElement('div')
 document.body.appendChild(divImg)
 let img1 = document.createElement('img')
 img1.src = 'https://webmaestro.com.ua/img/blog/20181208171932_.jpg'
 let img2 = document.createElement('img')
 img2.src = 'data:image/jpeg;base64,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'
 let img3 = document.createElement('img')
 img3.src = 'data:image/jpeg;base64,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'
 divImg.append(img1, img2, img3)
 let buttonRight = document.createElement('button')
 let buttomLeft = document.createElement('button')
 buttonRight.innerText = '→'
 buttomLeft.innerText='←'
 divImg.append(buttomLeft, buttonRight)
 img1.style.display = 'block'
 img2.style.display = 'none'
 img3.style.display = 'none'
 buttonRight.onclick = () => {
     img1.style.display = 'none'
     img2.style.display = 'block'
     buttonRight.onclick = () => {
         img2.style.display = 'none'
         img3.style.display = 'block'
     }
 }

 buttomLeft.onclick = () => {
     img3.style.display = 'none'
     img2.style.display = 'block'
     buttomLeft.onclick = () => {
         img2.style.display = 'none'
         img1.style.display = 'block'
     }
 }

// взять массив пользователей
 let usersWithAddress = [
     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
 ];
 let divCheckBox = document.createElement('div')
 document.body.appendChild(divCheckBox)
 divCheckBox.innerText = 'False'
 let inputArray = document.createElement('input')
 inputArray.type = 'checkbox'
 divCheckBox.appendChild(inputArray)
 let divUsers = document.createElement('div')
 document.body.appendChild(divUsers)
 inputArray.onclick = () => {
     const result = usersWithAddress.filter(user => user.status === false)
     for (const resultElement of result) {
         let divUser = document.createElement('div')
         divUser.innerText = `${resultElement.name} ${resultElement.age}`
         divUsers.appendChild(divUser)
     }
 }
let divCheckBox2 = document.createElement('div')
 document.body.appendChild(divCheckBox2)
 divCheckBox2.innerText = 'Older 29'
 let inputArray2 = document.createElement('input')
 inputArray2.type = 'checkbox'
 divCheckBox2.appendChild(inputArray2)
let divUsers2 = document.createElement('div')
 document.body.appendChild(divUsers2)
 inputArray2.onclick = () => {
         const result2 = usersWithAddress.filter(user => user.age > 29)
         for (const result2Element of result2) {
             let divUser2 = document.createElement('div')
             divUser2.innerText = `${result2Element.name} ${result2Element.age}`
             divUsers2.appendChild(divUser2)

     }
 }
 // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
 //3й - оставляет тех у кого город киев
 //Данные выводить в документ
