var mercedes = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300,
    forSale: true
}

var bmw = {
    name: 'BMW',
    model: 'X6',
    engine: 3.0,
    year: 2018,
    color: 'white',
    hp: 313,
    forSale: false
}

var audi = {
    name: 'Audi',
    model: 'Q7',
    engine: 3.0,
    year: 2021,
    color: 'blue',
    hp: 249,
    forSale: true
}

var year = 2022;

mercedes.carAge = (year - mercedes.year);
bmw.carAge = (year - bmw.year);
audi.carAge = (year - audi.year);

var names = (mercedes.name + '-' + mercedes.model) + ', ' + (bmw.name + '-' + bmw.model) + ', ' + (audi.name + '-' + audi.model);
var averageAge = ((mercedes.carAge + bmw.carAge + audi.carAge) / 3);
var atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale ? 'Да, продается' : 'Нет, на данный момент ничего нет';
var allYoungerThanFive = mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5 ? 'Да, все автомобили младше 5лет' : 'Нет, есть и старше';
var atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250 ? 'Да, такой автомобиль имеется' : 'Нет, у все показатель выше';

alert('Марка и модель всех авто - ' + names);
alert('Средний возраст все авто - ' + averageAge);
alert('Хотя бы один автомобиль продаётся? - ' + atLeastOneForSale);
alert('Все авто младше 5 лет? - ' + allYoungerThanFive);
alert('Хоть один автомобиль имеет менее 250 лошадиных сил? - ' + atLeastOneHasLittleHp);

//Часть 2

var car = audi;
if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!');
} else {
    alert("Это - " + car.name + car.model);
}

if (car.carAge === 0) {
    alert('Новый автомобиль');
} else if (car.carAge <= 3) {
    alert('Свежий автомобиль');
} else {
    alert('Лет этому авто: ' + car.carAge);
}

//1.В примере ниже можно было бы обойтись car.engine <= 3.0 ? 'Экономичный автомобиль' : 'Прожорливый автомобиль'; Но сделал через вложенность.
//2.В примере ниже немного не понял про условие, по-поводу присвоить значение строки переменной, а только потом выводить в alert.
var consumption = car.engine > 3.0 ? 'Прожорливый автомобиль' : car.engine <= 3.0 ? 'Экономичный автомобиль' : 'Прожорливый автомобиль';
alert(consumption);

var russianColor = 'Красный';
switch (russianColor) {
    case 'Черный':
        audi.color = 'black';
        break;
    case 'Серебристый':
        audi.color = 'silver';
        break;
    case 'Красный':
        audi.color = 'red';
        break;
    case 'Белый':
        audi.color = 'white';
        break;
    case 'Серый':
        audi.color = 'gray';
        break;
    case 'Синий':
        audi.color = 'blue';
        break;
    default:
        alert('Невозможно определить цвет автомобился.')
}

alert(russianColor);

//Задание 6. Проверил с mercedes и bmw , все работала согласно условиям. Если только, что-то не досмотрел =)