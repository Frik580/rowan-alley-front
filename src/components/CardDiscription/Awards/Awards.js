import "./Awards.css";

function Awards({ card }) {
  return (
    <section className="awards">
      {card.award.length > 0 && (
        <>
          <h2 className="awards__title">Награды</h2>
          <ul className="awards__list">
            {card.award.map((item) => (
              <li key={item._id} className="item">
                <img
                  src={item.description}
                  className="item__pic"
                  alt={item.name}
                />
                <div className="item__description">
                  <p className="item__text">{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Awards;
