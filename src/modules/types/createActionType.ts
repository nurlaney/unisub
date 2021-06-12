import { IReminder } from "../interfaces/index";
import { REMINDER_ACTIONS } from "../pages/Reminder/actions/consts";

interface CreateReminder {
    type: REMINDER_ACTIONS.ADD_REMINDER;
    error: null;
    payload: [];
}

interface SuccsessCreateReminder {
    type: REMINDER_ACTIONS.ADD_REMINDER_SUCCESS;
    payload: IReminder[];
    error: null;
}

interface ErrorCreateReminder {
    type: REMINDER_ACTIONS.ADD_REMINDER_ERROR;
    payload: [];
    error: Error;
}

export type CreateAction = CreateReminder | SuccsessCreateReminder | ErrorCreateReminder;