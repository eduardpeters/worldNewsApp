import { useState } from "react";
import "../styles/NewsItem.css"

const NewsDetails = ({news, showMore, setShowMore}) => {
    return (
        <div className="detailsContainer">
            <div className="excerptContainer">
                <div className="infoContainer">
                    <p>{news.content ? news.content.substring(0, 200) : "No preview to display"}</p>
                    <p>
                        <span className="inlineStyling">Date: </span>{news.publishedAt.substring(0, 10).split("-").reverse().join("-")}
                        <span className="inlineStyling"> Time: </span>{news.publishedAt.substring(11,19)}
                    </p>
                    <p><span className="inlineStyling">Author:</span> {news.author ? news.author : "No Author Info"}</p>
                    <p><span className="inlineStyling">Source:</span> {news.source.name}</p>
                </div>
                <img src={news.urlToImage} alt="Relevant to the article"></img>
            </div>
            <div className="navigationContainer">
                <a href={news.url} target="_blank" rel="noopener noreferrer">Read More</a>
                <button onClick={() => setShowMore(!showMore)}>Show Less</button>
            </div>
        </div>
    );
}

const NewsItem = ({news}) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="newsContainer">
            <h3>{news.title}</h3>
            {showMore
                ? <NewsDetails news={news} showMore={showMore} setShowMore={setShowMore} />
                : <button onClick={() => setShowMore(!showMore)}>Show More</button>}
        </div>
    );
}

export default NewsItem;