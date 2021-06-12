import { IReminder } from "../interfaces/index";
import { REMINDER_ACTIONS } from "../pages/Reminder/actions/consts";

interface UpdateReminder {
    type: REMINDER_ACTIONS.UPDATE_REMINDER;
    error: null;
    payload: [];
}

interface SuccsessUpdateReminder {
    type: REMINDER_ACTIONS.UPDATE_REMINDER_SUCCESS;
    payload: IReminder[];
    error: null;
}

interface ErrorUpdateReminder {
    type: REMINDER_ACTIONS.UPDATE_REMINDER_ERROR;
    payload: [];
    error: Error;
}

export type UpdateAction = UpdateReminder | SuccsessUpdateReminder | ErrorUpdateReminder;