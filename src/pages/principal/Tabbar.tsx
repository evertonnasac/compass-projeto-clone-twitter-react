import "../../styles/components/tabbar.sass"

function Tabbar (){
    return(
        <section className= "profile_tabbar">
            <div className="tabbar_item">Tweets</div>
            <div className="tabbar_item">Tweets & replies</div>
            <div className="tabbar_item">Media</div>
            <div className="tabbar_item">Likes</div>
        </section>
    )
}

export default Tabbar