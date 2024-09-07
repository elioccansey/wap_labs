interface Person {
    name: string;
    age:number;
    isStudent:boolean
}

function describePerson(person :Person):string{
    const {name, age, isStudent} = person;
    return `${name} is ${age} years old and is${isStudent ? " " :" NOT "}a student`;
}

const person : Person = {name: "Alice", age :25, isStudent:false}
console.log(describePerson(person));
