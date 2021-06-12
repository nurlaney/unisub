import { IReminder } from "../interfaces/index";
import { REMINDER_ACTIONS } from "../pages/Reminder/actions/consts";

interface LoadReminder {
    type: REMINDER_ACTIONS.GET_REMINDER;
    error: null;
    payload: [];
}

interface SuccsessReminder {
    type: REMINDER_ACTIONS.GET_REMINDER_SUCCESS;
    payload: IReminder[];
}

interface ErrorReminder {
    type: REMINDER_ACTIONS.GET_REMINDER_ERROR;
    payload: [];
    error: Error;
}

export type GetAction = LoadReminder | SuccsessReminder | ErrorReminder;