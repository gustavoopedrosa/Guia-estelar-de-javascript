/*
// Criar um aplicativo de frases motivacionais

// declartion - declaração da função
// function statement

function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é mão do aprendizado")
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke

createPhrases()
createPhrases()
createPhrases()

// Uma function é usada para agrupar código, evitando repetição e tornando mais
// simples o entendimento do que aql bloco de cógido faz, por isso é importante 
// crira um nome semântico

// function expression
// function anonymous

//parâmetros (parameters)
const sum = function(number1, number2) {
    const total = number1 + number2
    return total // necessário para podermos acessar esse valor fora do escopo da função
}

//sum(2, 3) // arguments - argumentos

const number1 = 34
const number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma dos dois números é ${sum(number1, number2)}`)


//function scope

let subject

function createThink() {
    subject = 'study'
}

console.log(subject) // subject não foi definido
console.log(createThink()) //subject foi definido na função, porém n tem retorno
console.log(subject) // subject está definido



// function hoisting

sayMyName()

function sayMyName() {
    console.log('Gustavo') // Aqui acontece o Hoisting pq a função foi
}                           // criada de maneira convencional


sayMyName()

var sayMyName = function() {
    console.log('Gustavo') // Aqui não acontece o Hoisting pq a função foi
}                           // criada de maneira anonima



// Arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Gustavo')

// callback funcion => Uma função passada como argumentos para outra função

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log('Estou em uma function callback')
    }
)


    * Funcion() contructor

        * expressão new
        * criar um novo onjeto
        * this keyword

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const joao = new Person('João')
const gustavo = new Person('Gustavo')

console.log(joao.walk())
console.log(gustavo.walk())

*/