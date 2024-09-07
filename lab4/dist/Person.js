"use strict";
function describePerson(person) {
    const { name, age, isStudent } = person;
    return `${name} is ${age} years old and is${isStudent ? " " : " NOT "}a student`;
}
const person = { name: "Alice", age: 25, isStudent: false };
console.log(describePerson(person));
