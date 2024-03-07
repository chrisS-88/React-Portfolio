import React from "react";
import gitIcon from "../../assets/images/github_icon.png";
import linkedIcon from "../../assets/images/linked_icon.png";
import emailIcon from "../../assets/images/email_icon.png";
import "../footer/footer.css";

function Footer() {
  return (
    <div>
      <div className="container-fluid footer">
        <a
          href="mailto:chrissmart920@gmail.com"
          target="blank"
          className="mx-4 link-icon"
        >
          <img src={emailIcon} alt="email logo" width="40px" />
        </a>
        <a href="https://github.com/chrisS-88" target="blank" className="mx-4 link-icon">
          <img src={gitIcon} alt="git logo" width="40px" />
        </a>
        <a
          href="https://www.linkedin.com/in/chris-smart-490856244/"
          target="blank"
          className="mx-4 link-icon"
        >
          <img src={linkedIcon} alt="linkedIn logo" width="40px" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
