import { HttpClient } from "../../httpClient/index";

class LoginService extends HttpClient {
  constructor() {
    super("http://api.openweathermap.org");
  }

  register(data: any) {
    return this.post("login", data);
  }
}

export const weatherService = new LoginService();
