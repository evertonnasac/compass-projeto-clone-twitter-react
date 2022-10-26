import Image from "./Image"

function Posts (){
    return(
        <section className="posts_container">
            <div className="tweet">
                <Image src="" className="tweet_photo_user" alt="user"/>
                <div className="tweet_data">
                    <p className="tweet_user"></p>
                    <p className="tweet_tagname"></p>
                    <p className="tweet_time"></p>
                </div>
                <div className="tweet_body">
                /* logica de carregar posts aqui*/ 
                </div>
            </div>
        </section>
    )
}