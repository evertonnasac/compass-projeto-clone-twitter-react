import Button from "../../components/Button"
import { Link } from "react-router-dom"
import { login, userLogin } from "../../auth/authenticate"
import "../../styles/login/login.sass"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface propsLogin {
    classNmame: string
}

function Login(props : propsLogin){
    
    const [user, setUser] = useState<userLogin>({login: "", password: ""})
    const navigate = useNavigate()

    function handleUser (e:any){
        setUser(
            {
                ...user,
                [e.target.name] : e.target.value
            }
        )
    }

    function getLogin(){
        if(login(user)){
            navigate("/")
        }
        

    }

    return(
        <section className={props.classNmame + " login"}>
            <img src="" alt="" className="logo-twitter" />
            <p className="title_login">Log in to Twitter</p>
            <input type="text" name="login" placeholder="Phone number, email addres" onChange={handleUser}/>
            <input type="password" name="password" placeholder="Password" onChange={handleUser}/>
            <Button
                content="Log in"
                kind="primary"
                width="100%"
                height="50px"
                onClick = {getLogin}
                
            />
            <div className="links_login">
                <Link to="">Forgot Password</Link>
                <Link to = "/signup">Signup on Twitter</Link>
            </div>
        </section>
    )
}

export default Login