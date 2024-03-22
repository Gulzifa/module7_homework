const users = [
    { name: "Фёдр", age: 15 },
    { name: "Анна", age: 18 },
    { name: "Елена", age: 32 },
]
const usersAgeMore18 = users.filter(user => {
    return user.age >= 18;
})

const nameOfUsers = users.map(user => {
    return user.name;
})

console.log(usersAgeMore18);
console.log(nameOfUsers);
