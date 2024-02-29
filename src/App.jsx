import './App.css'
import { createTable } from './logic/createTable'
import { Formulario } from './components/Form'

export function App() {
/*  const { range, arrayOrdered, results, n } = calculate(
 `63 73 40 77 65 70 58 75 86 90 55 72 73 56 76 69 94 66 84 53 75 89 42 64 65 47 62 88 48 84 77 89 76 86 75 60 64 67 65 69 33 79 69 76 35 49 96 73`)  */

 /*   const { totalData, totalIntervals, table, Elements } = calculateTable(results.method1, range, 33)

  console.log(totalData, totalIntervals, table, Elements)  */

    /* const tablePrueba = `33, 35, 40, 42, 47, 48, 49, 53, 55, 56, 58, 60, 62, 63, 64, 64, 65, 65, 65, 66, 67, 69, 69, 69, 70, 72, 73, 73, 73, 75, 75, 75, 76, 76, 76, 77, 77, 79, 84, 84, 86, 86, 88, 89, 89, 90, 94, 96`

    const a = 7
    const b = 9
    const c = 33

    const { totalIntervals, totalDate, numberInferior, elementsTable, newTable } = createTable(a, b, c, tablePrueba)
    console.log(elementsTable, newTable) */

  return (
    <>
      <main className='max-w-6xl m-auto text-center flex flex-col gap-9 animate-fade-in'>
        <h1 className="text-2xl font-semibold uppercase my-3"> Tablas de Estadistica </h1>

        <Formulario/>
      </main>
    </>
  )
}
