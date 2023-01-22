import "./Project.css";
import AboutProject from "./AboutProject/AboutProject";
import Cards from "./Cards/Cards";
import NextCards from "../../NextCards/NextCards";

function Project() {
  return (
    <section className="project">
      <AboutProject />
      <Cards />
      <NextCards />
      <div className="project__image_num_1" />
      <div className="project__image_num_2" />
      <div className="project__image_num_3" />
      <div className="project__image_num_4" />
      <div className="project__image_num_5" />
      <div className="project__image_num_6" />
      <div className="project__image_num_7" />
      <div className="project__image_num_8" />
    </section>
  );
}

export default Project;
