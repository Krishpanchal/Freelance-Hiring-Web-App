import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JobHunterDetails from "../../components/jobHunterDetails/JobHunterDetails";
import { fetchJobHunter, reset } from "../../store/jobHunters/jobHunterSlice";

const JobHunterDetailsPage = () => {
  const params = useParams();
  const { jobHunterId } = params;

  const { isLoading } = useSelector((state) => state.jobHunters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobHunter(jobHunterId));
  }, [dispatch, jobHunterId]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return <>{isLoading ? <h1>Loading</h1> : <JobHunterDetails />}</>;
};

export default JobHunterDetailsPage;
