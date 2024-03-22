function printInf() {
  console.log(`Name: ${this.name}, Age: ${this.age}`)
};

const person = {
  name: 'Petr',
  age: 20
};

printInf.call(person);