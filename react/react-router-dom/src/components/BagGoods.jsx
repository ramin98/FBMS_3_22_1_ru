import { useContext } from "react"
import { MyContext } from "../App"

function BagGoods() {
 let {state} = useContext(MyContext)
    return (
      <div>
        <p>{state.count}</p>
      </div>
    )
  }
  
  export default BagGoods