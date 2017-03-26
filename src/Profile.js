import React, { Component } from 'react';
import Loading from './Loading';
import ProfileInfo from './ProfileInfo';
import ListRepositories from './ListRepositories';
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

    this.loadRepos = this.loadRepos.bind(this);
  }

  componentWillMount () {
    axios.get(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(response => {
        this.setState({
          loading: false,
          username: this.props.match.params.username,
          profile: response.data
        });
        this.loadRepos(response.data.repos_url);
      })
      .catch(error => this.props.history.push('/', { message: 'User not found!' }));
      // .catch(error => console.log(this.props.history));
      // .catch(error => this.props.history.push('/', 'User not found!'));
  }

  loadRepos (reposUrl) {
    axios.get(reposUrl)
      .then(response => this.setState({ repos: response.data }))
      .catch(console.error);
  }

  render () {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <ProfileInfo profile={this.state.profile}/>

        <ListRepositories repos={this.state.repos} />
      </div>
    );
  }
}

export default Profile;
