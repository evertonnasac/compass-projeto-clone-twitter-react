import Button from "./Button"
import { Context } from "../context/themeContext"
import { useContext,useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserAuthenticate } from "../controllers/user-controller"
import { logOut } from "../auth/authenticate"

import "../styles/components/footer.sass"

function Footer (){

    const {theme} = useContext(Context)
    const navigate = useNavigate()
    const [idUserAuth] = useState<string>(getUserAuthenticate())

    let contentButton = ""
    idUserAuth ? contentButton = "Logout" : contentButton = "Login"

    function logout(){
        if(idUserAuth){
            logOut()
        }
        navigate("/login")
    }


    return (

        <div className={"footer "+theme}>
            <div className="footer_content_text">
                <p className="footer_title">Don't miss what's happening</p>
                <p className="footer_subtitle">People on Twitter are the first to know</p>
            </div>
            <div className="btn_footer_login">
                <Button content={contentButton}
                    width="100px"
                    height="100%"
                    kind="primary"
                    onClick={logout}
                /> 
            </div>
            {!idUserAuth? 
                <div className="btn_footer_signup">
                <Button content="Sign in "
                        width="100px"
                        height="100%"
                        kind="secondary"
                        onClick={(e: any) => {navigate("/signup")}}
                />
                </div> : ""}
           
          
        </div>
    )

}

export default Footer