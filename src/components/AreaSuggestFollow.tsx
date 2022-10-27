import Image from "./Image"
import Button from "./Button"

import "../styles/components/area_suggest_follow.sass"

function AreaSuggestFollow (){
    return(
        <article className="container_suggest">
            <p className="who_suggest">Who to follow</p>
            <div className="card_suggest">
                <Image src ="" alt = "" className="suggest_image"/>
                <div className="content_suggest_data">
                    <p className="suggest_name">Andre Joao</p>
                    <p className="suggest_tagname">@ndrejoao</p>
                </div>
                <Button content="Follow" class = "btn_follow" />
            </div>
            <p className="showmore">Show More</p>
        </article>
    )
}

export default AreaSuggestFollow