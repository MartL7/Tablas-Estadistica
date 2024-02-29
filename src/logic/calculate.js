export const calculate = (table) => {

    if (table.includes(',')) {
        table = table.split(',')
    } else {
        table = table.replace(/\s+/g, ' ')
        table = table.split(' ')
    }
    
    const array = Array.from(table)

    const max = Math.max(...array)
    const min = Math.min(...array)
    const n = array.length // n -> Número de datos

    const range = (max - min).toFixed(2)

    const arrayOrdered = array.sort((a, b) => a - b)

    const results = {
        method1: Math.sqrt(n).toFixed(3),
        method2: Math.cbrt(n).toFixed(3),
        method3: (Math.log(n) * 3.3) + 1
    }

    // método por tanteo -> ✅

    const numberDatesForInterval = {}
    let valueN

    for(let i = 5; i <= 20; i++) {
        valueN = range / i

        if(valueN % 1 > 0.5 ) numberDatesForInterval[i] = { numberData: valueN.toFixed(3) }
    }

    return { range, arrayOrdered, results, n, numberDatesForInterval, min }
}