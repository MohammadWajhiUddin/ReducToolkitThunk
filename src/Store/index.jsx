import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "../features/userDetailsSlice";
import UserAuthenticateSlice from "../features/UserAuthenticateSlice";

 const store = configureStore({
    reducer:{
        userDetails:userDetailsSlice,
        authenticateUser:UserAuthenticateSlice
    }
})

export default store