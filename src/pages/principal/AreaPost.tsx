
import Button from "../../components/Button"
import { Context } from "../../context/themeContext"
import { useContext } from "react"
import { getUserAuthenticate } from "../../controllers/user-controller"
import  { useState } from "react"
import tweetController from "../../controllers/tweet-controller"
import { getUserId } from "../../controllers/user-controller"

import "../../styles/components/timeline_area_post.sass"

let icons  = [
  
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
    const [srcImage, setSrcImage]  = useState("")
    
    const [idUserAuth] = useState<string>(getUserAuthenticate())

    const user= getUserId(idUserAuth)


    function handleTweet(e : any){
        setTweet(e.target.value)
    }

    function saveTweet(){
        if(tweet.length<1){
            return
        }
        
        tweetController.createTweet(tweet, idUserAuth, srcImage)
    }

    function setImage(e:any){

        const file = e.target.files[0]

        if(file){
            const reader = new FileReader()

            reader.addEventListener("load", (e) =>{
                const readerTarget = e.target
                setSrcImage(readerTarget?.result?.toString() || "")

               
            })
            reader.readAsDataURL(file)

        }
    }


    return(
        <section className= {theme +" post"}>
            
            <div className="post_text">
                <img src={user?.photo} 
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
                    <label className="label_image">
                        <input  type="file" id="input_file"  onChange={(e)=>setImage(e)}/>
                        <img src="../../public/icons/tweets/media.png"
                         className="icon_input_image post_icons" ></img>
                    </label>

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