import Button from "../../components/Button"
import { Link } from "react-router-dom"
import "../../styles/login/login.sass"
import { useState } from "react"

function Login(){
    
    const [user, setUser] = useState({})

    function handleUser (e:any){
        setUser(
            {
                ...user,
                [e.target.name] : e.target.value
            }
        )
    }

    return(
        <section className="login">
            <img src="" alt="" className="logo-twitter" />
            <p className="title_login">Log in to Twitter</p>
            <input type="text" name="login" placeholder="Phone number, email addres" onChange={handleUser}/>
            <input type="password" name="" placeholder="Password" onChange={handleUser}/>
            <Button
                content="Log in"
                kind="primary"
                width="100%"
                height="50px"
                
            />
            <div className="links_login">
                <Link to="">Forgot Password</Link>
                <Link to = "/signup">Signup on Twitter</Link>
            </div>
        </section>
    )
}

export default Login