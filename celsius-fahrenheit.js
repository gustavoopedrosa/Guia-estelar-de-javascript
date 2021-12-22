function transform(temperature) {
    const type = identifyUnity(temperature)
    const realTemperature = Number(separateString(temperature))
    const convertedTemp = conversionTemperature(realTemperature, type)
    console.log(`A temperatura convertida é de ${convertedTemp}`)
}

function identifyUnity(temperature) {
    const upperCase = temperature.toUpperCase()
    if (upperCase.includes('C')) {
        const type = 'C'

        return type
    } else if (upperCase.includes('F')) {
        const type = 'F'

        return type
    } else {
        throw new Error('Grau não identificado')
    }
}

function separateString(temperature) {
    const realTemperature = temperature.split('°')

    return realTemperature[0]
}

function conversionTemperature(temperature, type) {
    if (type === 'C') {
        const newTemp = temperature * (9 / 5) + 32
        const convertedTemp = newTemp.toFixed(2) + '°F'

        return convertedTemp
    } else {
        const newTemp = (temperature - 32) * (5 / 9)
        const convertedTemp = newTemp.toFixed(2) + '°C'

        return convertedTemp
    }
}

transform('11°C')
transform('100°C')
transform('11°F')
transform('100°F')
transform('150°Z')