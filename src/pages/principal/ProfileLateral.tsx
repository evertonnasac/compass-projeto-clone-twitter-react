import { Context } from "../../context/themeContext"
import { useContext } from "react"
import { getUserId } from "../../controllers/user-controller"
import { User } from "../../data/templates"


import "../../styles/components/profile_lateral.sass"

interface propsProfile{
    idUser: string
}

function ProfileLateral (props: propsProfile){

    const user= getUserId(props.idUser)

    const {theme} = useContext(Context)

    return(
        <div className="profile_lateral_card">
            <img src={user?.photo} alt="" className="image_profile_lat" />
            <p className={theme +" name_profile_lat"}>{user?.name}</p>
            <p className="tagname_profile_lat">{user?.tagname}</p>
            <img src="../../public/icons/menu/pontos.png" alt="" className="incone_profile_lat" />

        </div>
    )
}

export default ProfileLateral