import { configureStore } from '@reduxjs/toolkit';
import generalConfig from './reducer/GeneralConfig';
import dataHome from './reducer/index';

export const store = configureStore({
  reducer: {
    dataHome,
    generalConfig,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
