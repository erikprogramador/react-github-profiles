import React, { Component } from 'react';

class ListRepositories extends Component {
  render () {
    return (
      <ul className="repos-list">
        {this.props.repos.length > 0 ?
          this.props.repos.map((repo, key) => <li className="repos-item" key={key}><a className="repos-link" href={repo.html_url} target="_blank">{repo.name}</a></li>)
        : null}
      </ul>
    );
  }
}

export default ListRepositories;
