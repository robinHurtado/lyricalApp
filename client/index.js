import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'; // fetch data with GraphQL
import { ApolloProvider } from 'react-apollo'; // this is the glue layer between apollo and react
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetails from './components/SongDetails';

const client = new ApolloClient({}); // assumes that the endpoint is /graphql

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route  path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/create" component={SongCreate} />
          <Route path="songs/:id" component={SongDetails} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
