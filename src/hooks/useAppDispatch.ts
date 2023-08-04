import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@store/index';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
