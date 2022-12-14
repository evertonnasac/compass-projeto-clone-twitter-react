import Input from "../../components/Input"
import NewsCard from "./NewsCard"
import { useContext } from "react"
import { Context } from "../../context/themeContext"

import "../../styles/components/news.sass"


function News (){

    const {theme} = useContext(Context)

    return (
        <section className={theme + " container_news"}>
            <p className={theme +" whats"}>What's happening</p>
            <NewsCard/>
            <NewsCard/>
        </section>
     
       
    )
}
export default News 