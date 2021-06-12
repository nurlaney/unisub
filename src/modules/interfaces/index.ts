export interface IUser {
  id?: number;
  name: string;
  surname: string;
  email: string;
  reminders: IReminder[];
}

export interface IReminder {
  id: number;
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
