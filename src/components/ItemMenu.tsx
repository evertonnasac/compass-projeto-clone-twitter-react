import {Link} from "react-router-dom"
import "../styles/components/menu_item_menu.sass"


interface ItemProps {
    item : string,
    urlIcon : string
}

function ItemMenu  ({item, urlIcon}: ItemProps){
    return(
        <div className="item_menu" >
            <img src={urlIcon} alt="incone" className="icon_menu" />
            <p><Link to = "/profile">{item}</Link></p>
        </div>

    )
}
export default ItemMenu