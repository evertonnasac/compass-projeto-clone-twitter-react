import { Link } from "react-router-dom";

import "../../styles/signup/signup.sass"

function Signup (){
    return(
        <section className="signup">
            <div className="signup_container_image">
                <img src= "../../public/images/signup/backtwitter.png"
                     alt="background-twitter"
                     className="signup_background" />
            </div>
            <aside className="signup_main">
                <img src="" alt="logo-twitter" />
                <h1>Happening now</h1>
                <h3>Join Twitter today</h3>
                <button className="btn_google btn_signup">Signup with Google</button>
                <button className="btn_apple btn_signup">Signup with Apple</button>
                <Link to={"/register"}className="btn_email_phone btn_signup">Signup with email or phone</Link>
                <p className="terms_signup">
                    By singing up you agree to the <span>Terms of Service </span> 
                    and <span>Policy</span>, 
                    including <span>Cookie Use</span>.
                </p>
                <p className="login_signup">Already have an account? <Link to={"/login"}>Log in</Link></p>
            </aside>
        </section>
    )
}

export default Signup