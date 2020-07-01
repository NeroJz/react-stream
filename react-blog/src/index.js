import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Router, browserHistory } from "react-router";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" exact={true} component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
