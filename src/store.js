import { configureStore } from "@reduxjs/toolkit";
import todoRedcer from './todoslice';


const store = configureStore({
    reducer : {
        todos : todoRedcer
    }
});

export default store;