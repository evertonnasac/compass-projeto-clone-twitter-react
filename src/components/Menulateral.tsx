import Button from "../components/Button"
import ItemMenu from "./ItemMenu"
import ProfileLateral from "./ProfileLateral"
import { Context } from "../utils/themeContext"
import { useContext } from "react"

import "../styles/components/menu_container.sass"

const itensMenu = [
    {
        name:"Home",
        urlIcon : "../../public/icons/menu/home.png",
    },

    {
        name: "Explorer",
        urlIcon : "../../public/icons/menu/explore.png",
    },
    {
        name: "Notifications",
        urlIcon : "../../public/icons/menu/notifications.png",
    },
    {
        name:  "Messages",
        urlIcon : "../../public/icons/menu/messages.png"
    },
    {
        name: "Lists",
        urlIcon : "../../public/icons/menu/lists.png"
    },
    {
        name: "Profile",
        urlIcon : "../../public/icons/menu/profile.png"
    },
    {
        name: "More",
        urlIcon : "../../public/icons/menu/more.png"
    }

]

function MenuLateral (){

    const {theme} = useContext(Context)

    return (
        <div className={theme + " container_menuLateral"}>

             <img src="../public/icons/menu/logo.png" alt="logo twitter" className="logo_menu"/>

            {itensMenu.map((option, index) =>
               <ItemMenu key={index} item = {option.name} urlIcon = {option.urlIcon}/>   
            )}

            <Button content = "Tweet"
                    height = "30px"
                    maxHeight = "50px"
                    width =  "80%"
                    maxWidth = "212px"
                    kind="primary" 
            />
            
            <ProfileLateral/>

        </div>
        
       
    )
}

export default MenuLateral