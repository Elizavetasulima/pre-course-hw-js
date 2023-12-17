let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportCopy = Object.assign ({}, passport)
passportCopy.name = 'Ivan'


// let passport1 = {}; // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in passport) {
// passport1[key] = passport[key];
// }
// // теперь clone это полностью независимый объект с тем же содержимым
// passport1.name = "Ivan"; // изменим в нём данные

console.log(passport)
console.log(passportCopy);