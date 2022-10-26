
import "../styles/components/menu_item_menu.sass"


interface ItemProps {
    item : string,
    urlIcon : string
}

function ItemMenu  ({item, urlIcon}: ItemProps){
    return(
        <div className="item_menu">
            <img src={urlIcon} alt="incone" className="icon_menu" />
            <p>{item}</p>
        </div>

    )
}
export default ItemMenu