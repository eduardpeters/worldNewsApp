import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/App.css';
import Header from "./Header.js"
import Headlines from "./Headlines.js";
import FirstHeadlines from "./FirstHeadlines.js"

function App() {
    const largeNewsItemsLimit = 6;
    const [topNews, setTopNews] = useState([]);
    const [country, setCountry] = useState("us");
    const [category, setCategory] = useState("general");

    useEffect(() => {
        const getTopNews = async () => {
            const URI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`;
            console.log(URI);
            try {
                const response = await axios.get(URI, {
                    headers: {
                        "Authorization": process.env.REACT_APP_NEWS_API_KEY
                    }
                });
                setTopNews(response.data.articles);
            }
            catch (error) {
                console.error(error);
            }
        }
        getTopNews();
    }, [country, category]);
    console.log(topNews);
    return (
        <div className="App">
            <h1>Headlines from around the world</h1>
            <Header country={country} setCountry={setCountry} category={category} setCategory={setCategory}/>
            <FirstHeadlines topNews={topNews.slice(0, largeNewsItemsLimit)} />
            <Headlines topNews={topNews.slice(largeNewsItemsLimit + 1,)}/>
        </div>
    );
}

export default App;
