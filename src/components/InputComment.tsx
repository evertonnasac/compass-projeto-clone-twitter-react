import { Context } from "../context/themeContext"
import Button from "./Button"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getUserAuthenticate } from "../controllers/user-controller"
import { setComments } from "../controllers/tweet-controller"


import "../styles/components/input_comment.sass"

interface commentProp{
    idTweet: string
}

function InputComment(props: commentProp){

    const {theme} = useContext(Context)
    const [comment, setComment] = useState("")
    const [idUserAuth] = useState<string>(getUserAuthenticate())
    const navigate = useNavigate()

    function handleComment(e:any){
        setComment(e.target.value)
    }

    function sendComment(e:any){
        if(!idUserAuth){
            let comfirm = window.confirm("Você deve realizar login para utilizar o Tweeter!")
            if(comfirm){
                navigate("/login")
                
            }
            return
        }
        if(comment){
            setComments(idUserAuth, props.idTweet, comment)
        }
        
    }
   
    return(
        <div className={theme +" container_comment"}>
            <textarea className= {theme +" txt_comment"} 
                name="comment" 
                onChange={handleComment}>
            </textarea>
            <Button
                content="Send"
                height="25px"
                width="20%"
                kind="primary"
                onClick={sendComment}

            />
        </div>
    )
}

export default InputComment