import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import UnorderedList from "./components/UnorderedList";
import OrderedList from "./components/OrderedList";
import Nutrition from "./components/Nutrition";
import { headlines } from "./services/Headline";
import { preparationList } from "./services/PreparationHeadline";
import { ingredientList } from "./services/Ingredients";
import { instructionList } from "./services/Instructions";
import { nutritionList } from "./services/Nutrition";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header headers={headlines} />
        <section className="preparation">
          <h3>Preparation time</h3>
          <UnorderedList customClassName="bold" list={preparationList} />
        </section>
        <section className="ingredients">
          <h3>Ingredients</h3>
          <UnorderedList list={ingredientList} />
        </section>
        <section className="instructions">
          <h3>Instructions</h3>
          <OrderedList list={instructionList} />
        </section>
        <section className="nutrition">
          <h3>Nutrition</h3>
          <p>
            The table below shows nutritional value per serving without the
            additional fillings.
          </p>
          <Nutrition list={nutritionList} />
        </section>
      </div>
    </>
  );
}

export default App;
