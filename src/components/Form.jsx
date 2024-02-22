import { useState } from "react"
import { Button } from "./Button"
import { calculate } from '../logic/calculate'
import { ShowTable } from './ShowTable'

export function Formulario() {
    const [inputValue, setInputValue] = useState('')
    const [arrayOrdered, setArrayOrdered] = useState([])
    const [range, setRange] = useState('')
    const [results, setResults] = useState('')
    const [n, setN] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const { arrayOrdered, range, results, n } = calculate(inputValue)
        setArrayOrdered(arrayOrdered)
        setRange(range)
        setResults(results)
        setN(n)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <form className="flex flex-col gap-4 m-auto w-72 justify-center items-center" onSubmit={handleSubmit}>
                <textarea
                    className="rounded bg-primary border"
                    name="table"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    value={inputValue}
                />
                <Button text={"Ordenar"}/>
            </form>
            <ShowTable arrayOrdered={arrayOrdered} range={range} results={results} n={n} />
        </>
    );
}