//libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import Layout from "./Layout/index";
import PostsList from "./PostsList/index";
import SinglePost from "./SinglePost/index";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <Layout className="layout__content">
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route path="/post/:id" component={SinglePost} />
      </Switch>
    </Layout>
  );
};

export default App;
