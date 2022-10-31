import Image from "./Image"
import Button from "./Button"
import Tabbar from "./Tabbar"

import "../styles/components/profile_page.sass"

function ProfilePage (){
    return(
        <div className="profile_header">
            <section className="content_top_profile_header">
                <Image src="../../public/images/profile/fotocapa.png" 
                    alt="foto de capa" className="image_capa_profile_page"/>

                <Image src="../../public/images/profile/fotoperfil.png" 
                    alt="foto de perfil" className="image_profile_page"/>

                <div className="btn_profile_page">
                    <Button content = "Edit profile"
                            height = "30px"
                            maxWidth = "212px"
                            kind="secondary"
                    />
                </div>
            </section>

            <section className="content_botton_header">
                <p className="name_profile_page">Davide Biscuso</p>
                <p className="tagname_profile_page">@biscuttu</p>
                <p className="bio_profile_page">Web Developer</p>
                <div className="info_profile_page">
                    <p className="city_profile_page">London</p>
                    <p className="data_profile_page">Joined September 2011</p>
                    <p className="following_profile_page">
                        <span>500</span>Following
                    </p>
                    <p className="followers_profile_page">
                        <span>50</span>Followers
                    </p>
                </div>
                <Tabbar/>
            </section>

        </div>
    )
}
export  default ProfilePage