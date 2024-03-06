import './App.css'
import { Formulario } from './components/Form'
import { Footer } from './components/Footer'

export function App() {

  return (
    <>
      <main className='max-w-6xl m-auto text-center flex flex-col gap-9 animate-fade-in'>

        <h1 className="text-2xl font-semibold uppercase my-3"> Tablas de Estadistica </h1>

        <Formulario/>

        <Footer />

      </main>
    </>
  )
}
