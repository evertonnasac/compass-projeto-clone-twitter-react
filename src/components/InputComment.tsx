
import Button from "./Button"

import "../styles/components/input_comment.sass"

function InputComment(){
    return(
        <div className="container_comment">
            <textarea name="comment"></textarea>
            <Button
                content="Comment"
                height="25px"
                width="30%"
                kind="primary"
            />
        </div>
    )
}

export default InputComment