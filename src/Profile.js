import React, { Component } from 'react';

class Profile extends Component {
  render () {
    return (
      <div>
        {this.props.match.params.username}
      </div>
    );
  }
}

export default Profile;
