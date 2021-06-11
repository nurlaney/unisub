export interface IUser {
    id?: string,
    name: string,
    surname: string,
    mail: string,
    reminders: IReminder[]
}

export interface IReminder {
    id?: string,
    name: string,
    price: number,
    endDate: string,
    userId: string
}