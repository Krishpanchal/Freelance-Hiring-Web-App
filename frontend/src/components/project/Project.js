import React from "react";
import classes from "./Projects.module.css";

const Project = ({ project }) => {
  return (
    <div className={classes["project"]}>
      <img src={project.photo.url} alt={project.title} />
      <p>{project.title}</p>
    </div>
  );
};

export default Project;
