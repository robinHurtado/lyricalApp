import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'; // lib to make request to the graphql server
import { ApolloProvider } from 'react-apollo'; // this is the glue layer between apollo and react
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import SongList from './components/SongList';
import App from './components/App';

const client = new ApolloClient({}); // assumes that the endpoint is /graphql

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route  path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
