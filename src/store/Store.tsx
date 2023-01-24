import { AnyAction, configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { SecondReducer } from './Use-reducer';
// const rootReducer = combineReducers({
//   info: SecondReducer,
// });
const store = configureStore({
  reducer: {
    info: SecondReducer,
  },
  middleware: [thunk],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type AsyncDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type TypedDispatch = typeof store.dispatch;
