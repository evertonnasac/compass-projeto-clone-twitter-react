import Button from "../../components/Button"
import { Link } from "react-router-dom"
import "../../styles/login/login.sass"

function Login(){
    return(
        <section className="login">
            <img src="" alt="" className="logo-twitter" />
            <p className="title_login">Log in to Twitter</p>
            <input type="text" name="login" placeholder="Phone number, email addres"/>
            <input type="password" name="" placeholder="Password" />
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