import React from "react";

const MenuItems = ({ name, bgcolor, src }) => {
  return (
    <StyledProjectItem
      href=""
      className="project__item"
      data-color={bgcolor}
      data-image={src}
    >
      <span className="project__item-text">{name}</span>
    </StyledProjectItem>
  );
};

export default MenuItems;
