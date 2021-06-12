import { IReminder } from "../interfaces/index";
import { REMINDER_ACTIONS } from "../pages/Reminder/actions/consts";

interface DeleteReminder {
  type: REMINDER_ACTIONS.DELETE_REMINDER;
  error: null;
  payload: [];
}

interface SuccsessDeleteReminder {
  type: REMINDER_ACTIONS.DELETE_REMINDER_SUCCESS;
  payload: string;
  error: null;
}

interface ErrorDeleteReminder {
  type: REMINDER_ACTIONS.DELETE_REMINDER_ERROR;
  payload: [];
  error: Error;
}

export type DeleteAction =
  | DeleteReminder
  | SuccsessDeleteReminder
  | ErrorDeleteReminder;
