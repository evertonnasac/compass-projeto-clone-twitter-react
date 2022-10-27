import AreaPost from "./AreaPost";
import Tweets from "./Tweets";

import "../styles/components/timeline.sass"


function TimeLine (){

    return(
        <main className="main_content">
            <AreaPost/>
            <Tweets/>
        </main>
    )
  
}

export default TimeLine