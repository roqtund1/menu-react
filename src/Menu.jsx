import Categories from "./Categories";
import MenuItem from "./MenuItem";
import Title from "./Title";

export default function Menu({ menu, filterItems, categories }) {
  return (
    <section>
      <Title text={"our menu"} />
      <Categories filterItems={filterItems} categories={categories} />
      <div className="menu s-c">
        {menu.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
