import ArticleBox from "./ArticleBox"
import articles from '../data/articles';
import { useRef } from "react"


export default function ArticleView(props) 
{ 
    const name = props.name
    const scrollRef = useRef();

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    };

    const articleListItems = articles.map(
        function(article)
        {
            return (
                <ArticleBox
                    title = {article.title}
                    topic = {article.topic}
                    img = {article.img}
              />
            )
            
        }
    )
    return (
        <>
        <div className="home-page">
          <h1 className="section-title">{name}</h1>
          <div className="scroll-container">
            <button className="scroll-button left" onClick={scrollLeft}>←</button>
            <div className="article-grid" ref={scrollRef}>
                {articleListItems}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>→</button>
         </div>
        </div>

        </>
    );
}