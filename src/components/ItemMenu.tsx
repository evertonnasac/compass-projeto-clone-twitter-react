import {Link} from "react-router-dom"
import "../styles/components/menu_item_menu.sass"
import { Context } from "../utils/themeContext"
import { useContext } from "react"


interface ItemProps {
    item : string,
    urlIcon : string
}

function ItemMenu  ({item, urlIcon}: ItemProps){

    const {theme} = useContext(Context)

    return(
        <div className="item_menu">
            <img src={urlIcon} alt="incone" className="icon_menu" />
            <p><Link to = "/profile" className={theme}>{item}</Link></p>
        </div>

    )
}
export default ItemMenu