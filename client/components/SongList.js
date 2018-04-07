import React, { Component } from 'react';
import gql from 'graphql-tag'; // a helper lib for writing your queries in your components files
import { graphql } from 'react-apollo'; // this func is binding our component and our query

class SongList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        SongList
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);