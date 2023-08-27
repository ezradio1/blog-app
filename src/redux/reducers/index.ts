import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import toast from "./toast";

const rootReducer = combineReducers({ user, toast });

export default rootReducer;
