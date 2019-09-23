import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // empty
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.fetchData();
    }
  }

  fetchData () {
    fetch(`https://api.github.com/users/${this.props.match.params.username}?&client_id=998f64b60aadaf8a3567&client_secret=196f59566e14e65037b21fe501d1e1e87ffa6de6`)
      .then(res => res.json())
      .then(user => {
        this.setState({
          user: user
        });
      })
  }

  renderStat (stat) {
    return (
      <li key={stat.name} className="user-info__stat">
        <Link to={stat.url}>
          <p className="user-info__stat-value">{stat.value}</p>
          <p className="user-info__stat-name">{stat.name}</p>
        </Link>
      </li>
    );
  }

  render() {
        // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
        if (!this.state.user) {
          return (<div className="user-page">LOADING...</div>);
      }

      // If we get to this part of `render`, then the user is loaded
      var user = this.state.user;

      // Gather up some number stats about the user, to be used in a map below
      var stats = [
          {
              name: 'Public Repos',
              value: user.public_repos,
              url: `/user/${this.props.match.params.username}/repos`
          },
          {
              name: 'Followers',
              value: user.followers,
              url: `/user/${this.props.match.params.username}/followers`
          },
          {
              name: 'Following',
              value: user.following,
              url: `/user/${this.props.match.params.username}/following`
          }
      ];

      // Look in app.css for the styles that make this look like it does
      return (
          <div className="user-page">
              <div className="user-info">
                  <Link className="user-info__text" to={`/user/${user.login}`}>
                      <img className="user-info__avatar" src={user.avatar_url}/>
                      <h2 className="user-info__title">{user.login} ({user.name})</h2>
                      <p className="user-info__bio">{user.bio}</p>
                  </Link>

                  <ul className="user-info__stats">
                      {stats.map(this.renderStat)}
                  </ul>
              </div>
              <div className="user-extra">
                  {this.props.children}
              </div>
          </div>
      );
  }
}

export default User;
