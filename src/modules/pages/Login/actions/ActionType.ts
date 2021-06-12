import { ActionTypes } from "../actionTypes";
import { IUser, IUserPayload } from "../../../interfaces/index";

interface SendRequest {
  type: ActionTypes.REQUEST_POST;
  error: null;
  payload: [];
}
interface SuccessRequest {
  type: ActionTypes.REQUEST_POST_SUCCESS;
  payload: IUserPayload;
  error: null;
}
interface ErrorRequest {
  type: ActionTypes.REQUEST_POST_ERROR;
  payload: [];
  error: Error;
}

export type Action = SendRequest | SuccessRequest | ErrorRequest;
