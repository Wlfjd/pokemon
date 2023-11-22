import "./App.css";
import { Pokemon } from "./components/Pokemon";
import { useState } from "react";
import MockItems from "./pokemons.json";

function App() {
  const [items, setItems] = useState(MockItems);
  const [sorted, setSorted] = useState(1);
  const sortItems = items.sort((a, b) => sorted * (a.id - b.id));
  const handleDelete = (id) => {
    const newItems = items.filter((i) => i.id !== id);
    setItems(newItems);
  };
  return (
    <div>
      <div>
        <button onClick={() => setSorted(1)}>순서대로</button>
        <button onClick={() => setSorted(-1)}>반대로</button>
      </div>
      <ul>
        {sortItems.map((item) => (
          <li key={item.id}>
            <Pokemon item={item} onDelete={handleDelete}></Pokemon>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
