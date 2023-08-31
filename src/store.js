import { createStore } from "@reduxjs/toolkit";
import { createAsyncThunkMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import { ideaApi } from "./components/services/tattoidea.api";

const initialState = {
    theme: "light",
    tattoideas: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload };
        case 'GET_TATTO_IDEAS':
            return { ...state, tattoideas: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(createAsyncThunkMiddleware(ideaApi.reducerPath)));

export default store;