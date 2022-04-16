import React from "react";
import { useSelector } from "react-redux";
import classes from "./ProjectDetails.module.css";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectDetailsSection from "./ProjectDetailsSection";
import ProjectImageContainer from "./ProjectImageContainer";
import ProjectUserDetails from "./ProjectUserDetails";

const ProjectDetails = () => {
  const { singleProject } = useSelector((state) => state.projects);

  console.log(singleProject);

  return (
    <section className={classes["project-detail-section"]}>
      <ProjectDetailsHeader project={singleProject} />
      <ProjectImageContainer project={singleProject} />
      <ProjectDetailsSection project={singleProject} />
      <ProjectUserDetails project={singleProject} />
    </section>
  );
};

export default ProjectDetails;
