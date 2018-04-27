import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  onLike(id){
    this.props.mutate({ variables: { id } });
  }

  render() {
    return (
      <ul className="collection">
        {
          this.props.lyrics.map(({ id, content, likes }) => (
            <li key={id} className="collection-item">
              {content}
              <div className="vote-box">
                <i
                  className="material-icons"
                  onClick={() => this.onLike(id)}
                >
                  thumb_up
                </i>
                {likes}
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id: $id){
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
