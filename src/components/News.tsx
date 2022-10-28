import Input from "./Input"
import NewsCard from "./NewsCard"

import "../styles/components/news.sass"

function News (){
    return (
      
        <section className="container_news">
            <Input type="search" placeholder="Search Twitter" className="search_news"/>
            <p className="whats">What's happening</p>
            <NewsCard/>
        </section>
     
       
    )
}
export default News 