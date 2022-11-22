import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/App.css';
import Countries from "./Countries.js"
import Categories from "./Categories.js"
import Headlines from "./Headlines.js";

function App() {
    const API_KEY = process.env.REACT_APP_API_KEY;
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
                        "Authorization": API_KEY
                    }
                });
                setTopNews(response.data.articles);
            }
            catch (error) {
                console.error(error);
            }
        };
        getTopNews();
    }, [API_KEY, country, category]);
    console.log(topNews);
    return (
        <div className="App">
            <div className="header">
                <h1>Headlines from around the world</h1>
                <Countries country={country} setCountry={setCountry} />
                <Categories category={category} setCategory={setCategory} />
            </div>
            <Headlines topNews={topNews}/>
        </div>
    );
}

export default App;
