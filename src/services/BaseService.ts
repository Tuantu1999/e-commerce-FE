import Axios from "axios";
import { AuthService } from "./AuthService";

export class Service {
  private axios = Axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    timeout: 30000,
  });

  auth = new AuthService(this.axios);
}
