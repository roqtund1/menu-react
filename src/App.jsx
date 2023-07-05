import { useEffect, useState } from "react";
import data from "./data";

import Menu from "./Menu";

function App() {
  const [menu, setMenu] = useState(data);

  function filterItems(filter) {
    const newMenu =
      filter === "all" ? data : data.filter((item) => item.category === filter);

    setMenu(newMenu);
  }

  return (
    <main>
      <Menu menu={menu} filterItems={filterItems} />
    </main>
  );
}

export default App;
