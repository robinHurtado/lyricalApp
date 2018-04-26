import React, { Component } from 'react';

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="collection">
        {
          this.props.lyrics.map(({ id, content}) => (
            <li key={id} className="collection-item">{content}</li>
          ))
        }
      </ul>
    );
  }
}

export default LyricList;
