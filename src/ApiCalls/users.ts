import axios from "axios";
import { Login, Person } from "@/Interfaces/userInterface";
import BaseUrl from "./BaseUrl";

const host = BaseUrl;

function userSignUp(body: Person) {
  return axios.post(`${host}auth/SignUp`, body);
}

function userLogin(body: Login) {
  return axios.post(`${host}auth/Login`, body);
}

export { userSignUp, userLogin };
