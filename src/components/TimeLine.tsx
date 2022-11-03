import AreaPost from "./AreaPost";
import Tweets from "./Tweets";
import Header from "./Header";

import "../styles/components/timeline.sass"


function TimeLine (){

    return(
        <div className="timeline_content">
            <Header/>
            <AreaPost/>
            <Tweets/>
            <Tweets/>
            <Tweets/>
        </div>
    )
  
}

export default TimeLine