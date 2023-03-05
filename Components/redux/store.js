import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { ShazamApi } from './services/shazam';

export const store = configureStore({
  reducer: {
    [ShazamApi.reducerPath] : ShazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamApi.middleware),
});
