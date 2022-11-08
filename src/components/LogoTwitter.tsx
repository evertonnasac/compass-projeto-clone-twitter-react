
interface imgProps{
    className: string,
}

function Image (props : imgProps){
    return(
        <img className= {props.className}
        src = "../../public/icons/logo.png"
        alt = "logo do twitter"/>
    )
}

export default Image