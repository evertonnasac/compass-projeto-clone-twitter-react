import AreaPost from "./AreaPost";
import Tweets from "./Tweets";
import Header from "./Header";
import { useState } from "react";

import "../../styles/components/timeline.sass"


function TimeLine (){

    return(
        <div className="timeline_content">
            <Header screen = "Home"/>
            <AreaPost/>
            <Tweets/>

        </div>
    )
  
}

export default TimeLine