import { Dispatch } from "redux";
import { reminderService } from "../reminderService";
import { REMINDER_ACTIONS } from "./consts";

export function getReminder(dispatch: Dispatch) {
  dispatch({ type: REMINDER_ACTIONS.GET_REMINDER });
  reminderService
    .getReminder()
    .then(({ data }) => {
      dispatch({
        type: REMINDER_ACTIONS.ADD_REMINDER_SUCCESS,
        payload: data,
      });
    })
    .catch((err: Error) => {
      dispatch({
        type: REMINDER_ACTIONS.ADD_REMINDER_ERROR,
        error: err,
      });
    });
}

export function addReminder(dispatch: Dispatch) {
  dispatch({ type: REMINDER_ACTIONS.ADD_REMINDER });
  return function (data: any) {
    reminderService
      .addReminder(data)
      .then((resp) => {
        dispatch({
          type: REMINDER_ACTIONS.ADD_REMINDER_SUCCESS,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: REMINDER_ACTIONS.DELETE_REMINDER_ERROR,
          error: err,
        })
      );
  };
}

export function updateReminder(dispatch: Dispatch) {
  return function (data: any) {
    reminderService
      .updateReminder(data)
      .then((resp) => {
        dispatch({
          type: REMINDER_ACTIONS.UPDATE_REMINDER_SUCCESS,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: REMINDER_ACTIONS.UPDATE_REMINDER_ERROR,
          error: err,
        })
      );
  };
}

export function removeReminder(dispatch: Dispatch) {
  return function (data: any) {
    reminderService
      .deleteReminder(data)
      .then((resp) => {
        dispatch({
          type: `${REMINDER_ACTIONS.DELETE_REMINDER}_SUCCESS`,
          payload: Number(data),
        });
      })
      .catch((err) =>
        dispatch({
          type: `${REMINDER_ACTIONS.DELETE_REMINDER}_ERROR`,
          error: err,
        })
      );
  };
}
