import { getSavedUsers, setUserAuth, getUserAuth } from "../data/services"
import { User } from "../data/templates"


export interface userLogin{
    login: string,
    password: string
}



export function login(userTest : userLogin){

    let users : User[] = getSavedUsers()
    console.log(userTest.login)
    let userAuth = users.find((user) => {
        return user.login == userTest.login && user.password
    } ) 

    console.log(userAuth)

    if(userAuth){
        setUserAuth(userAuth.id_user)
    }
}



export function logOut(){
    localStorage.removeItem("userAuth")
}
