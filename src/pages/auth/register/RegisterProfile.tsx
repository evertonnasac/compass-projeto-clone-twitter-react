import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createNewUser } from "../../../controllers/user-controller";

import Button from "../../../components/Button"

import "../../../styles/register/register_profile.sass"
import { User } from "../../../data/templates";
 
function RegisterProfile(){

    const [user, setUser] = useState<User>({})
    const navigate = useNavigate()
    const {search} = useLocation()

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("name")){
            const name = searchParams.get("name") || ""
            const login = searchParams.get("login") || ""
            setUser({name : name, login: login})
        }
        
    },[search])

    function handleUser(e:any){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function submitUser(e:any){
        e.preventDefault()
        createNewUser(user)
        navigate("/")
    }
    
    return(
        <section className="signupProfile">
            <form onSubmit={submitUser}>
                <input type="file" name="image" id="" />
                <input type="text" name="tagname" placeholder="tagname" onChange={handleUser} />
                <input type="password" name="password" placeholder="Passwordd" onChange={handleUser} />
                <input type="text" name="city" placeholder="City" onChange={handleUser}/>
                <textarea name="bio" onChange={handleUser}></textarea>
                <Button
                    content="Next"
                    height="35px"
                    kind="primary"
                    width="100%"
                    
                />
            </form>
        </section>
    )
}

export default RegisterProfile