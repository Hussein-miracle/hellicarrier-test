import React from "react";
// import { JobsProvider } from '../../contexts/jobs.context';
import JobPost from "../job-post/job-post";
import Spinner from "../spinner/spinner";

import "./container.scss";
const Container = ({ jobs, loading, error }) => {

  if(navigator.onLine === false){
    return <h2 className="network"
  >
    You need to be connected to be able to view this site's content
  </h2>
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1 className="error">Error Fetching Jobs</h1>;
  }

  return (
    <div className="container">
      {jobs.map((job,index) => {
        return (
          <JobPost

            key={job.id+index}
            job={job}
          />
        );
      })}
    </div>
  );
};

export default Container;
