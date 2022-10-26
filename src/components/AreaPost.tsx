import Image from "./Image"
import Input from "./Input"
import Button from "./Button"

import "../styles/components/timeline_area_post.sass"

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
    return(
        <section className="post">
            <div className="post_text">
                <Image src="" alt= "" className = "image_profile" />

                <Input type="textarea" 
                    maxlength = "380" 
                    placeholder="What’s happening?"  
                    className = "input_tweet" />
            </div>
            
            <div className="post_options">
                <div className =  "post_icons_container">

                {icons.map(({path, alt}, index) =>
                    <Image  key = {index} src = {path} className = "post_icons" alt = {alt} />
                )}
                </div>

                <Button content = "Tweet" class="post_btn"  />
            </div>

           

        </section>
            

       
    )
}

export default AreaPost