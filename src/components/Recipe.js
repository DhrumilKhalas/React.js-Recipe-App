import React from "react";
import "../Recipe.css";

const Recipe = ({ title, image, ingredients, healthLabels, cuisineType }) => {
  return (
    <>
      <div className="CardMain">
        <div className="CardHeader">
          <img src={image} alt="Not Available" className="CardImg" />
        </div>

        <div className="CardBody">
          <div className="title">{title}</div>

          <div className="CuisineTypeNameandValueMain">
            <div className="CuisineTypeNameandValueMainInner">
              Cuisine Type:
            </div>

            <div className="cuisineType">
              {cuisineType.map((cuisineTypeValue, index) => (
                <div className="cuisineTypeInner" key={index}>
                  {cuisineTypeValue}
                </div>
              ))}
            </div>
          </div>

          <div className="ingredientsMain">
            <div className="ingredientsInnerOne">Ingredients:</div>
            <div className="ingredientsInnerTwo">
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="CardFooterTitleOne">Health Labels:</div>
          <div className="CardFooterTitleTwo">
            {healthLabels.map((healthLabel, index) => (
              <div key={index}>
                •{"\u00A0"}
                {healthLabel}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
