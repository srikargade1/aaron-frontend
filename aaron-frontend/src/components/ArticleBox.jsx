

export default function ArticleBox(props) {
    const title = props.title;
    const img = props.img;
    const topic = props.topic;

    return (
        <>
        <div className = "article-box">
            <img src={img} alt="alt-text"></img>
            <h2>{topic}</h2>
            <p>{title}</p>
        </div>
        </>
    )
}