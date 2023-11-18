// Задача 1
// Запишите в переменные x и y координаты двух произвольных точек: 
// x1, y1 — первая точка; x2, y2 — вторая точка.Вычислите площадь прямоугольника, 
// противоположные углы которого представлены указанными точками.Выведите результат 
// с помощью console.log.

console.log('----------Задача 1----------');
console.log();

let x1 = Math.round(Math.random() * 20) - 10;
let y1 = Math.round(Math.random() * 20) - 10;
let x2 = Math.round(Math.random() * 20) - 10;
let y2 = Math.round(Math.random() * 20) - 10;

console.log('x1 =', x1);
console.log('y1 =', y1);
console.log('x2 =', x2);
console.log('y2 =', y2);
console.log();

let area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log('Площадь равна: ', area);
console.log();

// Задача 2
// Вычислите дробные части чисел a и b с точностью n. Выведите
// получившиеся числа с помощью console.log. Выведите результаты
// их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.
console.log('----------Задача 2----------');
console.log();

let precision = 3;
let num1 = 0.773;
let num2 = 0.1345;

console.log('Число 1 =', num1);
console.log('Число 2 =', num2);
console.log('Точность =', precision);
console.log();

let div1 = Math.floor(num1 % 1 * Math.pow(10, precision));
let div2 = Math.floor(num2 % 1 * Math.pow(10, precision));

console.log('Дробная часть числа 1 =', div1);
console.log('Дробная часть числа 2 =', div2);
console.log(div1, '>', div2, div1 > div2);
console.log(div1, '<', div2, div1 < div2);
console.log(div1, '>=', div2, div1 >= div2);
console.log(div1, '<=', div2, div1 <= div2);
console.log(div1, '=', div2, div1 === div2);
console.log(div1, 'не равно', div2, div1 != div2);

// Задача 3
// -Напишите генератор двух случайных чисел в диапазоне между n и m включительно. 
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// -Выведите два произвольных числа в консоль с помощью console.log.
// -Сравните два полученных числа. Выведите результаты их 
// сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
console.log('----------Задача 3----------');
console.log();

let n = -5;
let m = 7;
console.log('Диапазон чисел от', n, 'до', m);
console.log();

let min = Math.min(n, m);
let sum = Math.abs(n - m)

let number1 = Math.round(Math.random() * sum) + min;
let number2 = Math.round(Math.random() * sum) + min;

console.log('Число 1 =', number1);
console.log('Число 2 =', number2);
console.log();

console.log(number1, '>', number2, number1 > number2);
console.log(number1, '<', number2, number1 < number2);
console.log(number1, '>=', number2, number1 >= number2);
console.log(number1, '<=', number2, number1 <= number2);
console.log(number1, '=', number2, number1 === number2);
console.log(number1, 'не равно', number2, number1 != number2);


