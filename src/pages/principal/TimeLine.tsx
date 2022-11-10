import AreaPost from "./AreaPost";
import Tweets from "./Tweets";
import Header from "./Header";
import { getUserAuthenticate } from "../../controllers/user-controller"


import { useState } from "react";

import "../../styles/components/timeline.sass"


function TimeLine (){

    const [idUserAuth] = useState<string>(getUserAuthenticate())

    return(
        <div className="timeline_content">
            <Header screen = "Home"/>
            {idUserAuth? <AreaPost/> : ""}
            <Tweets/>

        </div>
    )
  
}

export default TimeLine