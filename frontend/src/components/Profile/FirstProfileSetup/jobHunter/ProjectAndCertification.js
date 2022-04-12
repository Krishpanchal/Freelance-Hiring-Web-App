import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { buttonStyles } from "../../../layout/compnentStyles";
import AddCertificateModal from "./AddCertificateModal";
import AddProjectModal from "./AddProjectModal";
import CertificatesContainer from "./CertificatesContainer";
import classes from "./JobHunterUpdate.module.css";
import ProjectsContainer from "./ProjectsContainer";

const ProjectAndCertification = ({ changeStep }) => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const addProjects = (projectData) => {
    setProjects((prevState) => [...projects, projectData]);
  };

  const addCertificates = (certificate) => {
    setCertificates((prevState) => [...certificates, certificate]);
  };

  console.log("projects", projects);
  console.log("certificates", certificates);

  return (
    <div>
      <div className={classes["section-projects"]}>
        <div className={classes["section-title"]}>
          <p>Project Section</p>
          <ChakraProvider>
            <AddProjectModal addProjects={addProjects} projects={projects}>
              <button
                className={`${classes["btn-small"]} ${classes["btn-primary"]}`}>
                +
              </button>
            </AddProjectModal>
          </ChakraProvider>
        </div>

        <ProjectsContainer projects={projects} />
        {/*  */}
      </div>

      <div className={classes["section-certificates"]}>
        <div className={classes["section-title"]}>
          <p>Certificates Section</p>
          <ChakraProvider>
            <AddCertificateModal
              addCertificates={addCertificates}
              certificates={certificates}>
              <button
                className={`${classes["btn-small"]} ${classes["btn-primary"]}`}>
                +
              </button>
            </AddCertificateModal>
          </ChakraProvider>
        </div>

        <CertificatesContainer certificates={certificates} />
      </div>

      <div
        style={{ textAlign: "right", marginRight: "20px", marginTop: "20px" }}>
        <Button
          sx={{
            ...buttonStyles,
            padding: "0.5rem 1rem",
            color: "#868e96",
            marginRight: "10px",
          }}
          onClick={changeStep}>
          Skip
        </Button>

        <Button
          type='submit'
          sx={{ ...buttonStyles, padding: "0.5rem 1rem" }}
          variant='contained'
          // disabled={isLoading}
        >
          {/* {isLoading ? ( */}
          {/* <CircularProgress size='2.4rem' color='grey' /> */}
          {/* ) : ( */}
          Next
          {/* )} */}
        </Button>
      </div>
    </div>
  );
};

export default ProjectAndCertification;
