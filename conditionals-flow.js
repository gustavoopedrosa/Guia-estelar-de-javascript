/*
    Control Flow

        o fluxo comum da aplicação é linha a linha. Mas podemos alterar isso
        usando condicionais

    If ... else

        if(condition) {

        } else {            // Comum

        }


        if(condition) {

        } else if(2° condition) {

        } else {

        }

        * Sempre usar o if em bloco.

    Switch
        switch (expression) {
            case '+':

                break
            case '-':

                break
            case '*':

                break
            case '/':

                break
            default:

                break
    }

    Throw

        Vai lançar algo no console (pode ser um new Error.)

        function sayMyName(name = '') {
            if (name === '' {
                throw 'Nome é obrigatório'
            })
        }

        try {
            sayMyName()
        } catch(e) {
            console.log(e) --> Vai exibir o erro que eu lancei, mas sem parar a aplicação
            se eu lançar um erro sem tentar capturar, a aplicação irá parar
        }
*/