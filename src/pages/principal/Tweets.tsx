
import { Context } from "../../context/themeContext"
import { useContext, useState, useEffect} from "react"
import { getUserAuthenticate } from "../../controllers/user-controller"
import { setLike } from "../../controllers/tweet-controller"
import InputComment from "../../components/InputComment"
import { getUserId } from "../../controllers/user-controller"
import { getTweets } from "../../controllers/tweet-controller"
import { User } from "../../data/templates"
import { Tweet } from "../../data/templates"
import "../../styles/components/tweets.sass"



function Tweets (){

    const {theme} = useContext(Context)
    const [tweets, setTweet] = useState<Tweet[]>([])
    const [idUserAuth] = useState<string>(getUserAuthenticate())
    const [comment, setComment] = useState({})

    useEffect(()=>{
        setTweet(getTweets())
        
    },[])




    return(
        <section className={theme +" tweets_container"}>
            {tweets.map(tweet =>{
                let user : User | undefined = getUserId(tweet.id_author)
                console.log(user?.tagname)
                return (
                    <div className="tweet_card">
                         <input type="hidden" name="id_tweet" value={tweet.id_tweet} />
                        <div className="tweet_content_photo">
                            <img src="../../public/images/profile/fotoperfil.png" 
                                className="tweet_photo_profile" alt="user"/>
                        </div>
                        
                        <div className="tweet_content_info">
                            <div className="tweet_data">
                                <p className={theme + " tweet_user"}>{user?.name}</p>
                                <p className="tweet_tagname">{user?.tagname}</p>
                                <p className="tweet_time">50</p>
                            </div>
        
                            <div className={theme +" tweet_body"}>
                                {tweet.text}
                            </div>
                            
                            <div className="tweet_actions">
                                <div className="action">
                                    <img src="../../public/icons/action-posts/comment.png" 
                                        className="post_icon"
                                        alt ="comentar"/>
                                    <p className="number">{tweet.comments.length}</p>
                                </div>
                                <div className="action">
                                    <img src="../../public/icons/action-posts/retweet.png" 
                                        className="post_icon" 
                                        alt ="retweetar" />
                                    <p className="number"></p>
                                </div>
                                <div className="action">
                                    <img src="../../public/icons/action-posts/like.png" 
                                        className="post_icon" onClick={()=>setLike(tweet.id_tweet)} 
                                        alt="curtir" />
                                    <p className="number">{tweet.likes}</p>
                                </div>
                                <div className="action">
                                    <img src="../../public/icons/action-posts/share.png" 
                                        className="post_icon" 
                                        alt="compartilhar"  />
                                    <p className="number"></p>
                                </div>
                            </div>
                            {tweet.comments.map(comment =>{
                                let user: User | undefined = getUserId(comment.id_author)
                                return(
                                    <div className={theme +" comments_container"}>
                                        <div className="comments_header">
                                            <p className="name_comment">{user?.name}</p>
                                            <p className="tagname_comment">{user?.tagname}</p>
                                        </div>
                                        <p className="comment">{comment.comment}</p>
                                    </div>
                                )
                            })}
                           
                            <InputComment idTweet={tweet.id_tweet}/>
                        </div> 
                    </div>
                )
            })}
           
        </section>
    )
}

export default Tweets