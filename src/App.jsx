import './App.css'
import { Formulario } from './components/Form'

export function App() {
  /* const { range, arrayOrdered, results, n } = calculate(
 `63 73 40 77 65 70 58 75 86 90 55 72 73 56 76 69 94 66 84 53 75 89 42 64 65 47 62 88 48 84 77 89 76 86 75 60 64 67 65 69 33 79 69 76 35 49 96 73`) */

  /* const { totalData, totalIntervals, table, Elements } = calculateTable(results.method1, range, 33)

  console.log(totalData, totalIntervals, table, Elements) 
 */
  return (
    <>
      <main className='max-w-6xl m-auto text-center flex flex-col gap-9 animate-fade-in'>
        <h1 className="text-2xl font-semibold uppercase my-3"> Tablas de Estadistica </h1>

        <Formulario/>
      </main>
    </>
  )
}
