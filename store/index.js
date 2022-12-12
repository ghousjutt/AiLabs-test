import { configureStore } from '@reduxjs/toolkit'
import { fileReducer } from './slices'

const store = configureStore({
    reducer: {
        file: fileReducer,
    },
    devTools: true,
});

export default store;