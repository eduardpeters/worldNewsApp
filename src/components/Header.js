import "../styles/Header.css";
import Countries from "./Countries.js";
import Categories from "./Categories.js";
import WeatherBox from "./WeatherBox";

const Header = ({country, setCountry, category, setCategory}) => {
    return (
        <div className="header">
            <div className="optionsContainer">
                <Countries country={country} setCountry={setCountry} />
                <Categories category={category} setCategory={setCategory} />
            </div>
            <WeatherBox country={country} />
        </div>
    );
}

export default Header;