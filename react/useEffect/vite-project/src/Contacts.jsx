import { useContext, useEffect,useState } from "react"
import { MyContext } from "./App"

function Contacts() {
  let {arr, setArr} = useContext(MyContext)

  useEffect(() => {
    fetch('http://localhost:5000/goods')
    .then((res) => res.json())
    .then((data) => {setArr(
      {name: data.product_name})
      console.log(arr)
    })
  },[arr])

  return (
      <div>
       {arr.name}
      </div>
     
   
  )
}

export default Contacts
