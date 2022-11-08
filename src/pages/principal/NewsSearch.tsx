import Input from "../../components/Input";

import "../../styles/components/news_search.sass"

function NewsSearch(){
    return(
        <div className="search_news">
           <Input type="search" placeholder="Search Twitter" className="search_news"/>
        </div>
    )

}
export default NewsSearch