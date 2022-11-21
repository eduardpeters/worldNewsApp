import { useState } from "react";
import "./NewsItem.css"

const NewsDetails = ({news, showMore, setShowMore}) => {
    return (
        <div className="detailsContainer">
            <div className="excerptContainer">
                <div className="infoContainer">
                    <p>{news.content ? news.content.substring(0, 200) : "No preview to display"}</p>
                    <p><span className="inlineStyling">Author:</span> {news.author}</p>
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