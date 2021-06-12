import axios from "axios";

export class HttpClient {
  baseUrl;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async get(url: string) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }

  async post(url: string, data: any) {
    return await axios.post(`${this.baseUrl}/${url}`, data);
  }

  async update(url: string, data: any) {
    return await axios.patch(`${this.baseUrl}/${url}/${data.id}`, data);
  }

  async delete(url: string, id: string) {
    return await axios.delete(`${this.baseUrl}/${url}/${id}`);
  }
}
