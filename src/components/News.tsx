import Input from "./Input"
import NewsCard from "./NewsCard"
import AreaSuggestFollow from "./AreaSuggestFollow"

import "../styles/components/news.sass"

function News (){
    return (
        <aside>
            <section className="container_news">
                <Input type="search" placeholder="Search Twitter" className="search_news"/>
                <p className="whats">What's happening</p>
                <NewsCard/>
            </section>
            <AreaSuggestFollow/>
        </aside>
       
    )
}
export default News 