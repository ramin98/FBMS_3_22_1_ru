import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bagFetch = createAsyncThunk("content/bagFetch", async () => {
    const res = await fetch("http://localhost:5000/my-bag");
    const data = await res.json();
    return data;
  });

let bagSlice = createSlice({
    name: 'bag',
    initialState: {
        bag: [],
        isLoading: false,
        error: null,
        deletedElement:null
    },
    reducers: {
        deleteFromBag: (state, action) => {
            return { ...state, deletedElement: action.payload }
        },
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(bagFetch.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(bagFetch.fulfilled, (state, action) => {
            state.bag = action.payload
            state.isLoading = false
        })
        builder.addCase(bagFetch.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })
    }
})

export const { deleteFromBag } = bagSlice.actions

export default bagSlice.reducer