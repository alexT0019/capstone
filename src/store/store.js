import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        signUpStore: signUpReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});