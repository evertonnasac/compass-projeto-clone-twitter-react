import { Tweet, Comments } from "../data/templates"
import { saveTweet,getSavedTweets, setCommentOnTweet, setLikeOnTweet } from "../data/services"


function createTweet (text: string, idAuthor:string){
   let tweet : Tweet = {
        id_author: idAuthor,
        text: text,
        id_tweet : "4585",
        comments : [],
        likes: 0,
        time: "000"
    }
    saveTweet(tweet)
}

export function getTweets():Tweet[] {
    return getSavedTweets()
}

function setComments(idAuthor: string, idTweet: string, txt: string){
    let comment : Comments = {
        id_author: idAuthor,
        comment: txt,
    }
    setCommentOnTweet(idTweet, comment)

}

function setLike(idTweet: string){
    setLikeOnTweet(idTweet)

}

export default {
    createTweet,
    getTweets,
    setComments,
    setLike
}