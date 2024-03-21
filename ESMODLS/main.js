import './utils.js' //nessa linha ele importa e já executa o arquivo

//pt 2
import { greeting, message,text } from './utils.js'
console.log(message,text)

//pt 2.1
import { message2,text2 } from './utils.js'
console.log(message2,text2)

//pt 2.2
import { today } from './utils.js'
console.log(today)

import {double} from './utils.js'
console.log(double(5))

//pt 3

import MBL,{date} from './utils.js'
console.log(date,greeting('Nadja'))

MBL('Su memo Gustavão')

//pt 4
import {sum as soma} from './utils.js'
console.log(soma(4, 3)) //A função "sum" foi renomeada para "soma" na linha 26 o "as" foi usado para renomear.

//pt 5
import * as calculator from './utils.js' // o " * " significa importar tudo e chama tudo de 'calculator'
console.log(calculator.sum2(47, 4))
console.log(calculator.multiply(47, 4))
console.log(calculator.subtract(47, 4))
console.log(calculator.divide(47, 4))