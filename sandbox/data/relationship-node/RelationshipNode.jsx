import React from "react";

import "./index.css";

const RelationshipNode = ({ person }) => {
  const {
    properties: { avatar = "", name = "", count = 0, role = "", root = true },
  } = person;

  const rootClassName = clx => {
    const rootClass = clx + "_root";
    if (root) return `${clx} ${rootClass}`;
    return clx;
  };

  return (
    <div className="custom">
      <div className={rootClassName("relation")}>{role}</div>

      <div className={rootClassName("count")}>{count}+</div>

      <div className={rootClassName("avatar")}>
        <img src={avatar} alt="avatar" />
      </div>
      <span className={rootClassName("name")}>{name}</span>
    </div>
  );
};

export default RelationshipNode;
