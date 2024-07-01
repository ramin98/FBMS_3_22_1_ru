import GoodsItem from "./GoodsItem"
import { MyContext } from "../App"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Goods from "./Goods"
import OtherGoods from "./OtherGoods"
import { Route, Routes } from "react-router-dom"

function GoodsList() {
    let {state} = useContext(MyContext)
    console.log(state)

    return (
      <section>
       <ul>
        <li><Link to='main-goods/'>Goods</Link></li>
        <li><Link to='other-goods'>Other Goods</Link></li>
        </ul>
        <Routes>
          <Route path="/main-goods" element={<Goods/>}/>
          <Route path="/other-goods/*" element={<OtherGoods/>}/>
        </Routes>
      </section>
    )
  }
  
  export default GoodsList