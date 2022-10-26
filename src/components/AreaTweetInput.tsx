import Image from "./Image"
import Input from "./Input"



function AreaTweetInput(){
    return(
        <section className="timeline_header">

            <Image src="" alt= "" className = "image_profile" />
            <Input type="textarea" maxlength = "380" placeholder="What’s happening?"  className = "input_tweet" />
        </section>
            

       
    )
}

export default AreaTweetInput