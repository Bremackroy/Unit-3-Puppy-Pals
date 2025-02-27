import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div className="container">
        <div className="puppies">
          {puppies.map((puppy) => {
            return (
              <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
                {puppy.name}
              </p>
            );
          })}
        </div>
        {featPupId && (
          <div className="details">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
