import { HttpClient } from "../../../httpClient";

class ReminderService extends HttpClient {
  constructor() {
    super("http://localhost:8000");
  }

  getReminder() {
    return this.get('');
  }

}
export const reminderService = new ReminderService();
