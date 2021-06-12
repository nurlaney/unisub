import { HttpClient } from '../../httpClient/reminderHttpClient';

class ReminderService extends HttpClient {
    constructor() {
        super('https://60b74ecb17d1dc0017b89961.mockapi.io/api/v1');
    }

    getReminder() {
        return this.get('reminders');
    }

    addReminder(data: any) {
        return this.post('reminder', data);
    }

    updateReminder(data: any) {
        return this.update('reminder', data);
    }

    deleteReminder(id: number) {
        return this.delete('reminder', id);
    }
}

export const reminderService = new ReminderService();