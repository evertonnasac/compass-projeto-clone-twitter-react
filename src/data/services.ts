import { Comments, Tweet } from "./templates";

export function saveTweet (tweet: Tweet){
    let tweets  = getSavedTweets()
    tweets.push(tweet)
    localStorage.setItem("tweet",JSON.stringify(tweets))
}

export function getSavedTweets(){
    if(localStorage.getItem("tweet")){
        return JSON.parse(localStorage.getItem("tweet")||"")
       
    }
    else return []
}


export function setCommentOnTweet(idTweet: string, comment: Comments){
    let tweets : Tweet[] = getSavedTweets()
    if(tweets.length > 0){
        tweets = tweets.map((tweet) => {
            if(tweet.id_tweet == idTweet){
                tweet.comments.push(comment)
            }
            return tweet
        })
    }
    localStorage.setItem("tweets", JSON.stringify(tweets))
    
   
}

export function setLikeOnTweet(idTweet: string){
    let tweets : Tweet[] = getSavedTweets()
    if(tweets.length > 0){
        tweets = tweets.map((tweet) => {
            if(tweet.id_tweet == idTweet){
                tweet.likes += 1
            }
            return tweet
        })
    }
    localStorage.setItem("tweets", JSON.stringify(tweets))
}
    