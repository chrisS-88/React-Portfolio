import React from "react";
import profileImg from "../../assets/images/profile_avatar.jpeg";
import gitIcon from "../../assets/images/github_icon.png";
import linkedIcon from "../../assets/images/linked_icon.png";
import emailIcon from "../../assets/images/email_icon.png";

const styles = {
  container: {
    padding: "3em",
    color: "white",
  },
  h2: {
    fontSize: "32px",
  },
  h1: {
    color: "rgb(255, 109, 40)",
    fontSize: "50px",
    fontFamily: "Londrina Outline, sansSerif",
    fontWeight: "400",
    fontStyle: "normal",
  },

  imgRow: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
  profileImg: {
    width: "350px",
    borderRadius: "50%",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    marginBottom: "4em",
  },
  cvLink: {
    textDecoration: "none",
    color: "rgb(255, 109, 40)",
  },
};
function Home() {
  return (
    <div className="container-fluid" style={styles.container}>
      <div className="row text-center-left mt-4 mx-3">
        <h2 style={styles.h2}>Hi, I'm</h2>
        <h1 style={styles.h1}>Chris</h1>
        <h2 style={styles.h2}>Front-End Web Developer based in Leeds</h2>
        <p className="mt-5">
          Check out my{" "}
          <a
            href="https://docs.google.com/document/d/19VwSX3prFnQxrLLXqs1aS05XqDKh7nIJmK8lNVOF8qU/edit"
            target="_blank"
            style={styles.cvLink}
          >
            C.V here
          </a>
          <br />
          Or reach out on my socials below
        </p>

        <div className="row mt-3" style={styles.imgRow}>
          <div className="col-12 col-md-6" style={styles.socialIcons}>
            <a href="mailto:chrissmart920@gmail.com" target="blank" className="m-4">
              <img src={emailIcon} alt="email logo" width="50px" />
            </a>
            <a href="https://github.com/chrisS-88" target="blank" className="m-4">
              <img src={gitIcon} alt="git logo" width="50px" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-smart-490856244/"
              target="blank"
              className="m-4"
            >
              <img src={linkedIcon} alt="linkedIn logo" width="50px" />
            </a>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={profileImg} alt="profile image" style={styles.profileImg} />
          </div>
        </div>
      </div>
      {/* <div className="col-12 text-center fixed-bottom mb-5">
        <a href="https://github.com/chrisS-88" target="blank" className="m-4">
          <img src={gitIcon} alt="git logo" width="40px" />
        </a>
        <a
          href="https://www.linkedin.com/in/chris-smart-490856244/"
          target="blank"
          className="m-4"
        >
          <img src={linkedIcon} alt="linkedIn logo" width="60px" />
        </a>
        <a href="mailto:chrissmart920@gmail.com" target="blank" className="m-4">
          <img src={emailIcon} alt="email logo" width="40px" />
        </a>
      </div> */}
    </div>
  );
}

export default Home;
