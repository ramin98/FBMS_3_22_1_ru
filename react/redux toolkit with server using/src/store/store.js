import {configureStore} from "@reduxjs/toolkit"
import goodsSlice from "./slices/goodsSlice"
import bagSlice from "./slices/bagSlice"

const store = configureStore({
    reducer: {
        goods: goodsSlice,
        bag:bagSlice
    }
})

export default store