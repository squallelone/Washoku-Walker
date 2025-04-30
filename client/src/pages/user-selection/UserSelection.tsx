import "./styles.css";
import { useState, useEffect } from "react";

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
        <section>
          <div className="container">
            <select onChange={(event) => handleCuisineSelection(event)}>
              <option value={chosenCuisine}></option>
              {cuisineTypes?.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>
        </section>
      </div>
    </>
  );
}
