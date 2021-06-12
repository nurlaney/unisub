import { Dispatch } from "redux";
import { ActionTypes } from "../actionTypes";
import { loginService } from "../service";

export function addUser(dispatch: Dispatch) {
  dispatch({
    type: ActionTypes.REQUEST_POST,
  });
  return function (data: any) {
    loginService
      .login(data)
      .then((resp) => {
        dispatch({
          type: ActionTypes.REQUEST_POST_SUCCESS,
          payload: resp.data,
        });
        localStorage.setItem("token", JSON.stringify(resp.data));
      })
      .catch((err) =>
        dispatch({
          type: ActionTypes.REQUEST_POST_ERROR,
          error: err,
        })
      );
  };
}
