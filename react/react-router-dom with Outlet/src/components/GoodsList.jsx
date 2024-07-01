import GoodsItem from "./GoodsItem"
import { MyContext } from "../App"
import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"

function GoodsList() {
    let {state} = useContext(MyContext)
    console.log(state)

    return (
      <section>
       <ul>
        <li><Link to='main-goods/'>Goods</Link></li>
        <li><Link to='other-goods'>Other Goods</Link></li>
        </ul>
        <Outlet/>
      </section>
    )
  }
  
  export default GoodsList