import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Welcome extends Component {
  constructor (props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search (event) {
    event.preventDefault();
    console.log(event);
  }

  render () {
    return (
      <main>
        <h1>View Your GitHub Profile</h1>

        <SearchForm search={this.search} />
      </main>
    );
  }
}

export default Welcome;
