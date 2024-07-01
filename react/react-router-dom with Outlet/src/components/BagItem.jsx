function BagItem({ product_name,
    product_description,
    product_price,
    store_name,
    store_address,
    index
}) {

    return (
        <li>
            <p>{product_name}</p>
            <p>{product_description}</p>
            <p>{product_price}</p>
            <p>{store_name}</p>
            <p>{store_address}</p>
            
        </li>
    )
}

export default BagItem