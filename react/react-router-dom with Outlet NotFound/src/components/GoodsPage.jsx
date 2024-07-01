import { useLocation } from "react-router-dom"

function GoodsPage() {
    let location = useLocation()
  
    console.log(location)
    let {data} = location.state
    console.log(data)
    let path = location.pathname.split('/')
    path.shift()
    path.pop()
    return (
        <div>
            <h1>{path.join(' > ')}</h1>
            <div>
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
            <p>{data.product_price}</p>
            <p>{data.store_name}</p>
            <p>{data.store_address}</p>
            </div>
            
        </div>
    )
}

export default GoodsPage