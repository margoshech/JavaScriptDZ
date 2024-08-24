console.log("Текст из script.js!");
/*
Создайте переменную num и присвойте ей значение 123. Выведите
значение этой переменной в консоль
*/
let num = 123;
console.log(num);

/*
Создайте переменную а и присвойте ей значение 5, переопределите
переменную а на значение 7, выведите переменную а в консоль
*/
let a = 5;
a = 7;
console.log(a);


//Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С помощью функции console.log выведите в консоль содержимое переменной b.
let b = (1+2+3); 
console.log(b);

/*
Создайте переменную c со значением 10 и переменную d со
значением 2.
a. Все созданные переменные должны быть логично названы
b. Создайте переменную суммы и присвойте сумму чисел (c,d)
c. Создайте переменную разности и присвойте разность чисел
(c,d)
d. Создайте переменную прозведения и присвойте произведение
чисел (c,d)
e. Создайте переменную частного и присвойте деление чисел
(c,d)
f. Выведите в консоль все созданные переменные
g. Сложите все созданные переменные и выведите результат в
консоль
*/

let c = 10;
let d = 2;

let sumCandD = c+d;
console.log(sumCandD);

let minusCandD = c - d;
console.log(minusCandD);

let umnojCandD = c*d;
console.log(umnojCandD);

let chastnoyeCandD = c / d;
console.log(chastnoyeCandD);

let allResult = sumCandD + minusCandD + umnojCandD + chastnoyeCandD;
console.log(allResult);

/*
1. Запишите в переменную a число 1.5, а в переменную b - число 0.75.
Найдите сумму значений этих переменных и выведите ее на экран.
2. Создайте переменную a, запишите в нее какое-нибудь
положительное или отрицательное число. Выведите на экран это
число с обратным знаком.
*/

let aNew = 1.5;
let bNew = 0.75;
let sumAB = aNew+bNew;
console.log(sumAB);

let aModule = -5;
if (aModule < 0)
    console.log(Math.abs(aModule));
else
    console.log("-" +(aModule));

/*
Создайте строку с вашем именем и строку с вашей фамилией.
Выведите эти данные в консоль
2. Создайте переменную с текстом 'java' и переменную с текстом
'script'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'javascript'.
3. Создайте переменную с текстом 'hello' и переменную с текстом
'world'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'hello world'.
*/

let myName = "Margarita";
let mySecondName = "Raduchenko";
console.log((myName) + " " + (mySecondName));

let strJava = 'java';
let strScript = 'script';
console.log((strJava) + (strScript));

let strHello = 'hello';
let strWorld = 'world';
console.log((strHello) + " " +(strWorld));