import React from "react";
import classes from "./ProjectDetails.module.css";
import DefaultPhoto from "../../assets/default.jpg";
import { Button } from "@mui/material";
import { buttonStyles } from "../layout/compnentStyles";

const ProjectUserDetails = ({ project }) => {
  return (
    <div className={classes["project-user-details"]}>
      <div className={classes["project-user-profile"]}>
        <span></span>
        <img
          src={project.user?.photo?.url || DefaultPhoto}
          alt={project?.user?.name}
        />
        <span></span>
      </div>
      <p className={classes["project-user-name"]}>{project?.user?.name}</p>
      <p className={classes["project-user-title"]}>{project?.user?.title}</p>
      <br />
      <Button
        sx={{ ...buttonStyles, padding: "0.5rem 2rem", textTransform: "none" }}
        variant='contained'>
        View Profile
      </Button>
    </div>
  );
};

export default ProjectUserDetails;
