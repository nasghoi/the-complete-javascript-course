// oop

const me = {
    name: 'nasr',
    age: 26
}

class Person {
    // class body
    constructor(name, age) {
        this.name = name // name is property of the class
        this.age = age
    }

    greet() {
        console.log('Hello, I am ' + this.name + ' and I am ' + this.age + ' years old')
    }
}

const you = new Person('Jaey', 24)
const them = new Person('Raf', 17)

console.log(you, them)

you.greet()

class Gamer extends Person {
    constructor(name, age, games) {
        super(name, age)
        this.games = games
    }
}

const guy = new Gamer('Man', 23, 'EA')
// guy.games = 'pes'

console.log(guy)

class MyClass {
    constructor(name) {
        this._name = name
    }

    get name() {
        console.log('Fetch current name') // we can console this
        return this._name
    }

    set name(value) {
        this._name = value
    }
}

const obj = new MyClass('nab')
console.log(obj.name)
obj.name = 'nas'
console.log(obj.name)