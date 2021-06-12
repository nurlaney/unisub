import { GetAction } from "../../../types/getActionType";
import { CreateAction } from "../../../types/createActionType";
import { UpdateAction } from "../../../types/updateActionType";
import { DeleteAction } from "../../../types/deleteActionType";
import { ASYNC_STATUS } from "../../../../redux/consts";
import { REMINDER_ACTIONS } from "../actions/consts";
import { IReminder } from "../../../interfaces";

export interface IInitial {
    data: IReminder[];
    error: Error | null;
    status: ASYNC_STATUS;
}

const initialState: IInitial = {
    data: [],
    error: null,
    status: ASYNC_STATUS.IDLE,
};

export const reminderReducer = (state = initialState, action: GetAction | CreateAction | UpdateAction | DeleteAction): IInitial => {
    switch (action.type) {
        case REMINDER_ACTIONS.GET_REMINDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null
            };
        case REMINDER_ACTIONS.GET_REMINDER_SUCCESS:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null
            };
        case REMINDER_ACTIONS.GET_REMINDER_ERROR:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error
            }

        case REMINDER_ACTIONS.ADD_REMINDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null
            };
        case REMINDER_ACTIONS.ADD_REMINDER_SUCCESS:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null
            };
        case REMINDER_ACTIONS.ADD_REMINDER_ERROR:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error
            }

        case REMINDER_ACTIONS.UPDATE_REMINDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null
            };
        case REMINDER_ACTIONS.UPDATE_REMINDER_SUCCESS:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null
            };
        case REMINDER_ACTIONS.UPDATE_REMINDER_ERROR:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error
            }

        case REMINDER_ACTIONS.DELETE_REMINDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null
            };
        case REMINDER_ACTIONS.DELETE_REMINDER_SUCCESS:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null
            };
        case REMINDER_ACTIONS.DELETE_REMINDER_ERROR:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error
            }

        default:
            return state
    }
}