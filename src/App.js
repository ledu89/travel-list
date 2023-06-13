import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingLIst from "./PackingList";
import Item from "./Item";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

const App = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((curState) => [...curState, item]);
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  function handleDeleteItems(id) {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  function ToggleItem(id) {
    setItems((currItems) =>
      currItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLIst
        onDeleteItems={handleDeleteItems}
        items={items}
        onToggleItems={ToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
