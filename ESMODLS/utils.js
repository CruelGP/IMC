//utils.js
const message = "mensagem" // essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar
console.log(message)

//pt2
const text = "Texto"
const mensagem = "Outra mensagem"
export {text,message}

//pt 2.1
export const text2 = "texto2"
export const message2 = "Outra mensagem2"

//pt 2.2
export const today = Date.now()

//exportando um valor já existente
    const double = number => number * 2
    export {double}

//exportando diversos
//export {today, double}

//pt 3

const date = new Date()
const greeting = name => `hello ${name}`

export default function (argument){
    console.log(date, greeting(argument))
}

export {date, greeting}

//pt 4

export function sum (a, b){
    return a + b
}


//pt 5
export const sum2 = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b