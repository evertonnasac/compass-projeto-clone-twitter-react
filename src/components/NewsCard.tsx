import Image from "../components/Image"
import { Context } from "../utils/themeContext"
import { useContext } from "react"

import "../styles/components/news_card.sass"


let keyWork: string = "covid"

function NewsCard (){

    const {theme} = useContext(Context)

    return(
        <article className="news_card">
            <aside className="news_content_image">
                <Image src = "" alt ="imagem" className="news_image"/>
            </aside>

            <section className="news_container_main">
                <div className="news_header">
                    <p className="news_keywork">covid</p>
                    <p className="news_time">hoje</p>
                </div>
                <p className={theme + " news_title"}> Lorem ipsum dolor sit</p>
                <p className="news_footer">Trends with <span>#{keyWork}</span></p>
            </section>
        </article>
    )

    
 
}

export default NewsCard