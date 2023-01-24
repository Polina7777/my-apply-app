import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, TypedDispatch, AsyncDispatch } from './Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useAsyncTypedDispatch = () => useDispatch<AsyncDispatch>();
