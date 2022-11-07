import Button from "./Button"
import { useContext } from "react"
import { Context } from "../context/themeContext"

import "../styles/components/suggest_follow_card.sass"

function SuggestFollowCard(){

    const {theme} = useContext(Context)

    return(
        <div className={theme + " card_suggest"}>
            <img src ="../../public/images/profile/fotoperfil.png" 
                alt = "" 
                className="suggest_image"/>
            <div className={theme + " content_suggest_data"}>
                <p className="suggest_name">Andre Joao</p>
                <p className="suggest_tagname">@ndrejoao</p>
            </div>

            <Button content="Follow"
                height="35%"
                kind="secondary"            
        />  
        
    </div>
    )

}

export default SuggestFollowCard