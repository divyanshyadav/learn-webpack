const capitalize = s => 
    s && s
    .split('')
    .map((char, i) => i === 0 ? char.toUpperCase() : char)
    .join('')

const greet = name => {
    const message = `hello, ${capitalize(name)}`
    console.log(capitalize(message))
}

export default greet