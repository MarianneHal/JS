//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let x=[];
 x[0]=1;
 x[1]=2;
 x[2]=3;
 x[3]='one';
 x[4]='two';
 x[5]='three';
 x[6]='four';
 x[7]=4;
 x[8]=5;
 x[9]='five';

console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3]);
console.log(x[4]);
console.log(x[5]);
console.log(x[6]);
console.log(x[7]);
console.log(x[8]);
console.log(x[9]);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let one={
    tittle: 'Moby-Dick',
    pageCount: 427,
    genre: 'Adventurefiction',
    author: [{
        name: 'HermanMelville',
        age: 203
    }]
}

let two={
    tittle: 'The little Prince',
    pageCount: 96,
    genre: 'Fantasy',
    author: [{
        name: 'Antonio de Saint-Exupery',
        age: 122
    }]
}

let three={
    tittle: 'TreeComrades',
    pageCount: 499,
    genre: 'War novel',
    author: [{
        name: 'Erich Maria Remark',
        age:  124
    }]
}

console.log(three.author[0].name);


//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
    let users= [{name:'Oleg', username:'aaa', password:'123a'}, {name:'Olga', username:'ooo', password:'123o'}, {name:'Vita', username:'vvv', password:'123v'}, {name:'Yana', username:'yyy', password:'123y'}, {name:'Lilia', username:'lll', password:'123l'}, {name:'Igor', username:'iii', password:'123i'}, {name:'Bogdan', username:'bbb', password:'123b'}, {name:'Lina', username:'ddd', password:'123d'}, {name:'Sofia', username:'sss', password:'123s'}]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)


