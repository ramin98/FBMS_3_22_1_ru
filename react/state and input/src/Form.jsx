import { useState, useRef } from 'react'
import './App.css'


export function Form() {
    let [arr, setArr] =useState([1,2,3,4])
    let [input1, setInput1] = useState('')
    let [activeButton, setActiveButton] = useState(true)
    const handleInput = (ev) => {
        setInput1(ev.target.value)
        if (/^[A-Z]/.test(ev.target.value) && ev.target.value.length >= 8) {
            setActiveButton(false)
        }else{
            setActiveButton(true)
        }
    }
    const handleForm = (ev) => {
        ev.preventDefault()
        console.log(input1)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input name="input1" type="text" onChange={handleInput} />
                <button disabled={activeButton}>SEND</button>
            </form>
            <button onClick={() => {
                arr.push(arr.at(-1) + 1)
                console.log(arr)
                }}>ADD</button>
            <p>{arr}</p>
            <p>{input1}</p>
        </div>
    )
}

