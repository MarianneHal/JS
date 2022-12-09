//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
//let newarray = [];
//for (const user of users) {

//}
//console.log(newarray);
for (let i = 0; i < users.length; i++) {
    let userdiv = document.createElement('div')
    document.body.appendChild(userdiv)
    userdiv.innerText = `${users[i].name} ${users[i].age} ${users[i].status} ${users[i].address.city} ${users[i].address.country} ${users[i].address.street} ${users[i].address.houseNumber}`
}

for (const user of users) {
    let maindiv = document.createElement('div')
    document.body.appendChild(maindiv)

    let name = document.createElement('div')
    name.innerText = `${user.name}`

    let age = document.createElement('div')
    age.innerText = `${user.age}`

    let status = document.createElement('div')
    status.innerText = `${user.status}`

    let address = document.createElement('div')
    address.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`


    maindiv.append(name, age, status, address)


}

for (const user of users) {
    let secondMainDiv = document.createElement('div')
    document.body.appendChild(secondMainDiv)

    let secondName = document.createElement('div')
    secondName.innerText = `${user.name}`

    let secondAge = document.createElement('div')
    secondAge.innerText = `${user.age}`

    let secondStatus = document.createElement('div')
    secondStatus.innerText = `${user.status}`

    let secondAddress = document.createElement('div')

    let addresscity = document.createElement('div')
    addresscity.innerText = `${user.address.city}`

    let addresscountry = document.createElement('div')
    addresscountry.innerText = `${user.address.country}`

    let addressstreet = document.createElement('div')
    addressstreet.innerText = `${user.address.street}`

    let addresshous = document.createElement('div')
    addresshous.innerText = `${user.address.houseNumber}`

    secondAddress.append(addresscity, addresscountry, addressstreet, addresshous)
    secondMainDiv.append(secondName, secondAge, secondStatus, secondAddress)

}

//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
 //   створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let contentPage = document.getElementById('content')
let ul = document.createElement('ul')
contentPage.appendChild(ul)
let h2 = document.getElementsByTagName('h2')
console.log(h2)
for (const h2Element of h2) {
    let li = document.createElement('li')
    li.innerText = h2Element.innerText
    ul.appendChild(li)
}



//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
for (const rule of rules) {
    let mainDivRules = document.createElement('div')
    document.body.appendChild(mainDivRules)

    let oneDiv = document.createElement('div')
    let oneh2 = document.createElement('h2')
    oneh2.innerText = `${rule.title}`
    let oneP = document.createElement('p')
    oneP.innerText = `${rule.body}`
    oneDiv.append(oneh2, oneP)

    mainDivRules.appendChild(oneDiv)
}