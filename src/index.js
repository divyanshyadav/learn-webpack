import './styles.css'
import arrowFunction from './arrowFunction'

console.log('Hello World!!')
arrowFunction()

class Person {
    constructor(name) {
        this.name = name
    }
}

const person = new Person('Shipra')
console.log(person)
