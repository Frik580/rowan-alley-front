import "./Project.css";
import AboutProject from "./AboutProject/AboutProject";
import SearchForm from "../../SearchForm/SearchForm";
import Cards from "./Cards/Cards";

function Project() {
  return (
    <section className="project">
      <AboutProject />
      <SearchForm />
      <Cards />
    </section>
  );
}

export default Project;
