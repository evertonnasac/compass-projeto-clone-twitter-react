import Tabbar from "./Tabbar"
import Header from "./Header"
import ProfilePageTop from "./ProfilePageTop"
import Tweets from "./Tweets"

import "../../styles/components/profile_page.sass"

function ProfilePage (){
    return(
        <div className="container_profile">
            <Header screen="Profile"/>
            <ProfilePageTop/>
            <Tabbar/>
            <Tweets/>
        </div>
    )
}
export  default ProfilePage