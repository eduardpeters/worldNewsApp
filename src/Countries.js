import { useEffect } from "react";
import "./Countries.css";

const Countries = ({country, setCountry}) => {
    const countryList = ["USA", "Germany", "France", "UK", "Japan"];

    useEffect(() => {
        document.getElementById(getCountryName(country)).classList.add("selectedCountry");
    }, [country]);

    const getCountryName = code => {
        switch (code) {
            case "us":
                return ("USA");
            case "de":
                return ("Germany");
            case "fr":
                return ("France");
            case "gb":
                return ("UK");
            case "jp":
                return ("Japan");
            default:
                return ;
        }
    }

    const getCountryCode = fullName => {
        switch (fullName) {
            case "USA":
                return ("us");
            case "Germany":
                return ("de");
            case "France":
                return ("fr");
            case "UK":
                return ("gb");
            case "Japan":
                return ("jp");
            default:
                return ;
        }
    }

    const updateHighlight = (oldCode, newCode) => {
        const oldP = document.getElementById(getCountryName(oldCode));
        const newP = document.getElementById(getCountryName(newCode));
        oldP.classList.remove("selectedCountry");
        newP.classList.add("selectedCountry");
    }

    const handleCountryClick = event => {
        const newCountry = event.target.innerHTML;
        const newCode = getCountryCode(newCountry);
        if (newCode !== country) {
            updateHighlight(country, newCode);
            setCountry(newCode);
        }
    }

    return (
        <div className="countrySelector">
            <h3>Country selection:</h3>
            {countryList.map((name) =>
                <p key={name} id={name} className="country" onClick={handleCountryClick}>
                    {name}
                </p>
            )}
        </div>
    );
}

export default Countries;