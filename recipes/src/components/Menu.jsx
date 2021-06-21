import React from "react";
import Recipe from "./Recipe";

const Menu = ({ recipes = [] }) => {
    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((props, i) => (
                    <Recipe key={i} {...props} />
                ))}
            </div>
        </article>
    );
}

export default Menu