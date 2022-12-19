import React from "react";

import "./index.css";

const rootId = "r6c8a4JS2fFCFjtG6GtbdRYDHKnKyAys";

const RelationshipNode = ({ person }) => {
  const {
    properties: { avatar = "", name = "", count = 0, role = "" },
    id = "",
  } = person;

  const rootClassName = clx => {
    const rootClass = clx + "_root";
    if (id === rootId) return `${clx} ${rootClass}`;
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
