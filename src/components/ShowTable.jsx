import { useState } from 'react'
import { Button } from './Button'
import { ShowTableResults } from './ShowTableResults'
import { SectionContainer } from './SectionContainer'

export function ShowTable({ arrayOrdered, range, results, n, numberDatesForInterval, min }) {
  const [dataForTable, setDataForTable] = useState({})
  const [isactive, setActive] = useState(false)

  return (
    <main className="flex flex-col gap-10">

        <div className="border rounded w-80 md:w-[720px] md:p-2 h-auto m-auto md:text-2xl">
            {arrayOrdered.join(', ')}
        </div>

        <h2 className='text-green-300'> Rango = {range} </h2>

        <article className="grid uppercase text-center gap-10 [grid-template-columns:1fr] md:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] lg:[grid-template-columns:1fr_1.5fr_1fr]">

            <SectionContainer>
                <h2> √{n} = <span className='text-green-200'> {results.method1} </span> </h2>
                <Button text={"Elejir este método"}/>
            </SectionContainer>

            <SectionContainer>
                <span> &#8731;{n} = <span className='text-green-200'> {results.method2} </span> </span>
                <Button text={"Elejir este método ❌"}/>
            </SectionContainer>

            <SectionContainer>
                <span> ln ({n}) * 3.3 + 1 = <span className='text-green-200'> {results.method3} </span> </span>
                <Button text={"Elejir este método"}/>
            </SectionContainer>

            <SectionContainer className="md:col-start-1 md:col-end-4 md:flex-wrap md:gap-x-4">
                {Object.keys(numberDatesForInterval).map((interval, index) => {
                        const handleClick = () => {
                            const data = numberDatesForInterval[interval].numberData
                            setDataForTable({interval, data, min, arrayOrdered})
                            setActive(true)
                            console.log({interval, data, min, arrayOrdered})
                        }

                        return (
                        <div className='flex flex-col justify-center items-center md:flex-row md:gap-11' key={index}>
                                <p className='text-purple-300'> Interval {interval} = 
                                    <span className='text-red-400'> {numberDatesForInterval[interval].numberData}</span> 
                                </p>
                                <Button text={"Elejir"} onClick={handleClick}/>
                        </div>
                        )
                })}
            </SectionContainer>
        </article>
        {isactive && <ShowTableResults dataForTable={dataForTable} /> }
    </main>
  )
}