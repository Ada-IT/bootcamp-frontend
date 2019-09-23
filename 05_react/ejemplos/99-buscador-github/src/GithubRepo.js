import React, { Component } from 'react';

class GithubRepo extends Component {
  render () {
    const url = this.props.repo.html_url;
    const name = this.props.repo.full_name;
    const stars = this.props.repo.stargazers_count;

    return (
      <a target="_blank" className="github-repotag" href={url}>
          {name}
          {' '}
          <span className="github-repotag__stars">{stars}★</span>
      </a>
    );
  }
}

export default GithubRepo;
