import BagItem from "./GoodsItem"
import { MyContext } from "../App"
import { useContext } from "react"

function BagList() {
    let {state} = useContext(MyContext)
    console.log(state)

    return (
      <section>
        <ul>
            {
                state.bag.map((item,index) => {
                    return <BagItem index={index} key={index} {...item}/>
                })
            }
        </ul>
      </section>
    )
  }
  
  export default BagList