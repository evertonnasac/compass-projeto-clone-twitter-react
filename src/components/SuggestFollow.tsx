
import SuggestFollowCard from "./SuggestFollowCard"
import { useContext } from "react"
import { Context } from "../utils/themeContext"

import "../styles/components/suggest_follow.sass"

function SuggestFollow (){

    const {theme} = useContext(Context)

    return(
        <article className="container_suggest">
            <p className={theme + " who_suggest"}>Who to follow</p>
            <SuggestFollowCard/>
            <SuggestFollowCard/>
            <p className="showmore">Show More</p>
        </article>
    )
}

export default SuggestFollow