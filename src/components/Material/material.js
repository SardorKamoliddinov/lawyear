import React from "react";
import classess from "./material.module.scss";
import Text from "./../Text/text";
import Image1 from "./Rectangle 30.png";
import Image2 from "./Rectangle 31.png";
import Image3 from "./Rectangle 32.png";

function Material() {
  function Card(image, title, date, desc) {
    return (
      <>
        <img src={image} />
        <h1>{title}</h1>
        <span>{date}</span>
        <p>{desc}</p>
      </>
    );
  }
  return (
    <div className={classess.container}>
      <Text
        title={"Полезные материалы"}
        desc={
          "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона"
        }
      />
      <div className={classess.cards}>
        <div className={classess.card}>
          {Card(
            Image1,
            "Воистину радостный звук: шёпот бессменных лидеров",
            "24 апр. 2023 г.",
            "Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. "
          )}
        </div>
        <div className={classess.card}>
          {Card(
            Image2,
            "Воистину радостный звук: шёпот бессменных лидеров",
            "24 апр. 2023 г.",
            "Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. "
          )}
        </div>
        <div className={classess.card}>
          {Card(
            Image3,
            "Воистину радостный звук: шёпот бессменных лидеров",
            "24 апр. 2023 г.",
            "Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. "
          )}
        </div>
      </div>
      <div className={classess.end}>
        <button>Все новости</button>
      </div>
    </div>
  );
}

export default Material;
