import GoodsItem from "./GoodsItem"
import { MyContext } from "../App"
import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"


function OtherGoods() {
    let {state} = useContext(MyContext)
    console.log(state)

    return (
      <section>
         <li><Link to='about'>About</Link></li>
        <li><Link to='contacts'>Contacts</Link></li>
        <Outlet/>
      </section>
    )
  }
  
  export default OtherGoods