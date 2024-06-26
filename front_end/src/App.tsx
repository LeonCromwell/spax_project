import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
