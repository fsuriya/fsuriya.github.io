const person = {
    name: 'Prayuth Chan-o-cha',
    age: 60
}

class Person{
    constructor(name="Prawit", age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} (${this.age})`);
    }
}

module.exports = {person,Person};