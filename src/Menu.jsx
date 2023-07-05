import Button from "./Button";
import MenuItem from "./MenuItem";

export default function Menu({ menu, filterItems }) {
  const btnData = [
    { text: "all" },
    { text: "breakfast" },
    { text: "lunch" },
    { text: "shakes" },
  ];

  return (
    <section>
      <div className="title  menu-title">
        <h2>our menu</h2>
        <div className="title-underline"></div>
      </div>
      <div className="btn-container">
        {btnData.map((btn, i) => {
          return <Button key={i} func={filterItems} {...btn} />;
        })}
      </div>
      <div className="menu s-c">
        {menu.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
