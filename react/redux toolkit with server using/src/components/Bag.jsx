import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagFetch } from '../store/slices/bagSlice'
import { deleteFromBagFetch } from '../store/fetchs'

function Bag() {
  let [deletedFlag, setDeletedFlag] = useState(false)
  let bag = useSelector((state) => state.bag.bag)
  let error = useSelector((state) => state.bag.error)
  let loading = useSelector((state) => state.bag.isLoading)
  let deletedElement = useSelector((state) => state.bag.deletedElement)
  

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(bagFetch())
  }, [deletedFlag])

  const deleteBag = (id) => {
    dispatch(deleteFromBagFetch(id))
    console.log(deletedElement)
    setDeletedFlag(!deletedFlag)
  }

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
          bag.map((item,index) => {
            return(
              <li key={index}>
                <p>{item.product_name}</p>
                <p>{item.product_price}</p>
                <button onClick={() => deleteBag(item.id)}>DELETE</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Bag
