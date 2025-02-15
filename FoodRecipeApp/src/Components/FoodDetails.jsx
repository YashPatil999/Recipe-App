import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_Key = "285f1331d29f4272943e21cdcf2fda0d";
  useEffect(() => {
    async function fetchFood() {
      const respoese = await fetch(`${API_URL}?apiKey=${API_Key}`);
      const data = await respoese.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegeterian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲{" "}
          <span>
            <strong>{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList key={food.id} food={food} isLoading={isLoading}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ul>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
