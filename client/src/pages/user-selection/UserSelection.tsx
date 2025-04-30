import { useState, useEffect } from "react";

export default function UserSelection() {
  const [cuisineTypes, setCusinesType] = useState<string[] | null>(null);
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

  return (
    <section>
      <h1 className="page-title">Select a Food and Find a Restaurant</h1>
      <div className="container">
        <select>
          <option value=""></option>
          {cuisineTypes?.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
