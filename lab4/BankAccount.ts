interface IBankAccount {
    money : number;
    deposit : (value:number)=>void
}

interface IPerson {
    name : string;
    bankAccount : IBankAccount;
    hobbies: string[]
}

let bankAccount : IBankAccount = {
    money: 2000,
    deposit(value : number){
        this.money += value;
    }
};

let mySelf: IPerson = {
    name: "John"
    , bankAccount: bankAccount,
    hobbies:["Violin", "Cooking"]
};

mySelf.bankAccount.deposit(3000);
console.log(mySelf)