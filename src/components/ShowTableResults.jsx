import { createTable } from "../logic/createTable"

export function ShowTableResults () {

    const pruebaxd = [
        {
            interval: 1
        }
    ]
    

    const tablePrueba = `33, 35, 40, 42, 47, 48, 49, 53, 55, 56, 58, 60, 62, 63, 64, 64, 65, 65, 65, 66, 67, 69, 69, 69, 70, 72, 73, 73, 73, 75, 75, 75, 76, 76, 76, 77, 77, 79, 84, 84, 86, 86, 88, 89, 89, 90, 94, 96`

    const a = 7
    const b = 9
    const c = 33

    const { totalIntervals, totalDate, numberInferior, elementsTable } = createTable(a, b, c, tablePrueba)
    console.log(elementsTable)
 
    return (
          <ul>
            {
                pruebaxd.map(element => {
                    <li key={element.interval}>
                        {element.interval}
                    </li>
                })
            }
          </ul>
    )
}