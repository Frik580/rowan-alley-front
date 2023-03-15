import "./About.css";

function About({ card }) {
  return (
    <section className="about">
      <h2 className="about__title">Основные данные</h2>
      <p className="about__text">{`Годы жизни: ${card.years}`}</p>
      <p className="about__text">{`Место рождения: ${card.birthPlace}`}</p>
      <p className="about__text">{`Место службы: ${card.dutyStation}`}</p>
      <p className="about__text">{`Место захррнения: ${card.burialPlace}`}</p>
      {card.facts.map((fact) => (
        <p key={fact.toString()} className="about__text about__text_paragraph">
          {fact}
        </p>
      ))}
    </section>
  );
}

export default About;
