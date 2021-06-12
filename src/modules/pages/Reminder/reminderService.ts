import { HttpClient } from "../../httpClient/reminderHttpClient";

class ReminderService extends HttpClient {
  constructor() {
    super("http://localhost:8000");
  }

  getReminder() {
    return this.get("reminders");
  }

  addReminder(data: any) {
    return this.post("reminders/create", data);
  }

  updateReminder(data: any) {
    return this.update("reminders", data);
  }

  deleteReminder(id: string) {
    return this.delete("reminders", id);
  }
}

export const reminderService = new ReminderService();
