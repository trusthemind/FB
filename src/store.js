import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { ideaApi } from "./services/tattoidea.api"
import { artistsApi } from "./services/artists.api";

const initialState = {
    user: {},
    theme: 'light',
    tattoideas: [],
    artirst: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload };
        case 'GET_TATTO_IDEAS':
            return { ...state, tattoideas: action.payload };
        case 'GET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: {
        reducer,
        [ideaApi.reducerPath]: ideaApi.reducer,
        [artistsApi.reducerPath]: artistsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ideaApi.middleware, artistsApi.middleware),
    // getDefaultMiddleware().concat(artistsApi.middleware)
})

setupListeners(store.dispatch)

export default store;