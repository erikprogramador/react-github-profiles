import React, { Component } from 'react';

class SearchForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: ''
    };
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername (event) {
    this.setState({ username: event.target.value });
  }

  render () {
    return (
      <form onSubmit={this.props.search}>
        <div>
          <input type="text" onChange={this.setUsername} value={this.state.username} placeholder="Github Username"/>
        </div>
        <button type="submit">Seearch Profile</button>
      </form>
    );
  }
}

export default SearchForm;
