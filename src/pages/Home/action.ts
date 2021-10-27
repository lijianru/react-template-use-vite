import { UserDto } from './type';
import axios from 'axios';
import { AppDispatch } from 'state-container/store';

export const LOADING = 'LOADING' as const;
export const SUCCESS = 'SUCCESS' as const;
export const FAILED = 'FAILED' as const;

export function loading() {
  return { type: LOADING };
}

export function success(users: UserDto[]) {
  return { type: SUCCESS, users };
}

export function failed(error: Error) {
  return { type: FAILED, error };
}

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loading());
    const result = await axios.get<UserDto[]>('api/users');

    dispatch(success(result.data));
  } catch (error) {
    dispatch(failed(error as Error));
  }
};

export type Action =
  | ReturnType<typeof loading>
  | ReturnType<typeof success>
  | ReturnType<typeof failed>;
