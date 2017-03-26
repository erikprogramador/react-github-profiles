import React, { Component } from 'react';

class Profile extends Component {
  render () {
    return (
      <div>
        {this.props.match.params.username}
        {console.log(this.props)}
      </div>
    );
  }
}

export default Profile;
