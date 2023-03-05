import "./CardDiscription.css";
import Video from "./Video/Video";
import About from "./About/About";
import Awards from "./Awards/Awards";

function Project() {
  return (
    <section className="discription">
      <Video />
      <About card='r5r5rr'/>
      {/* <Awards /> */}
      <div className="discription__image_num_1" />
      <div className="discription__image_num_2" />
      <div className="discription__image_num_3" />
    </section>
  );
}

export default Project;
