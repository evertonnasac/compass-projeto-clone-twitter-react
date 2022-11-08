
import { Context } from "../../context/themeContext"
import { useContext } from "react"

import "../styles/components/news_card.sass"


let keyWork: string = "covid"

function NewsCard (){

    const {theme} = useContext(Context)

    return(
        <article className={theme + " news_card"}>
            <aside className="news_content_image">
                <img src = "../../public/images/profile/covid.jpg" 
                       alt ="imagem" 
                       className="news_image"/>
            </aside>

            <section className="news_container_main">
                <div className="news_header">
                    <p className="news_keywork">covid</p>
                    <p className="news_time">hoje</p>
                </div>
                <p className={theme + " news_title"}> England’s Chief Medical 
                                Officer says the UK is at the most dangerous time of the pandemic
                                </p>
                <p className="news_footer">Trends with <span>#{keyWork}</span></p>
            </section>
        </article>
    )

    
 
}

export default NewsCard