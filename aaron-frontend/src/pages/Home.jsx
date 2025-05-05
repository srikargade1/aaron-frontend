import ArticleView from "../components/ArticleView";

export default function Home()
{
    return (
        <>
        <p>Home Page</p>
        <button>Vocab Quiz</button>
        <br></br>
        <button>Custom Article</button>
        <ArticleView name = "Explore Topics" />
        <ArticleView name = "Articles History" />
        </>
    );
}