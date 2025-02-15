import { useEffect, useState } from "react";
import styles from "./search.module.css";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_Key = "285f1331d29f4272943e21cdcf2fda0d";
export default function Search({ fooddata, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const respoese = await fetch(
        `${API_URL}?query=${query}&apiKey=${API_Key}`
      );
      const data = await respoese.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
