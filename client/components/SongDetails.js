import React, { Component } from 'react';

class SongDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Song Details</h3>
      </div>
    );
  }
}

export default SongDetails;
