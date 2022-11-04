import { Context } from "../utils/themeContext"
import { useContext } from "react"


import "../styles/components/profile_lateral.sass"

function ProfileLateral (){

    const {theme} = useContext(Context)

    return(
        <div className="profile_lateral_card">
            <img src="../../public/images/profile/fotoperfil.png" alt="" className="image_profile_lat" />
            <p className={theme +" name_profile_lat"}>David Biscuso</p>
            <p className="tagname_profile_lat">@biscutto</p>
            <img src="../../public/icons/menu/pontos.png" alt="" className="incone_profile_lat" />
        </div>
    )
}

export default ProfileLateral