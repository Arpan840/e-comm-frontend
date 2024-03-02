import axios from "axios"
import { Person } from "@/Interfaces/userInterface"

const host = "http://localhost:8000/"

function userSignUp(body: Person){
    return axios.post(`${host}auth/SignUp`,body)
}

export {userSignUp}