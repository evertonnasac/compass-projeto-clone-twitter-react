import {InputHTMLAttributes} from "react"

interface buttonPropos extends InputHTMLAttributes<HTMLInputElement> {
    content: string,
    class: string
  
}

function Button(props : buttonPropos){
    return(
        <button className = {props.class}>{props.content}</button>
    )
}

export default Button