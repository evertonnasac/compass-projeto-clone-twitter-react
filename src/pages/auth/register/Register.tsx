import LogoTwitter from "../../../components/LogoTwitter"
import SelectMouth from "./SelectMouth"
import Button from "../../../components/Button"
import { useState } from "react"

import "../../../styles/register/register.sass"

function Register (){

    const [typeInput, setTypeInput] = useState("phone")

    let Input : any
    let label : string = ""

    function toogleTypeInput(e : any){
        typeInput == "phone" ? setTypeInput("email") : setTypeInput("phone")
    }

    if(typeInput == "phone"){
        Input =  <input type="number" 
                name="phone_user " 
                className="register_phone input" 
                placeholder="Phone" />

        label = "Use Phone"
    }

    else if (typeInput == "email"){
        Input = <input type="email" 
                name="email_user " 
                className="register_email input" 
                placeholder="Email" />

        label = "Use Email"
    }
    

    return(
        <section  className="register">
            <LogoTwitter className="logo_register"/>
            <p className="register_title">Create Account</p>
            <input type="text" className="register_name input" name = "name_user" placeholder="Name"/>

            {Input}

            <a className="toogle_input" onClick={toogleTypeInput}>{label}</a>
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
                <input type="number" name="register_mouth" placeholder="Day" min={0} max={31} className="day" />
                <input type="number" name="register_year" placeholder="Year" className="year"/>
            </div>
            <Button
                content="Next"
                height="7%"
                width="100%"
                kind="primary"
            />
            

        </section>
        
    )
}

export default Register