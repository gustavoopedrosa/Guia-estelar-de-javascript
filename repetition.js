/* Estrutura de repetição

    for

        * break - para a execução do loop
        * continue - pula a execução do momento

        for(let i = 0; i > 100; i++) {
            if(i === 50) {
                break ------> irá sair do loop
            }
        }


    while
        
        * usado para quando não sabemos quando irá parar a repetição

            while (condição) {

            }

    For of

        let name = ['gustavo', 'paulo', 'joao']

        for(let name of names) {
            console.log(name)    --> irá logar todos os nomes listados no array
        }

    for in
        
        * cria um loop para acessar as propriedades de um objeto

        let person = {
            name: 'gustavo',
            age: '22',
            weith: '70'
        }    

        for(let property in person) {
            console.log(property)      ----> irá logar o nome das propriedades
            console.log(person[property])  --> irá logar o valor das propriedades

        }
*/