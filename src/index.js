import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.scss";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});
const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);
