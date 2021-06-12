import { HttpClient } from "../../httpClient/userHttpClient";

class LoginService extends HttpClient {
  constructor() {
    super("http://172.28.0.167:8080");
  }

  login(data: any) {
    return this.post("api/login", data);
  }

  checkUserExist(token: any) {
    return this.get("api/check", token);
  }
}

export const loginService = new LoginService();
