import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import PostsIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostsEdit from './components/post_edit';
import PostsShow from './components/post_show';

import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const routes =(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default routes;
