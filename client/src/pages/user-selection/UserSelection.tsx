import "./styles.css";
import { useState, useEffect } from "react";
import RestaurantsFromSelection from "../../components/restaurants-from-selection/RestaurantsFromSelection.tsx";

export default function UserSelection() {
  const [cuisineTypes, setCusinesType] = useState<string[] | null>(null);
  const [chosenCuisine, setChosenCuisine] = useState<string>("");
  const url = import.meta.env.VITE_CUISINE_TYPES;

  useEffect(() => {
    getCusineTypes();
  }, []);

  async function getCusineTypes() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCusinesType(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCuisineSelection(event): void {
    setChosenCuisine(event.target.value);
  }

  return (
    <>
      <h1 className="page-title">Select a Food and Find a Restaurant</h1>
      <div className="container">
        <section className="choice-container">
          <h3 className="sub-heading">Looking for</h3>
          <select onChange={(event) => handleCuisineSelection(event)}>
            <option value={chosenCuisine}></option>
            {cuisineTypes?.map((cuisine) => (
              <option key={cuisine.uuid} value={cuisine.name}>
                {cuisine.name}
              </option>
            ))}
          </select>
          <span>?</span>
        </section>
        <section>
          <h3 className="sub-heading">You might like:</h3>
          <RestaurantsFromSelection chosenCuisine={chosenCuisine} />
        </section>
      </div>
    </>
  );
}
