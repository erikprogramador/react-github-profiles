import React, { Component } from 'react';

class ProfileInfo extends Component {
  render () {
    const { profile } = this.props;
    return (
      <div>
        <img src={profile.avatar_url} alt={profile.name} title={profile.name} />
        <h3>{profile.name}</h3>
        <h5>{profile.login}</h5>
        <p>{profile.bio}</p>
      </div>
    );
  }
}

export default ProfileInfo;
