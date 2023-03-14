import "./CardDiscription.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Video from "./Video/Video";
import About from "./About/About";
import Awards from "./Awards/Awards";

function CardDiscription({ cards }) {
  const getCardById = (cards, id) => cards.find((card) => card._id === id);
  const { id } = useParams();
  const card = getCardById(cards, id);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <section className="discription">
      <Video card={card} />
      {/* <About card="r5r5rr" /> */}
      {/* <Awards /> */}
      <div className="discription__image_num_1" />
      <div className="discription__image_num_2" />
      <div className="discription__image_num_3" />
    </section>
  );
}

export default CardDiscription;
