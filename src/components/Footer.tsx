import Button from "./Button"

import "../styles/components/footer.sass"

function Footer (){
    return (
        <footer>
            <div className="footer_content_text">
                <p className="footer_title">Don't miss what's happening</p>
                <p className="footer_subtitle">People on Twitter are the first to know</p>
            </div>
            <Button content="Log in " class="btn_footer_login"/>
            <Button content="Sign in " class="btn_footer_signup"/>
        </footer>
    )
}

export default Footer