import axios from "axios";

export class HttpClient {
  baseUrl;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async post(url: string, data: any) {
    return await axios.post(`${this.baseUrl}/${url}`, data);
  }
}
