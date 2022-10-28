import Button from "../components/Button"
import ItemMenu from "./ItemMenu"

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
    return (
        <div className="container_menuLateral">
            {itensMenu.map((option, index) =>
               <ItemMenu key={index} item = {option.name} urlIcon = {option.urlIcon}/>   
            )}

            <Button content = {"Tweet"} class = "button_menuLateral"/>
        </div>
        
       
    )
}

export default MenuLateral