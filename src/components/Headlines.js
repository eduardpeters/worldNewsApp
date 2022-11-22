import NewsItem from "./NewsItem";

const Headlines = ({topNews}) => {
    return (
        <div className="headlines">
            {topNews.map(news => <NewsItem key={news.title} news={news} />)}
        </div>
    );
}

export default Headlines;