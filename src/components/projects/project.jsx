import React from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project.css";

function Project({ project }) {
  return (
    <div className="container col-lg-6">
      <div className="row mx-5">
        <div className="col m-auto">
          <div className="card-custom text-center  my-5">
            <div className="col card-custom-image ">
              <img
                src={project.image}
                alt="project screenshot"
                height="300rem"
                width="300rem"
                className="p-3 rounded-4 projectImg "
              />
            </div>
            <div className="col card-custom-content mx-5 p-2">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <p>
                Tools; <br />
                <span className="tech-used">{project.technologies}</span>{" "}
              </p>
              <p>
                <a href={project.URL} target="_blank" className="link">
                  Deployed Project
                </a>
              </p>
              <p>
                <a href={project.gitHub} target="_blank" className="link">
                  Github Repository
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
