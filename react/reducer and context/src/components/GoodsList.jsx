import GoodsItem from "./GoodsItem"
import { MyContext } from "../App"
import { useContext } from "react"

function GoodsList() {
    let {state} = useContext(MyContext)
    console.log(state)

    return (
      <section>
        <ul>
            {
                state.goods.map((item,index) => {
                    return <GoodsItem index={index} key={index} {...item}/>
                })
            }
        </ul>
      </section>
    )
  }
  
  export default GoodsList