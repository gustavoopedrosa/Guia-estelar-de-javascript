/*
    Aula sobre variaveis

    * Nomes simbolicos para algum valor
    * Atalhos de código
    * Identificadores
    * 3 Palavras reservadas
        * var (o valor pode ser redefinido)
        * let (o valor pode ser redefinido)
        * const


    ---------------- Scope --------------------
    * Determina a visibilidade de uma variavel no JS

        * Block-scope
            {
                aqui temos algum código (bloco)

            }

            * var é global e local
                * Hoisting --> O javascript eleva a declaração do "var" ao inicio do
                programa e apenas depois faz a atribuição do valor. Ou seja, se 
                formos utilizar o "var" antes da sua atribuição ele existirá, porém
                como undefined.

            * let e const são locais (só funcionam no escopo que foram criadas)
                * let --> É preciso declarar e atribuir um valor antes de acessar
                uma variavel tipo "let", caso contrario teremos erro na aplicação.
                Porém, caso seja declarada em um escopo global, pode ter ser valor 
                atribuido em um escopo local, alterando o valor em todos os escopos.

                * const --> Só funciona no escopo onde foi criada e não pode ser 
                atribuida novamente.
            
    ----------------- Nomenclatura ---------------

    * JS é case-sensitive (diferencia maiusculas e minusculas)
    * JS aceita a cadeia de caracteres Unicode.
        
        * Não podemos declarar uma variavel com numero e nem colocar espaços vazios
        
        * Boas práticas
            * Criar nomes coerentes
            * Explique o que a variavel faz
            * camelCase
            * snake_case
            * Escrever em inglês
*/