
import Button from "./Button"
import { Context } from "../context/themeContext"
import { useContext } from "react"

import "../styles/components/timeline_area_post.sass"
import React, { useState } from "react"
import tweetController from "../controllers/tweet-controller"

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
    const {theme} = useContext(Context)

    function handleTweet(e : any){
        setTweet(e.target.value)
        console.log(tweet)
    }

    function saveTweet(){
        console.log("teste")
        tweetController.createTweet(tweet, "450")
    }


    return(
        <section className= {theme +" post"}>
            <div className="post_text">
                <img src="../../public/images/profile/fotoperfil.png" 
                    alt= "Foto de perfil" 
                    className = "image_profile" />
                <textarea
                    maxlength = "380" 
                    placeholder="What’s happening?" 
                    className = "input_tweet" 
                    onChange={handleTweet}
                    >  
                </textarea>
            </div>
            
            <div className="post_options">
                <div className =  "post_icons_container">

                    {icons.map(({path, alt}, index) =>
                        <img  key = {index} 
                            src = {path} 
                            className = "post_icons" 
                            alt = {alt} />
                        )}
                </div>

                <Button content = "Tweet"
                        height = "30px"
                        width =  "20%"
                        opacity = "0.5"
                        kind="primary" 
                        onClick={saveTweet}
                />
            </div>
        </section>
       
    )
}

export default AreaPost