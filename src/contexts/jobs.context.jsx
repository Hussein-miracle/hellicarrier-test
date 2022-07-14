import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const JobsContext = createContext({
  jobs: [],
});

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      applyUrl
      commitment {
        slug
      }
      locationNames
      remotes {
        type
        name
      }
      isFeatured
      createdAt
      company {
        name
        websiteUrl
      }
      tags {
        name
      }
    }
  }
`;

export const JobsProvider = ({ children }) => {
  const { loading, error, data } = useQuery(GET_JOBS);
  const [jobs, setJobs] = useState([]);

  // console.log(loading)
  // console.log(data)
  useEffect(() => {
    if (data) {
      const { jobs: jobsData } = data;

      // console.log(jobsData, "jobs");

      const jobsMap = jobsData
        .map((job) => {
          const item = {
            id: job.id,
            title: job.title,
            isFeatured: job.isFeatured,
            isRemote: job.remotes.length !== 0,
            applyUrl: job.applyUrl,
            commitment: job.commitment.slug,
            location: job.locationNames,
            createdAt: new Date(job.createdAt),
            companyName: job.company.name,
            companyWebsite: job.company.websiteUrl,
            tags: job.tags.map((tag) => tag.name),
          }

          return item;
        })
        .sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));

      setJobs(jobsMap);
    }
  }, [data]);

  const value = { loading, jobs, error };
  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};
