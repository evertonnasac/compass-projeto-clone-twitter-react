import React, {InputHTMLAttributes} from "react"

export interface buttonProps{ //extends InputHTMLAttributes<HTMLInputElement> {
    content: string,
    height: string,
    maxHeight?: string
    width?: string,
    maxWidth?: string,
    opacity?: string,
    border?: string,
    kind: string,
    onclick? : (e: MouseEvent) => {}
}

const btnDefault  = {
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
    borderRadius: "100px"
}

const btnPrimary = {
    ...btnDefault,
    backgroundColor: "#1DA1F2",
    color: "#fff",
    border: "none",
   
}

const btnSecondary = {
    ...btnDefault,
    backgroundColor: "transparent",
    color: "#1DA1F2",
    border: "1px solid #1DA1F2",
   

}

function Button(props : buttonProps){
    
    if(props.kind == "primary"){
        return  <button style={{
                    ...btnPrimary,
                    width: props.width,
                    height: props.height,
                    opacity: props.opacity || 1
                }}>{props.content}</button>
    }

    else if(props.kind == "secondary"){
            return <button style={{
                    ...btnSecondary,
                    width: props.width,
                    height: props.height,
                    opacity: props.opacity || 1
                }}>{props.content}</button>
}

    else{
        return <button></button>
    }
}

export default Button