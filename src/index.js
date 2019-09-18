import './styles.css'
import greet from './greet'
import createPerson from './person'

const person = createPerson('Roy')
greet(person.getName())