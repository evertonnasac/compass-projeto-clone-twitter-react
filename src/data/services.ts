import { Comments, Tweet } from "./templates";

export function saveTweet (tweet: Tweet){

    let tweets : Tweet[] = getSavedTweets()
    tweets.push(tweet)
    localStorage.setItem("tweet",JSON.stringify(tweets))
}

export function getSavedTweets(){

    if(localStorage.getItem("tweet")){
        return JSON.parse(localStorage.getItem("tweets") || "")
    }
    else return []
}


export function setCommentOnTweet(idTweet: string, comment: Comments){
    let tweets : Tweet[] = getSavedTweets()
    let tweet = tweets.find(({id_tweet}) => id_tweet == idTweet)
    if(tweet){
        tweet.comments.push(comment)
        localStorage.setItem("tweets", JSON.stringify(tweets))
    }
   
}

export function setLikeOnTweet(idTweet: string){
    let tweets : Tweet[] = getSavedTweets()
    let tweet = tweets.find(({id_tweet}) => id_tweet == idTweet)
    if(tweet){
        tweet.likes += 1
        localStorage.setItem("tweets", JSON.stringify(tweets))
    }
    
}
    