import { ASYNC_STATUS } from "../../../../redux/consts";
import { Action } from "../actions/ActionType";
import { ActionTypes } from "../actionTypes";

const initialState = {
  data: [],
  error: null,
  status: ASYNC_STATUS.IDLE,
};

export function loginReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.REQUEST_POST:
      return {
        ...state,
        status: ASYNC_STATUS.LOADING,
        data: [],
        error: null,
      };
    case ActionTypes.REQUEST_POST_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        data: [...state.data, action.payload],
        error: null,
      };
    case ActionTypes.REQUEST_POST_ERROR:
      return {
        ...state,
        status: ASYNC_STATUS.ERROR,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
}
