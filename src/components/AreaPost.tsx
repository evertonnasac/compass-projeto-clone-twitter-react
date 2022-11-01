import Image from "./Image"
import Input from "./Input"
import Button from "./Button"

import "../styles/components/timeline_area_post.sass"
import { useState } from "react"
import handleTweet from "../utils/handleTweet"

let icons  = [
    {
        path:  "../../public/icons/tweets/media.png",
        alt: "media"
    },
    {
        path: "../../public/icons/tweets/gif.png",
        alt : "gif",
    },
    {
        path: "../../public/icons/tweets/poll.png",
        alt : "poll", 
    },
    {
        path:  "../../public/icons/tweets/emoji.png",
        alt : "emoji"
    },
    {
        path:  "../../public/icons/tweets/schedule.png",
        alt: "agenda"
    }
]


function AreaPost(){

    const [tweet, setTweet] = useState("")

    /*function handleTweet(e:Event){
        setTweet(e.target.value)
    }*/

    return(
        <section className="post">
            <div className="post_text">
                <Image src="../../public/images/profile/fotoperfil.png" alt= "" className = "image_profile" />
                <textarea
                    maxlength = "380" 
                    placeholder="What’s happening?"  
                    className = "input_tweet" 
                    >
                    
                </textarea>" 
                    
            </div>
            
            <div className="post_options">
                <div className =  "post_icons_container">

                {icons.map(({path, alt}, index) =>
                    <Image  key = {index} src = {path} className = "post_icons" alt = {alt} />
                )}
                </div>

                <Button content = "Tweet"
                        height = "30px"
                        width =  "20%"
                        opacity = "0.5"
                        kind="primary" 
                        //onclick={handleTweet}
                />
            </div>

        </section>
       
    )
}

export default AreaPost