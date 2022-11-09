import { Comments, Tweet, User } from "./templates";

export function saveTweet (tweet: Tweet){
    let tweets  = getSavedTweets()
    tweets.push(tweet)
    localStorage.setItem("tweet",JSON.stringify(tweets))
}

export function getSavedTweets():Tweet[]{
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
    
export function setNewUser(user: User){
    let users: User[] = getSavedUsers()
    users.push(user)
    localStorage.setItem("users", (JSON.stringify(users)))
    setUserAuth(user["id_user"])
}

export function getSavedUsers(){
    if(localStorage.getItem("users")){
        return JSON.parse(localStorage.getItem("users")||"")
       
    }
    else return []
}

export function setUserAuth(idUser: string | undefined){
    localStorage.setItem("userAuth", (JSON.stringify(idUser)))
}

export function getUserAuth(){
    if(localStorage.getItem("userAuth")){
        return JSON.parse(localStorage.getItem("userAuth") || "")

    }
    return undefined
}

export function getUserById (id: string){
    let user : User[] = getSavedUsers()
    console.log(user.find((user)=> user.id_user == id))
    return user.find((user)=> user.id_user == id) || undefined

}