
import Button from "../../components/Button"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/themeContext"
import { getUserAuthenticate, getUserId } from "../../controllers/user-controller"
import { User } from "../../data/templates"
import "../../styles/components/profile_page_top.sass"

function ProfilePageTop(){

    const {theme} = useContext(Context)

    const [idUserAuth] = useState<string>(getUserAuthenticate())

    let user : User | undefined

    if(idUserAuth){
        user = getUserId(idUserAuth)
    }

    return(
        <div className={theme + " profile_header"}>
            <section className="content_top_profile_header">
                <img src="../../public/images/profile/fotocapa.png" 
                    alt="foto de capa" className="image_capa_profile_page"/>

                <img src="../../public/images/profile/fotoperfil.png" 
                    alt="foto de perfil" className="image_profile_page"/>

                <div className="btn_profile_page">
                    <Button content = "Edit profile"
                            height = "30px"
                            maxWidth = "212px"
                            kind="secondary"
                    />
                </div>
            </section>

            <section className="content_botton_profile_header">
                <p className="name_profile_page">{user?.name}</p>
                <p className="tagname_profile_page">{user?.tagName}</p>
                <p className="bio_profile_page">{user?.bio}</p>
                <div className="info_profile_page">

                    <article>
                        <p className="city_profile_page">{user?.city}</p>
                        <p className="data_profile_page">{user?.city}</p>
                    </article>

                    <article>
                        <p className="following_profile_page">
                            <span>{user?.followings?.length}</span>Following
                        </p>
                        <p className="followers_profile_page">
                            <span>{user?.followers?.length}</span>Followers
                        </p>
                    </article> 
                </div>
            </section>
        </div>
    )
}

export default ProfilePageTop