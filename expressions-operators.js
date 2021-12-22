/*  Expressões e Operadores

- Expressions
- Operators
    Binary  '+' '-' '/' '*'
    Unary   '++' '--' 'typeOf'
    Ternary 'true ? alo : nada'


    New

        * left-hand-side expression
        * criar um novo objeto
        
    Operadores unários

        * typeof // typeof 'Gustavo' --> String
        * delete // delete objeto.propriedade --> Deleta prop


    Operadores aritiméticos

        // multiplicação *
        (3.2 * 5.5)

        // divisão /
        (12 / 2)
        // soma
        (34 + 67) +
        // subtração -
        (34 - 23)



        // resto de divisão %
        (11 % 9) --> 2
        // incremento ++ // console.log(increment++) --> 0
        (increment++)    // console.log(--decrement) --> -1
        // decremento -- //
        (decrement--)
        // exponencial **
        (3 ** 3) --> 27

    
    Grouping operator ( )

        Serve para agrupar elementos
        (2 + 3) * 5 --> 25
        2 + 3 * 5 --> 17 


    Operadores de comparação

        Irá, comparar valores e retornar um Boolean como
        resposta à comparação

        '==' igual a    // 'gustavo' == 'magda' --> false
        '!=' difente de // 'gustavo' != 'magda' --> true

        '===' estritamente igual a
        '!==' estritamente diferente de
            Funciona de maneira parecida com os exemplos acima
            porém, também compara a tipografia das variaveis,
            ou seja, '1' === 1 -- false, pq '1' é string

        '>' maior que
        1 > 2 --> false
        '>=' maior igual a
        2 > 2 --> true
        '<' menor que
        1 < 2 --> true
        '<=' menor igual a
        3 <= 2 --> false

    Operadores de atribuição (Assignment)

        // assignment
        x = 1

        // addition assignment
        x = x + 1
        x += 1
        
        // subtraction assignment
        x = x - 1
        x -= 1

        // multiplication assigment
        x = x * 2
        x *= 2

        // division assignment
        x = x / 2
        x /= 2

        // remainder, exponetiation
        x %= 2
        x **= 2


    Operadores lógicos

        2 valores booleanos, quando verificados, resultará
        em verdadeiro ou falso

        AND - '&&'

        OR - '||'

        NOT - '!'



    Operador condicional (ternário)

        Dependendo da condição, nós recebemos valores
        diferentes

        //condição então valor 1 se não valor 2
        //condition ? value1 : value2

        const niceBreackfast = pao && queijo ? 'Café top' : 'Café ruim'



    Operador de String (String operator)

        // comparison (comparação)
        'a' == 'a' --> true

        // concatenation (concatenação)
        // Retorna a união de duas strings
        'a' + 'a' -- aa

        console.log('string' + true) --> `stringtrue`
        // vira tudo string



    FALSY
        Quando um valor é consideraod false em contextos onde
        um booleano é obrigatório (condicionais e loops)

            false
            0
            -0
            ""
            null
            undefined
            NaN

            0 ? 'verdadeiro' : 'falso' --> 0 n é booleano

    
    TRUTHY
        Quando um valor é considerado true em contextos onde
        um booleano é obrigatório (condicionais e loops)

            true
            {}
            []
            1
            3.23
            "0"
            "false"
            -1
            Infinity
            -Infinity

    Operator precedence
        Precedência de operadores

        * grouping                      ( )
        * negação e incremento          ! ++ --
        * multiplicação e divisão       * /
        * adição e subtração            +-
        * relacional                    < <= > >=
        * igualdade                     == != === !==
        * AND                           &&
        * OR                            ||
        * condicional                   ?:
        * assignment (atribuição)

*/
