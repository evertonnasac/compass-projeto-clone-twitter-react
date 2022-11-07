import Button from "./Button"
import { Context } from "../context/themeContext"
import { useContext } from "react"

import "../styles/components/footer.sass"

function Footer (){

    const {theme} = useContext(Context)

    return (

        <div className={"footer "+theme}>
            <div className="footer_content_text">
                <p className="footer_title">Don't miss what's happening</p>
                <p className="footer_subtitle">People on Twitter are the first to know</p>
            </div>
            <div className="btn_footer_login">
                <Button content="Log in "
                    width="100px"
                    height="100%"
                    kind="primary"
                /> 
            </div>
            <div className="btn_footer_signup">
                <Button content="Sign in "
                        width="100px"
                        height="100%"
                        kind="secondary"
                />
                </div>
          
        </div>
    )

}

export default Footer