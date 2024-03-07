import React from "react";
import profileImg from "../../assets/images/profile_img.png";

const styles = {
  container: {
    padding: "3em",
    color: "white",
  },
  h2: {
    fontSize: "32px",
  },
  h1: {
    color: "rgb(240, 84, 84)",
    fontSize: "50px",
    fontWeight: "500",
    fontStyle: "normal",
  },

  profileImg: {
    width: "330px",
    borderRadius: "5px",
    margin: "4em 0",
    borderTop: "1px solid rgb(240, 84, 84)",
  },

  cvLink: {
    textDecoration: "underlined",
    fontWeight: "600",
    color: "rgb(240, 84, 84)",
  },
};
function Home() {
  return (
    <div className="container-fluid" style={styles.container}>
      <div className="row ">
        <div className="col col-lg-8 mx-auto">
          <h2 style={styles.h2}>
            Hi, I'm <span style={styles.h1}>Chris</span>
          </h2>

          <h2 style={styles.h2}>Front-End Web Developer based in Leeds</h2>
          <p className=" mt-5">
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
        </div>

        <div className="col col-lg-4 mx-auto ">
          <img src={profileImg} alt="profile image" style={styles.profileImg} />
        </div>
      </div>
    </div>
  );
}

export default Home;
