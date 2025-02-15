import FoodItem from "./FoodItem";

export default function FoodList({ fooddata, setFoodId }) {
  return (
    <div>
      {fooddata.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
      ))}
    </div>
  );
}
