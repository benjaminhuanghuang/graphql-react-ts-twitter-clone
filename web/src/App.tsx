import React from "react";
import "./App.css";
//
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
//
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// Components
import Users from "./components/Users";
import Landing from "./components/Landing";

import { setContext } from "apollo-link-context";

const httpLink = new HttpLink({ uri: "http://localhost:8964" });

const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem("token")

	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null
		}
	}
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
	link: link as any,
	cache: new InMemoryCache()
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
