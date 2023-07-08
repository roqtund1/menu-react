import Button from "./Button";
export default function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return <Button key={i} func={filterItems} text={category} />;
      })}
    </div>
  );
}
