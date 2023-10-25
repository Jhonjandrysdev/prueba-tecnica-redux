import {configureStore} from '@reduxjs/toolkit';
import publicReducer from '../features/publicSlice';
export const store = configureStore({
    reducer:{
        publications: publicReducer,
    }
})

