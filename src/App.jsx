import { useEffect, useState } from "react";
import data from "./data";

import Menu from "./Menu";

const allCategories = ['all', ...new Set(data.map(item => item.category))];


function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  function filterItems(filter) {
    const newMenu =
      filter === "all" ? data : data.filter((item) => item.category === filter);

    setMenu(newMenu);
  }

  return (
    <main>
      <Menu categories={categories} menu={menu} filterItems={filterItems} />
    </main>
  );
}

export default App;
