import { HttpClient } from "../../httpClient/index";

class RegisterService extends HttpClient {
  constructor() {
    super("http://172.28.0.167:8080");
  }

  register(data: any) {
    return this.post("api/auth/signup", data);
  }
}

export const registerService = new RegisterService();
