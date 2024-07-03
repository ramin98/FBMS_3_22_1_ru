import { useState, useEffect, useContext } from "react"
import { MyContext } from "./App"

function About() {
let [input, setState] = useState('')
let {arr,setArr} = useContext(MyContext)

function edit() {
    fetch('http://localhost:5000/add-goods', {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({input})
    })
}

  return (  
    <>
    <input type="text" onChange={(ev) => setState(ev.target.value)}/>
    <button onClick={edit}>SEND</button>
    </>       
    )
  }
  
  export default About
  