import React, { Component } from 'react';
import gql from 'graphql-tag'; // a helper lib for writing your queries in your components files
import { graphql } from 'react-apollo'; // this func is binding our component and our query
import _ from 'lodash';
import { Link } from 'react-router';

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
        <Link
          to="/songs/create"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
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