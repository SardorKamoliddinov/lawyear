import React from "react";
import classess from "./history.module.scss";
import Image from './book.png';

function History() {
  return (
    <div className={classess.container}>
      <div className={classess.cards}>
        <div className={classess.card1}>
          <h1>
            Юридическая компания <span>правозащитник</span>
          </h1>
          <div className={classess.underScore}></div>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение.<br/><br /> Есть много
            вариантов Lorem Ipsum, но большинство из них имеет не всегда
            приемлемые модификации, например, юмористические вставки или слова,
            которые даже отдалённо не напоминают латынь. Если вам нужен Lorem
            Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь
            шутки, скрытой в середине абзаца.<br/><br /> За прошедшие годы текст Lorem
            Ipsum получил много версий. Некоторые версии появились по ошибке,
            некоторые - намеренно (например, юмористические варианты).
          </p>
          <div className={classess.btn}>
            <button>История компании</button>
            <button>Сертификаты</button>
          </div>
        </div>
        <div className={classess.card2}>
          <img src={Image} />
        </div>
      </div>
    </div>
  );
}

export default History;
