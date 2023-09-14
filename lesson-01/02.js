let number1 = Math.floor(Math.random() * 100);
let result = number1 % 2 === 0 ? "четное" : "нечетное";
//console.log(number1 + ": Это " + result + " число");
//console.log(result(4));  // Вывод: четное
//console.log(result(7));  // Вывод: нечетное
//console.log(result(0));
console.log(`${number1}: Это ${result} число`);