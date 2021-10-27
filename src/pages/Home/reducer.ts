import { UserDto } from './type';
import { LOADING, SUCCESS, FAILED, Action } from './action';

export type State = {
  users: UserDto[];
  loading: boolean;
  error?: Error;
};

const initState = {
  users: [],
  loading: false,
};

export function users(state: State = initState, action: Action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
        users: [],
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        users: [...action.users],
      };

    case FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.error,
      };

    default:
      return state;
  }
}
