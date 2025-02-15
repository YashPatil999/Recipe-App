import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import "./App.css";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [fooddata, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715415");
  return (
    <div className="App">
      <Nav/>
      <Search fooddata={fooddata} setFoodData={setFoodData} />
      <Container>
      <InnerContainer>
      <FoodList setFoodId={setFoodId} fooddata={fooddata} />
      </InnerContainer>
      <InnerContainer>
        <FoodDetails foodId={foodId}/>
      </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
