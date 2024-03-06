import { createTable } from "../logic/createTable"
import { Th, Td } from "./HeadedTable"

export function ShowTableResults ({ dataForTable }) {
    const { interval, data, min, arrayOrdered } = dataForTable

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
                                <Td> {element.interval} </Td>
                                <Td> {element.li} </Td>
                                <Td> {element.ls} </Td>
                                <Td> {element.Mc} </Td>
                                <Td> {element.fi} </Td>
                                <Td> {element.fr} </Td>
                                <Td> {element.fa} </Td>
                                <Td> {element.fra} </Td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}