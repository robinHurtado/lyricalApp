import React, { Component } from 'react';
import gql from 'graphql-tag'; // a helper lib for writing your queries in your components files
import { graphql } from 'react-apollo'; // this func is binding our component and our query
import _ from 'lodash';
import { Link } from 'react-router';

import query from '../queries/fetchSongs';

class SongList extends Component {

  onSongDelete(id){
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch())
  }

  render() {
    const { songs, loading } = this.props.data;

    if (loading) {
      return(<div>Loading...</div>);
    }

    return (
      <div>
        Song List
        <ul className="collection">
          {
            _.map(songs, ({ title,id }) =>
              <li key={id} className="collection-item">
                <Link to={`/songs/${id}`}>
                  {title}
                </Link>
                <i
                  className="material-icons"
                  onClick={() => this.onSongDelete(id)}
                >
                  delete
                </i>
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

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);