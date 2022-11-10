import { getSavedUsers, setUserAuth, getUserAuth } from "../data/services"
import { User } from "../data/templates"


export interface userLogin{
    login: string,
    password: string
}



export function login(userTest : userLogin){

    let users : User[] = getSavedUsers()
    let userAuth = users.find((user) => {
        return user.login == userTest.login && user.password
    } ) 


    if(userAuth){
        setUserAuth(userAuth.id_user)
        return true
    }
    return false
}



export function logOut(){
    localStorage.removeItem("userAuth")
}
