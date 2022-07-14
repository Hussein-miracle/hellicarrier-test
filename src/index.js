import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { JobsProvider } from "./contexts/jobs.context";
import "./index.scss";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});
const rootElement = document.getElementById("root");


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <JobsProvider>
        <App />
      </JobsProvider>
    </ApolloProvider>
  </React.StrictMode>
);
