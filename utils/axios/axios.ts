import axios, { Axios } from 'axios'

export default class AxiosService {
  private requestClient: Axios
  constructor() {
    this.requestClient = axios.create()
  }
  async get(url) {
    return await this.requestClient.get(url, {})
  }
}
