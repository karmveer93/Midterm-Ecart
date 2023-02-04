// store manages data and reduser

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productDetails";

//use configureStore function to create the store


const store=configureStore({
    reducer:{
        cartItems:cartReducer,
        productDetails:productReducer
    }
})

export default store