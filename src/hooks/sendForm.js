import { useState } from "react"
import { calculate } from '../logic/calculate'

export const sendForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [arrayOrdered, setArrayOrdered] = useState([])
    const [range, setRange] = useState('')
    const [results, setResults] = useState('')
    const [numberData, setNumberData] = useState('')
    const [numberDatesForInterval, setNumberDatesForInterval] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        const { arrayOrdered, range, results, n, numberDatesForInterval } = calculate(inputValue)
        setArrayOrdered(arrayOrdered)
        setRange(range)
        setResults(results)
        setNumberData(n)
        setNumberDatesForInterval(numberDatesForInterval)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return {
        inputValue,
        arrayOrdered,
        range,
        results,
        numberData,
        numberDatesForInterval,
        handleSubmit,
        handleChange
    }
}