export interface IUser {
  _id?: string | number;
  name: string;
  surname: string;
  email: string;
  reminders: IReminder[];
}

export interface IReminder {
  _id?: string | number;
  platformName: string;
  expDate: string;
  price: number;
  userId: number;
}

export interface IUserPayload {
  name: string;
  surname: string;
  token: string;
}
