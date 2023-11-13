import Application from "../models/Application";
import { ApiServiceBase } from "./ApiServiceBase";

interface GetContactsQuery {
  name?: string;
}

export default class ApplicationService extends ApiServiceBase {
  async info(): Promise<Application> {
    return await this.call<Application>("/");
  }

  async getContacts(query?: GetContactsQuery) {
    return await this.call("/api/contact", { query });
  }
}
