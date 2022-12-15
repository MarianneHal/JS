//зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let target = document.querySelector('.target')
fetch('http://jsonplaceholder.typicode.com/users')
.then((info) => info.json())
.then ((users) => {
for (const user of users) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.innerText = user.name + '' + user.id
    a.href = 'details.html?id=' + user.id
    li.appendChild(a)
    target.appendChild(li)
}
})