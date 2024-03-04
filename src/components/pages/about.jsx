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
    height: "75vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: "0 6rem",
  },
  arrowDownSection: {
    backgroundColor: "white",
    textAlign: "center",
    paddingBottom: "3em",
  },

  skillsGrid: {
    color: "rgb(255, 109, 40)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
    borderRadius: "20px",
  },
  skillsCell: {
    padding: "1em",
    height: "200px",
    backgroundColor: "rgb(60, 60, 60,0.4)",
    borderRadius: "20px",
    margin: "1em",
  },
};

function About() {
  return (
    //  ABOUT SECTION
    <div className="container-fluid" id="aboutSection">
      <div className="row">
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
          <p>Proficient Technologies</p>
          <a href="#skillsSection" style={styles.skillsLink}>
            <img src={arrowDown} alt="arrow down logo" width="80px" />
          </a>
        </div>
      </div>
      {/* // TECH STACK SECTION */}
      <div className="container-fluid text-center vh-100" id="skillsSection">
        <div className="container-fluid mt-5">
          <a href="#aboutSection">
            <img src={arrowUp} alt="arrow down logo" width="80px" />
          </a>
          <p className="text-white">About</p>
        </div>
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-lg-4" style={styles.skillsGrid}>
            <div class="col" style={styles.skillsCell}>
              <p>HTML</p>
              <img src={htmlLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>CSS</p>
              <img src={cssLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>Javascript</p>
              <img src={jsLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>Git</p>
              <img src={gitLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>Bootstrap</p>
              <img src={bootstrapLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>jQuery</p>
              <img src={jqueryLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>Responsive Design</p>
              <img src={responsiveLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>Node JS</p>
              <img src={nodeLogo} alt="" width="120px" />
            </div>
            <div class="col" style={styles.skillsCell}>
              <p>React</p>
              <img src={reactLogo} alt="" width="120px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
