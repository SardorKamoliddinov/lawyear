import React from "react";
import classess from "./card.module.scss";
import { RiStickyNoteFill } from "react-icons/ri";
import Text from "../Text/text";

function Card() {
  function Card(title, desc) {
    return (
      <div className={classess.card}>
        <RiStickyNoteFill className={classess.icon} />
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    );
  }
  return (
    <div className={classess.container}>
      <Text
        title={"Наши услуги"}
        desc={
          "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона"
        }
      />
      <div className={classess.cards}>
        {Card(
          "Банкротство физических лиц",
          "Процедуру банкротства физических лиц в России регулирует закон"
        )}
        {Card(
          "Банкротство физических лиц",
          "Процедуру банкротства физических лиц в России регулирует закон"
        )}
        {Card(
          "Банкротство физических лиц",
          "Процедуру банкротства физических лиц в России регулирует закон"
        )}
        {Card(
          "Банкротство физических лиц",
          "Процедуру банкротства физических лиц в России регулирует закон"
        )}
        {Card(
          "Банкротство физических лиц",
          "Процедуру банкротства физических лиц в России регулирует закон"
        )}
        {Card(
          "Банкротство физических лиц",
          "Процедуру банкротства физических лиц в России регулирует закон"
        )}
      </div>
      <div className={classess.end}>
        <button>Все услуги</button>
      </div>
    </div>
  );
}

export default Card;
