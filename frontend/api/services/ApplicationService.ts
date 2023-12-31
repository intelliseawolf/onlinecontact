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
    return await this.call("/api/contacts", { query });
  }

  async createContact(contact: FormData) {
    return await this.call("/api/contacts", {
      method: "post",
      body: contact,
    });
  }

  async getContact(id: string) {
    return await this.call(`/api/contacts/${id}`);
  }

  async updateContact(contact: FormData, id: string) {
    contact.append("_method", "put");
    return await this.call(`/api/contacts/${id}`, {
      method: "post",
      body: contact,
    });
  }
}
