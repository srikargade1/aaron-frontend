import ArticleBox from "./ArticleBox"

export default function ArticleView(props) 
{ 
    const name = props.name
    return (
        <>
        <p>{name}</p>
        <ArticleBox />
        </>
    );
}