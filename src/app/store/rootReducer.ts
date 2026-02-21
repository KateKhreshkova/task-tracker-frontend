import {userSlice} from "../../entities/user/model/userSlice.ts";
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    user: userSlice.reducer
});

export default rootReducer;