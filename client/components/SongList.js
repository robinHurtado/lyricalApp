import React, { Component } from 'react';
import gql from 'graphql-tag'; // a helper lib for writing your queries in your components files
import { graphql } from 'react-apollo'; // this func is binding our component and our query
import _ from 'lodash';

class SongList extends Component {
  render() {
    const { songs, loading } = this.props.data;

    if (loading) {
      return(
        <div>Loading...</div>
      );
    }

    return (
      <div>
        Song List
        <ul className="collection">
          {
            _.map(songs, (obj) =>
              <li key={obj.id} className="collection-item">
                {obj.title}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);