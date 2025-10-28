class Student {
    constructor(name, age){
        this.name = name ? name : Nergui;
        this.age = age ? age: 10000 ;
    }

    introduce(){
        return (`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
    }
}

const student = new Student("Sarah", 20);
console.log(student.introduce());