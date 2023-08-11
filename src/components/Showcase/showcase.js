import React from "react";
import classess from "./showcase.module.scss";

function Showcase() {
  return <div className={classess.showcase}>
    <div className={classess.image}>
      <h2>Оказываем весь комплекс</h2>
      <h1>Юридических услуг</h1>
      <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение.</p>
      <button>Наши услуги</button>
    </div>
  </div>;
}

export default Showcase;
