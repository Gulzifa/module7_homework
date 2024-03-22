const person = {
    name: 'Petr',
    age: 20,
};

function setFullName(fullName) {
    person.fullName = fullName
};

const setPersonFullName = setFullName.bind(person);
setPersonFullName('John Smith');

console.log(person);
console.log(person.fullName);
