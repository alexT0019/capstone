import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Create slice

const initialState = {
    isAuthenticated: false || localStorage.getItem("TOKEN") != null
};

export const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export const { login, logout } = signUpSlice.actions;

//Thunk

export const signUpThunk = (username, password, email) => async => {
    axios
    .post(`${process.env.REACT_APP_API_SERVER}/auth/signup`, {
        username,
        password,
        email
    })
    .then((response) => {
        console.log("Sign Up successfully!");
        console.log(response);
    });
};

export const loginThunk = (username, password) => async (dispatch) => {
    axios
    .post(`${process.env.REACT_APP_API_SERVER}/auth/login`, {
        username,
        password
    })
    .then((response) => {
        if (response.data === null) {
            console.log("Login failed");
        } else {
            console.log(response.data);
            console.log("TOKEN", response.data.token);
            localStorage.setItem("TOKEN", response.data.token);
            dispatch(login());
        }
    });
};

export const logoutThunk = () => (dispatch) => {
    localStorage.removeItem("TOKEN");
    dispatch(logout());
  };

export default signUpSlice.reducer;