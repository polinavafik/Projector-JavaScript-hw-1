// Я чесно не дуже була впевнена як краще усе оформити

// 1) Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = userNames.map(function (fullName) {
    const name = ` ${fullName}`;                 // додаємо пробіл перед кожним елементом фуллНейм, щоб усе працювало як треба
    let initialsBox = '';                        // создаємо пусту коробку куди помістимо ініціали

    for (let i = 0; i < name.length; i++) {
        if (name[i] === ' ') {                   // якщо поточний елемент нашого фуллНейм - пробіл
            initialsBox += `${name[i + 1]}.`     // то ми додаємо в коробку наступну після пробілу літеру з крапкою у кінці
        }
    }
    return initialsBox;                          // повертаємо коробку з результатом

}).sort();                                       // сортуємо усі наші фуллНейм елементи за абеткою :)

console.log(userNames);
console.log(initials);                           // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//варіант 2
let userNamesSort = userNames.sort();
const initials1 = userNames.map(function (userName) {
    const arrayOfStrings = userName.split(' ');
    const initials = arrayOfStrings.map(namePart => namePart.charAt(0));
    const str = initials.join('.');
    return str;
})
console.log(initials1);

//-----------------------------------------------------------------------------------------------------------------------------

// 2) Задача на розворот числа:
const currentMaxValue = 4589;

let reverseMaxValue =
    Number(currentMaxValue
        .toString()                              //робимо строку з числа
        .split('')                               // робимо массив зі строки + розділяємо цифри
        .reverse()                               // переворачуємо усе
        .join('')                                // зклеюємо обратно в одне число
    );

console.log(`currentMaxValue: ${currentMaxValue}`)
console.log(`reverseMaxValue: ${reverseMaxValue}`);
console.log(`Type: ${typeof reverseMaxValue}`);


//-----------------------------------------------------------------------------------------------------------------------------

// 3) Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((acc, curr) => {
    return acc * curr;
})
console.log(productOfArray); // 24