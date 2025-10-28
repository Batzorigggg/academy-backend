class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        return this.balance = this.balance + amount;
    }

    withdraw(amount) {
        if (this.balance - amount < 0) { console.log("Not enought balance!")}
        else {return this.balance = this.balance - amount;}

    }
    getBalance(){
        return this.balance;
    }
}

const acc = new BankAccount("Enkhkee", 100);

acc.deposit(50);  
acc.withdraw(30);
console.group(acc.getBalance());