export const calculateTable = (intervals, range, min) => {
    const table = []
    const Elements = {}

    const totalIntervals = Math.round(intervals)
    const dataForIntervals = (range / totalIntervals)

    const totalData = Math.round(dataForIntervals)
    
    let current = min + totalData - 1
    let representClass = (min + current) / 2
    Elements.clase1 = {li: min, ls: current, xi: representClass}

    for (let i = 2; i <= totalIntervals; i++) {
        let previusLs = current
        if (i === totalIntervals) {
            current += totalData + 1    
        } else {
            current = min + totalData * i - 1
        }
        representClass = (previusLs + current) / 2
        Elements["clase" + i] = { li: previusLs + 1, ls: current, xi: representClass }
    }
    table.push({ ...Elements })

    return { totalData, totalIntervals, table, Elements }
}