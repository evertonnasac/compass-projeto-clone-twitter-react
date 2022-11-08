
import SuggestFollowCard from "./SuggestFollowCard"
import { useContext } from "react"
import { Context } from "../../context/themeContext"
import { Link } from "react-router-dom"

import "../styles/components/suggest_follow.sass"

function SuggestFollow (){

    const {theme} = useContext(Context)

    return(
        <article className={theme + " container_suggest"}>
            <p className={theme + " who_suggest"}>Who to follow</p>
            <SuggestFollowCard/>
            <SuggestFollowCard/>
            <Link to = "/error"><p className="showmore">Show More</p></Link>
        </article>
    )
}

export default SuggestFollow