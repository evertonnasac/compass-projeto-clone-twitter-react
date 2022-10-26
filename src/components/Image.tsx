
interface imgProps{
    src: string,
    className: string,
    alt : string
  
}

function Image (props : imgProps){
    return(
        <img {...props}/>
    )
}

export default Image