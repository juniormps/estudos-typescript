// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('teste'))

// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: 'Porta', cor: 'Branca' }
const secondObj = { name: 'Carro', rodas: 4 }
const thirdObj = { price: 19.99, qty: 10 }

console.log(showProductName(myObj))
console.log(showProductName(secondObj))
// console.log(showProductName(thirdObj))

// 3 - generics com interface
interface MyObject<T, U, V> {
  name: string
  wheels: T
  engine: U
  color: V
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1, color: 'Branca' }
const myPen: Pen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'Azul'}

console.log(myCar)
console.log(myPen)

// 4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} tem o valor ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB',
}

console.log(getSomeKey(server, 'ram'))

// 5 - keyof type operator
// O operador keyof gera um tipo que é a união de todas as chaves de um determinado tipo. Por exemplo, se você tiver um tipo chamado "Character" com as propriedades "name", "age" e "hasDriveLicense", o operador keyof Character gerará um tipo que é a união dessas três chaves: "name" | "age" | "hasDriveLicense". Isso permite que você use essas chaves como tipos em outras partes do seu código, garantindo que você só possa acessar propriedades válidas do tipo Character.

type Character = { name: string; age: number; hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`
}

const myChar: Character = {
  name: 'Matheus',
  age: 30,
  hasDriveLicense: true,
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicense'))
//console.log(showCharName(myChar, 'outra'))
//console.log(showCharName(myChar, true))
//console.log(showCharName([0]))

// 6 - typeof type operator
const userName: string = 'Matheus'

const userName2: typeof userName = 'João'

// const userName3: typeof userName = 3

type x = typeof userName

const userName4: x = 'Joaquim'


// 7 - indexed access types
// O operador de acesso indexado permite acessar o tipo de uma propriedade específica de um objeto. Por exemplo, se você tiver um tipo chamado "Truck" com as propriedades "km", "kg" e "description", você pode usar o operador de acesso indexado para acessar o tipo da propriedade "km" assim: Truck['km']. Isso retornará o tipo da propriedade "km", que é number. Esse recurso é útil quando você deseja criar tipos derivados com base em propriedades específicas de um objeto.

type Truck = { km: number; kg: number; description: string }

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
}

function showTruckKm(km: Km) {
  console.log(`O caminhão já rodou ${km} kms`)
}

showTruckKm(newTruck.km)
showTruckKm(5000)

// 8 - conditional types
interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const someVar: myType = 1
// const someVar2: myType = 'asd'

// 9 - template literal types

type TestA = "text"

type CustomType = `some ${TestA}`

const testing: CustomType = "some text"
//const testing2: CustomType = "some text2"

type a1 = "text"
type a2 = "name"

type a3 = `${a1}` | `${a2}`

const testingA: a3 = "text"
const testingB: a3 = "name"
// const testingC: a3 = "test"