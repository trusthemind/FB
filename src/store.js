import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { ideaApi } from "./components/services/tattoidea.api"

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

const store = configureStore({
    reducer: {
        reducer,
        [ideaApi.reducerPath]: ideaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ideaApi.middleware),
})

setupListeners(store.dispatch)

export default store;