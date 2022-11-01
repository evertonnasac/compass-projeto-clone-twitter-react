
function getTweet(){
    let tweets = JSON.parse(localStorage.getItem("tweets"))
    return tweets
}

function setTweets (tweet: string){

    let tweets = JSON.parse(localStorage.getItem("tweets"))
    tweets[0].push(tweet)

    localStorage.setItem("tweets", JSON.stringify(tweets))
}

export default {
    getTweet,
    setTweets
}