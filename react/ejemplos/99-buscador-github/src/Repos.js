import React, { Component } from 'react';
import GithubRepo from './GithubRepo'

class Repos extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  componentDidMount () {
    fetch(`https://api.github.com/users/${this.props.match.params.username}/repos?sort=updated&client_id=998f64b60aadaf8a3567&client_secret=196f59566e14e65037b21fe501d1e1e87ffa6de6`)
      .then(res => res.json())
      .then(repos => {
        console.log(repos)
        this.setState({
          repos: repos
        });
      })
  }

  render () {
      // If the state doesn't have a repos key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
      if (!this.state.repos) {
          return (<div className="followers-page">LOADING...</div>);
      }

      // Look in app.css for the styles that make this look like it does
      return (
        <div className="followers-page">
            <h3>{this.props.match.params.username}'s repos</h3>
            <ul className="followers-list">
            {
                this.state.repos.map(function(repo) {
                    return <li key={repo.id}><GithubRepo repo={repo}/></li>;
                })
            }
            </ul>
        </div>
      );
  }
}

export default Repos;
