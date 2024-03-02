import React from "react";
import profileImg from "../assets/images/profile_pic.jpeg";

const styles = {
  profileImg: {
    width: "30rem",
    borderRadius: "20px",
  },
};
function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Hi, I'm</h2>

          <h1 className="name-title">Chris</h1>
          <h2>
            Front-End Web developer <br />
            based in Leeds, UK.
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <img src={profileImg} alt="profile image" style={styles.profileImg} />
        </div>
      </div>
    </div>
  );
}

export default Home;
