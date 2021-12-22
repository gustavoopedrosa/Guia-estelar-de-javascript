const fluxoCaixa = {
    receitas: [10.70, 100.40, 15, 50.54165115, 1000],
    despesas: [10.70, 100.40, 15, 50.54165115, 1000]
}

function gastosFamiliares () {
    
    const saldo = calculaSaldo()

    if(saldo > 0) {
        console.log(`A família está com saldo positivo de: R$${saldo.toFixed(2)}`)
    } else if (saldo < 0) {
        console.log(`A família está com saldo negativo de: R$${saldo.toFixed(2)}`)
    } else {
        console.log(`A família está com saldo zerado`)
    }
}

function soma(array) {
    let total = 0

    array.forEach(item => {
        total += item
    });

    return total
}


function calculaSaldo (){
    const totalDespesas = soma(fluxoCaixa.despesas)
    const totalReceitas = soma(fluxoCaixa.receitas)

    const saldo = totalReceitas - totalDespesas

    return saldo
}

// Chamada da função

gastosFamiliares()