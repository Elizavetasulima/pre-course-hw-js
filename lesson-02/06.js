let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passport1WithAddress = {...passportWithAddress}
passport1WithAddress.address={...passportWithAddress.address}
passport1WithAddress.address.city= 'Bobryisk'

console.log(passportWithAddress)
console.log(passport1WithAddress)

