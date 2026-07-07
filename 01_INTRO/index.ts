const firstName = 'Matheus'
const anotherName = 1
const x = true

function greeting(name: string) {
  console.log('Olá, ' + name)
}

greeting(firstName)
// greeting(anotherName)
// greeting(x)


//DESAFIO 1

function soma(a: number, b: number) {
  return a + b
}

console.log(soma(4, 5))

const n1 = 10
const n2 = 15

console.log(soma(n1, n2))
