import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ background: "#151a25" }}
      >
        <span className="navbar-brand navbar-brand-style">
          <i className="fa-solid fa-chalkboard"></i>
          &nbsp;&nbsp;Kanban Board
        </span>
      </nav>
    </div>
  );
};

export default Header;
