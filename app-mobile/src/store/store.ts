/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import ordersReducer from './slices/ordersSlice';

const store = configureStore({
    reducer: {
        userData: userReducer,
        orders: ordersReducer,
    },
    middleware: (getDefaultMiddlewares) => {
        const middlewares = getDefaultMiddlewares();
        if (__DEV__) {
            const createDebugger = require('redux-flipper').default;
            middlewares.push(createDebugger());
        }
        return middlewares;
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
