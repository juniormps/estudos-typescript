"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const secondObj = { name: 'Carro', rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1, color: 'Branca' };
const myPen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} tem o valor ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Matheus',
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
//console.log(showCharName(myChar, 'outra'))
//console.log(showCharName(myChar, true))
//console.log(showCharName([0]))
// 6 - typeof type operator
const userName = 'Matheus';
const userName2 = 'João';
const userName4 = 'Joaquim';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showTruckKm(km) {
    console.log(`O caminhão já rodou ${km} kms`);
}
showTruckKm(newTruck.km);
showTruckKm(5000);
const someVar = 1;
const testing = "some text";
const testingA = "text";
const testingB = "name";
// const testingC: a3 = "test"
