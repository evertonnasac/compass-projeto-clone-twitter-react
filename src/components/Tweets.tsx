import Image from "./Image"

function Tweets (){
    return(
        <section className="tweets_container">
            <div className="tweet_card">
                 <div className="tweet_data">
                    <Image src="" className="tweet_photo_user" alt="user"/>
                    <p className="tweet_user"></p>
                    <p className="tweet_tagname"></p>
                    <p className="tweet_time"></p>
                </div>

                <div className="tweet_body">
                </div>
                
                <div className="tweet_actions">
                    <div className="action">
                        <Image src="../../public/icons/action-posts/comment.png" className="post_icon" alt ="comentar"/>
                        <p className="number"></p>
                    </div>
                    <div className="action">
                        <Image src="../../public/icons/action-posts/retweet.png" className="post_icon" alt ="retweetar" />
                        <p className="number"></p>
                    </div>
                    <div className="action">
                        <Image src="../../public/icons/action-posts/like.png" className="post_icon" alt="curtir" />
                        <p className="number"></p>
                    </div>
                    <div className="action">
                        <Image src="../../public/icons/action-posts/share.png" className="post_icon" alt="compartilhar"  />
                        <p className="number"></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tweets