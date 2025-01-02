import React from "react";
import projects from "./project";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <StyledProjectsContainer>
      <div className="project__wrapper">
        {projects.map((project) => (
          <MenuItems
            key={project.id}
            name={project.name}
            bgcolor={project.color}
            src={project.image}
          />
        ))}
      </div>

      <div className="project__image--outer">
        <div className="project__image--inner"></div>
      </div>
      <StyledBackground />
    </StyledProjectsContainer>
  );
};

export default Menu;
