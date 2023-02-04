
import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    value:[]
}
const productSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers:{
                addProductDetails:(state, action)=>{
                    state.value=[]
            state.value.push(action.payload)
        }
    }
})
export const {addProductDetails}=productSlice.actions 

// selector to select cart data

export const productSelector = (state)=>state.productDetails.value

export default productSlice.reducer