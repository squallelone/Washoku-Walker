import "./styles.css";
import { useState, useEffect } from "react";
import RestaurantsFromSelection from "../../components/restaurants-from-selection/RestaurantsFromSelection.tsx";
import tokyoWards from "../../tokyoWards.ts";

export default function UserSelection() {
  const [cuisineTypes, setCusinesType] = useState<string[] | null>(null);
  const [chosenCuisine, setChosenCuisine] = useState<string>("");
  const [chosenWard, setChosenWard] = useState<string>(tokyoWards[0]);
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

  function handleWardSelection(event): void {
    setChosenWard(event?.target.value);
  }

  return (
    <>
      <h1 className="page-title">Select a Food and Find a Restaurant</h1>
      <div className="container">
        <section className="choice-container">
          <h3 className="sub-heading">I'm looking for &nbsp;</h3>
          <div className="selection-row">
            {/* Cuisine type */}
            <select onChange={(event) => handleCuisineSelection(event)}>
              <option value={chosenCuisine}></option>
              {cuisineTypes?.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
            <h3 className="sub-heading">&nbsp; in &nbsp;</h3>
            {/* Area */}
            <select onChange={(event) => handleWardSelection(event)}>
              <option value={chosenWard}></option>
              {tokyoWards.map((ward) => (
                <option key={ward} value={ward}>
                  {ward}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <h3 className="sub-heading">You might like:</h3>
          <RestaurantsFromSelection
            chosenCuisine={chosenCuisine}
            chosenWard={chosenWard}
          />
        </section>
      </div>
    </>
  );
}
