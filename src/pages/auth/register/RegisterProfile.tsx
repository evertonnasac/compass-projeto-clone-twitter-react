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
    let srcImage : any = ""
    

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
        console.log(user)
        
    }

    function submitUser(e:any){
        e.preventDefault()
        setUser({
            ...user,
        })
        createNewUser(user)
        navigate("/")
    }
    
    function setImage(e:any){

        let tagImage = document.querySelector("#photo_register_1")
        const file = e.target.files[0]

        if(file){
            const reader = new FileReader()

            reader.addEventListener("load", (e) =>{
                const readerTarget = e.target
                srcImage = readerTarget?.result?.toString()
                tagImage?.setAttribute("src", srcImage)
                setUser({
                    ...user,
                    photo: srcImage
                })
                
            })
            reader.readAsDataURL(file)

        }
    }

    return(
        <section className="signupProfile">
             <img src="" alt="Foto de perfil" id="photo_register_1" />
            <form onSubmit={submitUser}>
                <input type="file" name="image" id="" onChange={setImage} />
                <input type="text" name="tagname" placeholder="@tagname" onChange={handleUser} />
                <input type="password" name="password"  placeholder="Password" onChange={handleUser} />
                <input type="text" name="city" placeholder="City" onChange={handleUser}/>
                <textarea name="bio" placeholder="About you" onChange={handleUser}></textarea>
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