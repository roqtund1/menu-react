export default function MenuItem({img, title, price}) {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="info">
        <div className="info-header">
          <h4>{title}</h4>
          <span className="price">${price}</span>
        </div>
        <p className="text">
          vaporware iPhone mumblecore selvage raw denim slow-carb leggings
          gochujang helvetica man braid jianbing. Marfa thundercats
        </p>
      </div>
    </article>
  );
}
