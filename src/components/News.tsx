import Input from "./Input"
import NewsCard from "./NewsCard"
import { useContext } from "react"
import { Context } from "../utils/themeContext"

import "../styles/components/news.sass"

function News (){

    const {theme} = useContext(Context)

    return (
      
        <section className="container_news">
            <Input type="search" placeholder="Search Twitter" className="search_news"/>
            <p className={theme +" whats"}>What's happening</p>
            <NewsCard/>
        </section>
     
       
    )
}
export default News 