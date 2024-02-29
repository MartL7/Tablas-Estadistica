import { createTable } from "../logic/createTable"
import { Th, Td } from "./Th"

export function ShowTableResults ({ dataForTable }) {
    console.log(dataForTable)

    const { interval, data, min, arrayOrdered } = dataForTable
    /*  const tablePrueba = `33, 35, 40, 42, 47, 48, 49, 53, 55, 56, 58, 60, 62, 63, 64, 64, 65, 65, 65, 66, 67, 69, 69, 69, 70, 72, 73, 73, 73, 75, 75, 75, 76, 76, 76, 77, 77, 79, 84, 84, 86, 86, 88, 89, 89, 90, 94, 96` */

   /*  const a = 7
    const b = 9
    const c = 33 */

    const { elementsTable, totalDate } = createTable(interval, data, min, arrayOrdered)
    console.log(elementsTable, {totalDate}) 

    return (
        <div>
            <h1 className="font-semibold pb-5"> Tabla de resultados </h1>

            <table className="min-w-full divide-y text-black/95 opacity-85">
                <thead className="bg-gray-80 text-white text-center">
                    <tr>
                        <Th> Intervalo </Th>
                        <Th> Li </Th>
                        <Th> Ls </Th>
                        <Th> Mc </Th>
                        <Th> fi </Th>
                        <Th> fr </Th>
                        <Th> fa </Th>
                        <Th> fra </Th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {elementsTable.map((element, index) => {
                        return (
                            <tr key={index}>
                                <Td>{element.interval}</Td>
                                <Td>{element.li}</Td>
                                <Td>{element.ls}</Td>
                                <Td>{element.Mc}</Td>
                                <Td>{element.fi}</Td>
                                <Td>{element.fr}</Td>
                                <Td>{element.fa}</Td>
                                <Td>{element.fra}</Td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}