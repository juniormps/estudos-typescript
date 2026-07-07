// 1 - Numbers
let x: number = 10

x = 15

console.log(typeof x)

const y: number = 3.14329492349

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = 'Matheus'

console.log(firstName.toUpperCase())

const lastName: string = 'Battisti'

let fullName: string

fullName = firstName + ' ' + lastName

console.log(fullName)

// 3 - boolean
let a: boolean = true

console.log(a)  
console.log(typeof a)

a = false
console.log(a)

// 4 - inference e annotation
const ann: string = 'Teste'  //Variável tipada por annotation (como string)

const inf = 'Testando'  //Variável tipada por inferência (como string)

console.log(ann)
console.log(inf)

// 5 - compile automatico
    //Para compilar automaticamente, basta executar o comando: tsc -w
    //Assim, não é necessário ficar compilando manualmente o arquivo sempre que houver uma alteração no código.

let q = 10

console.log(typeof q)

q = 11

console.log(q)

// 6 - desafio 2
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu quero imprimir o número ${numberToString}`

console.log(printMyNumber)
