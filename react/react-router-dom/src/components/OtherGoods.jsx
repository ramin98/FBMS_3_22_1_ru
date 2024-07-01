import GoodsItem from "./GoodsItem"
import { MyContext } from "../App"
import { useContext } from "react"
import About from "./About"
import Contacts from "./Contacts"
import { Route, Routes, Link } from "react-router-dom"


function OtherGoods() {
    let {state} = useContext(MyContext)
    console.log(state)

    return (
      <section>
         <li><Link to='about'>About</Link></li>
        <li><Link to='contacts'>Contacts</Link></li>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </section>
    )
  }
  
  export default OtherGoods