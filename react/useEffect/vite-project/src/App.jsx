import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

export let MyContext = createContext()

function App() {
  let [arr, setArr] = useState({})
  return(
 <MyContext.Provider value={{arr, setArr}}>
      <Link to="contacts">CONTACTS</Link>
      <Link to="about">ABOUT</Link>
      <Outlet/>
    </MyContext.Provider>
  )
}

export default App
