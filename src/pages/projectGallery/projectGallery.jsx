import React from "react";

import Project from "../../components/projects/project";
import projectData from "../../projects.json";

function ProjectGallery() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 my-5">
            <h6>WORK</h6>
            <h3>My Recent Projects</h3>
          </div>
        </div>
      </div>
      <div className="row">
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectGallery;
