// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //Deve evitar

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //Vai procurando a variavel escopo por escopo ate encontrar


const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing pode sobrear variaveis de escopo mais abrangente
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //Se ele nao encontrar um modelo ele vai procurando nos objetos acima ...//Super chama o metodo do prototiopo por isso usa o super 
    }
}

Object.setPrototypeOf(ferrari, carro) //Estabeleci uma relacao entre ferrari e carro (ou seja ferrari tem carro como seu prototipo)
Object.setPrototypeOf(volvo, carro)

//console.log(ferrari)
// console.log(volvo)

// volvo.acelarMais(100) //Aqui se colocarmos velocidade mais que 200 ele nao vai ultrapassar pois definimos o limite na funcao
// console.log(volvo.status())

ferrari.acelarMais(300)
console.log(ferrari.status()) //Aqui se colocarmos velocidade mais que 200 ele vai ultrapassar pois definimos o limite depois da funcao