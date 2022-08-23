import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const initialState = {
    data: [],
    status: STATUSES.IDLE
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fechproduct.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fechproduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE
            })
            .addCase(fechproduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })

    }
})
export const { sss } = productSlice.actions

export default productSlice.reducer


// 

export const fechproduct = createAsyncThunk('product/fech', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})