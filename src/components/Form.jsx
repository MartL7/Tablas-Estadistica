import { Button } from "./Button"
import { sendForm } from "../hooks/sendForm"
import { ShowTable } from './ShowTable'
import { createTable } from "../logic/createTable"
import { ShowTableResults } from "./ShowTableResults"

export function Formulario() {
    const {
        inputValue,
        arrayOrdered,
        range,
        results,
        numberData,
        numberDatesForInterval,
        handleSubmit,
        handleChange,
        min
    } = sendForm()
    
    return (
        <>
            <form className="flex flex-col gap-4 m-auto w-72 justify-center items-center" onSubmit={handleSubmit}>
                <textarea
                    className="rounded bg-primary/50 border"
                    name="table"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    value={inputValue}
                />
                <Button text={"Ordenar"}/>
            </form>

            <ShowTable arrayOrdered={arrayOrdered} range={range} results={results} n={numberData} numberDatesForInterval={numberDatesForInterval} min={min} />
        </>
    )
}