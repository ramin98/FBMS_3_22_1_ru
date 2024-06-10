import { useState, useRef } from 'react'
import './App.css'
import Component from './Component'
import PlusArr from './PlusArr'

export function App() {
  let [arr, setArr] = useState([
    1, 2, 3, 4
  ])
  let [input1, setInput1] = useState('')
  let [input2, setInput2] = useState('')
  let [input3, setInput3] = useState('')
  let [activeButton, setActiveButton] = useState(true)
  let [obj, objState] = useState({
    input1: '',
    input2: '',
    input3: ''
  })

  let array = [
    1, 2, 3, 4
  ]
  let element = useRef(null)
  console.log(element)

  // const func = () => {
  //   return arr.map((item) => {
  //     return (
  //       <Component {...item}/>
  //     )
  //   })
  // }

  const handleInput = (ev) => {
    if (ev.target.name === 'input1') {
      objState({ ...obj, input1: ev.target.value })

    }
    else if (ev.target.name === 'input2') {
      objState({ ...obj, input2: ev.target.value })

    }
    else if (ev.target.name === 'input3') {
      objState({ ...obj, input3: ev.target.value })
 
    }
    if(obj.input1.length >= 8 && obj.input2.length >= 4 && obj.input3.length >= 10){
      setActiveButton(false)
    }
    
    console.log(obj)
  }

  const handleForm = (ev) => {
    ev.preventDefault()
    console.log(element)
    console.log(element.current.getBoundingClientRect())
    console.log(obj)
  }



  return (
    <div>
      <form ref={element} onSubmit={handleForm}>
      <input name="input1" type="text" onChange={handleInput} />
      <input name="input2" type="text" onChange={handleInput} />
      <input name="input3" type="text" onChange={handleInput} />
      <button disabled={activeButton}>SEND</button>
      </form>
      
      {/* <PlusArr setArr={setArr} />
      <ul>
        {arr}
      </ul>
      <p>{obj.input1}</p>
      <p>{obj.input2}</p>
      <p>{obj.input3}</p> */}
    </div>
  )
}

