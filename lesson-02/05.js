let passport = {
    name: "Petr",
    surname: "Petrov",
};


// let passportCopy = Object.assign ({}, passport)
// passportCopy.name = 'Ivan'


let clonePassport = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in passport) {
    clonePassport[key] = passport[key];
}
// теперь clone это полностью независимый объект с тем же содержимым
clonePassport.name = "Ivan"; // изменим в нём данные
console.log(passport.name)
console.log(clonePassport.name);

