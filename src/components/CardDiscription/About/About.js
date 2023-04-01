import "./About.css";

function About({ card }) {
  return (
    <section className="about">
      <p className="about__text"><strong>Годы жизни:</strong> {card.years}</p>
      <p className="about__text"><strong>Место рождения:</strong> {card.birthPlace}</p>
      <p className="about__text"><strong>Место службы:</strong> {card.dutyStation}</p>
      <p className="about__text"><strong>Место захронения:</strong> {card.burialPlace}</p>
      {card.facts.map((fact) => (
        <p key={fact.toString()} className="about__text about__text_paragraph">
          {fact}
        </p>
      ))}
    </section>
  );
}

export default About;
