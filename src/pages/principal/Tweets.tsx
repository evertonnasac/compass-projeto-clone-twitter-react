
import { Context } from "../../context/themeContext"
import { useContext, useState, useEffect} from "react"
import { getUserAuthenticate } from "../../controllers/user-controller"
import InputComment from "../../components/InputComment"
import { getTweets } from "../../controllers/tweet-controller"

import "../../styles/components/tweets.sass"
import { Tweet } from "../../data/templates"


function Tweets (){

    const {theme} = useContext(Context)
    const [tweets, setTweet] = useState<Tweet[]>([])
    const [idUserAuth] = useState<string>(getUserAuthenticate())
    const [comment, setComment] = useState({})

    useEffect(()=>{
        setTweet(getTweets())
       
        
    },[])
  
    let InpuComment: any = ""

    if(idUserAuth){
        InpuComment = <InputComment/>
    }


    function handleComment(e:any){
       setComment({
        ...comment,
        [e.target.name]:e.target.value
       })
    }

    function sendComment(e:any){
        setComment({
            comment,
            id_author: idUserAuth
        })
    }

    return(
        <section className={theme +" tweets_container"}>
            {tweets.map(tweet =>{
                return (
                    <div className="tweet_card">
                    <div className="tweet_content_photo">
                        <img src="../../public/images/profile/fotoperfil.png" className="tweet_photo_profile" alt="user"/>
                    </div>
                    
                    <div className="tweet_content_info">
                        <div className="tweet_data">
                            <p className={theme + " tweet_user"}></p>
                            <p className="tweet_tagname">@teste</p>
                            <p className="tweet_time">50</p>
                        </div>
    
                        <div className={theme +" tweet_body"}>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Voluptatibus placeat eaque nobis totam perspiciatis 
                            nostrum. Dolor ducimus voluptatum mollitia necessitatibus architecto,
                            minima cupiditate cum? Non ab animi commodi veniam molestias.
                         </div>
                        
                        <div className="tweet_actions">
                            <div className="action">
                                <img src="../../public/icons/action-posts/comment.png" 
                                     className="post_icon"
                                     alt ="comentar"/>
                                <p className="number"></p>
                            </div>
                            <div className="action">
                                <img src="../../public/icons/action-posts/retweet.png" 
                                     className="post_icon" 
                                     alt ="retweetar" />
                                <p className="number"></p>
                            </div>
                            <div className="action">
                                <img src="../../public/icons/action-posts/like.png" 
                                     className="post_icon" 
                                     alt="curtir" />
                                <p className="number"></p>
                            </div>
                            <div className="action">
                                <img src="../../public/icons/action-posts/share.png" 
                                     className="post_icon" 
                                     alt="compartilhar"  />
                                <p className="number"></p>
                            </div>
                        </div>
                        {InpuComment}
                        
                    </div> 
                </div>
                )
            })}
           
        </section>
    )
}

export default Tweets