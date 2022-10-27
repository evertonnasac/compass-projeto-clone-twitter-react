import Image from "./Image"

import "../styles/components/tweets.sass"

function Tweets (){
    return(
        <section className="tweets_container">

            <div className="tweet_card">
                <div className="tweet_content_photo">
                    <Image src="" className="photo_profile" alt="user"/>
                </div>
                
                <div className="tweet_content_info">
                    <div className="tweet_data">
                        <p className="tweet_user">teste</p>
                        <p className="tweet_tagname">@teste</p>
                        <p className="tweet_time">50</p>
                    </div>

                    <div className="tweet_body">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Voluptatibus placeat eaque nobis totam perspiciatis 
                        nostrum. Dolor ducimus voluptatum mollitia necessitatibus architecto,
                        minima cupiditate cum? Non ab animi commodi veniam molestias.
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
            </div>
        </section>
    )
}

export default Tweets