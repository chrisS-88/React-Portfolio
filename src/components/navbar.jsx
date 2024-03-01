import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand portfolio-title" href="#">
          Chris Smart
        </a>

        <div class="navbar-nav">
          <a class="nav-link" href="#">
            About
          </a>
          <a class="nav-link" href="#">
            Skills
          </a>
          <a class="nav-link" href="#">
            Projects
          </a>
          <a class="nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
