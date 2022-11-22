import "../styles/LargeNewsItem.css"

const LargeNewsItem = ({ news }) => {
    return (
        <div className="LargeNewsContainer">
            <h3>{news.title}</h3>
            <img src={news.urlToImage} alt="Relevant to the article"></img>
            <p>{news.content ? news.content.substring(0, 200) : "No preview to display"}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">Read More</a>
            <p>
                <span className="inlineStyling">Date: </span>{news.publishedAt.substring(0, 10).split("-").reverse().join("-")}
                <span className="inlineStyling"> Time: </span>{news.publishedAt.substring(11, 19)}
            </p>
            <p><span className="inlineStyling">Author:</span> {news.author ? news.author : "No Author Info"}</p>
            <p><span className="inlineStyling">Source:</span> {news.source.name}</p>
        </div>
    );
}

export default LargeNewsItem;