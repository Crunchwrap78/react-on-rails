import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostsEdit from './components/post_edit';
import PostsShow from './components/post_show';

import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

var routes =(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/:id" component={PostsShow} />
      </Route>
    </Router>
  </Provider>
)

export default routes;
