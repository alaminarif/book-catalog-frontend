import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import logger from 'redux-logger';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;