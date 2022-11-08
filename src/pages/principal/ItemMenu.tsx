import {Link} from "react-router-dom"
import "../../styles/components/menu_item_menu.sass"
import { Context } from "../../context/themeContext"
import { useContext } from "react"


interface ItemProps {
    item : string,
    urlIcon : string
    setAba(e : any):void
}


const routesMenu  = {
    Profile: "/profile",
    Home: "/"
} 


function ItemMenu  ({item, urlIcon, setAba}: ItemProps){

    const {theme} = useContext(Context)

    /*let path : string = routesMenu[item] || "/error"

    return(
        <div className="item_menu">
                <img src={urlIcon} alt="incone" className="icon_menu" />
                <p><Link to = {path} className={theme}>{item}</Link></p>
        </div>
    )
*/
    if(item == "Profile"){
        return (
            <div className="item_menu">
                <img src={urlIcon} alt="incone" className="icon_menu" />
                <p onClick={() => setAba("profile")} className={theme}>{item}</p>
            </div>
        )
    }
    if(item == "Home"){
        return (
            <div className="item_menu">
                <img src={urlIcon} alt="incone" className="icon_menu" />
                <p onClick={() => setAba("timeline")} className={theme}>{item}</p>
            </div>
        )
    }
    else{
        return (
            <div className="item_menu">
                <img src={urlIcon} alt="incone" className="icon_menu" />
                <p onClick={() => setAba("error")} className={theme}>{item}</p>
            </div>
        )
    }
   

    
}
export default ItemMenu