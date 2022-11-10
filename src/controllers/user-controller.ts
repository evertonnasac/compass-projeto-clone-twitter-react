import { User } from "../data/templates"
import { setNewUser, getUserAuth, getUserById } from "../data/services"


export function createId (){
    const init = Date.now().toString(36)
    const final = Math.random().toString(36).substring(2)
    return init + final
}

export function createNewUser(newUser: User){
    let user : User= {
        ...newUser,
        followers: [],
        followings: [],
        id_user: createId(),
        join: new Date().toDateString()        
        

    }
    setNewUser(user)
}

export function getUserAuthenticate(){
    return getUserAuth()
}

export function getUserId(id:string){
    return getUserById(id)
}