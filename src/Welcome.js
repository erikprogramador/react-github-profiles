import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Welcome extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };
    this.search = this.search.bind(this);
  }

  search ({ username }) {
    if (!username || username.trim() === '') {
      this.setState({ error: 'Please fill the username to filter!' });
      return;
    }
    this.setState({ error: '' });
    this.props.history.push(`/profile/${username}`);
  }

  render () {
    return (
      <main>
        <h1>View Your GitHub Profile</h1>

        {this.props.location.state != null ? <div>
          {this.props.location.state.message}
        </div> : null}

        {this.state.error !== '' ? <div>
          {this.state.error}
        </div> : null}

        <SearchForm search={this.search} />
      </main>
    );
  }
}

export default Welcome;
