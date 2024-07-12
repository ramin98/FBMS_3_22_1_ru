import { deleteFromBag } from "./slices/bagSlice";
import { addToBag } from "./slices/goodsSlice";

export function addToBagFetch(obj) {
    console.log(obj)
    return async function (dispatch) {
        const res = await fetch("http://localhost:5000/add-mybag", {
            method:'POST',
             headers:{
                "Content-type": 'application/json'
             },
             body:JSON.stringify(obj)
        });
        const data = await res.json();
        dispatch(addToBag(data))
    }
}

export function deleteFromBagFetch(id) {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:5000/delete-mybag/${id}`, {
            method:'DELETE',
        });
        const data = await res.json();
        dispatch(deleteFromBag(data))
    }
}