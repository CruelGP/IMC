/* 
Default import e export
    Exportamos qualquer time de dado e, ao importar, podemos dar qualquer nome.

        //utils.js
            export dedault 'algum dado'
        
        // ou, para um dado já existente
            const text = 'alguma coisa'

        // main.js
        import qulquerNome from './utils.js'

    ! Só podemos usar um default por arquivo !


Named export
    Exportamos uma variável ou função e, ao importar, devemos colocar o mesmo nome.
    
        //ultils.js
            export const today = date.now()

        //exportando um valor já existente
            const double = number => number * 2
            export {double}

    //exportando diversos
    //export {today, double}
    
    // main.js
        import {today} from './utils.js'



    //utils.js
        const date = new Date()
        const greeting = name => `hello ${name}`


        export default function (argument){
            console.log(date,greenting(argument))
        }

        export {date, greeting}

        //main.js
             import funcaoPadrao, {date, greeting} from './utils.js'

import as
    É possivel renomear um ou mais dados que foram exportados

        //ultils.js
            export function sum (a, b){
                return a + b
            }

        // main.js
            import {sum as soma} from './utils.js'

import*as
    Pòdemos importa todos os named e exportse dar um nome padão.
        //utils.js
            export const sum = (a, b) => a + b
            export const multiply = (a, b) => a * b
            export const subtract = (a, b) => a - b
            export const divide = (a, b) => a / b
        //ou
        //export { num, multiply, subtract, divide}

        //main.js
        import * as calculator from './utils.js'
*/