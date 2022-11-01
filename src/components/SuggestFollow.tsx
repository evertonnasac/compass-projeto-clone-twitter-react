import Image from "./Image"
import Button from "./Button"
import { useContext } from "react"
import { Context } from "../utils/themeContext"

import "../styles/components/area_suggest_follow.sass"

function SuggestFollow (){

    const {theme} = useContext(Context)

    return(
        <article className="container_suggest">
            <p className={theme + " who_suggest"}>Who to follow</p>
            <div className="card_suggest">
                <Image src ="../../public/images/profile/fotoperfil.png" alt = "" className="suggest_image"/>
                <div className={theme + " content_suggest_data"}>
                    <p className="suggest_name">Andre Joao</p>
                    <p className="suggest_tagname">@ndrejoao</p>
                </div>
        
                <Button content="Follow"
                        height="25%"
                        kind="secondary"            
                />  
                
            </div>
            <p className="showmore">Show More</p>
        </article>
    )
}

export default SuggestFollow