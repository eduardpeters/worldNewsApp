import { useEffect } from "react";
import "./Categories.css";

const Categories = ({category, setCategory}) => {
    const categoryList = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

    useEffect(() => {
            document.getElementById(category).classList.add("selectedCategory");
    }, [category]);

    const updateHighlight = (oldCat, newCat) => {
        const oldP = document.getElementById(oldCat);
        const newP = document.getElementById(newCat);
        oldP.classList.remove("selectedCategory");
        newP.classList.add("selectedCategory");
    }

    const handleCategoryClick = event => {
        const newCategory = event.target.innerHTML.toLowerCase();
        if (newCategory !== category) {
            updateHighlight(category, newCategory);
            setCategory(newCategory);
        }
    }

    return (
        <div className="categorySelector">
            <h3>Category selection:</h3>
            {categoryList.map((name) =>
                <p key={name} id={name.toLowerCase()} className="category" onClick={handleCategoryClick}>
                    {name}
                </p>
            )}
        </div>
    );
}

export default Categories;