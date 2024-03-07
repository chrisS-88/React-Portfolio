import React from "react";
import arrowDown from "../../assets/images/arrow_down.png";
import arrowUp from "../../assets/images/arrow_up.png";
import htmlLogo from "../../assets/images/html_logo.png";
import cssLogo from "../../assets/images/css_logo.png";
import jsLogo from "../../assets/images/js_logo.png";
import jqueryLogo from "../../assets/images/jquery_logo.png";
import gitLogo from "../../assets/images/git_logo.png";
import nodeLogo from "../../assets/images/node_logo.png";
import reactLogo from "../../assets/images/react_logo.png";
import responsiveLogo from "../../assets/images/responsive_logo.png";
import bootstrapLogo from "../../assets/images/bootstrap_logo.png";

const styles = {
  aboutMe: {
    backgroundColor: "white",
    color: "rgb(44, 44, 44)",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: "6em",
  },
  arrowDownSection: {
    backgroundColor: "white",
    textAlign: "center",
    paddingBottom: "2em",
    color: "rgb(44, 44, 44)",
  },

  skillsGrid: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
    borderRadius: "20px",
  },
  skillsCell: {
    height: "220px",
    backgroundColor: "rgb(221, 221, 221,0.1)",
    borderRadius: "20px",
    margin: "1em",
    paddingTop: "1em",
  },
};

function About() {
  return (
    //  ABOUT SECTION
    <div className="container-fluid">
      <div className="row " id="aboutSection">
        <div className="col" style={styles.aboutMe}>
          <p>
            " Welcome to my corner of the web! I'm Chris, a passionate web developer
            dedicated to crafting engaging and user-friendly digital experiences. With a
            blend of creativity and technical expertise, I specialize in front-end
            development, transforming ideas into visually stunning and responsive
            websites. "
          </p>
        </div>
        <div className="container-fluid" style={styles.arrowDownSection}>
          <h3>Proficient Technologies</h3>
          <a href="#skillsSection" style={styles.skillsLink}>
            <img src={arrowDown} alt="arrow down logo" width="80px" />
          </a>
        </div>
      </div>
      {/* // TECH STACK SECTION */}
      <div className="container-fluid text-center" id="skillsSection">
        <div className="container-fluid mt-5">
          <a href="#">
            <img src={arrowUp} alt="arrow down logo" width="80px" />
          </a>
          <h3 className="text-white">About</h3>
        </div>
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-lg-4" style={styles.skillsGrid}>
            <div className="col" style={styles.skillsCell}>
              <p>HTML</p>
              <img src={htmlLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>CSS</p>
              <img src={cssLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>Javascript</p>
              <img src={jsLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>Git</p>
              <img src={gitLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>Bootstrap</p>
              <img src={bootstrapLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>jQuery</p>
              <img src={jqueryLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>Responsive Design</p>
              <img src={responsiveLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>Node JS</p>
              <img src={nodeLogo} alt="logo" width="120px" />
            </div>
            <div className="col" style={styles.skillsCell}>
              <p>React</p>
              <img src={reactLogo} alt="logo" width="120px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
