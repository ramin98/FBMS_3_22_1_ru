import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const goodsFetch = createAsyncThunk("content/goodsFetch", async () => {
    const res = await fetch("http://localhost:5000/goods");
    const data = await res.json();
    return data;
  });

let goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: [],
        isLoading: false,
        error: null,
        addedToBag:null
    },
    reducers: {
        addToBag: (state, action) => {
            return { ...state, addedToBag: action.payload }
        },
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(goodsFetch.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(goodsFetch.fulfilled, (state, action) => {
            state.goods = action.payload
            state.isLoading = false
        })
        builder.addCase(goodsFetch.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })
    }
})

export const { addToBag } = goodsSlice.actions

export default goodsSlice.reducer