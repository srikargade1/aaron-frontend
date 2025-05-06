import ArticleView from "../components/ArticleView";

export default function Home()
{    

    return (
        <>
        <h1 className = "main-title">Home Page</h1>
        <br></br>
        <ArticleView name = "Explore Topics" />
        <ArticleView name = "Articles History" />
        <div className="button-container">
        <button className = "home-button">Custom Article</button>
        <button className = "home-button">Vocab Quiz</button>
        </div>
        </>
    );
}