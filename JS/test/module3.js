// ЗАДАЧА 1
// В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля 
// с помощью условного оператора if. Пароль является надёжным, когда в нём есть хотя бы четыре 
// символа, один из которых — это дефис или нижнее подчёркивание. Выведите в консоль сообщения 
// «Пароль надёжный» или «Пароль недостаточно надёжный».

let password = `12_3`;

if (password.length >= 4 && (password.includes(`-`) || password.includes(`_`))) {
  console.log(`Пароль надежный`);
}
else {
  console.log(`Пароль недостаточно надёжный`);
}

// ЗАДАЧА 2
// В переменных userName, userSurname даны имя и фамилия пользователя. При этом в строках беспорядок 
// с большими и маленькими буквами, и нужно оформить строки единообразно. Для этого первые буквы имени 
// и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы). 
// Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных 
// операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» 
// для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.

let userName = `Pashok`;
let userSurname = `SerG`;
let nameCheck = false;
let surnameCheck = false;

let firstLetter = userName.substring(0, 1);
let restLetters = userName.substring(1);
nameCheck = userName === (firstLetter.toUpperCase() + restLetters.toLowerCase());
userName = firstLetter.toUpperCase() + restLetters.toLowerCase();

firstLetter = userSurname.substring(0, 1);
restLetters = userSurname.substring(1);
surnameCheck = userSurname === (firstLetter.toUpperCase() + restLetters.toLowerCase());
userSurname = firstLetter.toUpperCase() + restLetters.toLowerCase();

console.log(`${userName} ${userSurname} ${nameCheck} ${surnameCheck}`);