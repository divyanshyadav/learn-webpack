import './styles.css'
import greet from './greet'

class Person {
    constructor(name) {
        this.name = name
    }
}

const person = new Person('Shipra')
greet(person.name)