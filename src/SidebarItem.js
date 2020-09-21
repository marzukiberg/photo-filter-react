import React from "react";

const SidebarItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`sidebar__item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default SidebarItem;
