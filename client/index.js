import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'; // lib to make request to the graphql server
import { ApolloProvider } from 'react-apollo'; // this is the glue layer between apollo and react

import SongList from './components/SongList';

const client = new ApolloClient({}); // assumes that the endpoint is /graphql

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
