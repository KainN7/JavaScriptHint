// 1 Переменные
// camelCase
// const firstName = 'Alexsander'
// const age = 24 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'fldg' // err
// const withNum5 = '5'
// const 5withNum = 5 //err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// ctrl+x Вырезать строчку

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// ctrl+/ Закомментировать

// 3 Операторы

// let currentYear = 2021
// const birthYear = 1997

// const age = currentYear + birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Alexsander'
// const age = 24
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5 Приоритет операторов
// const fullAge = 24
// const birthYear = 1997
// const currentYear = 2021

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 24=>24
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//   console.log('Все готово!')
// } else {
//   console.log('Все не готово!')
// }
// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators

// 8 Функции

// function calculateAge(year) {
//   return 2021 - year
// }
//
// //
//
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//    console.log('Вообще-то это уже будущее!')
//   }
// }
// logInfoAbout('Александр', 1997)
// logInfoAbout('Виталя', 1995)
// logInfoAbout('Виталя', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
// const person = {
//   firstName: 'Alexsander',
//   lastName: 'Meshcheryakov',
//   year: 1997,
//   languages: ['Ru', 'En', 'De'],
//   hasWife: false,
//   greet: function () {
//     console.log('greet from person')
//   }
// }
//
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// console.log(person)
// person.isProgrammer = true
// person.greet()
//




