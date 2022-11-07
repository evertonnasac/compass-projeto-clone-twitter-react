import Button from "../components/Button"
import ItemMenu from "./ItemMenu"
import ProfileLateral from "./ProfileLateral"
import { Context } from "../context/themeContext"
import { useContext } from "react"

import "../styles/components/menu_container.sass"

const itensMenu = [
    {
        name:"Home",
        urlIconLight : "../../public/icons/menu/home.png",
        urlIconDark : "../../public/icons/menu/home.png",
    },

    {
        name: "Explorer",
        urlIconLight : "../../public/icons/menu/explore_light.png",
        urlIconDark : "../../public/icons/menu/explore_dark.png",
        
    },
    {
        name: "Notifications",
        urlIconLight : "../../public/icons/menu/notifications_light.png",
        urlIconDark : "../../public/icons/menu/notifications_dark.png",
    },
    {
        name:  "Messages",
        urlIconLight : "../../public/icons/menu/messages_light.png",
        urlIconDark : "../../public/icons/menu/messages_dark.png",
    },
    {
        name: "Lists",
        urlIconLight : "../../public/icons/menu/lists_light.png",
        urlIconDark : "../../public/icons/menu/lists_dark.png",
    },
    {
        name: "Profile",
        urlIconLight : "../../public/icons/menu/profile_light.png",
        urlIconDark : "../../public/icons/menu/profile_dark.png",
    },
    {
        name: "More",
        urlIconLight : "../../public/icons/menu/more_light.png",
        urlIconDark : "../../public/icons/menu/more_dark.png",
    }

]

function MenuLateral (){

    const {theme} = useContext(Context)

    

    return (
        <div className={theme + " container_menu_lateral"}>

            <img src="../public/icons/menu/logo.png" alt="logo twitter" className="logo_menu"/>

            {itensMenu.map((option, index) =>{

                let url : string

                theme == "dark"? url = option.urlIconDark : url = option.urlIconLight

                return <ItemMenu key={index} item = {option.name} urlIcon = {url}/>
                
                }
                  
            )}

            <Button content = "Tweet"
                    height = "30px"
                    maxHeight = "50px"
                    width =  "80%"
                    maxWidth = "212px"
                    kind="primary" 
            />
        </div>
        
       
    )
}

export default MenuLateral