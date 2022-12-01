import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { counterReducer } from './pages/Counter/counterSlice';
import { pokemonApi } from './pages/Pokemon/pokemonSlice';
import { users } from 'pages/Home/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  users,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(pokemonApi.middleware),
  devTools: import.meta.env.MODE === 'dev',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
