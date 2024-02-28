export const createTable = (intervals, totalDates, numberInferior, tableOrdered) => {

    const newTable = Array.from(tableOrdered)
    const totalIntervals = Math.round(intervals)
    const totalDate = Math.round(totalDates)
    const table = {}
    const elementsTable = []
    // Vista previa de la tabla -> UwU
    /* table =
        [
            {
                interval: 1, limiteInferior: 1, limiteSuperior: 2
            }
        ]
    } */


    let currentValueLs = numberInferior - 1
    let currentValueLi = numberInferior
    let marcClass = 0
    let fi = 0

    for(let i = 1; i <= totalIntervals; i++) {
        currentValueLs+=totalDate
        if(i !== 1) currentValueLi+=totalDate
        marcClass = (currentValueLi + currentValueLs) / 2

        //if(newTable.includes(currentValueLi) && newTable.includes(currentValueLs))
        const aaa = newTable.findIndex(n => n === currentValueLi)
        const bbb = newTable.find(n => n === currentValueLs)

        table["interval " + i] = {"li": currentValueLi,"ls": currentValueLs, "Mc": marcClass, "fi": fi}
    }

    elementsTable.push(table)

    return { totalIntervals, totalDate, numberInferior, elementsTable }
}