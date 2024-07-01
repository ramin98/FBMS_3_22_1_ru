import { useContext } from "react"
import { useLocation, useParams } from "react-router-dom"
import { MyContext } from "../App"

function GoodsPage() {
    let { goodsId } = useParams()
    let {state} = useContext(MyContext)
    let id = parseInt(goodsId)
    console.log(id)
    console.log(state)
    let location = useLocation()
    let path = location.pathname.split('/')
    path.shift()
    path.pop()
    let { product_name, product_description, product_price, store_name, store_address } = state.goods[id]
    return (
        <div>
            <h1>{path.join(' > ')}</h1>
            <div>
            <p>{product_name}</p>
            <p>{product_description}</p>
            <p>{product_price}</p>
            <p>{store_name}</p>
            <p>{store_address}</p>
            </div>
            
        </div>
    )
}

export default GoodsPage