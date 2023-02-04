


import { createSlice } from "@reduxjs/toolkit"
// import { useSelector } from "react-redux"




// to have a initial data 
// initially there are no oitem in cart.
const initialState ={
    value:[]
}
// console.log(initialState)
const favSlice = createSlice({
    name: "favItems",
    initialState,
    reducers:{
        // add the actions / difine the actions 
        favAdd:(state, action)=>{
            // console.log("add action being performed")
            // console.log(action.payload)
            // console.log(state.cartItems)
            // console.log(cartSelector)
            // console.log(state.value)
            state.value.push(action.payload)
        },
        favDelete: (state, action) => {
            // console.log("delete action being performed")
            // console.log(action.payload)
            // console.log(state.cartItems)
            // console.log(initialState)
            // console.log(state.value)
            state.value=(state.value.filter(function(task){ return task.id !== action.payload.id}))
          }
    }
})
// exporting actions for to call 
export const {favAdd, favDelete}=favSlice.actions 

// selector to select cart data

export const favSelector = (state)=>state.favItems.value

export default favSlice.reducer