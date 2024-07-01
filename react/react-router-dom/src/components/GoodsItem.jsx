import { Link } from "react-router-dom"
import { MyContext } from "../App"
import { useContext } from "react"

function GoodsItem({ product_name,
    product_description,
    product_price,
    store_name,
    store_address,
    index
}) {

    let { dispatch } = useContext(MyContext)


    return (
        <li>
            <Link to={`goods-item/${index}`}>
                <p>{product_name}</p>
                <p>{product_description}</p>
                <p>{product_price}</p>
                <p>{store_name}</p>
                <p>{store_address}</p>
            </Link>
            <button onClick={() => dispatch({ type: 'ADD TO BAG', index: index })}>ADD</button>
        </li>
    )
}

export default GoodsItem