import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goodsFetch } from '../store/slices/goodsSlice'
import { addToBagFetch } from '../store/fetchs'

function Goods() {
  let goods = useSelector((state) => state.goods.goods)
  let error = useSelector((state) => state.goods.error)
  let loading = useSelector((state) => state.goods.isLoading)
  let addedToBag = useSelector((state) => state.goods.addedToBag)

  let dispatch = useDispatch()

  const handleBag = (obj) => {
    dispatch(addToBagFetch(obj))
    console.log(addedToBag)
  }

  useEffect(() => {
    dispatch(goodsFetch())
  },[])

  if(loading){
    return <h1>LOADING...</h1>
  }

  if(error){
    return <h1>ERROR!!</h1>
  }

  return (
    <>      
      <ul>
        {
          goods.map((item,index) => {
            return(
              <li key={index}>
                <p>{item.product_name}</p>
                <p>{item.product_price}</p>
                <button onClick={() => handleBag(item)}>ADD</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Goods
