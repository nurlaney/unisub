import React from 'react';
import './App.css';
import { Box } from "@material-ui/core";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from './modules/pages/Layout/components';


function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Box style={{ display: "flex" }}>
          <Box style={{ width: 'calc(100% - 250px)', padding: "20px" }}>
            <Switch>

            </Switch>
          </Box>
        </Box>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
