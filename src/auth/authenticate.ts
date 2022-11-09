import { User, UserAuth } from "../data/templates"

export interface userLogin{
    login: string,
    password: string
}


export function setAuthenticate(userTest: userLogin){

    let users : User[] = JSON.parse(localStorage.getItem("user") || "")
    let userAuth = users.find((user) => {
        return user["login"] == userTest["login"] && 
               user["password"] == userTest["password"]
    } ) 

    localStorage.setItem("userAuth", JSON.stringify(userAuth))
}

