import React from "react";
import "./App.css";
//
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
//
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// Components
import Users from "./components/Users";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Users />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
