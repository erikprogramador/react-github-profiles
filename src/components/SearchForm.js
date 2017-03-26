import React, { Component } from 'react';

class SearchForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: ''
    };
    this.search = this.search.bind(this);
    this.setUsername = this.setUsername.bind(this);
  }

  search (event) {
    event.preventDefault();
    this.props.search(this.state);
  }

  setUsername (event) {
    this.setState({ username: event.target.value });
  }

  render () {
    return (
      <form onSubmit={this.search} className="form">
        <input type="text" className="form-control" onChange={this.setUsername} value={this.state.username} placeholder="Github Username"/>
        <button className="btn" type="submit">Seearch Profile</button>
      </form>
    );
  }
}

export default SearchForm;
