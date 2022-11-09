import { User } from "../data/templates"
import { setNewUser } from "../data/services"


function getIdUser (){
    const init = Date.now().toString(36)
    const final = Math.random().toString(36).substring(2)
    return init + final
}

export function createNewUser(newUser: User){
    let user : User= {
        ...newUser,
        followers: [],
        followings: [],
        id_user: getIdUser()

    }
    setNewUser(user)
}