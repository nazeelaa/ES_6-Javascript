let personaldetails = {
    fn: 'nazeela',
    ln: 'kudari'
};
let fn = personaldetails.fn;
let ln = personaldetails.ln; 
console.log(personaldetails);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName, currentAge: age = 18 } = person;

// console.log(middleName); 
console.log(age); 
console.log(firstName); 