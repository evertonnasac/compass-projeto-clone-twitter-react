import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/Button"
 


interface user{
    name: string,
    login: string
}

function RegisterProfile(){

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const {search} = useLocation()

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)

        if(searchParams.get("name")){
            const name = searchParams.get("name")
            const login = searchParams.get("login")
            setUser({name : name, login: login})
            console.log(name, login)
            console.log(user)
        }
        
    },[search])

    function handleUser(e:any){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    function submitUser(e:any){
        e.preventDefault()

    }
    

    return(
        <section className="signupProfile">
            <form onSubmit={submitUser}>
                <input type="file" name="image" id="" />
                <input type="text" name="tagname" placeholder="tagname" onChange={handleUser} />
                <input type="password" name="passowrd" id="" />
                <input type="text" name="city" id="" />
                <textarea name="bio"></textarea>
                <Button
                    content="Next"
                    height="25px"
                    kind="primary"
                />
            </form>
        </section>
    )
}

export default RegisterProfile