//-Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let btn = document.getElementsByClassName('btn')
let arrayGoods = [];
  // let objGoods = {
    //    nameGoods: '',
       // numberGoods: '',
       // priceGoods: '',
      //  fotoGoods: ''
  //  }



let form = document.forms.goods;
let elemName = form.elements.name;
let elemNumber = form.elements.number;
let elemPrice = form.elements.price;
let elemFoto = form.elements.foto;

function getInputValue(e) {
    let nameValue = elemName.value
    let numberValue = elemNumber.value
    let priceValue = elemPrice.value
    let fotoValue = elemFoto.value
    let objGoods = {
        nameGoods: nameValue,
        numberGoods: numberValue,
        priceGoods: priceValue,
        fotoGoods: fotoValue
    }
    arrayGoods.push(objGoods)
    localStorage.setItem('goods', JSON.stringify(arrayGoods));
    e.preventDefault();
}

let div = document.createElement('div')
document.body.appendChild(div)
let a = document.createElement('a')
a.href = 'list.html'
a.innerText = 'Перейти до товарів'
div.appendChild(a)


 //let content = document.createElement('content');
//content.classList.add('#content');
 //content.innerText = 'Вижіли текст і подивись що відбувається. Тут буде міні магія. Удачі. Всіх благ';
 //let p = document.createElement('p');
 //document.body.appendChild(content);
 //content.addEventListener('mouseup', function () {
    //let selectText = document.getSelection().toString();
    //let newText = content.innerHTML.replace(selectText, <i><b>${selectText}</b></i>);
    //content.innerHTML = newText;
    //document.body.appendChild(p);
 //})

//масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.



//Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
function addBold() {
    const selection = window.getSelection().getRangeAt(0)
    const text = selection.extractContents()
    const span = document.createElement('span')
    span.classList.toggle('bold')
    span.appendChild(text)
    selection.insertNode(span)
}
document.onmouseup = () =>{
    addBold()
}


//window.onselect = () => {
//    addBold()
//}

//за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs




//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
arrayClassName = [];
function  explorer(htmlElement) {
    if (htmlElement.className.length !== 0) {
    arrayClassName.push(htmlElement.classList[0])
        arrayClassName.push(htmlElement.classList[1])
    }
    let children = htmlElement.children
    if (children.length !== 0) {
        for (const child of children) {
            explorer(child)
        }
    }
}
explorer(document.body)
console.log(arrayClassName)

