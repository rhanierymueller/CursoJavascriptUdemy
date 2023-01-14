const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => { //Tirando os elementos do array
    console.log(`${e[0]}: ${e[1]}`);
})

Object.entries(pessoa).forEach(([chave, valor]) => { //Tirando os elementos do array usando Destructuring Elemento chave valor de cada um dos elementos
    console.log(`${chave}: ${valor}`); 
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, //Nao aceita ser alterada
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2017'; //Nao vai aceitar pois writable esta false
console.log(pessoa.dataNascimento); 
console.log(Object.keys(pessoa));


//Object.assign 

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //Pegar os atribulos que forem colocados 
                                        //no o1 e o2 e vai concatenar no objeto dest no final objeto de todos os atribulos de todos os obj a direita
            
Object.freeze(obj)
obj.c = 1234
console.log(obj);

