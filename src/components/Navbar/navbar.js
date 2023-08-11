import React, { useState } from "react";
import classess from "./navbar.module.scss";
import { BsPhone } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
  const [toogle, setToogle] = useState(false);

  const handleToggle = () => {
    setToogle(!toogle);
  };
  return (
    <div className={classess.nav}>
      <div className={classess.container}>
        <div className={classess.top}>
          <ul className={classess.left}>
            <li>
              <BsPhone style={{ color: "#4F8FF0", fontSize: "14px" }} />
              <a href="#" style={{ color: "white" }}>
                +7 (922) 022-94-82
              </a>
            </li>

            <li>
              <BiSolidMessageDetail
                style={{ color: "#4F8FF0", fontSize: "14px" }}
              />
              <a href="#" style={{ color: "white" }}>
                janis62@yahoo.com
              </a>
            </li>
          </ul>

          <ul className={classess.right}>
            <li>Заказать звонок</li>
          </ul>
        </div>

        {/* <nav>
          <div className={classess.text}>
            <h1>Правозащитник</h1>
            <p>Юридическая компания</p>
          </div>
          <ul>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Наши юристы</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav> */}
        <nav className={toogle ? "navbar expanded" : "navbar"}>
          <h2 className="logo">
            <h1>Правозащитник</h1>
            <p>Юридическая компания</p>
          </h2>
          <ul className="links">
            <li><a href="/showcase">Услуги</a></li>
            <li><a href="/card">О компании</a></li>
            <li><a href="#">Наши юристы</a></li>
            <li><a href="/material">Отзывы</a></li>
            <li><a href="/history">Новости</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <div className="toogle_icon" onClick={handleToggle}>
            {toogle ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
