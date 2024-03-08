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

function userLogout(){
  return axios.delete(`${host}auth/Logout`);
}

export { userSignUp, userLogin, userLogout };
