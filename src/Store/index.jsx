import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "../features/userDetailsSlice";
import UserAuthenticateSlice from "../features/UserAuthenticateSlice";
import ProductsSlice from '../features/ProductsSlice'

 const store = configureStore({
    reducer:{
        userDetails:userDetailsSlice,
        authenticateUser:UserAuthenticateSlice,
        products:ProductsSlice
    }
})

export default store