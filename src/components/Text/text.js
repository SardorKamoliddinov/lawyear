import React from "react";
import classess from "./text.module.scss";

function Text({ title, desc }) {
  return (
    <div className={classess.container}>
      <div className={classess.text}>
        <h1>{title}</h1>
        <span></span>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Text;
