import "./Awards.css";

function Awards({ card }) {
  console.log(card.award);

  return (
    <section className="awards">
      <h2 className="awards__title">Награды</h2>
      <ul className="awards__list">
        {card.award.map((item) => (
          <li key={item._id} className="item">
            <img src={item.description} className="item__pic" alt={item.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;
