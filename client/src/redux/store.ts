// import { configureStore } from '@reduxjs/toolkit'
// import cartSlice from './CartRedux'

// const store = configureStore({
//     reducer: {
//         cart: cartSlice.reducer
//     }
// })

// export default store

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from "redux-persist/lib/storage";

import cartSlice from "./CartRedux";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({ cart: cartSlice.reducer })
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware): any {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    },
})

export const persistor = persistStore(store)