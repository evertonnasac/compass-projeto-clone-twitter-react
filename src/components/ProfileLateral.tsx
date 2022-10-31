import "../styles/components/profile_lateral.sass"

function ProfileLateral (){
    return(
        <div className="profile_lateral_card">
            <img src="" alt="" className="image_profile_lat" />
            <p className="name_profile_lat">David Biscuso</p>
            <p className="tagname_profile_lat">@biscutto</p>
            <img src="../../public/icons/menu/pontos.png" alt="" className="incone_profile_lat" />
        </div>
    )
}

export default ProfileLateral