//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email= email;
    this.phone= phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let array = [];
array[0]= new User(8,'Ira','Popovych', 'Ira2345@gmail.com', '+380994324055');
array[1]= new User(2,'Lina','Popovy', 'Ira2345@gmail.com', '+380994324056');
array[2]= new User(3,'Vasya','Popovyc', 'Ira2345@gmail.com', '+380994324057');
array[3]= new User(4,'Yulia','Pop', 'Ira2345@gmail.com', '+380994324058');
array[4]= new User(6,'Nadia','Popovyk', 'Ira2345@gmail.com', '+380994324059');
array[5]= new User(5,'Natalia','Popovyl', 'Ira2345@gmail.com', '+380994324050');
array[6]= new User(7,'Petro','Popovym', 'Ira2345@gmail.com', '+380994324067');
array[7]= new User(1,'Sofia','Popovyn', 'Ira2345@gmail.com', '+380994324097');
array[8]= new User(9,'Lesya','Popovyc', 'Ira2345@gmail.com', '+380994324079');
array[9]= new User(10,'Tanya','Popovyz', 'Ira2345@gmail.com', '+380994324095');
console.log(array);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersfilter = array.filter((user) => user.id % 2 === 0);
console.log(usersfilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array.sort(function (a, b) {
    return a.id - b.id;
}));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id,name,surname,email,phone,order) {
        this.name = name;
        this.id=id;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrclient = [];
arrclient[0] = new Client(1, 'Ira', 'Lodko', 'ira1235@gmail.com', '+38094646483', ['abcd', 'abcs', 'abck']);
arrclient[1] = new Client(6, 'Irap', 'Lodkf', 'ira1264@gmail.com', '+38094646483', ['abcd', 'abcs', 'abck','jrnf','nhcnvf']);
arrclient[2] = new Client(8, 'Irag', 'Lodka', 'ira1284@gmail.com', '+38094646483', ['abcd', 'abcs', 'abck']);
arrclient[3] = new Client(5, 'Irah', 'Lodkl', 'ira1247@gmail.com', '+38094846483', ['abcd', 'abcs', 'abck','fkjnh']);
arrclient[4] = new Client(9, 'Irs', 'Lodkl', 'ira1764@gmail.com', '+38094636483', ['abcd', 'abcs', 'abck','fjhgh']);
arrclient[5] = new Client(2, 'Irt', 'Lodki', 'ira1454@gmail.com', '+380946476483', ['abcd', 'abcs', 'abck','sqrpb']);
arrclient[6] = new Client(4, 'Irl', 'Lodkt', 'ira1974@gmail.com', '+38094647483', ['abcd', 'abcs', 'abck','shgjgh','vjt']);
arrclient[7] = new Client(3, 'Irn', 'Lodke', 'ira1864@gmail.com', '+38094646483', ['abcd', 'abcs', 'abck','cjgtt','jgnh']);
arrclient[8] = new Client(7, 'Irb', 'Lodky', 'ira124@gmail.com', '+380946464683', ['abcd', 'abcs', 'abck', 'srj']);
arrclient[9] = new Client(10, 'Iv', 'Lodkb', 'ira123@gmail.com', '+38094646467', ['abcd', 'abcs', 'abck','sjty','fjgh','djgh','jfjg']);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrclient.sort(function (a, b) {
    return a.order.length - b.order.length
}));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, speed, volume) {
    this.model = model;
    this.producer=producer;
    this.year=year;
    this.speed=speed;
    this.volume=volume;
    this.drive = () => console.log(`їдемо зі щвидкістю ${this.speed}`);
    this.info = ()  => console.log(`model: ${this.model}
    producer: ${this.producer}
    year: ${this.year}
    speed: ${this.speed}
    volume: ${this.volume}`);
    this.increaseMaxSpeed = (newspeed) => this.speed += newspeed;
    this.changeYear = (newValue) => this.year = newValue;
    this.addDriver = (driver) => this.maindriver = driver;
}
let car1 = new Car('Volkswagen', 'Germany', 2018,250,2.0);
console.log(car1);
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(20));
let driver = {
    name: 'Igor',
    age: 32
}
car1.addDriver(driver);
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carconstruct {
    constructor(model, producer, year, speed, volume, maindriver) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
        this.maindriver = maindriver;
    }

    driver() {
        console.log(`їдемо зі щвидкістю ${this.speed}`)
    };

    info() {
        console.log(`model: ${this.model}
    producer: ${this.producer}
    year: ${this.year}
    speed: ${this.speed}
    volume: ${this.volume}`)
    };

    increaseMaxSpeed(newSpeed) {
        this.speed += newSpeed;
    };
    changeYear(newValue) {
        this.year=newValue;
    };
    addDriver(driver) {
        this.maindriver = driver;
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,size) {
    this.name=name;
    this.age=age;
    this.size=size;
}
let cinderellaarr = [];
cinderellaarr[0] = new Cinderella('Eli',23,37);
cinderellaarr[1] = new Cinderella('Elis',23,36);
cinderellaarr[2] = new Cinderella('Elina',23,35);
cinderellaarr[3] = new Cinderella('Ali',23,38);
cinderellaarr[4] = new Cinderella('Neli',23,39);
cinderellaarr[5] = new Cinderella('Lina',23,40);
cinderellaarr[6] = new Cinderella('Olga',23,34);
cinderellaarr[7] = new Cinderella('Emmi',23,32);
cinderellaarr[8] = new Cinderella('Emma',23,31);
cinderellaarr[9] = new Cinderella('Emili',23,30);

class Prince {
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}

let mainprince = new Prince('Artur', 26,37);
let princess = cinderellaarr.filter((princ) => princ.size === mainprince.size);
console.log(princess);

let result = cinderellaarr.find(cinderella => cinderella.size === mainprince.size);
console.log(result);