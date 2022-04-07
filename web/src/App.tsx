import React from "react";
import "./App.css";
//
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
//
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// Components
import Users from "./components/Users";
import Landing from "./components/Landing";

const client = new ApolloClient({
  uri: "http://localhost:8964",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/landing" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
