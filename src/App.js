import { useContext, useState } from "react";
import { JobsContext } from "./contexts/jobs.context";
import Container from "./components/container/container";
import "./App.scss";

const App = () => {
  const { loading, error, jobs } = useContext(JobsContext);
  const [query, setQuery] = useState("");

  const Filters = [
    {
      identifier: "",
      name: "All",
    },
    {
      identifier: "backend",
      name: "Backend",
    },
    {
      identifier: "frontend",
      name: "Frontend",
    },
    {
      identifier: "node.js",
      name: "node.js",
    },
    {
      identifier: "react",
      name: "react",
    },
    {
      identifier: "typescript",
      name: "typescript",
    },
    {
      identifier: "graphql",
      name: "graphql",
    },
    {
      identifier: "sql",
      name: "sql",
    },
  ];
  const handleQuery = (q) => {
    const input = q.target.value.trim().toLowerCase();
    setQuery(input);
  };

  const onFilterClick = (filter) => {
    setQuery(filter);
  };

  // const filterNone = () => {
  //   setQuery('')
  // }
  // const filterBE = () => {
  //   setQuery('backend')
  // }
  // const filterFrontend = () => {
  //   setQuery('frontend')
  // }
  // const filterNode = () => {
  //   setQuery('node.js')
  // }
  // const filterReact = () => {
  //   setQuery('react')
  // }
  // const filterType = () => {
  //   setQuery('typescript')
  // }
  // const filterGRAPH = () => {
  //   setQuery('graphql')
  // }
  // const filterSQL = () => {
  //   setQuery('sql')
  // }

  const filteredJobs = jobs?.filter((job) => {
    return (
      job.title?.toLowerCase().includes(query) ||
      job?.tags.filter((tag) => tag?.toLowerCase().includes(query)).join("") ||
      job?.location?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="App">
      <section className="header">
        <div className="header__top">
          <div className="header__logo">Helli-Careers</div>
          <input
            className="search__input"
            type="text"
            // value={query}
            onChange={handleQuery}
            placeholder="Search jobs by role, company , skills "
          />
        </div>
        <div className="header__bottom">
          <div className="header__bottom--title">Filters :</div>
          <ul className="header__bottom--filters">
            {Filters.map(({ identifier, name },index) => {
              return (
                <li
                key={index+name+identifier}
                  className={`filter ${query === identifier && "clicked"}`}
                  onClick={() => onFilterClick(identifier)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Container jobs={filteredJobs} loading={loading} error={error} />
    </div>
  );
};

export default App;
