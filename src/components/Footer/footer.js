import React from "react";
import classess from "./footer.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import Image from "./Rectangle 28.png";

function Footer() {
  return (
    <div className={classess.footer}>
      <footer>
        <div className={classess.text}>
          <h1>
            Правозащитник <h5>Юридическая компания</h5>
          </h1>
          <p>
            Предварительные выводы неутешительны: синтетическое тестирование, а
            также свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для экономической целесообразности принимаемых решений.
          </p>
        </div>
        <hr />
        <div className={classess.cards}>
          <div className={classess.card1}>
            <div className={classess.icon}>
              <FaLocationDot className={classess.i} />
              <p>
                Наш адрес <h3>г. Одинцово, пр. Будапештсткая, 40</h3>
              </p>
            </div>
            <div className={classess.icon}>
              <BsFillPhoneFill className={classess.i} />
              <p>
                Запись на консультанцию <h3>+7 (922) 022-94-82</h3>
              </p>
            </div>
            <div className={classess.icon}>
              <BiMessageRounded className={classess.i} />
              <p>
                Корреспонденция <h3>janis62@yahoo.com</h3>
              </p>
            </div>
          </div>
          <div className={classess.card2}>
            <ul>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Сертификаты</a>
              </li>
              <li>
                <a href="#">Полезные материалы</a>
              </li>
              <li>
                <a href="#">Благотворительность</a>
              </li>
            </ul>
          </div>
          <div className={classess.card3}>
            <div className={classess.image}>
              {/* <img src={Image} /> */}
              <h1>
                Миронов Александр <p>Ведущий юрист</p>
              </h1>
            </div>
            <p>
              Есть над чем задуматься: тщательные исследования конкурентов
              разоблачены. Идейные соображения высшего порядка, а также
              перспективное планирование играет{" "}
            </p>
            <div className={classess.btn}>
              <button>Задать вопрос юристу</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
