import AreaPost from "./AreaPost";
import Tweets from "./Tweets";
import Header from "./Header";

import "../styles/components/timeline.sass"


function TimeLine (){

    return(
        <main className="main_content">
            <Header/>
            <AreaPost/>
            <Tweets/>
            <Tweets/>
            <Tweets/>
        </main>
    )
  
}

export default TimeLine