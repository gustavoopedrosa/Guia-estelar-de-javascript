/*
----Prototype

        * prototype-based language
        * prototype chain
        * __proto__

----Type conversion (typecasting) vs Type coersion ()           

        * Alteração de um tipo de dado para outro tipo


console.log('9' + 5) // 95 --> O JS forçou a conversão do num 5 para 
                     // string para o programa não quebrar
                     // Type coersion

console.log(Number('9') + 5) // 14 --> type conversion

----Manipulando Strings e Números

    Transformar string em numero e numero em string

const string = '123'
const number = 321

console.log(Number(string))
console.log(String(number))

    Contar quantos caracteres tem uma palavra e quantos digitos
    tem um numero
    


const word = 'paralelepipedo'
console.log(word.length)
const number = 1234
console.log(String(number).length) // Dados do tipo number n tem length
                                   // por isso é preciso transformar em string

                  
                                   
    Transformar um número quebrado com 2 casas decimais e trocar
    ponto por vírgula


const number = 456.12334567
console.log(number.toFixed(2).replace('.', ','))

    //Assim que troca o ponto pela vigula a const 'number'
    //passa a ser uma string


    Transformar letras maiusculas em minusculas


const word = 'Programar é muito bacana'
console.log(word.toUpperCase().toLowerCase())


    Separando um texto que contem espaços, em um novo array
    onde cada texto é uma posição do array. Depois disso,
    transforme o array em um texto e onde eram espaços,
    coloque _



const phrase = 'Eu quero viver o Amor!'
const myArray = phrase.split(' ') // vai separar o texto pelos espaços
const phraseWithUnderscore = myArray.join("_") // vai separar o texto com _

console.log(phraseWithUnderscore.toUpperCase())


    Encontrando palavras em frases


const phrase = 'Eu quero viver amor!'
// console.log(phrase.includes('Amor')) --> false > não tem a palabra Amor na frase

console.log(phrase.includes('amor'))// case-sensitive


---- Manipulando arrays

    Criar Array com construtor

const myArray = new Array('a', 'b', 'c')
console.log(myArray.length)

    Contar elementos do Array

    console.log(['a', 'b', 'c'].length) --> vai contar os elementos

    console.log([
        'a',
        function () { return 'alo'}, //manipulando um array
        {type:'array'}
    ][1]())

    Transformar uma cadeia de caracteres em elementos de um array
    
    
    const word = 'manipulação'
    console.log(Array.from(word))

const techs = ['html', 'css', 'js']

//    Adicionar um item no fim
techs.push('nodejs')
//    adicionar um no começo
techs.unshift('javascript')
//    remover um do fim
//techs.pop()
//    remover um do começo
//techs.shift()
//    Pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
//    remover 1 ou mais elementos em qualquer posição
//techs.splice(1,2)
//    encontrar a posição de um elemento no arrray
const index = techs.indexOf('css')
techs.splice(index,1)



console.log(techs)


*/