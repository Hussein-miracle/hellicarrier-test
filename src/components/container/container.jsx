import React from "react";
// import { JobsProvider } from '../../contexts/jobs.context';
import JobPost from "../job-post/job-post";
import Spinner from "../spinner/spinner";
import "./container.scss";
const Container = ({ jobs, loading, error }) => {

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="error">Error Fetching Jobs</p>;
  }

  return (
    <div className="container">
      {jobs.map((job,index) => {
        return (
          <JobPost

            key={job.id+index}
            company={job.companyName}
            title={job.title}
            location={job.location || job.locationNames}
            tags={job.tags}
            link={job.applyUrl}
            date={job.createdAt.toDateString()}
          />
        );
      })}
    </div>
  );
};

export default Container;
