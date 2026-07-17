// 1 - importação de arquivos
import importGreet from "./greet.js"; //a importação deve ser do arquivo ".js"

importGreet();

// 2 - import de variavel
//Para importar uma variável,  deve-se utilizar o destructuring "{}"
import { x } from "./variable.js";

console.log(x);

// 3 - multiplas exportacoes
import { a, b, myExportFunction } from "./multiple";

console.log(a);
console.log(b);

myExportFunction();

// 4 - alias
import { someName as name } from "./changename.js";

console.log(name);

// 5 - import all
import * as myNumbers from "./numbers.js";

console.log(myNumbers);
console.log(myNumbers.n1);

// 6 - importando tipos
import { Human } from "./mytype.js";

class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new User("João", 25);

console.log(joao);
