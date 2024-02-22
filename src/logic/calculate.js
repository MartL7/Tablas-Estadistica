export const calculate = (table) => {

    if(table.includes(',')) {
        table = table.split(',')
    } else {
        table = table.split(' ')
    }
    
    const array = Array.from(table)

    const max = Math.max(...array)
    const min = Math.min(...array)
    const n = array.length 

    const range = max - min

    const arrayOrdered = array.sort((a, b) => a - b)

    const results = {
        method1: Math.sqrt(n),
        method2: Math.cbrt(n),
        method3: (Math.log(n) * 3.3) + 1
    }

    // Hacer método por tanteo -> ❌

    return { range, arrayOrdered, results, n }
}