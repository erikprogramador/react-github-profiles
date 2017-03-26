import React, { Component } from 'react';

class ListRepositories extends Component {
  render () {
    return (
      <ul>
        {this.props.repos.length > 0 ?
          this.props.repos.map((repo, key) => <li key={key}><a href={repo.html_url}>{repo.name}</a></li>)
        : null}
      </ul>
    );
  }
}

export default ListRepositories;
