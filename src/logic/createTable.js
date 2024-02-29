export const createTable = (intervals, totalDates, numberInferior, tableOrdered) => {

    const tableString = tableOrdered.join(', ')
    const newTable = tableString.split(',').map(n => parseInt(n))
    const totalIntervals = Math.round(intervals)
    let totalDate = 0
    const elementsTable = []

    const patronDecimal = /^\d+\.\d+$/
    let currentValueLs = numberInferior - 1

    const isDecimal = tableOrdered.some(n => {
        return patronDecimal.test(n)
    })

    if(isDecimal) currentValueLs = numberInferior - 0.1

    if(isDecimal) totalDate = Math.round(totalDates * 10) / 10
    else totalDate = Math.round(totalDates)

    let currentValueLi = numberInferior
    let marcClass = 0
    let sumFi = 0
    let sumFr = 0

    for(let i = 1; i <= totalIntervals; i++) {
        currentValueLs += totalDate
        if(i !== 1) currentValueLi += totalDate
        marcClass = (currentValueLi + currentValueLs) / 2

        const fi = newTable.filter(n => n >= currentValueLi && n <= currentValueLs).length
        const fr = fi / newTable.length
        const fa = sumFi + fi
        const fra = sumFr + fr
        sumFi += fi
        sumFr += fr

        if(isDecimal) {
            elementsTable.push({
                interval: i,
                li: currentValueLi.toFixed(1),
                ls: currentValueLs.toFixed(1),
                Mc: marcClass.toFixed(1),
                fi: fi,
                fr: fr.toFixed(2),
                fa: fa,
                fra: fra.toFixed(2)
            })
            
        } else {
            elementsTable.push({
                interval: i,
                li: currentValueLi,
                ls: currentValueLs,
                Mc: marcClass,
                fi: fi,
                fr: fr.toFixed(2),
                fa: fa,
                fra: fra.toFixed(2)
            })
        }
    }

    return { elementsTable, totalDate }
}
