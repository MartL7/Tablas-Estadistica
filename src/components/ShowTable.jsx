import { Button } from './Button'

export function ShowTable({ arrayOrdered, range, results, n }) {
  return (
    <main className="flex flex-col gap-10">

        <div className="border rounded w-80 md:w-[720px] md:p-2 h-auto m-auto md:text-2xl">
            {arrayOrdered.join(', ')}
        </div>

        <h2 className='text-green-300'> Rango = {range} </h2>

        <article className="grid uppercase text-center gap-10 [grid-template-columns:1fr] md:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] lg:[grid-template-columns:1fr_1.5fr_1fr]">

            <section className="md:flex-grow md:order-none flex flex-col gap-y-4 justify-center place-items-center text-xl py-10 md:py-12 lg:py-20 px-10 border-y-2 border-primary">
                <h2> √{n} = <span className='text-green-200'> {results.method1} </span> </h2>
                <Button text={"Elejir este método"}/>
            </section>

            <section className="md:flex-grow md:order-none flex flex-col gap-y-4 justify-center place-items-center text-xl py-10 md:py-12 lg:py-20 px-10 border-y-2 border-primary">
                <span> &#8731;{n} = <span className='text-green-200'> {results.method2} </span> </span>
                <Button text={"Elejir este método"}/>
            </section>

            <section className="md:flex-grow md:order-none flex flex-col gap-y-4 justify-center place-items-center text-xl py-10 md:py-12 lg:py-20 px-10 border-y-2 border-primary">
                <span> ln ({n}) * 3.3 + 1 = <span className='text-green-200'> {results.method3} </span> </span>
                <Button text={"Elejir este método"}/>
            </section>
        </article>
    </main>
  )
}