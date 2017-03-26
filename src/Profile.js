import React, { Component } from 'react';
import Loading from './Loading';
import axios from 'axios';

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      username: '',
      profile: {},
      repos: {}
    }
  }

  componentWillMount () {
    axios.get(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(response => {
        // repos_url
        this.setState({
          loading: false,
          username: this.props.match.params.username,
          profile: response.data
        });
      })
      .catch(console.error); // Redirect to welcome with error message
  }

  render () {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <img src={this.state.profile.avatar_url} alt={this.state.profile.name} title={this.state.profile.name} />
        <h3>{this.state.profile.name}</h3>
        <h5>{this.state.profile.login}</h5>
        <p>{this.state.profile.bio}</p>
      </div>
    );
  }
}

export default Profile;
