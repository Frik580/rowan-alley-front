import "./About.css";

function About({ card }) {
  return (
    <section className="about">
      <h2 className="about__title">Основные данные</h2>
      <p className="about__text">{`Годы жизни: ${card}`}</p>
      <p className="about__text">{`Место рождения: ${card}`}</p>
      <p className="about__text">{`Звание: ${card}`}</p>
      <p className="about__text">{`Место службы: ${card}`}</p>
      <p className="about__text">{`Место захррнения: ${card}`}</p>
      <p className="about__text">
        В данной части лучше дать описание проекту, как он родился, чему
        посвящен, какие цели преследует и т.д. В данной части лучше дать
        описание проекту, как он родился, чему посвящен, какие цели преследует и
        т.д. В данной части лучше дать описание проекту, как он родился, чему
        посвящен, какие цели преследует и т.д. В данной части лучше дать
        описание проекту, как он родился, чему посвящен, какие цели преследует и
        т.д.
        В данной части лучше дать описание проекту, как он родился, чему
        посвящен, какие цели преследует и т.д. В данной части лучше дать
        описание проекту, как он родился, чему посвящен, какие цели преследует и
        т.д. В данной части лучше дать описание проекту, как он родился, чему
        посвящен, какие цели преследует и т.д. В данной части лучше дать
        описание проекту, как он родился, чему посвящен, какие цели преследует и
        т.д.
      </p>
    </section>
  );
}

export default About;
