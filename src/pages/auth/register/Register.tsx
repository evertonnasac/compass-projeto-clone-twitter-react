import LogoTwitter from "../../../components/LogoTwitter"
import SelectMouth from "./SelectMouth"
import Button from "../../../components/Button"

function Register (){
    return(
        <section  className="register">
            <LogoTwitter className="logo_register"/>
            <input type="text" className="register_text" name = "name_user" />
            <input type="number" name="phone_user" className="register_phone" />
            <input type="email" name="phone_user" className="register_email" />
            <p className="toogle_auth">Use Email</p>
            <p className="date_birth">Date of birth</p>
            <p className="warnig_birth">
                Facilisi sem pulvinar velit nunc, 
                gravida scelerisque amet nibh sit. 
                Quis bibendum ante phasellus metus, magna lacinia sed augue. 
                Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit 
                viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
            </p>
            <div className="register_container_birth">
                <SelectMouth/>
                <input type="number" name="register_mouth" placeholder="Day" min={0} max={31} />
                <input type="number" name="register_year" placeholder="Year"/>
                <Button
                    content="Next"
                    height="200px"
                    width="80%"
                    kind="principal"
                />
            </div>
            

        </section>
        
    )
}

export default Register