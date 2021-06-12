export interface IUser {
  id?: number;
  name: string;
  surname: string;
  email: string;
  reminders: IReminder[];
}

interface IReminder {
  id: number;
  platformName: string;
  endDate: string;
  price: number;
  userId: number;
}

export interface IUserPayload {
  name: string;
  surname: string;
  token: string;
}
