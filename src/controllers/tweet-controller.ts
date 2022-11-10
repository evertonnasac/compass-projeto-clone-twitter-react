import { Tweet, Comments } from "../data/templates"
import { saveTweet,getSavedTweets, setCommentOnTweet, setLikeOnTweet } from "../data/services"
import { createId } from "./user-controller"


function createTweet (text: string, idAuthor:string){
   let tweet : Tweet = {
        id_author: idAuthor,
        text: text,
        id_tweet : createId(),
        comments : [],
        likes: 0,
        time: Date.now().toString()
    }
    saveTweet(tweet)
}

export function getTweets():Tweet[] {
    return getSavedTweets()
}

export function setComments(idAuthor: string, idTweet: string, txt: string){
    let comment : Comments = {
        id_author: idAuthor,
        comment: txt,
    }
    setCommentOnTweet(idTweet, comment)

}

export function setLike(idTweet: string){
    setLikeOnTweet(idTweet)

}

export default {
    createTweet,
    getTweets,
    setComments,
    setLike
}