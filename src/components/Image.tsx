
interface photoProps{
    src: string,
    className: string,
    alt : string
  
}

function Image (props : photoProps){
    return(
        <img {...props}/>
    )
}

export default Image