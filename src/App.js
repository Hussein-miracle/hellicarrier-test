import { useContext,useState  } from "react";
import { JobsContext } from "./contexts/jobs.context";
import Container from "./components/container/container";
import "./header.scss";
import "./App.scss";


const App = () => {
  const { loading, error, jobs} = useContext(JobsContext);
  const [query,setQuery] = useState("");


  const handleQuery = (q) => {
    const input  = q.target.value.trim().toLowerCase();
    setQuery(input);
  };


  const filterNone = () => {
    setQuery('')
  }
  const filterBE = () => {
    setQuery('backend')
  }
  const filterFrontend = () => {
    setQuery('frontend')
  }
  const filterNode = () => {
    setQuery('node.js')
  }
  const filterReact = () => {
    setQuery('react')
  }
  const filterType = () => {
    setQuery('typescript')
  }
  const filterGRAPH = () => {
    setQuery('graphql')
  }
  const filterSQL = () => {
    setQuery('sql')
  }



  const filteredJobs = jobs?.filter((job) => {
    return (job.title?.toLowerCase().includes(query) || job?.tags.filter((tag) => tag?.toLowerCase().includes(query)).join("") || job?.location?.toLowerCase().includes(query) )
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
          <li className={`filter ${query === '' && 'clicked'}`} onClick={filterNone}>All</li>
          <li className={`filter ${query === 'backend' && 'clicked'}`} onClick={filterBE}>Backend</li>
          <li className={`filter ${query === 'frontend' && 'clicked'}`} onClick={filterFrontend}>Frontend</li>
          <li className={`filter ${query === 'node.js' && 'clicked'}`} onClick={filterNode}>Node.js</li>
          <li className={`filter ${query === 'react' && 'clicked'}`} onClick={filterReact}>React</li>
          <li className={`filter ${query === 'typescript' && 'clicked'}`} onClick={filterType}>Typescript</li>
          <li className={`filter ${query === 'graphql' && 'clicked'}`} onClick={filterGRAPH}>GRAPHQL</li>
          <li className={`filter ${query === 'sql' && 'clicked'}`} onClick={filterSQL}>SQL</li>
        </ul>
      </div>
    </section>
      <Container jobs={filteredJobs} loading={loading} error={error} />
    </div>
  );
};

export default App;
