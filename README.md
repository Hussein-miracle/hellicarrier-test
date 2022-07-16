# Hellicarrier engineering CHALLENGE
- This is the take home assessment for the Hellicarrier React / React Native developer engineering challenge. 
- This  is a simple app built with React,GraphQl, Apollo-client  and SASS(SCSS),it's a job listing app with filter and search functionalities.
- Apollo-client is used for making queries as oppose to using axios or react-query so as to cache the  query request for refetching purposes.

## FOLDER STRUCTURE
- Contexts: This contains a file that contains the context that fetches and provides the job data fetched,and renders the spinner if the data is being loaded,likewise if there is an error while trying to fetch. 
- Components: contains stateless reusable components with their stylings.
- Util: contains  helper functions that can be reused.

### LOGIC SPLITTING IN FILES
- The jobs.contexts.js is file that fetches and provides the job data fetched,and renders the spinner if the data is being loaded,likewise if there is an error while       trying to fetch and provide the data needed at every level of the component so that props drilling is reduced. 
- The App.js file manage filtering and searching state. It provides functions to the children so that they can change its state. Also supplies relevant data such as filtering state and search text to show only valid Job Postings. controls the filtering and serching functionalities.
- Container.jsx:This houses the whole job listing uses the JobPost component to render the jobs data fetched; 
- JobPosts.jsx is a resuable stateless component that renders  the job post,the container component being it's parent.
