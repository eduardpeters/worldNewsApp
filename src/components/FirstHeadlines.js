import "../styles/FirstHeadlines.css"
import LargeNewsItem from "./LargeNewsItem.js";

const FirstHeadlines = ({topNews}) => {
    return (
        <div className="firstHeadlines">
            {topNews.map(news => <LargeNewsItem key={news.title} news={news} />)}
        </div>
    );
}

export default FirstHeadlines;